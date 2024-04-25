<template>
    <div class="dashboard">
        <h1 class="text-subtitle-2 grey--text pa-3">Lista de usuários</h1>

        <v-container class="my-5">

            <v-layout row class="mb-3">
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn small text color="grey" @click="sortBy('cliente')" v-on="on">
                            <v-icon left small>mdi-account</v-icon>
                            <span class="caption text-uppercase">Nome usuário</span>
                        </v-btn>
                    </template>
                    <span>Filtre usuários pelo nome</span>
                </v-tooltip>

            </v-layout>

            <v-card class="pa-3 mb-1" v-for="ordem in ordens" :key="ordem.titulo">
                <v-layout row wrap :class="'pa-3 ordem ' + ordem.status">
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Nome do usuário</div>
                        <div>{{ ordem.titulo }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Nivel de acesso</div>
                        <div>{{ ordem.cliente }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Data de criação</div>
                        <div>{{ ordem.data }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2 class="d-flex justify-center align-center">
                        <div class="text-center mt-2 mr-2">
                            <EditarComp />
                        </div>
                        <div class="text-center mt-2">
                            <v-btn>
                                <v-icon>mdi-account-off-outline</v-icon>
                            </v-btn>
                        </div>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>

    </div>
</template>
  
<script>
import EditarComp from "@/components/EditarComp.vue"
export default {
    name: 'listaView',
    data() {
        return {
            ordens: [
                { titulo: 'PC aquecedor', cliente: 'Fulano de tal', data: '10 Jan 2023', status: 'pronto', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
                { titulo: 'PC da xuxa', cliente: 'Teste testando', data: '10 Jan 2023', status: 'pendente', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
                { titulo: 'PC com luzinha', cliente: 'Beltrano', data: '20 Dez 2023', status: 'pronto', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
                { titulo: 'PC com gargalo', cliente: 'Ciclano', data: '20 Out 2023', status: 'produzindo', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' }
            ]
        }
    },
    methods: {
        sortBy(prop) {
            this.ordens.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
        }
    },
    components: {
        EditarComp
    }
}
</script>