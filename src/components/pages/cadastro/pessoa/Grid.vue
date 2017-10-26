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
        <md-table-head md-sort-by="dessert">Dessert (100g serving)</md-table-head>
        <md-table-head md-sort-by="calories" md-numeric md-tooltip="The total amount of food energy and the given serving size">Calories (g)</md-table-head>
        <md-table-head md-sort-by="fat" md-numeric>Fat (g)</md-table-head>
        <md-table-head>
          <md-icon>message</md-icon>
          <span>Comments</span>
        </md-table-head>
      </md-table-row>
    </md-table-header>

    <md-table-body>
      <md-table-row v-for="(row, index) in list" :key="index">
        <md-table-cell md-numeric>{{row.idpessoa}}</md-table-cell>
        <md-table-cell>{{row.foto}}</md-table-cell>
        <md-table-cell>{{row.nome}}</md-table-cell>
        <md-table-cell>{{row.situacao}}</md-table-cell>
        <md-table-cell>{{row.documento}}</md-table-cell>
        <md-table-cell>{{row.fisicaJuridica}}</md-table-cell>
        <md-table-cell>{{row.login}}</md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>

  <md-table-pagination
    md-size="size"
    md-total="total"
    md-page="page"
    md-label="Linhas"
    md-separator="de"
    :md-page-options="[5, 10, 25, 50]"
    @pagination="onPagination"></md-table-pagination>
</md-table-card>
</template>

<script>
import model from "./Model"
export default {
  data() {
    return {
      size: 5,
      page: 1,
      total: 100
    }
  },
  computed: {
    list() {
      const list = []
      for (let i = 0; i < this.size; i++) {
        list.push(model)
      }
      return list
    }
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
  }
}
</script>

