<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-for="course in courses" :key="course.id">
        <tarjeta-curso :id="course.id" :name="course.name"  :image="course.image" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import tarjetaCurso from "../components/tarjetaCurso.vue";

export default {
  name: "listCourses",
  components: {
    tarjetaCurso,
  },

  data() {
    return {
      courses: [{
          id: 1,
          name: "Guitarra",
          image: "https://www.el-atril.com/orquesta/Instrumentos/imagenes/guitarra.jpg"
  
      },{
          id: 2,
          name: "Violin",
          image: "https://static3.depositphotos.com/1000348/225/i/600/depositphotos_2252841-stock-photo-violin-isolate.jpg"
      },{
          id: 3,
          name: "Saxofon",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Yamaha_Saxophone_YTS-62.tif/lossy-page1-245px-Yamaha_Saxophone_YTS-62.tif.jpg"
      },{
          id: 4,
          name: "Bateria",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg"
      },{
          id: 5,
          name: "Violin",
          image: "https://static3.depositphotos.com/1000348/225/i/600/depositphotos_2252841-stock-photo-violin-isolate.jpg"
      },{
          id: 6,
          name: "Trompeta",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOGj2CnWyqHm0uxJOhtoVNa1_CLKCpluaCA&usqp=CAU"
      }],
    };
  },
};
</script>

<style></style>
