<template>
  <div class="content-container">
    <nav class="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall" data-mdc-auto-init="MDCIconToggle">
      <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
          <router-link to="/" class="mdc-toolbar__title">Home</router-link>
        </section>
      </div>
    </nav>
    <router-view></router-view>
    <div class="filler"></div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import { toolbar as mdcToolbar } from 'material-components-web';

import vFooter from './components/v-footer';

const { MDCToolbar, MDCToolbarFoundation } = mdcToolbar;

export default {
  name: 'app',
  components: {
    'v-footer': vFooter,
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
