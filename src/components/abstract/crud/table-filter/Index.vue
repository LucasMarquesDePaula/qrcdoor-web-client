<template>
  <md-layout :md-gutter="true">
    <md-layout>
      <md-input-container>
        <label>Busca...</label>
        <md-input v-model="model.q"></md-input>
      </md-input-container>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  props: {
    model: {
      default() {
        return {}
      }
    }
  }
}
</script>

