import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './__data__/store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VeeValidate, { Validator } from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru';

Vue.use(VueMaterial);
Validator.localize('ru', ru);
Vue.use(VeeValidate, {
    locale: 'ru'
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
