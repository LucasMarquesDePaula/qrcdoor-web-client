<template>
  <section>
    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container>
          <label>Permissao</label>
          <md-autocomplete v-model="selection" print-attribute="descricao" :fetch="fetchPermissao" @selected="selected" :debounce="500" />
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
          <md-table-cell>{{item.permissao.descricao}}</md-table-cell>
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
      if (this.form.permissao) {
        const method = this.form.id ? "put" : "post"
        services.permissaoPessoa
          [method]({ pessoa: this.model, ...this.form })
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
      this.selection = this.form.permissao.descricao
    },
    fetchPermissao(args) {
      return this.fetch(services.permissao, args)
    },
    fetch(service, { q }) {
      return new Promise((resolve, reject) => {
        service
          .get({
            params: {
              q: JSON.stringify({ descricao: q })
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
      const { id, descricao } = item
      this.form.permissao = { id, descricao }
    }
  },
  watch: {
    model(value) {
      this.list = []
      const { id } = value

      if (id) {
        services.permissaoPessoa
          .get({
            params: {
              q: JSON.stringify({
                pessoa: {
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
