<template>
  <md-table-card class="index">
    <form @submit.stop.prevent="submit">
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
        <md-tab md-label="Permissões">
          <permissoes :model="model" />
        </md-tab>
      </md-tabs>
    </form>
    <md-card-actions>
      <md-button class="md-fab md-fab-bottom-right ">
        <md-icon>save</md-icon>
      </md-button>
    </md-card-actions>
  </md-table-card>
</template>

<script>
import Permissoes from "./Permissoes"
import model from "./model"

export default {
  components: {
    Permissoes
  },
  data() {
    return {
      model
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  max-width: 800px;
  margin: 12px auto;
}
form {
  > *:first-child {
    padding: 12px;
  }
}
</style>
