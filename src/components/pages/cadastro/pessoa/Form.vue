<template>
  <v-form @save="$emit('save', $data)" @back="$emit('back', $data)" @remove="$emit('remove', $data)">
    <div>
      <md-avatar class="md-large">
        <img :src="model.foto" alt="Foto">
      </md-avatar>
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
    </div>
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
  </v-form>
</template>

<script>
import VChaves from "./Chaves"
import VForm from "../Form"
import VFuncoes from "./Funcoes"
import VInformacoesBasicas from "./InformacoesBasicas"
import VPermissoes from "./Permissoes"

export default {
  components: {
    VChaves,
    VForm,
    VFuncoes,
    VInformacoesBasicas,
    VPermissoes
  },
  props: ["model"]
}
</script>
