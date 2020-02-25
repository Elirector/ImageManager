<template>
    <div class="movie">
        <div v-for="item in items" :key="item.id">
            <md-card class="md-primary block">
                <md-card-header>
                    <md-card-header-text>
                        <div class="md-title">{{item.title}}</div>

                    </md-card-header-text>
                </md-card-header>
                <md-card-actions>
                    <md-button @click="showDetails(item)" >Details</md-button>
                </md-card-actions>
            </md-card>
        </div>
    </div>
</template>

<script>
    import router from "../router/"

    export default {
        name: "MovieShort",
        data(){
            return {

            };
        },
        computed:{
            items() {
                return this.$store.getters.getTopMovies
            },
            config() {
                return this.$store.getters.getConfig
            }
        },
        created: async function() {
            await this.$store.dispatch('getTopMovies')
        },
        methods: {

            getTopMovies: async function() {
                await this.$store.dispatch("getTopMovies");
            },

            showDetails: async function(item) {
                this.$store.commit("setId", item.id);
                router.push("film");


            }
        }

    };
</script>

<style scoped>

</style>