<template>
  <md-layout :md-gutter="true">
    <md-layout>
      <md-input-container>
        <label>Descrição</label>
        <md-input v-model="model.descricao"></md-input>
      </md-input-container>
    </md-layout>
    <md-layout>
      <md-input-container>
        <label>Situação</label>
        <md-select v-model.trim="model.situacao">
          <md-option value="A">Ativo</md-option>
          <md-option value="I">Inativo</md-option>
        </md-select>
      </md-input-container>
    </md-layout>
  </md-layout>
</template>

<script>
import AbstractTableFilter from "@/components/abstract/crud/table-filter"
export default {
  extends: AbstractTableFilter
}
</script>
