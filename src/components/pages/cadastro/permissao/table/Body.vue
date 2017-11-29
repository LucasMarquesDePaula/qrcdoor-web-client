<template>
  <md-table-body>
    <md-table-row v-for="(model, index) in list" :key="index">
      <md-table-cell md-numeric>{{model.id}}</md-table-cell>
      <md-table-cell>{{model.descricao}}</md-table-cell>
      
      <md-table-cell>
        <md-button class="md-icon-button" @click="$emit('edit', model)">
          <md-icon>edit</md-icon>
        </md-button>
      </md-table-cell>
    </md-table-row>
  </md-table-body>
</template>

<script>
import AbstractTableBody from "@/components/abstract/crud/table-body"

export default {
  extends: AbstractTableBody,
  filters: {
    situacao(value) {
      return value === "A" ? "Ativo" : value === "I" ? "Inativo" : ""
    }
  }
}
</script>

