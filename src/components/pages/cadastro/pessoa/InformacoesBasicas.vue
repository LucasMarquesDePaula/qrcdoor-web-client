<template>
  <div>
    <md-layout :md-gutter="true">
      <md-layout md-flex="50">
        <md-input-container>
          <label>Documento (CPF / CNPJ)</label>
          <md-input v-model="model.documento"></md-input>
        </md-input-container>
      </md-layout>

      <md-layout md-flex="25">
        <md-input-container>
          <label>Tipo Pessoa</label>
          <md-select v-model="model.fisicaJuridica">
            <md-option value="F">Física</md-option>
            <md-option value="J">Jurídica</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
    </md-layout>
    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container>
          <label>Login</label>
          <md-input v-model="model.login"></md-input>
        </md-input-container>
      </md-layout>

      <md-layout>
        <md-input-container md-has-password>
          <label>Senha</label>
          <md-input v-model="model.senha" type="password"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>

export default {
  props: ["model"]
}
</script>
