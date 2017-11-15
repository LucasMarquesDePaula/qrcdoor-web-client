<template>
  <md-table-header slot="table-header">
    <md-table-row>
      <md-table-head md-sort-by="id">Código</md-table-head>
      <md-table-head>
        <md-icon>photo</md-icon>
        <span>Foto</span>
      </md-table-head>
      <md-table-head md-sort-by="nome">Nome</md-table-head>
      <md-table-head md-sort-by="situacao">Situação</md-table-head>
      <!--
        <md-table-head md-sort-by="telefoneFixo">
          <md-icon>phone</md-icon>
          <span>Fixo</span>
        </md-table-head>
        <md-table-head md-sort-by="telefoneCelular">
          <md-icon>smartphone</md-icon>
          <span>Celular</span>
        </md-table-head>
          -->
      <md-table-head md-sort-by="documento">Documento</md-table-head>
      <!--
        <md-table-head md-sort-by="fisicaJuridica">Natureza</md-table-head>
        <md-table-head md-sort-by="login">
          <md-icon>account_circle</md-icon>
          <span>Login</span>
        </md-table-head>
        -->
    </md-table-row>
  </md-table-header>
</template>


<script>
import AbstractTableHeader from "@/components/abstract/crud/table-header"
export default {
  extends: AbstractTableHeader
}
</script>
