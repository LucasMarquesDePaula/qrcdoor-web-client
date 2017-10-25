<template>
  <div>
    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container>
          <label>Estrutura</label>
          <md-select v-model="form.estrutura">
            <md-option v-for="(option, index) in [ { id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' } ]"
              :key="index"
              :value="option">
              { { option.name } }
            </md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
          <label>Inicio</label>
          <md-input v-model="form.dataInicio"></md-input>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
          <label>Fim</label>
          <md-input v-model="form.dataFim"></md-input>
        </md-input-container>
      </md-layout>
      <md-layout md-flex="10">
        <md-button class="md-icon-button md-raised md-primary">
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
export default {
  props: ["model"],
  data() {
    return {
      form: {}
    }
  }
}
</script>
