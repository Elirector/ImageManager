<template>
    <movie :items="items"/>
</template>

<script>
    import Movie from "../components/movie";
    import getTopFilms from '../__data__/actions/get-top-films'

    export default {
        name: "top-films",
        components: {
            Movie
        },
        data() {
            return {
                text: "Loading",
                items: []

            }
        },
        created: function () {
            getTopFilms().then((res) => this.items = res)
        }


    }
</script>

<style scoped>

</style>