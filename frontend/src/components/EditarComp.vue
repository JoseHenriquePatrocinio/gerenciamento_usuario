<template>
    <div>
      <v-dialog v-model="dialogVisible" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            Editar usuários
          </v-card-title>
          <v-card-text>
            <v-form class="px-3" ref="form">
              <v-text-field label="Primeiro Nome" v-model="primeiro_nome" prepend-icon="mdi-alphabetical"></v-text-field>
              <v-text-field label="Último Nome" v-model="ultimo_nome" prepend-icon="mdi-alphabetical"></v-text-field>
              <v-text-field label="Email" v-model="email" prepend-icon="mdi-email"></v-text-field>
              <v-text-field label="Senha" v-model="senha" prepend-icon="mdi-lock" type="password"></v-text-field>
              <v-select label="Nível de Acesso" v-model="nivel_acesso" :items="['Usuário', 'Administrador']" prepend-icon="mdi-account-key"></v-select>
  
              <div class="text-right">
                <v-btn class="mx-0 mt-3 mr-2" @click="submit">Cancelar</v-btn>
                <v-btn class="mx-0 mt-3" @click="cancel">Salvar</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  export default {
    name: "EditarComp",
    data() {
      return {
        primeiro_nome: "",
        ultimo_nome: "",
        email: "",
        senha: "",
        nivel_acesso: "",
        active: true,
        dialogVisible: false
      }
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          console.log(this.primeiro_nome, this.ultimo_nome, this.email, this.senha, this.nivel_acesso, this.due);
          this.dialogVisible = false;
        }
      },
      cancel() {
        this.dialogVisible = false;
      }
    }
  }
  </script>
  