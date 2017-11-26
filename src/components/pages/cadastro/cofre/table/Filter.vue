<template>
  <section>
    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container>
          <label>Descrição</label>
          <md-input v-model.trim="model.descricao"></md-input>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
          <label>Localização</label>
          <md-input v-model.trim="estruturaPai"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>
  </section>
</template>

<script>
import AbstractTableFilter from "@/components/abstract/crud/table-filter"
export default {
  extends: AbstractTableFilter,
  data() {
    return {
      estruturaPai: ""
    }
  },
  watch: {
    model(value) {
      this.estruturaPai = ""
    },
    estruturaPai(value) {
      this.model.estruturaPai = { descricao: value }
    }
  }
}
</script>
