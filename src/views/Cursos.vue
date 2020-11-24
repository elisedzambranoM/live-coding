<template>
  <div>
    <list-courses/> 
   </div>
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