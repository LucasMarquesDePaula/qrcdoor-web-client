<template>
  <v-form @save="$emit('save', $data)" @back="$emit('back', $data)" @remove="$emit('remove', $data)">
    <div>
      <md-layout :md-gutter="true">
        <md-layout md-flex="50">
          <md-input-container>
            <label>Nome</label>
            <md-input v-model="model.descricao"></md-input>
          </md-input-container>
        </md-layout>

        <md-layout md-flex="25">
          <md-checkbox v-model="model.situacao">Ativo</md-checkbox>
        </md-layout>
      </md-layout>
    </div>
    <md-tabs>

      <md-tab md-label="Pessoas">
        <pessoas :model="model" />
      </md-tab>

      <md-tab md-label="Permissões">
        <permissoes :model="model" />
      </md-tab>
    </md-tabs>
  </v-form>
</template>

<script>
// import Permissoes from "./Permissoes"
// import Pessoas from "./Pessoas"
// import VForm from "../Form"
// import model from "./Model"

export default {
  components: {
    Pessoas,
    Permissoes,
    VForm
  },
  data() {
    return {
      model
    }
  }
}
</script>
