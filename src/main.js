/* eslint-disable no-unused-vars */

import Vue from 'vue';
import VueI18n from 'vue-i18n';

import baseStyle from './assets/style/base.scss';

import App from './App';
import vHome from './components/v-home';

const marked = require('marked');

Vue.use(VueI18n);

Vue.mixin({
  methods: {
    marked(input) {
      return marked(input);
    },
  },
});

Vue.config.debug = true;

const messages = {
  en: {
    message: {
      hello: 'Hello World',
    },
  },
  sv: {
    message: {
      hello: 'Hej världen',
    },
  },
};

let initialLocale = 'sv';
if (window.location.hash === '#en') {
  initialLocale = 'en';
}

const i18n = new VueI18n({
  locale: initialLocale,
  messages,
});

/* eslint-disable no-new, no-unused-vars */
const app = new Vue({
  i18n,
  components: { App },
  render(h) {
    return h('app', {}, {});
  },
});

document.addEventListener('DOMContentLoaded', function render() {
  app.$mount('#app');
});
