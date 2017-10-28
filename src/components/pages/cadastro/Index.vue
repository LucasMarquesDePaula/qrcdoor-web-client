<template>
  <div>
    <md-tabs class="no-navigation">
      <md-tab :md-active="tab === 'grid'">
        <v-grid :title="title" @edit="onGridEdit" />
      </md-tab>
      <md-tab :md-active="tab === 'form'">
        <v-form :title="title" :model="model" @save="onFormSave" @back="onFormBack" @remove="onFormRemove" />
      </md-tab>
    </md-tabs>
    <v-dialog ref="dialog" :title="dialog.title" @close="dialog.onClose" />
  </div>
</template>

<script>
import VDialog from "./Dialog"
import isEmpty from "lodash/isEmpty"
import objectHash from "object-hash"

const EMPTY = {}

export default {
  components: {
    VDialog
  },
  props: {
    form: {
      type: Object
    }
  },
  data() {
    return {
      dialog: {
        onClose() {
          // It is not an empty method
        }
      },
      modelHash: null,
      model: EMPTY
    }
  },
  methods: {
    onFormSave() {
      const ui = this.$refs.dialog
      const { dialog } = this

      // Etapa 1: Confirmação das alterações
      dialog.title = "Salvar as alterações?"
      ui.confirm()

      dialog.onClose = state => {
        if (state === "ok") {
          // Etapa 2: Bloqueia a tela e Salva os dados
          dialog.title = "Salvando..."
          ui.dialog()

          // Delay simulando troca de dados com o servidor
          setTimeout(() => {
            // Etapa 3: Mostra a mensagem de sucesso e volta para o grid
            ui.alert()
            dialog.title = "Salvo com sucesso!"
            this.model = EMPTY
          }, 2000)
        }
      }
    },
    onFormBack() {
      if (this.modelHash === objectHash(this.model)) {
        // Não houve alteração
        this.model = EMPTY
        return
      }

      const ui = this.$refs.dialog
      const { dialog } = this

      ui.confirm()
      dialog.title = "Voltar a tela anterior ?"
      dialog.onClose = state => {
        if (state === "ok") {
          this.model = EMPTY
        }
      }
    },
    onFormRemove() {
      const ui = this.$refs.dialog
      const { dialog } = this

      // Etapa 1: Confirmação das alterações
      dialog.title = "Remover o registro?"
      ui.confirm()

      dialog.onClose = state => {
        if (state === "ok") {
          // Etapa 2: Bloqueia a tela e Salva os dados
          dialog.title = "Removendo..."
          ui.dialog()

          // Delay simulando troca de dados com o servidor
          setTimeout(() => {
            // Etapa 3: Mostra a mensagem de sucesso e volta para o grid
            ui.alert()
            dialog.title = "Removido com sucesso!"
            this.model = EMPTY
          }, 2000)
        }
      }
    },
    onGridEdit(model) {
      this.modelHash = objectHash(model)
      this.model = model
    }
  },
  computed: {
    tab() {
      return isEmpty(this.model) ? "grid" : "form"
    }
  }
}
</script>

<style lang="scss">
.md-tabs.no-navigation {
  > .md-tabs-navigation {
    display: none;
  }
}
</style>


