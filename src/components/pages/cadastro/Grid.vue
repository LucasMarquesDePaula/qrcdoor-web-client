<template>
  <md-table-card>
    <md-toolbar>
      <h1 class="md-title">{{title}}</h1>
      <md-button class="md-icon-button" @click="$refs.filter.open()">
        <md-icon>filter_list</md-icon>
        <md-tooltip md-direction="top">Alterar Filtros</md-tooltip>
      </md-button>

      <md-button class="md-icon-button" @click="reload">
        <md-icon>search</md-icon>
        <md-tooltip md-direction="top">Buscar</md-tooltip>
      </md-button>
    </md-toolbar>

    <md-table @select="onSelect" @sort="onSort">
      <slot name="md-table-header"></slot>
      <slot></slot>
    </md-table>

    <md-card-actions>
      <md-button class="md-fab" @click="$emit('add', $data)">
        <md-icon>add</md-icon>
        <md-tooltip md-direction="top">Adicionar</md-tooltip>
      </md-button>
    </md-card-actions>

    <!-- Dialog Filter -->
    <md-dialog class="filter" ref="filter">
      <md-dialog-title>
        <md-icon>filter_list</md-icon>
        <span>Filtro</span>
      </md-dialog-title>

      <md-dialog-content>
        <slot name="filter"></slot>
      </md-dialog-content>

      <md-table-pagination :md-size="size" :md-total="total" :md-page="page" md-label="Linhas" md-separator="de" :md-page-options="[5, 10, 25, 50]" @pagination="onPagination"></md-table-pagination>

      <md-dialog-actions>
        <md-button class="md-primary md-raised" @click="reload">Aplicar</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!-- Dialog Loading -->
    <md-dialog ref="loading" :md-esc-to-close="false" :md-click-outside-to-close="false">
      <md-dialog-title>Buscando os dados</md-dialog-title>
      <md-dialog-content>
        <grid-loader color="#3F51B5"></grid-loader>
      </md-dialog-content>
    </md-dialog>
  </md-table-card>
</template>

<script>
import GridLoader from "vue-spinner/src/GridLoader"
import { mapGetters } from "vuex"
import service from "@service"

export default {
  components: {
    GridLoader
  },
  props: {
    filter: {
      default() {
        return {}
      }
    },
    list: {
      default() {
        return []
      }
    },
    url: {
      default: ""
    },
    title: {
      default: ""
    }
  },
  data() {
    return {
      size: 5,
      page: 1,
      total: 100
    }
  },
  computed: {
    ...mapGetters(["auth"])
  },
  methods: {
    reload() {
      // this.$refs.filter.close()
      // this.$refs.loading.open()
      console.log(this.auth)
      service.get(this.url, {
        auth: this.auth,
        params: {
          page: 12345
        }
      })
    },

    // Events
    onSelect() {
      // console.log(arguments)
    },
    onSort() {
      // console.log(arguments)
    },
    onPagination() {
      // console.log(arguments)
    }
  },
  created() {
    this.reload()
  }
}
</script>

<style lang="scss">
.md-dialog.filter {
  min-width: 500px;
  min-height: 70vh;
}
</style>


