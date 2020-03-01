<template>
    <movie/>
</template>

<script>
    import Movie from "../components/movie.vue";


    export default {
        name: "film",
        components: {
            Movie
        },
        data() {
            return {
                text: "Loading",
                items: []

            }
        }



    }
</script>

