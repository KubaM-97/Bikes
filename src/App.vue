<template>
  <v-app>
    
    <header>
    </header>
    <!-- <v-app-bar app color="primary" dark> -->
      <Navbar />
      <!-- <div class="d-flex align-center">

        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition"
          width="40"/>

        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100"/>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    <!-- </v-app-bar> -->

    <v-main class="light-blue lighten-4">
      <router-view />
    </v-main>
    
    <Footer />
    
  </v-app>
</template>

<script>
import Navbar from './views/Navbar';
import Footer from './views/Footer';

export default {
  name: 'App',

  components: {
    Navbar, Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
header{
  height: 110px;
  max-height: 15%;
  background-image: url(./assets/logo.jpg);
  background-position: 0 100%;
  background-size: cover;
}
</style>