<template>
  <div class="error-page window-height window-width bg-light column items-center no-wrap">
    <div class="error-code bg-primary flex items-center content-center justify-center">
      404
    </div>
    <div>
      <div class="error-card shadow-4 bg-white column items-center justify-center no-wrap">
        <q-icon name="error_outline" color="grey-5" />
        <p class="caption text-center">Oops. Nothing here...</p>
        <p class="text-center group">

        </p>
      </div>
    </div>
  </div>
</template>

<template>
  <section>
    <md-card>
      <md-card-header>
        <div class="md-title">Erro 404</div>
      </md-card-header>

      <md-card-content>
        A página que você esta tentando acessar não existe
      </md-card-content>

      <md-card-actions>
        <md-button v-if="canGoBack" class="md-raised md-primary" @click="goBack">Voltar</md-button>
        <md-button v-if="canGoBack" class="md-raised md-primary" @click="goHome">Página inicial</md-button>
      </md-card-actions>

    </md-card>
  </section>
</template>

<script>
export default {
  computed: {
    canGoBack() {
      return window.history.length > 1
    }
  },
  methods: {
    goBack() {
      window.history.go(-1)
    },
    goHome() {
      this.$router.replace("/")
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  min-width: 420px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  > * {
    width: 100%;
  }
}
</style>
