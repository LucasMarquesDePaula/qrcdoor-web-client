<template>
  <div>
    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container>
          <label>Descrição</label>
          <md-input v-model="form.descricao"></md-input>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
          <label>Assinatura</label>
          <md-input v-model="form.assinatura"></md-input>
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
      <md-layout>
        <md-input-container>
          <label>Situação</label>
          <md-select v-model="form.situacao">
            <md-option value="A">Ativa</md-option>
            <md-option value="I">Inativa</md-option>
          </md-select>
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
          <md-table-head>Código</md-table-head>
          <md-table-head>Descrição</md-table-head>
          <md-table-head>Tipo</md-table-head>
          <md-table-head>Assinatura</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(item, index) in list" :key="index">
          <md-table-cell>{{item.id}}</md-table-cell>
          <md-table-cell>{{item.descricao}}</md-table-cell>
          <md-table-cell>{{item.situacao | situacao}}</md-table-cell>
          <md-table-cell>{{item.assinatura}}</md-table-cell>
          <md-button class="md-icon-button" @click="edit(index)">
            <md-icon>edit</md-icon>
          </md-button>
          <md-button class="md-icon-button" @click="remove(index)">
            <md-icon>delete_forever</md-icon>
          </md-button>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
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
      const method = this.form.id ? "put" : "post"
      services.chave
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
    },
    remove(index) {
      services.chave
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
      this.selection = this.form.chave.nome
    },
    fetchPermissao(args) {
      return this.fetch(services.chave, args)
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
      const { id, nome } = item
      this.form.chave = { id, nome }
    }
  },
  filters: {
    situacao(value) {
      return value === "A" ? "Ativo" : value === "I" ? "Inativo" : ""
    }
  },
  watch: {
    model(value) {
      this.list = []
      const { id } = value

      if (id) {
        services.chave
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
