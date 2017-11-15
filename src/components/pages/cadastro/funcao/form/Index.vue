<template>
  <md-card>
    <md-card-content>
      <md-layout :md-gutter="true">
        <md-layout md-flex="50">
          <md-input-container :class="{ 'md-input-invalid': $v.model.descricao.$error }">
            <label>Descrição</label>
            <md-input v-model.trim="model.descricao" @blur="$v.model.descricao.$touch" :maxlength="255"></md-input>
            <span class="md-error" v-show="$v.model.descricao.$error">Valor inválido</span>
          </md-input-container>
        </md-layout>

        <md-layout md-flex="25">
          <md-input-container :class="{ 'md-input-invalid': $v.model.situacao.$error }">
            <label>Situação</label>
            <md-select v-model.trim="model.situacao" @closed="$v.model.situacao.$touch">
              <md-option value="A">Ativo</md-option>
              <md-option value="I">Inativo</md-option>
            </md-select>
            <span class="md-error" v-show="$v.model.situacao.$error">Valor inválido</span>
          </md-input-container>
        </md-layout>
      </md-layout>

      <md-tabs>
        <md-tab md-label="Pessoas">
          <tab-pessoas :model="model" :v="$v" />
        </md-tab>
      </md-tabs>
    </md-card-content>

    <crud-form-actions @save="$emit('save', $data)" @back="$emit('back', $data)" @remove="$emit('remove', $data)" />

  </md-card>
</template>

<script>
import AbstractForm from "@/components/abstract/crud/form"
import TabPessoas from "./tab/Pessoas"

import Vue from "vue"

import { minLength, required } from "vuelidate/lib/validators"

export default {
  extends: AbstractForm,
  components: {
    TabPessoas
  },
  data() {
    return {}
  },
  validations: {
    model: {
      descricao: {
        required,
        minLength: minLength(4)
      },
      situacao: {
        required
      }
    }
  },
  methods: {},
  watch: {
    model(value) {
      // TODO: buscar dados de pessoas
      // value.senha = ""
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-conteiner {
  position: relative;

  .avatar-overflow {
    position: absolute;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 6px);
    transition: 200ms;
    opacity: 0;
    &:hover {
      background-color: black;
      opacity: 1;
    }
  }
}
</style>

