<template>
  <md-table-body>
    <md-table-row v-for="(model, index) in list" :key="index">
      <md-table-cell md-numeric>{{model.id}}</md-table-cell>
      <md-table-cell>
        <md-avatar>
          <img :src="`${baseURL}/pessoa/foto/${model.id}`">
        </md-avatar>
      </md-table-cell>
      <md-table-cell>{{model.nome}}</md-table-cell>
      <md-table-cell>{{model.situacao | situacao}}</md-table-cell>
      <!--
      <md-table-cell>{{model.telefoneFixo}}</md-table-cell>
      <md-table-cell>{{model.telefoneCelular}}</md-table-cell>
      -->
      <md-table-cell>{{model.documento}}</md-table-cell>
      <!--
      <md-table-cell>{{model.fisicaJuridica | natureza}}</md-table-cell>
      <md-table-cell>{{model.login}}</md-table-cell>
      -->
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
// import avatar from "@images/avatar.png"
import { baseURL } from "@service/config"
export default {
  extends: AbstractTableBody,
  data() {
    return { baseURL }
  },
  filters: {
    natureza(value) {
      return value === "F" ? "Física" : value === "J" ? "Júrídica" : ""
    },
    situacao(value) {
      return value === "A" ? "Ativa" : value === "I" ? "Inativa" : ""
    }
  },
  computed: {
    avatar() {
      return avatar
    }
  }
}
</script>

