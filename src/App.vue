<template>
  <v-app>
    <v-app-bar
      app
      color="accent"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt=""
          class="shrink mr-2"
          contain
          src="https://svgsilh.com/svg/3309171.svg"
          transition="scale-transition"
          width="130"
        />
       <span class="bar__title"  @click="goHome"><strong>LIVE CODING</strong></span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        @click="signOut"
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Cerrar Sesión</span>
        <v-icon>mdi-lock-open</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
   <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
 
  },

  data: () => ({
    //
  }),
  methods:{
    goHome(){
      this.$router.push("/")
    },
    signOut(){
      this.$router.push("/")
    }
  }
};
</script>

<style scoped>
.bar__title{
  cursor: pointer;
}

</style>
