<template>
<div>     

    

        <v-list-item v-for="link in links" :key="link.route" link router :to="link.route">

            <v-list-item-content>
            <v-list-item-title>{{ link.content }}</v-list-item-title>
            </v-list-item-content>

        </v-list-item>
    

  </div>
    
</template>

<script>

export default {
  name: 'Navbar_list',
  data: () => ({
    links:[
      { content: "Home", route: "/"},
      { content: "Bikes", route: "/Bikes"},
      { content: "Accessories", route: "/Accessories"},
      { content: "Contact", route: "/contact"}
    ],
  }),
};
</script>

