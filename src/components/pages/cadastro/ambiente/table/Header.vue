<template>
  <md-table-header slot="table-header">
    <md-table-row>
      <md-table-head md-sort-by="idPessoa">Código</md-table-head>
      <md-table-head md-sort-by="descrição">Descrição</md-table-head>
      <md-table-head md-sort-by="situacao">Situação</md-table-head>
    </md-table-row>
  </md-table-header>
</template>


<script>
import AbstractTableHeader from "@/components/abstract/crud/table-header"
export default {
  extends: AbstractTableHeader
}
</script>
