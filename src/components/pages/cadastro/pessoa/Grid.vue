<template>
  <v-grid title="Pessoa" url="/pessoas" v-model="list" :filter="filter" @add="$emit('add', $data)">

    <div slot="filter">
      <md-input-container>
        <label>Nome</label>
        <md-input v-model="filter.nome"></md-input>
      </md-input-container>
      <md-checkbox v-model="filter.situacao">Ativo</md-checkbox>
    </div>

    <md-table-header slot="table-header">
      <md-table-row>
        <md-table-head md-sort-by="idPessoa">Código</md-table-head>
        <md-table-head>
          <md-icon>photo</md-icon>
          <span>Foto</span>
        </md-table-head>
        <md-table-head md-sort-by="nome">Nome</md-table-head>
        <md-table-head md-sort-by="situacao">Situação</md-table-head>
        <md-table-head md-sort-by="telefoneFixo">
          <md-icon>phone</md-icon>
          <span>Fixo</span>
        </md-table-head>
        <md-table-head md-sort-by="telefoneCelular">
          <md-icon>smartphone</md-icon>
          <span>Celular</span>
        </md-table-head>
        <md-table-head md-sort-by="documento">Documento</md-table-head>
        <md-table-head md-sort-by="fisicaJuridica">Natureza</md-table-head>
        <md-table-head md-sort-by="login">
          <md-icon>account_circle</md-icon>
          <span>Login</span>
        </md-table-head>
      </md-table-row>
    </md-table-header>

    <md-table-body>
      <md-table-row v-for="(model, index) in list" :key="index">
        <md-table-cell md-numeric>{{model.idPessoa}}</md-table-cell>
        <md-table-cell>
          <md-avatar>
            <img :src="model.foto">
          </md-avatar>
        </md-table-cell>
        <md-table-cell>{{model.nome}}</md-table-cell>
        <md-table-cell>{{model.situacao}}</md-table-cell>
        <md-table-cell>{{model.telefoneFixo}}</md-table-cell>
        <md-table-cell>{{model.telefoneCelular}}</md-table-cell>
        <md-table-cell>{{model.documento}}</md-table-cell>
        <md-table-cell>{{model.fisicaJuridica | natureza}}</md-table-cell>
        <md-table-cell>{{model.login}}</md-table-cell>
        <md-table-cell>
          <md-button class="md-icon-button" @click="$emit('edit', model)">
            <md-icon>edit</md-icon>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table-body>
  </v-grid>
</template>

<script>
import VGrid from "../Grid"
import model from "./Model"

export default {
  components: {
    VGrid
  },
  data() {
    return {
      filter: {},
      list: []
    }
  },
  computed: {
    // list() {
    //   return list
    // }
  },
  filters: {
    natureza(value) {
      return value === "F" ? "Física" : value === "J" ? "Júrídica" : ""
    }
  }
}
</script>

