<template>
    <movie/>
</template>

<script>
    import Movie from "../components/movie";


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

