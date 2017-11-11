<template>
  <div>
    <md-button class="md-icon-button" @click.prevent.stop="$emit('back', $data)">
      <md-icon>arrow_back</md-icon>
      <md-tooltip md-direction="top">Voltar</md-tooltip>
    </md-button>
    <md-button class="md-icon-button" @click.prevent.stop="$emit('remove', $data)">
      <md-icon>delete_forever</md-icon>
      <md-tooltip md-direction="top">Deletar</md-tooltip>
    </md-button>
    <md-button class="md-fab" @click.prevent.stop="$emit('save', $data)">
      <md-icon>save</md-icon>
      <md-tooltip md-direction="top">Salvar</md-tooltip>
    </md-button>
  </div>
</template>

