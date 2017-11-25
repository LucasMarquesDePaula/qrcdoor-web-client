<template>
  <section>
    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container :class="{ 'md-input-invalid': $v.model.tempoMaximoAbertura.$error }">
          <label>Máximo Abertura</label>
          <md-input v-model="model.tempoMaximoAbertura" required></md-input>
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
export default {
  extends: AbstractTab
}
</script>
