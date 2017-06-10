/* eslint-disable no-unused-vars */

import Vue from 'vue';
import VueRouter from 'vue-router';
import * as mdc from 'material-components-web';

import App from './App';
import Blogroll from './components/Blogroll';
import BlogEntry from './components/BlogEntry';

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
