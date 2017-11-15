<template>
  <div>
    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container>
          <label>Descrição</label>
          <md-input v-model="form.descricao"></md-input>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
          <label>Assinatura</label>
          <md-input v-model="form.assinatura"></md-input>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
          <label>Tipo</label>
          <md-select v-model="form.tipo">
            <md-option value="smartphone">Smartphone</md-option>
            <md-option value="qrcode">QR Code</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout md-flex="10">
        <md-button class="md-icon-button md-raised md-primary">
          <md-icon>add</md-icon>
        </md-button>
      </md-layout>
    </md-layout>
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Código</md-table-head>
          <md-table-head>Descrição</md-table-head>
          <md-table-head>Tipo</md-table-head>
          <md-table-head>Assinatura</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(chave, index) in model.chaves" :key="index">
          <md-table-cell>{{chave.id}}</md-table-cell>
          <md-table-cell>{{chave.descricao}}</md-table-cell>
          <md-table-cell>{{chave.tipo}}</md-table-cell>
          <md-table-cell>{{chave.assinatura}}</md-table-cell>
          <md-button class="md-icon-button">
            <md-icon>delete forever</md-icon>
          </md-button>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
</template>

<script>
import AbstractTab from "@/components/abstract/crud/form-tab"

import isEmpty from "lodash/isEmpty"
import service from "@service/chaves"

export default {
  extends: AbstractTab,
  data() {
    return {
      form: {}
    }
  },
  methods: {
    add() {
      // TODO adicionar validação
      if (!this.model.chaves) {
        this.model.chaves = []
      }
      if (this.form) {
        this.model.chaves.push(this.form)
        this.form = {}
      }
    }
  },
  watch: {
    model(model) {
      if (!isEmpty(model)) {
      }
      console.log("model")
    }
  }
}
</script>
