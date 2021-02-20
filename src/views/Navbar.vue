<template>
<div>
  
    <v-app-bar  color="blue accent-4" dense dark>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" text></v-app-bar-nav-icon>

      <v-toolbar-title class="ml-4">

        <h2>beCycle</h2>

      </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-list dense class="d-none d-md-flex text-center py-0"  width="60%">
          <v-list-item v-for="link in links" :key="link.route" link router :to="link.route" class="blue accent-4 white--text" dark>

              <v-list-item-content>
              <v-list-item-title>{{ link.content }}</v-list-item-title>
              </v-list-item-content>

          </v-list-item>
      </v-list>

      <v-spacer></v-spacer>

      <div class="d-none d-sm-block nav_buttons">

        <v-btn text><span>Register</span></v-btn>

        <v-btn text><span>Sign In</span></v-btn>

        <v-btn icon><v-icon>mdi-cart</v-icon></v-btn>
        
      </div>
      

      <v-menu offset-y bottom>

        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="extraOption in extraOptions" :key="extraOption.settings">
            <v-list-item-title class="text-capitalize">
              <v-icon aria-hidden="false">{{extraOption.icon}}</v-icon>
              {{ extraOption.option }}
            </v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app absolute temporary class="light-blue darken-3" dark>
      
      <h2 class="text-center">beCycle</h2>
      
      <v-divider></v-divider>

      <v-list dense class="d-flex flex-wrap text-center">
        <v-list-item v-for="link in links" :key="link.route" link router :to="link.route">

            <v-list-item-content>
            <v-list-item-title>{{ link.content }}</v-list-item-title>
            </v-list-item-content>

        </v-list-item>
      </v-list>

    </v-navigation-drawer>

  </div>
    
</template>

<script>
import NavbarList from "./NavbarList"
export default {
  name: 'Navbar',
  components: {"navbar-list": NavbarList},
  data: () => ({
    links:[
      { content: "Home", route: "/"},
      { content: "Bikes", route: "/Bikes"},
      { content: "Accessories", route: "/Accessories"},
      { content: "Contact", route: "/contact"}
    ],
    extraOptions: [
      { icon: "settings", option: "settings" },
      { icon: "mdi-translate", option: "translate" },
      { icon: "contact_support", option: "get help" },
      { icon: "chat_bubble_outline", option: "live chat" }
    ],
    drawer: false
  }),
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Niconne&display=swap');
  h2{
    font-family: 'Niconne', cursive;
  }
</style>
