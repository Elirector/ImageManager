<template>
    <div class="movie">
        <div class="filters">
            <md-card>
                <md-card-actions>
                    <md-field>
                        <label for="sort_by">Сортировка</label>
                        <md-select v-model="sort_by" id="sort_by" name="sort_by">
                            <md-option value="popularity.desc">Самые популярные</md-option>
                            <md-option value="popularity.asc">Наименее популярные</md-option>
                            <md-option value="vote_average.desc">Лучшие оценки</md-option>
                            <md-option value="revenue.desc">Лучшие сборы</md-option>
                        </md-select>


                    </md-field>
                    <md-field>
                        <label>Год выпуска: </label>
                        <md-field>
                            <label for="year_from">От</label>
                            <md-input v-model="year_from"></md-input>
                        </md-field>
                        <md-field>
                            <label for="year_to">До</label>
                            <md-input v-model="year_to"></md-input>
                        </md-field>
                    </md-field>
                    <md-button @click="applyParams">Применить</md-button>
                </md-card-actions>
            </md-card>
        </div>
        <div v-for="item in items" :key="item.id">
            <md-card class="md-primary block">
                <md-card-header @click="showDetails(item)">
                    <md-card-header-text>
                        <div class="md-title">{{item.title}}</div>
                        <div class="md-subhead">Release date: {{item.release_date}}</div>

                    </md-card-header-text>
                </md-card-header>
                <md-card-actions>
                    <md-button @click="showDetails(item)">Details</md-button>
                </md-card-actions>
            </md-card>
        </div>
    </div>
</template>

<script>
    import router from "../router/"

    export default {
        name: "MovieShort",
        data() {
            return {
                sort_by: "popularity.desc",
                year_from: null,
                year_to: null
            };
        },
        computed: {
            items() {
                return this.$store.getters.getTopMovies
            },
            config() {
                return this.$store.getters.getConfig
            }
        },
        created: async function () {
            const {sort_by, year_from, year_to} = this;
            await this.$store.dispatch('getTopMovies', {sort_by, year_from, year_to})
        },
        methods: {

            applyParams: async function () {
                /*this.$validator.validate().then(valid => {
                        if (valid) {*/
                            const {sort_by, year_from, year_to} = this;
                         await this.$store.dispatch("getTopMovies", {sort_by, year_from, year_to});
                        /*}
                    }
                );*/
            },

            showDetails: async function (item) {
                this.$store.commit("setId", item.id);
                router.push("film");


            }
        }

    };
</script>

<style scoped>
    @import url("./style.css");
</style>