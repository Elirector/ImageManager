<template>
    <movie :items="items"/>
</template>

<script>
    import Movie from "../components/movie";
    import getFilm from '../__data__/actions/get-film'

    export default {
        name: "film",
        components: {
            Movie
        },
        data() {
            return {
                text: "Loading",
                id: 550,
                items: []

            }
        },
        created: function () {
            getFilm(this.id).then((res) => this.items = res)
        }


    }
</script>

<style scoped>

</style>