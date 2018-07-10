<template>
  <div class="content-container">
    <nav class="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall" data-mdc-auto-init="MDCIconToggle">
      <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
          <a href="#home" class="mdc-toolbar__title">{{ $t('menu.home') }}</a>
        </section>
        <section class="mdc-toolbar__section mdc-toolbar__section--align-end">
          <v-locale-changer></v-locale-changer>
        </section>
      </div>
    </nav>
    <v-home id="home"></v-home>
    <div class="filler"></div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import { toolbar as mdcToolbar } from 'material-components-web';

import vHome from './components/v-home';
import vLocaleChanger from './components/v-locale-changer';
import vFooter from './components/v-footer';

const { MDCToolbar, MDCToolbarFoundation } = mdcToolbar;

export default {
  name: 'app',
  components: {
    'v-home': vHome,
    'v-footer': vFooter,
    'v-locale-changer': vLocaleChanger,
  },
  i18n: {
    messages: {
      en: {
        menu: {
          home: 'Home',
        },
      },
      sv: {
        menu: {
          home: 'Hem',
        },
      },
    },
  },
  mounted() {
    MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
  },
};
</script>
<style lang="scss">
@import "@material/toolbar/mdc-toolbar";

.content-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.filler {
  display: flex;
  flex-grow: 1;
}
.mdc-toolbar {
  background-color: $color-toolbar-background;
  color: $color-light-text;
  z-index: 3;
}
.mdc-toolbar__title {
  color: #FFF;
  text-decoration: none;
}
</style>
