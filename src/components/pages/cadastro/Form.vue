<script>
const FormActions = {
  template: `
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
  `
}

export default {
  components: {
    FormActions
  },
  props: ["model", "title"],
  methods: {
    save() {
      return new Promise((resolve, reject) => {
        try {
          this.doSave(resolve, reject)
        } catch (error) {
          reject(error)
        }
      })
    },
    delete() {
      return new Promise((resolve, reject) => {
        try {
          this.doDelete(resolve, reject)
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
</script>

<style lang="scss">
form {
  > *:first-child {
    padding: 12px;
  }
}
</style>
