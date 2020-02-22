<template>
    <div class="movie">
        <div v-for="item in items" :key="item.id">
            <md-card>
                <md-card-header>
                    <md-card-header-text>item.title</md-card-header-text>
                </md-card-header>
            </md-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Movie",
        props: {
            items: Array
        }
    }
</script>

<style scoped>

</style>