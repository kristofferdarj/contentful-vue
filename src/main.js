// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import Hello from './components/Hello';

Vue.use(VueResource);
Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/hello', component: Hello },
];

const router = new VueRouter({
  routes,
});

Vue.config.debug = true;

/* eslint-disable no-new, no-unused-vars */
const app = new Vue({
  router,
  components: { App },
}).$mount('#app');
