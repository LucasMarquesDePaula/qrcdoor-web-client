<script>
import CrudFormActions from "./Actions"
export default {
  components: {
    CrudFormActions
  },
  props: {
    model: {
      default() {
        return {}
      }
    },
    service: {
      required: true
    }
  },
  methods: {
    validate() {
      this.$v.model.$touch()
      return !this.$v.model.$error
    },
    save() {
      return new Promise((resolve, reject) => {
        try {
          if (this.$v.model.$error) {
            throw new Error("Verifique os dados inseridos.")
          }

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
    },
    doSave(resolve, reject) {
      this.service
        [!this.model.id ? "post" : "put"](this.model)
        .then(resolve)
        .catch(reject)
    },
    doDelete(resolve, reject) {
      this.service
        .delete(this.model.id)
        .then(resolve)
        .catch(reject)
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
