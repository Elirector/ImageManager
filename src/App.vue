<template>
    <div id="app">
        <md-app md-waterfall md-mode="fixed-last">
            <md-app-toolbar>
                <div class="md-toolbar-row">
                    <div class="md-toolbar-section-start">
                        <span class="md-title">The Movie Database</span>
                    </div>
                </div>

                <div class="md-toolbar-row">
                    <md-tabs>
                        <md-tab id="tab-top" to="/" md-label="Popularity top" exact></md-tab>
                        <md-tab id="tab-film" to="/film" md-label="Film" exact></md-tab>
                    </md-tabs>
                </div>
            </md-app-toolbar>
            <md-app-content>
                <router-view/>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    export default {
        name: 'app',
        contents: {},
        created: async function() {
            console.log("beforeMount");
            await this.$store.dispatch("getConfig");
        }
    }
</script>

