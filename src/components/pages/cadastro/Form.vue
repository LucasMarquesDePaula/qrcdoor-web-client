<template>
  <md-table-card class="index">
    <md-toolbar>
      <md-button class="md-icon-button" @click="$emit('back', $data)">
        <md-icon>arrow_back</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">{{title}}</h2>
      <md-button class="md-icon-button" @click="$emit('remove', $data)">
        <md-icon>delete_forever</md-icon>
      </md-button>
    </md-toolbar>
    <form @submit.stop.prevent="submit">
      <slot></slot>
    </form>
    <md-card-actions>
      <md-button class="md-fab" @click="$emit('save', $data)">
        <md-icon>save</md-icon>
      </md-button>
    </md-card-actions>
  </md-table-card>
</template>

<script>
export default {
  props: ["model", "title"]
}
</script>

<style lang="scss">
form {
  > *:first-child {
    padding: 12px;
  }
}
</style>
