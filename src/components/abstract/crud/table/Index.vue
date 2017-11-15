<template>
  <section>
    <md-table-card>
      <div class="filter-conteiner">
        <div class="filter-fields">
          <form @submit.prevent="onSearch">
            <crud-table-filter :model="filter"></crud-table-filter>
          </form>
        </div>
        <div class="filter-actions">
          <md-button class="md-icon-button" @click="onClear">
            <md-icon>delete_forever</md-icon>
            <md-tooltip md-direction="top">Limpar Filtro</md-tooltip>
          </md-button>
          <md-button class="md-icon-button" @click="onSearch">
            <md-icon>search</md-icon>
            <md-tooltip md-direction="top">Buscar</md-tooltip>
          </md-button>
        </div>
      </div>

      <md-table @select="onSelect" @sort="onSort">
        <crud-table-header></crud-table-header>
        <crud-table-body :list="list" @edit="onEdit"></crud-table-body>
      </md-table>

      <md-table-pagination :md-size="pagination.size" :md-total="pagination.total" :md-page="pagination.page" md-label="Linhas" md-separator="de" :md-page-options="[5, 10, 25, 50]" @pagination="onPagination"></md-table-pagination>

      <md-card-actions>
        <md-button class="md-fab" @click="onAdd()">
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
  props: {
    service: {
      required: true
    }
  },
  components: {
    CrudDialog
  },
  data() {
    return {
      pagination: {
        size: 5,
        page: 1,
        total: 0
      },
      sort: {},
      filter: {},
      list: []
    }
  },
  methods: {
    reload() {
      // debugger
      // console.log(this.$refs)
      // this.$refs.dialog.dialog()
      this.service
        .get({
          params: {
            sort: `${this.sort.name || ""},${this.sort.type || ""}`.replace(
              /,$/,
              ""
            ),
            size: this.pagination.size,
            page: this.pagination.page - 1,
            ...this.filter
          }
        })
        .then((response) => {
          console.log(response)
          const { data } = response
          this.list = data.content

          this.pagination.size = data.size
          // this.pagination.page = data.page + 1
          this.pagination.total = data.totalPages
        })
    },

    // Events
    onSelect() {
      // console.log(arguments)
      // this.reload()
    },
    onSort(sort) {
      this.sort = sort
      this.reload()
    },
    onPagination() {
      console.log(arguments)
      this.reload()
    },
    onAdd() {
      this.$emit("add")
      // console.log(arguments)
    },
    onEdit(model) {
      this.$emit("edit", model)
    },
    onClear() {
      this.filter = {}
      this.reload()
    },
    onSearch() {
      this.reload()
    }
  },
  created() {
    this.reload()
  }
}
</script>

<style lang="scss">
.filter-conteiner {
  margin: 12px;
  align-items: center;
  display: flex;
  > .filter-fields {
    width: calc(100% - 120px);
  }
  > .filter-actions {
    margin: auto;
    button {
      margin: 0;
    }
  }
}
</style>


