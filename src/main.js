/* eslint-disable no-unused-vars */

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import Blogroll from './components/v-blogroll';
import BlogEntry from './components/v-blog-entry';

require('./assets/style/base.scss');
const marked = require('marked');

Vue.use(VueRouter);

Vue.mixin({
  methods: {
    marked(input) {
      return marked(input);
    },
  },
});

const routes = [
  { path: '/blogroll', component: Blogroll },
  { path: '/entry/:id', component: BlogEntry },
  { path: '*', redirect: '/blogroll' }, //All invalid routes will redirect here
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

/*
router.afterEach((to, from) => {
  console.log('here again');
  document.addEventListener('DOMContentLoaded', function domThing(event) {
    console.log('loaded only once');
    mdc.autoInit();
  });
});
*/

Vue.config.debug = true;

/* eslint-disable no-new, no-unused-vars */
const app = new Vue({
  components: { App },
  router,
  el: '#app',
  render(h) {
    return h('app', {}, {});
  },
});
