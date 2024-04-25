<template>
    <div class="mt-4">
      <v-card>
        <v-card-title>
          Cadastrar Usuário
        </v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field label="Primeiro Nome" v-model="primeiro_nome" prepend-icon="mdi-alphabetical"></v-text-field>
            <v-text-field label="Último Nome" v-model="ultimo_nome" prepend-icon="mdi-alphabetical"></v-text-field>
            <v-text-field label="Email" v-model="email" prepend-icon="mdi-email"></v-text-field>
            <v-text-field label="Senha" v-model="senha" prepend-icon="mdi-lock" type="password"></v-text-field>
            <v-select label="Nível de Acesso" v-model="nivel_acesso" :items="['Usuário', 'Administrador']" prepend-icon="mdi-account-key"></v-select>
            <div class="text-right">
              <v-btn class="mx-0 mt-3 mr-2" @click="limparCampos">Limpar</v-btn>
              <v-btn class="mx-0 mt-3" @click="submit">Cadastrar</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    name: "cadastroView",
    data() {
      return {
        primeiro_nome: "",
        ultimo_nome: "",
        email: "",
        senha: "",
        nivel_acesso: "",
        active: true
      }
    },
    methods: {
      submit() {
        alert("Usuário cadastrado!")
      },
      limparCampos() {
        this.primeiro_nome = "";
        this.ultimo_nome = "";
        this.email = "";
        this.senha = "";
        this.nivel_acesso = "";
      }
    }
  }
  </script>  