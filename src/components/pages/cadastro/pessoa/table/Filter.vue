<template>
  <div>
    <md-input-container>
      <label>Nome</label>
      <md-input v-model="filter.nome"></md-input>
    </md-input-container>
    <md-checkbox v-model="filter.situacao">Ativo</md-checkbox>
  </div>
</template>

<script>
import AbstractFilter from "@/components/abstract/crud/filter"
export default {
  extends: AbstractFilter
}
</script>
