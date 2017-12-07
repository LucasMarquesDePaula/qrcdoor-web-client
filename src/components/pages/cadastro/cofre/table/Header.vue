<template>
  <md-table-header slot="table-header">
    <md-table-row>
      <md-table-head md-sort-by="id">Cód.</md-table-head>
      <md-table-head></md-table-head>
      <md-table-head md-sort-by="descricao">Descrição</md-table-head>
      <!-- <md-table-head md-sort-by="estruturaPai">Localização</md-table-head> -->
      <md-table-head md-sort-by="situacao">Situação</md-table-head>
      <md-table-head md-sort-by="tempoMaximoAbertura">Máximo Abertura (s)</md-table-head>
    </md-table-row>
  </md-table-header>
</template>


<script>
import AbstractTableHeader from "@/components/abstract/crud/table-header"
export default {
  extends: AbstractTableHeader
}
</script>
