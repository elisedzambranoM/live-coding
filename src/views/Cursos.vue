<template>
  <v-container>
    <h1 class="d-flex justify-center"><strong>Cursos Disponibles</strong></h1>
    <list-courses/> 
   </v-container>
</template>

<script>
import listCourses from '@/components/listCourses.vue'


export default {
  name: 'Home',
  components: {
    listCourses,
  }
}
</script>