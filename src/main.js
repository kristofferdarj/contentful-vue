// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import Hello from './components/Hello';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/hello',
      component: Hello,
    },
  ],
});

// Vue.config.productionTip = false;

/* eslint-disable no-new, no-unused-vars */
const app = new Vue({
  router,
  components: { App },
}).$mount('#app');
