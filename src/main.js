/* eslint-disable no-unused-vars */

import Vue from 'vue';
import VueRouter from 'vue-router';

import baseStyle from './assets/style/base.scss';

import App from './App';
import vHome from './components/v-home';
import vBlogRoll from './components/v-blogroll';
import vBlogEntry from './components/v-blog-entry';

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
  { path: '*', redirect: '/' },
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
  render(h) {
    return h('app', {}, {});
  },
});

document.addEventListener('DOMContentLoaded', function render() {
  app.$mount('#app');
});
