<template>
  <div>
    <md-dialog-alert ref="alert" :md-title="title" :md-content-html="contentHtml" :md-content="content" :md-ok-text="'OK'"></md-dialog-alert>
    <md-dialog ref="dialog" :md-esc-to-close="false" :md-click-outside-to-close="false">
      <md-dialog-title>Aplicando Alterações</md-dialog-title>
      <md-dialog-content>
        <grid-loader v-if="loading" color="#3F51B5"></grid-loader>
      </md-dialog-content>
    </md-dialog>
    <md-dialog-confirm ref="confirm" :md-title="title" :md-content-html="contentHtml" :md-ok-text="okText" :md-cancel-text="cancelText" @open="onOpen" @close="onClose"></md-dialog-confirm>
  </div>
</template>

<script>
import GridLoader from "vue-spinner/src/GridLoader"

export default {
  props: {
    title: {
      default: ""
    },
    // Content
    content: {
      default: " "
    },
    contentHtml: {
      default: " "
    },
    loading: {
      default: true
    },
    okText: {
      default: "Sim"
    },
    cancelText: {
      default: "Não"
    }
  },
  components: {
    GridLoader
  },
  methods: {
    alert() {
      this.$refs.confirm.close()
      this.$refs.dialog.close()
      this.$refs.alert.open()
    },
    confirm() {
      this.$refs.dialog.close()
      this.$refs.alert.close()
      this.$refs.confirm.open()
    },
    dialog() {
      this.$refs.confirm.close()
      this.$refs.alert.close()
      this.$refs.dialog.open()
    },
    onOpen(state) {
      this.$emit("open", state)
    },
    onClose(state) {
      this.$emit("close", state)
    }
  }
}
</script>
<<style lang="scss" scoped>
.md-dialog-content {
  margin: auto;
}
</style>

