/* eslint-disable no-unused-vars */

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import vHome from './components/v-home';
import vBlogRoll from './components/v-blogroll';
import vBlogEntry from './components/v-blog-entry';

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
  { path: '/', component: vHome },
  { path: '/blogroll', component: vBlogRoll },
  { path: '/entry/:id', component: vBlogEntry },
  { path: '*', redirect: '/' }, //All invalid routes will redirect here
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

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
