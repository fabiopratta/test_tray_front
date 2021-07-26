import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueResource from 'vue-resource'
import router from './router/router';
import Axios from 'axios';
import VueGoodTablePlugin from 'vue-good-table';
import VueSweetalert2 from 'vue-sweetalert2';
import VueTheMask from 'vue-the-mask'

import 'vue-good-table/dist/vue-good-table.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/scss/tray.scss';
import 'sweetalert2/dist/sweetalert2.min.css';


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueResource);
Vue.use(VueGoodTablePlugin);
Vue.use(VueSweetalert2);
Vue.use(VueTheMask)

Vue.config.productionTip = false

Axios.defaults.baseURL = "http://127.0.0.1:8000/api/"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
