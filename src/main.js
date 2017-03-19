// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import Blogroll from './components/Blogroll';

require('./assets/style/base.scss');

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { path: '/blogroll', component: Blogroll },
  { path: '*', redirect: '/blogroll' }, //All invalid routes will redirect here
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.config.debug = true;

/* eslint-disable no-new, no-unused-vars */
const app = new Vue({
  router,
  el: '#app',
  render: h => h(App),
});
