
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import Blogroll from './components/Blogroll';

const contentful = require('contentful');
// const util = require('util');

const client = contentful.createClient({
  space: 'xaubqpmk1tze',
  accessToken: 'f35176cd0088d5868218ef8be4c8f312d6472dc7546a015f83dae5df672570e0',
});

require('./assets/style/base.scss');

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { path: '/blogroll', components: { blogroll: Blogroll } },
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
  data: {
    entries: client.getEntries({
      limit: 10,
      order: 'sys.createdAt',
    }),
  },
  methods: {
    created() {
      console.log('hej hopp min pop');
    },
  },
  render: h => h(App),
});
