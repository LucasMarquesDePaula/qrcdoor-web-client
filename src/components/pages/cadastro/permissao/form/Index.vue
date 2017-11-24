<template>
  <md-card>
    <md-card-content>

      <md-layout :md-gutter="true">
        <md-layout md-flex="20">
          <md-input-container v-if="model.id">
            <label>Cód.</label>
            <md-input v-model.trim="model.id" :readonly="true"></md-input>
          </md-input-container>
        </md-layout>
        <md-layout md-flex="80">
          <md-input-container :class="{ 'md-input-invalid': $v.model.descricao.$error }">
            <label>Descrição</label>
            <md-input v-model.trim="model.descricao" @blur="$v.model.descricao.$touch" :maxlength="255"></md-input>
            <span class="md-error" v-show="$v.model.descricao.$error">Valor inválido</span>
          </md-input-container>
        </md-layout>
      </md-layout>

      <md-tabs>
        <md-tab md-label="Configurações">
          <tab-configuracoes :model="model" :$v="$v" />
        </md-tab>
        <md-tab v-if="model.id" md-label="Pessoas">
          <tab-pessoas :model="model" :$v="$v" />
        </md-tab>
        <md-tab v-if="model.id" md-label="Funções">
          <tab-funcoes :model="model" :$v="$v" />
        </md-tab>
      </md-tabs>
    </md-card-content>

    <crud-form-actions @save="$emit('save', $data)" @back="$emit('back', $data)" @remove="$emit('remove', $data)" />

  </md-card>
</template>

<script>
import AbstractForm from "@/components/abstract/crud/form"
import TabConfiguracoes from "./tab/Configuracoes"
import TabFuncoes from "./tab/Funcoes"
import TabPessoas from "./tab/Pessoas"

import Vue from "vue"

import { minLength, required } from "vuelidate/lib/validators"

export default {
  extends: AbstractForm,
  components: {
    TabConfiguracoes,
    TabFuncoes,
    TabPessoas
  },
  data() {
    return {
      meses: []
    }
  },
  validations: {
    model: {
      descricao: {
        required,
        minLength: minLength(4)
      },
      dataInicio: {
        required
      },
      dataFim: {
        required
      },
      horaInicio: {
        required
      },
      horaFim: {
        required
      }
    }
  }
}
</script>

