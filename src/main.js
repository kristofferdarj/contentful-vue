import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import store from './store';
import Blogroll from './components/Blogroll';
import Test from './components/Test';

require('./assets/style/base.scss');

Vue.use(VueRouter);

const routes = [
  { path: '/blogroll', component: Blogroll },
  { path: '/test', component: Test },
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
  store,
  el: '#app',
  render: h => h(App),
});
