<template>
  <section>
    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container>
          <label>Pessoa</label>
          <md-autocomplete v-model="selection" print-attribute="nome" :fetch="fetchPessoa" @selected="selected" :debounce="500" />
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
          <label>Inicio</label>
          <md-input type="date" v-model="form.dataInicio"></md-input>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
          <label>Fim</label>
          <md-input type="date" v-model="form.dataFim"></md-input>
        </md-input-container>
      </md-layout>
      <md-layout md-flex="10">
        <md-button @click="add()" class="md-icon-button md-raised md-primary">
          <md-icon>{{form.id ? "save" : "add"}}</md-icon>
        </md-button>
      </md-layout>
    </md-layout>
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Nome</md-table-head>
          <md-table-head>Inicio</md-table-head>
          <md-table-head>Fim</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(item, index) in list" :key="index">
          <md-table-cell>{{item.pessoa.nome}}</md-table-cell>
          <md-table-cell>{{item.dataInicio | date}}</md-table-cell>
          <md-table-cell>{{item.dataFim | date}}</md-table-cell>
          <md-button class="md-icon-button" @click="edit(index)">
            <md-icon>edit</md-icon>
          </md-button>
          <md-button class="md-icon-button" @click="remove(index)">
            <md-icon>delete_forever</md-icon>
          </md-button>
        </md-table-row>
      </md-table-body>
    </md-table>
  </section>
</template>

<script>
import AbstractTab from "@/components/abstract/crud/form-tab"

import services from "@service/all"

export default {
  extends: AbstractTab,
  data() {
    return {
      form: {},
      list: [],
      selection: ""
    }
  },
  methods: {
    add() {
      if (this.form.pessoa) {
        const method = this.form.id ? "put" : "post"
        services.permissaoPessoa
          [method]({ permissao: this.model, ...this.form })
          .then(response => {
            if (method === "post") {
              this.list.push(response.data)
            }
            this.form = {}
            this.selection = ""
          })
          .catch(error => {
            console.error(error)
          })
      }
    },
    remove(index) {
      services.permissaoPessoa
        .delete(this.list[index].id)
        .then(response => {
          this.list.splice(index, 1)
        })
        .catch(error => {
          console.error(error)
        })
    },
    edit(index) {
      this.form = this.list[index]
      this.selection = this.form.pessoa.nome
    },
    fetchPessoa(args) {
      return this.fetch(services.pessoa, args)
    },
    fetch(service, { q }) {
      return new Promise((resolve, reject) => {
        service
          .get({
            params: {
              q: JSON.stringify({ nome: q, situacao: "A" })
            }
          })
          .then(response => {
            resolve(response.data.content)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    selected(item) {
      const { id, nome } = item
      this.form.pessoa = { id, nome }
    }
  },
  watch: {
    model(value) {
      this.list = []
      const { id } = value
      debugger
      if (id) {
        services.permissaoPessoa
          .get({
            params: {
              q: JSON.stringify({
                permissao: {
                  id: id || 0
                }
              })
            }
          })
          .then(response => {
            this.list = response.data.content
          })
          .catch(error => {
            console.error(error)
          })
      }
    }
  }
}
</script>
