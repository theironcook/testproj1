import 'bootstrap';
import './sass/main.scss';
import 'popper.js';
import Vue from 'vue';
import App2 from './App2.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: handler => handler(App2)
}).$mount('#app')
