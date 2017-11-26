<template>
  <md-table-body>
    <md-table-row v-for="(model, index) in list" :key="index">
      <md-table-cell md-numeric>{{model.id}}</md-table-cell>
      <md-table-cell>
        <md-avatar>
          <img :src="`${baseURL}/estrutura/foto/${model.id}`">
        </md-avatar>
      </md-table-cell>
      <md-table-cell>{{model.descricao}}</md-table-cell>
      <md-table-cell>{{model.estruturaPai && model.estruturaPai.descricao}}</md-table-cell>
      <md-table-cell>{{model.situacao | situacao}}</md-table-cell>
      <md-table-cell :md-numeric="true">{{model.tempoMaximoAbertura | toTime}}</md-table-cell>
      <md-table-cell :md-numeric="true">{{model.quantidadeMaximaPessoas}}</md-table-cell>
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
import { baseURL } from "@service/config"
import padStart from "lodash/padStart"

export default {
  extends: AbstractTableBody,
  computed: {
    baseURL: {
      get() {
        return baseURL
      }
    }
  },
  filters: {
    situacao(value) {
      return value === "A" ? "Ativo" : value === "I" ? "Inativo" : ""
    },
    toTime(value) {
      const minutes = Math.ceil(value % 60)
      const hours = Math.ceil((value - minutes) / 60)
      return `${padStart(hours, 2, "0")}:${padStart(minutes, 2, "0")}`
    }
  }
}
</script>

