<template>
  <section>
    <md-table-card>
      <md-toolbar>
        <h1 class="md-title">{{title}}</h1>
        <crud-filter :model="filter"></crud-filter>
        <md-button class="md-icon-button" @click="onSearch">
          <md-icon>search</md-icon>
          <md-tooltip md-direction="top">Buscar</md-tooltip>
        </md-button>
      </md-toolbar>

      <md-table @select="onSelect" @sort="onSort">
        <crud-table-header></crud-table-header>
        <crud-table-body></crud-table-body>
      </md-table>

      <md-table-pagination :md-size="pagination.size" :md-total="pagination.total" :md-page="pagination.page" md-label="Linhas" md-separator="de" :md-page-options="[5, 10, 25, 50]" @pagination="onPagination"></md-table-pagination>

      <md-card-actions>
        <md-button class="md-fab" @click="onAdd">
          <md-icon>add</md-icon>
          <md-tooltip md-direction="top">Adicionar</md-tooltip>
        </md-button>
      </md-card-actions>
    </md-table-card>

    <crud-dialog ref="dialog"></crud-dialog>
  </section>
</template>

<script>
import CrudDialog from "../dialog"

export default {
  components: {
    CrudDialog
  },
  data() {
    return {
      pagination: {
        size: 5,
        page: 1,
        total: 100
      },
      sort: {
        field: "",
        type: ""
      }
    }
  },
  methods: {
    reload() {
      this.$refs.loading.open()
      this.service.get(this.url, {
        params: {
          page: 12345
        }
      })
    },

    // Events
    onSelect() {
      console.log(arguments)
    },
    onSort() {
      console.log(arguments)
    },
    onPagination() {
      console.log(arguments)
    },
    onAdd() {
      console.log(arguments)
    },
    onSearch() {
      console.log(arguments)
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


