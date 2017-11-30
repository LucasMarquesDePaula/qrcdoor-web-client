<template>
  <section>
    <md-card>
      <md-card-content>
        <md-layout :md-gutter="true">
          <md-layout>
            <md-input-container>
              <label>Pessoa</label>
              <md-input />
            </md-input-container>
          </md-layout>
          <md-layout>
            <md-input-container>
              <label>Estrutura</label>
              <md-input />
            </md-input-container>
          </md-layout>
        </md-layout>

        <md-layout :md-gutter="true">
          <md-layout>
            <md-input-container>
              <label>Data Inicial</label>
              <md-input type="date" />
            </md-input-container>
          </md-layout>
          <md-layout>
            <md-input-container>
              <label>Data Final</label>
              <md-input type="date" />
            </md-input-container>
          </md-layout>
        </md-layout>
      </md-card-content>
      <md-card-actions>
        <md-button class="md-raised md-primary">Gerar</md-button>
      </md-card-actions>
    </md-card>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  min-width: 700px;
}
</style>
