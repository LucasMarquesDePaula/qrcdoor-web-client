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
          <label>Tipo</label>
          <md-select v-model="form.tipo">
            <md-option value="smartphone">Arial</md-option>
            <md-option value="Senha">Calibri</md-option>
          </md-select>
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
          <md-table-head>Código</md-table-head>
          <md-table-head>Descrição</md-table-head>
          <md-table-head>Tipo</md-table-head>
          <md-table-head>Assinatura</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(chave, index) in model.chaves" :key="index">
          <md-table-cell>{{chave.idChave}}</md-table-cell>
          <md-table-cell>{{chave.descricao}}</md-table-cell>
          <md-table-cell>{{chave.tipo}}</md-table-cell>
          <md-table-cell>{{chave.assinatura}}</md-table-cell>
          <md-button class="md-icon-button">
            <md-icon>delete forever</md-icon>
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
      form: {
      }
    }
  }
}
</script>
