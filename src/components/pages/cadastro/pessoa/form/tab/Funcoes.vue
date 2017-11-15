<template>
  <div>
    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container>
          <label>Estrutura</label>
          <md-autocomplete v-model="form.estrutura" :list="estrutura()" print-attribute="descricao">
          </md-autocomplete>
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
        <md-table-row v-for="(funcao, index) in model.funcoes" :key="index">
          <md-table-cell>{{funcao.descricao}}</md-table-cell>
          <md-table-cell>{{funcao.dataInicio}}</md-table-cell>
          <md-table-cell>{{funcao.dataFim}}</md-table-cell>
          <md-button class="md-icon-button">
            <md-icon>edit</md-icon>
          </md-button>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
</template>

<script>
import AbstractTab from "@/components/abstract/crud/form-tab"
export default {
  extends: AbstractTab,
  data() {
    return {
      form: {}
    }
  },
  methods: {
    add() {
      // TODO adicionar validação
      if (!this.model.funcoes) {
        this.model.funcoes = []
      }
      if (this.form.estrutura) {
        this.model.funcoes.push(this.form)
        this.form = {}
      }
    },
    estrutura() {
      // console.log(args.q)
      // TODO ajax
      return [
        { idEstrutura: 1, descricao: "a" },
        { idEstrutura: 2, descricao: "b" },
        { idEstrutura: 3, descricao: "c" }
      ]
    }
  }
}
</script>
