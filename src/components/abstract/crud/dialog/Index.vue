<template>
  <div>
    <md-dialog-alert ref="alert" :md-title="title" md-content=" " :md-ok-text="'OK'"></md-dialog-alert>

    <md-dialog ref="dialog" :md-esc-to-close="false" :md-click-outside-to-close="false">
      <md-dialog-title>{{title}}</md-dialog-title>
      <md-dialog-content>
        <grid-loader color="#3F51B5"></grid-loader>
      </md-dialog-content>
    </md-dialog>

    <md-dialog ref="confirm">
      <md-dialog-title>{{title}}</md-dialog-title>
      <md-dialog-content>
        <slot></slot>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="$refs.confirm.close(); onClose()">{{cancelText}}</md-button>
        <md-button class="md-primary" @click="$refs.confirm.close(); onClose('ok')">{{okText}}</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import GridLoader from "vue-spinner/src/GridLoader"

const timeout = 1000

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

      try {
        self.$refs.dialog.close()
      } catch (ignored) {
        // Silence is golden
      }

      try {
        self.$refs.confirm.close()
      } catch (ignored) {
        // Silence is golden
      }

      self.title = title
      try {
        self.$refs.alert.open()
      } catch (ignored) {
        // Silence is golden
      }
    },
    confirm(title) {
      const self = this

      self.title = title

      try {
        self.$refs.dialog.close()
      } catch (ignored) {
        // Silence is golden
      }

      try {
        self.$refs.alert.close()
      } catch (ignored) {
        // Silence is golden
      }

      self.title = title
      try {
        self.$refs.confirm.open()
      } catch (ignored) {
        // Silence is golden
      }

      return new Promise((resolve, reject) => {
        self.onClose = state => {
          if (state === "ok") {
            resolve()
            return
          }
          reject()
        }
      })
    },
    dialog(title) {
      const self = this
      try {
        self.$refs.alert.close()
      } catch (ignored) {
        // Silence is golden
      }

      try {
        self.$refs.confirm.close()
      } catch (ignored) {
        // Silence is golden
      }

      self.title = title
      try {
        self.$refs.dialog.open()
      } catch (ignored) {
        // Silence is golden
      }
    },
    close() {
      const self = this
      self.title = ""

      try {
        self.$refs.alert.close()
      } catch (ignored) {
        // Silence is golden
      }

      try {
        self.$refs.confirm.close()
      } catch (ignored) {
        // Silence is golden
      }

      try {
        self.$refs.dialog.close()
      } catch (ignored) {
        // Silence is golden
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.md-dialog-content {
  margin: auto;
}
</style>

