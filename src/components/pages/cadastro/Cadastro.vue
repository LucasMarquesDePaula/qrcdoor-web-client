<template>
  <div>
    <md-tabs class="no-navigation">
      <md-tab :md-active="tab === 'grid'">
        <v-grid @edit="edit" />
      </md-tab>
      <md-tab :md-active="tab === 'form'">
        <v-form :model="model" @save="onFormSave" @back="onFormBack" @remove="onFormRemove" />
      </md-tab>
    </md-tabs>
    <v-dialog ref="dialog" :title="dialog.title" @close="dialog.onClose" />
  </div>
</template>

<script>
import Dialog from "../Dialog"
import objectHash from "object-hash"

export default {
  components: {
    Dialog
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
      model: null
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
            this.model = null
          }, 2000)
        }
      }
    },
    onFormBack() {
      if (this.modelHash === objectHash(this.model)) {
        // Não houve alteração
        this.model = null
        return
      }

      const ui = this.$refs.dialog
      const { dialog } = this

      ui.confirm()
      dialog.title = "Voltar a tela anterior ?"
      dialog.onClose = state => {
        if (state === "ok") {
          this.model = null
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
            this.model = null
          }, 2000)
        }
      }
    },
    edit(model) {
      this.modelHash = objectHash(model)
      this.model = model
    }
  },
  computed: {
    tab() {
      return this.model ? "form" : "grid"
    }
  }
}
</script>

<style lang="scss">
.md-tabs.no-navigation {
  .md-tabs-navigation {
    display: none;
  }
}
</style>


