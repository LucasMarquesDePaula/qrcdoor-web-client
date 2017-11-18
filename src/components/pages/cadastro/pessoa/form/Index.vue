<template>
  <md-card>
    <md-card-content>
      <md-layout md-row>
        <md-layout md-column md-flex="15" md-align="start" class="avatar-conteiner">
          <md-avatar class="md-large">
            <img :src="`${baseURL}/pessoa/foto/${model.id}`" alt="Foto">
          </md-avatar>
          <md-avatar class="md-large avatar-overflow">
            <img src="~@images/pencil-edit-button.png" alt="Edit" @click="editFoto()" />
          </md-avatar>
        </md-layout>
        <md-layout md-column>
          <md-layout :md-gutter="true">
            <md-layout md-flex="50">
              <md-input-container :class="{ 'md-input-invalid': $v.model.nome.$error }">
                <label>Nome</label>
                <md-input v-model.trim="model.nome" @blur="$v.model.nome.$touch" :maxlength="255"></md-input>
                <!-- <span class="md-error" v-show="$v.model.nome.required">Valor Obrigatório</span> -->
                <span class="md-error" v-show="$v.model.nome.$error">Valor inválido</span>
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

            <md-layout md-flex="25">
              <md-input-container :class="{ 'md-input-invalid': $v.model.role.$error }">
                <label>Acesso</label>
                <md-select v-model="model.role" @closed="$v.model.role.$touch">
                  <md-option value="ADMINISTRADOR">Admin</md-option>
                  <md-option value="USUARIO">Usuário</md-option>
                </md-select>
                <span class="md-error" v-show="$v.model.role.$error">Valor inválido</span>
              </md-input-container>
            </md-layout>
          </md-layout>
        </md-layout>
      </md-layout>

      <md-tabs>
        <md-tab md-label="Informações Básicas">
          <tab-informacoes-basicas :model="model" :$v="$v" />
        </md-tab>

        <md-tab md-label="Funções">
          <tab-funcoes :model="model" :$v="$v" />
        </md-tab>

        <md-tab md-label="Chaves">
          <tab-chaves :model="model" :$v="$v" />
        </md-tab>

        <md-tab md-label="Permissões">
          <tab-permissoes :model="model" :$v="$v" />
        </md-tab>
      </md-tabs>
    </md-card-content>

    <crud-form-actions @save="$emit('save', $data)" @back="$emit('back', $data)" @remove="$emit('remove', $data)" />

  </md-card>
</template>

<script>
import AbstractForm from "@/components/abstract/crud/form"
import TabChaves from "./tab/Chaves"
import TabFuncoes from "./tab/Funcoes"
import TabInformacoesBasicas from "./tab/InformacoesBasicas"
import TabPermissoes from "./tab/Permissoes"

import Vue from "vue"

import $ from "jquery"
// import avatar from "@images/avatar.png"
import { email, minLength, required } from "vuelidate/lib/validators"
import { baseURL } from "@service/config"

export default {
  extends: AbstractForm,
  components: {
    TabChaves,
    TabFuncoes,
    TabInformacoesBasicas,
    TabPermissoes
  },
  data() {
    return {
      baseURL
    }
  },
  validations: {
    model: {
      nome: {
        required,
        minLength: minLength(4)
      },
      situacao: {
        required
      },
      role: {
        required
      },
      fisicaJuridica: {
        required
      },
      email: {
        required,
        email
      },
      login: {
        required,
        minLength: minLength(4)
      },
      senha: {},
      telefoneCelular: {},
      telefoneFixo: {},
      documento: {
        required
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
        const file = event.currentTarget.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          const { result } = reader
          let foto = ""
          let fotoExtensao = ""
          for (let i = 0, len = result.length; i < len; i++) {
            if (result[i] === ",") {
              foto = result.substring(i + 1)
              fotoExtensao = result.substring(0, i)
              fotoExtensao = fotoExtensao.replace("data:image/", "")
              fotoExtensao = fotoExtensao.replace(";base64", "")
              break
            }
          }
          Vue.set(this.model, "foto", foto)
          Vue.set(this.model, "fotoExtensao", fotoExtensao)
        }
        $input.remove()
      })

      // Trigger
      $input.click()
    }
  },
  watch: {
    model(value) {
      value.senha = ""
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

