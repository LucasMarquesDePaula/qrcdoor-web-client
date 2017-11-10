<template>
  <!-- <v-form @save="$emit('save', $data)" @back="$emit('back', $data)" @remove="$emit('remove', $data)"> -->
  <md-card>
    <md-card-content>
      <md-layout md-row>
        <md-layout md-column md-flex="15" md-align="start" class="avatar-conteiner">
          <md-avatar class="md-large">
            <img :src="model.foto || avatar" alt="Foto">
          </md-avatar>
          <md-avatar class="md-large avatar-overflow">
            <img src="~@images/pencil-edit-button.png" alt="Edit" />
          </md-avatar>
        </md-layout>
        <md-layout md-column>
          <md-layout :md-gutter="true">
            <md-layout md-flex="50">
              <md-input-container>
                <label>Nome</label>
                <md-input v-model="model.nome"></md-input>
              </md-input-container>
            </md-layout>

            <md-layout md-flex="25">
              <md-checkbox v-model="model.situacao">Ativo</md-checkbox>
            </md-layout>
          </md-layout>
        </md-layout>
      </md-layout>

      <md-tabs>
        <md-tab md-label="Informações Básicas">
          <v-informacoes-basicas :model="model" />
        </md-tab>

        <md-tab md-label="Funções">
          <v-funcoes :model="model" />
        </md-tab>

        <md-tab md-label="Chaves">
          <v-chaves :model="model" />
        </md-tab>

        <md-tab md-label="Permissões">
          <v-permissoes :model="model" />
        </md-tab>
      </md-tabs>
    </md-card-content>
    <md-card-actions>
      <form-actions @save="$emit('save', $data)" @back="$emit('back', $data)" @remove="$emit('remove', $data)" />
    </md-card-actions>
  </md-card>
</template>

<script>
import VChaves from "./Chaves"
import VForm from "../Form"
import VFuncoes from "./Funcoes"
import VInformacoesBasicas from "./InformacoesBasicas"
import VPermissoes from "./Permissoes"

import avatar from "@images/avatar.png"

import service from "@service/pessoa"

export default {
  extends: VForm,
  components: {
    VChaves,
    VFuncoes,
    VInformacoesBasicas,
    VPermissoes
  },
  props: ["model"],
  data() {
    return {
      avatar
    }
  },
  methods: {
    doSave(resolve, reject) {
      service
        .post(this.model)
        .then(resolve)
        .catch(reject)
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

