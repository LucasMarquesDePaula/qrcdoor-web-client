<template>
  <section>
    <md-layout :md-gutter="true">
      <md-layout md-flex="60">
        <md-input-container>
          <label>Localização</label>
          <md-autocomplete v-model="selection" print-attribute="descricao" :fetch="fetchAmbiente" @selected="selected" :debounce="500" />
        </md-input-container>
      </md-layout>
    </md-layout>

    <md-layout :md-gutter="true">
      <md-layout :md-flex="50">
        <md-input-container :class="{ 'md-input-invalid': $v.model.senha.$error }">
          <label>Senha</label>
          <md-input type="password" v-model="model.senha" required></md-input>
          <span class="md-error" v-show="$v.model.senha.$error">Valor inválido</span>
        </md-input-container>
      </md-layout>
    </md-layout>

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

function toMinutes(value) {
  // console.log(value)
  return Number(value.split(":")[0]) * 60 + Number(value.split(":")[1])
}

function toTime(value) {
  const minutes = Math.ceil(value % 60)
  const hours = Math.ceil((value - minutes) / 60)
  // console.log(value, " -> ", hours, ":", minutes)
  return `${padStart(hours, 2, "0")}:${padStart(minutes, 2, "0")}`
}

export default {
  extends: AbstractTab,
  data() {
    return {
      tempoMaximoAbertura: ""
    }
  },
  methods: {
    fetchAmbiente(args) {
      return this.fetch(services.ambiente, args)
    },
    fetch(service, { q }) {
      return new Promise((resolve, reject) => {
        service
          .get({
            params: {
              q: JSON.stringify({ descricao: q, situacao: "A" })
            }
          })
          .then(response => {
            resolve(response.data.content)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    selected(item) {
      const { id, descricao } = item
      this.form.estruturaPai = { id, descricao }
    }
  },
  watch: {
    model(value) {
      this.tempoMaximoAbertura = toTime(value.tempoMaximoAbertura || 0)
    },
    tempoMaximoAbertura(value) {
      this.model.tempoMaximoAbertura = toMinutes(value)
    }
  }
}
</script>
