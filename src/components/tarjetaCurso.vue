<template>
  <v-container> 
        <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          width="400px"
          :src="image"
        >
        </v-img>

        <v-card-subtitle class="pb-0"> Number {{ id }} </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="goToDetails" color="orange" text>
            Ver detalle del curso
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-container>
</template>

<script>

export default {
  name: "tarjetaCurso",

  props: ["id", "image"],

  methods: {
    goToDetails() {
      this.$router.push("/info");
    },
  },
};
</script>

<style></style>
