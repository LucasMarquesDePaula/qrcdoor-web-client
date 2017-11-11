<template>
  <div>
    <md-dialog-alert ref="alert" :md-title="title" md-content=" " :md-ok-text="'OK'"></md-dialog-alert>
    <md-dialog ref="dialog" :md-esc-to-close="false" :md-click-outside-to-close="false">
      <md-dialog-content>
        <grid-loader color="#3F51B5"></grid-loader>
      </md-dialog-content>
    </md-dialog>

    <md-dialog-confirm :md-ok-text="okText" :md-cancel-text="cancelText" @open="onOpen" @close="onClose"></md-dialog-confirm>

    <md-dialog ref="confirm">
      <md-dialog-title>{{title}}</md-dialog-title>
      <md-dialog-content>
        <slot></slot>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="close(); onClose()">{{cancelText}}</md-button>
        <md-button class="md-primary" @click="close(); onClose('ok')">{{okText}}</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import GridLoader from "vue-spinner/src/GridLoader"

export default {
  props: {
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
  data() {
    return {
      title: "",
      onClose() {
        // Not empty function
      },
      onOpen() {
        // Not empty function
      }
    }
  },
  methods: {
    alert(title) {
      const self = this
      self.title = title
      self.$refs.confirm.close()
      self.$refs.dialog.close()
      self.$refs.alert.open()
    },
    confirm(title) {
      const self = this
      self.title = title
      self.$refs.dialog.close()
      self.$refs.alert.close()
      self.$refs.confirm.open()
      return new Promise((resolve, reject) => {
        self.onClose = state => {
          if (state === "ok") {
            resolve()
          }
        }
      })
    },
    dialog(title) {
      const self = this
      self.title = title
      self.$refs.confirm.close()
      self.$refs.alert.close()
      self.$refs.dialog.open()
    }
    // onOpen(state) {
    //   this.$emit("open", state)
    // },
    // onClose(state) {
    //   this.$emit("close", state)
    // }
  }
}
</script>
<style lang="scss" scoped>
.md-dialog-content {
  margin: auto;
}
</style>

