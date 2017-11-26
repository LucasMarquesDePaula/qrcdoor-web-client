<template>
  <section>
    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container :class="{ 'md-input-invalid': $v.model.tempoMaximoAbertura.$error }">
          <label>Máximo Abertura</label>
          <md-input type="time" v-model="tempoMaximoAbertura" required></md-input>
          <span class="md-error" v-show="$v.model.tempoMaximoAbertura.$error">Valor inválido</span>
        </md-input-container>
      </md-layout>

      <md-layout>
        <md-input-container :class="{ 'md-input-invalid': $v.model.quantidadeMaximaPessoas.$error }">
          <label>Máximo Pessoas</label>
          <md-input v-model="model.quantidadeMaximaPessoas" required></md-input>
          <span class="md-error" v-show="$v.model.quantidadeMaximaPessoas.$error">Valor inválido</span>
        </md-input-container>
      </md-layout>
    </md-layout>
  </section>
</template>

<script>
import AbstractTab from "@/components/abstract/crud/form-tab"
import padStart from "lodash/padStart"

function toSeconds(value) {
  return Number(value.split(":")[0]) + Number(value.split(":")[1]) * 60
}

function toTime(value) {
  const minutes = Math.ceil(value % 60)
  const hours = Math.ceil((value - minutes) / 60)
  return `${padStart(hours, 2, "0")}:${padStart(minutes, 2, "0")}`
}

export default {
  extends: AbstractTab,
  data() {
    return {
      tempoMaximoAbertura: ""
    }
  },
  watch: {
    model(value) {
      this.tempoMaximoAbertura = toTime(value)
    },
    tempoMaximoAbertura(value) {
      this.model.tempoMaximoAbertura = toSeconds(value)
    }
  }
}
</script>
