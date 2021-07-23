import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/scss/tray.scss';
// router setup
import router from './router/router';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
