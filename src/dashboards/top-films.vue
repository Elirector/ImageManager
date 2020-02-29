<template>

    <movie-short/>
</template>

<script>
 import MovieShort from "../components/movie-short";

 export default {
     name: "top-films",
     components: {
         MovieShort
     },
     data() {
         return {
             text: "Loading",
             items: []

         }
     }



 }
</script>

<style scoped>

</style>