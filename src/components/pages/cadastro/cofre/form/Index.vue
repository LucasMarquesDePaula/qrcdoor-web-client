<template>
  <md-card>
    <md-card-content>
      <md-progress v-show="progress" :md-progress="progress"></md-progress>
      <md-layout md-row>
        <md-layout v-show="model.id" md-column md-flex="15" md-align="start" class="avatar-conteiner">
          <md-avatar class="md-large">
            <img :src="foto">
          </md-avatar>
          <md-avatar class="md-large avatar-overflow">
            <img src="~@images/pencil-edit-button.png" alt="Edit" @click="editFoto()" />
          </md-avatar>
        </md-layout>
        <md-layout md-column>
          <md-layout :md-gutter="true">
            <md-layout md-flex="50">
              <md-input-container :class="{ 'md-input-invalid': $v.model.descricao.$error }">
                <label>Descrição</label>
                <md-input v-model.trim="model.descricao" @blur="$v.model.descricao.$touch" :maxlength="255"></md-input>
                <span class="md-error" v-show="$v.model.descricao.$error">Valor inválido</span>
              </md-input-container>
            </md-layout>

            <md-layout md-flex="30">
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
        </md-layout>
      </md-layout>

      <md-tabs>
        <md-tab md-label="Informações Básicas">
          <tab-informacoes-basicas :model="model" :$v="$v" />
        </md-tab>
        <md-tab v-show="model.id" md-label="Permissões">
          <tab-permissoes :model="model" :$v="$v" />
        </md-tab>
      </md-tabs>
    </md-card-content>

    <crud-form-actions @save="$emit('save', $data)" @back="$emit('back', $data)" @remove="$emit('remove', $data)" />

  </md-card>
</template>

<script>
import AbstractForm from "@/components/abstract/crud/form"
import TabInformacoesBasicas from "./tab/InformacoesBasicas"
import TabPermissoes from "./tab/Permissoes"

import Vue from "vue"

import $ from "jquery"
// import avatar from "@images/avatar.png"
import {
  minValue,
  minLength,
  numeric,
  required
} from "vuelidate/lib/validators"
import axios from "axios"
import { baseURL } from "@service/config"

export default {
  extends: AbstractForm,
  components: {
    TabInformacoesBasicas,
    TabPermissoes
  },
  data() {
    return {
      baseURL,
      foto: "",
      progress: 0
    }
  },
  validations: {
    model: {
      descricao: {
        required,
        minLength: minLength(4)
      },
      senha: {},
      pin: {},
      situacao: {
        required
      },
      tempoMaximoAbertura: {
        minValue: minValue(0),
        numeric
      },
      quantidadeMaximaPessoas: {
        minValue: minValue(0),
        numeric
      }
    }
  },
  methods: {
    editFoto() {
      // Create element
      const $input = $("<input>", {
        type: "file",
        accept: "image/x-png,image/jpeg"
      })

      // Append to render
      $input.hide(0).appendTo(this.$el)

      // Add listener
      $input.change(event => {
        const config = {
          onUploadProgress: event => {
            this.progress = Math.round(event.loaded * 100 / event.total)
          }
        }

        const file = event.currentTarget.files[0]
        const data = new FormData()
        data.append("file", file)

        axios
          .put(`${baseURL}/estrutura/foto/${this.model.id}`, data, config)
          .then(res => {
            this.progress = 0
            this.foto = `${baseURL}/estrutura/foto/${this.model
              .id}?v=${Date.now()}`
            $input.remove()
          })
          .catch(error => {
            this.progress = 0
            this.foto = `${baseURL}/estrutura/foto/${this.model
              .id}?v=${Date.now()}`
            $input.remove()
            // TODO mostrar mensagem
            console.error(error)
          })
      })

      // Trigger
      $input.click()
    }
  },
  watch: {
    model(value) {
      this.senha = ""
      this.foto = `${baseURL}/pessoa/foto/${value.id}?v=${Date.now()}`
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

