<template>
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
          <tab-informacoes-basicas :model="model" />
        </md-tab>

        <md-tab md-label="Funções">
          <tab-funcoes :model="model" />
        </md-tab>

        <md-tab md-label="Chaves">
          <tab-chaves :model="model" />
        </md-tab>

        <md-tab md-label="Permissões">
          <tab-permissoes :model="model" />
        </md-tab>
      </md-tabs>
    </md-card-content>
    <md-card-actions>
      <form-actions @save="$emit('save', $data)" @back="$emit('back', $data)" @remove="$emit('remove', $data)" />
    </md-card-actions>
  </md-card>
</template>

<script>
import AbstractForm from "@/components/abstract/crud/form"
import TabChaves from "./tab/Chaves"
import TabFuncoes from "./tab/Funcoes"
import TabInformacoesBasicas from "./tab/InformacoesBasicas"
import TabPermissoes from "./tab/Permissoes"

import avatar from "@images/avatar.png"

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
      avatar
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

