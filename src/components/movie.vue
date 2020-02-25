<template>
    <div class="movie">
        <div v-for="item in items" :key="item.id">
            <md-card class="md-primary block">
                <md-card-header>
                    <md-card-header-text>
                        <div class="md-title">{{item.title}}</div>
                        <div class="md-subhead">{{item.tagline}}</div>
                    </md-card-header-text>


                </md-card-header>
                <md-card-content>
                    <div class="md-card-content">
                        <div>Votes: {{item.vote_average}}</div>
                    </div>
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Movie",
       data(){
            return {
                params: {ID: this.$store.getters.getID}
            };
       },
        computed:{
            items() {
                return this.$store.getters.getMovie
            },
            config() {
              return this.$store.getters.getConfig
            }
        },
        created: async function() {
            const { params } = this;
            await this.$store.dispatch('getMovie', params)
        },
        methods: {
            //TODO: разобраться как из списка получить ID фильма
            /*setId: function(event) {

                this.params.ID = event.target.value;
            },*/
            getMovie: async function() {
                const {params} = this;
                await this.$store.dispatch("getMovie", params);
            }
        }

    };
</script>

<style scoped>
    @import url("./style.css");

</style>