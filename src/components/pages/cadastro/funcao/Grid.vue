<template>
  <md-table-card>
    <md-toolbar>
      <h1 class="md-title">Pessoa</h1>
      <md-button class="md-icon-button">
        <md-icon>filter_list</md-icon>
      </md-button>

      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>
    </md-toolbar>

    <md-table md-sort="dessert" md-sort-type="desc" @select="onSelect" @sort="onSort">
      <md-table-header>
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
    </md-table>

    <md-table-pagination :md-size="size" :md-total="total" :md-page="page" md-label="Linhas" md-separator="de" :md-page-options="[5, 10, 25, 50]" @pagination="onPagination"></md-table-pagination>
    <md-card-actions>
      <md-button class="md-fab" @click="$emit('add', $data)">
        <md-icon>add</md-icon>
      </md-button>
    </md-card-actions>
  </md-table-card>
</template>

<script>
import model from "./Model"

const list = []
for (let i = 0; i < 5; i++) {
  list.push(model)
}
export default {
  data() {
    return {
      size: 5,
      page: 1,
      total: 100,
      list
    }
  },
  computed: {
    // list() {
    //   return list
    // }
  },
  methods: {
    onSelect() {
      console.log(arguments)
    },
    onSort() {
      console.log(arguments)
    },
    onPagination() {
      console.log(arguments)
    }
  },
  filters: {
    natureza(value) {
      return value === "F" ? "Física" : value === "J" ? "Júrídica" : ""
    }
  }
}
</script>

