<template>
    <nav>
        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">User</span>
                <span>Management</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn text color="grey" v-bind="attrs" v-on="on">
                        <v-icon left>mdi-ListBox-all</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text color="grey" @click="redirect">
                <span>Sair</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="primary">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-2.png">
                    </v-avatar>
                    <p class="white--text subheading mt-1 text-center">
                        Administrador
                    </p>
                </v-flex>

            </v-layout>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>

<script>
export default {
    name: "NavbarComp",
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'mdi-home', text: 'Home', route: '/home' },
                { icon: 'mdi-list-box', text: 'Lista de usuários', route: '/listar' },
                { icon: 'mdi-account-multiple', text: 'Cadastrar usuários', route: '/cadastrar' },
            ]
        }
    },
    methods: {
        redirect() {
            this.$router.push('/login');
            window.location.reload();
        },
    }
}
</script>