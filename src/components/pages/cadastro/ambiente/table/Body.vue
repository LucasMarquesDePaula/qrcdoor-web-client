<template>
  <md-table-body>
    <md-table-row v-for="(model, index) in list" :key="index">
      <md-table-cell md-numeric>{{model.id}}</md-table-cell>
      <md-table-cell>
        <md-avatar>
          <img :src="model.foto ? `data:image/${model.fotoExtensao};base64,${model.foto}` : avatar">
        </md-avatar>
      </md-table-cell>
      <md-table-cell>{{model.descricao}}</md-table-cell>
      <md-table-cell>{{model.estruturaPai && model.estruturaPai.descricao}}</md-table-cell>
      <md-table-cell>{{model.situacao | situacao}}</md-table-cell>
      <md-table-cell :md-numeric="true">{{model.tempoMaximoAbertura}}</md-table-cell>
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
import avatar from "@images/avatar.png"

export default {
  extends: AbstractTableBody,
  computed: {
    avatar: {
      get() {
        return avatar
      }
    }
  },
  filters: {
    situacao(value) {
      return value === "A" ? "Ativo" : value === "I" ? "Inativo" : ""
    }
  }
}
</script>

