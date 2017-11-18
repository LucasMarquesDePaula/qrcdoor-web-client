<template>
  <div>
    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container>
          <label>Permissao</label>
          <md-autocomplete v-model="selection" print-attribute="nome" :fetch="fetchPermissao" @selected="selected" :debounce="500" />
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
          <md-icon>add</md-icon>
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
        <md-table-row v-for="(funcaoPessoa, index) in model.funcaoPermissoes" :key="index">
          <md-table-cell>{{funcaoPessoa.pessoa.nome}}</md-table-cell>
          <md-table-cell>{{funcaoPessoa.dataInicio}}</md-table-cell>
          <md-table-cell>{{funcaoPessoa.dataFim}}</md-table-cell>
          <md-button class="md-icon-button" @click="remove(index)">
            <md-icon>edit</md-icon>
          </md-button>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
</template>

<script>
import AbstractTab from "@/components/abstract/crud/form-tab"

import servicePermissoes from "@service/pessoa"
import serviceFuncaoPessoa from "@service/funcaoPessoa"

export default {
  extends: AbstractTab,
  data() {
    return {
      form: {},
      selection: ""
    }
  },
  methods: {
    add() {
      this.selection = ""

      if (!this.model.funcaoPermissoes) {
        this.model.funcaoPermissoes = []
      }

      if (this.form.permissao) {
        this.model.funcaoPermissoes.push(this.form)
        this.form = {}
      }
    },
    remove(index) {
      this.model.funcaoPermissoes
    },
    fetchPermissao(args) {
      return this.fetch(servicePermissoes, args)
    },
    fetch(service, { q }) {
      return new Promise((resolve, reject) => {
        service
          .get({
            params: {
              nome: q,
              situacao: "A"
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
  }
}
</script>
