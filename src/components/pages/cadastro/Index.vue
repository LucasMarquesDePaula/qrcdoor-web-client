<template>
  <div>
    <md-tabs class="no-navigation">
      <md-tab :md-active="tab === 'grid'">
        <v-grid ref="grid" :list="list" :filter="filter" :title="title" @edit="onGridEdit" @add="onGridAdd" />
      </md-tab>
      <md-tab :md-active="tab === 'form'">
        <v-form ref="form" :title="title" :model="model" @save="onFormSave" @back="onFormBack" @remove="onFormRemove" />
      </md-tab>
    </md-tabs>
    <v-dialog ref="dialog" />
  </div>
</template>

<script>
import VDialog from "./Dialog"
// import isEmpty from "lodash/isEmpty"
import { mapGetters } from "vuex"
import hash from "object-hash"
import service from "@service"
import store from "@store"

export default {
  components: {
    VDialog
  },
  store,
  data() {
    return {
      modelHash: null,
      model: {},
      filter: {},
      list: [],
      tab: "form"
      // tab: "grid"
    }
  },
  computed: {
    ...mapGetters(["auth"])
  },
  methods: {
    onFormSave() {
      const { dialog, form } = this.$refs

      // Etapa 1: Confirmação das alterações
      dialog.confirm("Salvar?").then(state => {
        // Etapa 2: Bloqueia a tela e efetua ação
        dialog.dialog("Salvando...")

        form
          .save()
          .then(response => {
            // Etapa 3: Mostra a mensagem de sucesso e volta para o grid
            dialog.alert("Salvo com sucesso!")
            this.tab = "grid"
          })
          .catch(error => {
            dialog.alert("Erro ao salvar!")
            console.error(error)
          })
      })
    },
    onFormRemove() {
      const { dialog, form } = this.$refs

      // Etapa 1: Confirmação a ação
      dialog.confirm("Remover?").then(state => {
        // Etapa 2: Bloqueia a tela e efetua a ação
        dialog.dialog("Removendo...")

        form
          .delete()
          .then(response => {
            // Etapa 3: Mostra a mensagem de sucesso e volta para o grid
            dialog.alert("Removido com sucesso!")
            this.tab = "grid"
          })
          .catch(error => {
            dialog.alert("Erro ao remover!")
            console.error(error)
          })
      })
    },
    onFormBack() {
      if (this.modelHash === hash(this.model)) {
        // Não houve alteração
        this.model = {}
        this.tab = "grid"
        return
      }

      const ui = this.$refs.dialog
      const { dialog } = this

      ui.confirm()
      dialog.title = "Voltar a tela anterior ?"
      dialog.onClose = state => {
        if (state === "ok") {
          this.model = {}
          this.tab = "grid"
        }
      }
    },
    onGridAdd() {
      const model = {}
      this.modelHash = hash(model)
      this.model = model
      this.tab = "form"
    },
    onGridEdit(model) {
      this.modelHash = hash(model)
      this.model = model
      this.tab = "form"
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


