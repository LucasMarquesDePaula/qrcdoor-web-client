<template>
  <section class="full-width">
    <md-tabs class="no-navigation">
      <md-tab :md-active="tab === 'table'">
        <crud-table ref="table" :service="service" @edit="onTableEdit" @add="onTableAdd" />
      </md-tab>
      <md-tab :md-active="tab === 'form'">
        <crud-form ref="form" :service="service" :model="model" @save="onFormSave" @back="onFormBack" @remove="onFormRemove" />
      </md-tab>
    </md-tabs>
    <crud-dialog ref="dialog"></crud-dialog>
  </section>
</template>

<script>
import CrudDialog from "./dialog"
import Vue from "vue"
// import isEmpty from "lodash/isEmpty"
import { mapGetters } from "vuex"
import hash from "object-hash"
import service from "@service"
import store from "@store"

export default {
  components: {
    CrudDialog
  },
  store,
  data() {
    return {
      modelHash: null,
      model: {},
      filter: {},
      list: [],
      tab: ""
    }
  },
  computed: {
    ...mapGetters(["auth"])
  },
  methods: {
    onFormSave() {
      const { dialog, form } = this.$refs

      if (!form.validate()) {
        dialog.alert("Erros no formulário!")
        return
      }

      // Etapa 1: Confirmação das alterações
      dialog.confirm("Salvar ?").then(state => {
        // Etapa 2: Bloqueia a tela e efetua ação
        dialog.dialog("Salvando...")

        form
          .save()
          .then(response => {
            // Etapa 3: Mostra a mensagem de sucesso e volta para o table
            dialog.alert("Salvo com sucesso!")
            Vue.set(this.model, "id", response.data.id)
            this.modelHash = hash(this.model)
            // this.tab = "table"
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
            // Etapa 3: Mostra a mensagem de sucesso e volta para o table
            dialog.alert("Removido com sucesso!")
            this.tab = "table"
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
        this.tab = "table"
        return
      }

      const { dialog } = this.$refs

      dialog.confirm("Voltar a tela anterior ?").then(() => {
        this.model = {}
        this.tab = "table"
      })
    },
    onTableAdd() {
      const model = {}
      this.modelHash = hash(model)
      this.model = model
      this.tab = "form"
    },
    onTableEdit(model) {
      this.modelHash = hash(model)
      this.model = model
      this.tab = "form"
    }
  },
  watch: {
    tab(value) {
      const { table } = this.$refs
      if (value === "table") {
        table.reload()
      }
    }
  },
  mounted() {
    this.tab = "table"
  }
}
</script>

<style lang="scss">
.md-tabs.no-navigation {
  > .md-tabs-navigation {
    display: none;
  }
}
section.full-width {
  width: 100%;
}
</style>


