<template>
    <v-footer color="blue accent-4" padless>
    
    <v-row justify="center" no-gutters>

      <v-btn v-for="footerLink in footerLinks" :key="footerLink.content" color="white" text rounded class="my-2">
        {{ footerLink.content }}
      </v-btn>

      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>

    </v-row>
  </v-footer>
</template>

<script>
export default {
    data: () => ({
        footerLinks:[
            { content: "Home"},
            { content: "Bikes"},
            { content: "Accessories"},
            { content: "About Us"},
            { content: "Privacy Policy"},
            { content: "Career"},
            { content: "Contact"}
        ]
    })
    
}
</script>