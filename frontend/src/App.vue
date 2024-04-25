<template>
  <v-app>
    <NavbarComp />
    
    <v-main class="mx-4 mb-4">
      <router-view />
    </v-main>
    
    <FooterComp />
  </v-app>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'
export default {
  name: 'App',
  components: {
    NavbarComp,
    FooterComp
  },
  data: () => ({

  }),
};
</script>
