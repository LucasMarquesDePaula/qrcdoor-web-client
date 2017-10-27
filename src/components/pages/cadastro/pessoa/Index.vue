<template>
  <div>
    <md-tabs class="no-navigation">
      <md-tab :md-active="tab === 'grid'">
        <v-grid @edit="edit" />
      </md-tab>
      <md-tab :md-active="tab === 'form'">
        <v-form :model="model" @save="save" />
      </md-tab>
    </md-tabs>
    <v-dialog ref="dialog" :title="dialog.title" @close="dialog.onClose" />
  </div>
</template>

<script>
import VDialog from "../Dialog"
import VGrid from "./Grid"
import VForm from "./Form"

export default {
  components: {
    VDialog,
    VForm,
    VGrid
  },
  data() {
    return {
      dialog: {
        onClose() {
          // It is not an empty method
        }
      },
      model: null
    }
  },
  methods: {
    save() {
      const ui = this.$refs.dialog
      const { dialog } = this

      // Etapa 1: Confirmação das alterações
      ui.confirm()
      dialog.title = "Salvar as alterações ?"
      dialog.onClose = state => {
        console.log(state)
        if (state === "ok") {
          // Etapa 2: Bloqueia a tela e Salva os dados
          ui.dialog()
          dialog.title = "Salvando"

          // Delay simulando troca de dados com o servidor
          setTimeout(() => {
            // Etapa 3: Mostra a mensagem de sucesso e volta para o grid
            ui.alert()
            dialog.title = "Salvo com sucesso"
            this.model = null
          }, 2000)
        }
      }
    },
    remove() {
      // confirm.title = "Apagar o registro ?"
      // confirm.close = state => {
      //   setTimeout(() => {
      //     if (state === "ok") {
      //       this.model = null
      //     }
      //   }, 1000)
      // }
    },
    edit(model) {
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

.md-dialog-content {
  margin: auto;
}
</style>


