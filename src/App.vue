<template>
  <div>
    <nav class="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall" data-mdc-auto-init="MDCIconToggle">
      <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
          <router-link to="/" class="mdc-toolbar__title">Home</router-link>
        </section>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { toolbar as mdcToolbar } from 'material-components-web';

const { MDCToolbar, MDCToolbarFoundation } = mdcToolbar;

export default {
  name: 'app',
  mounted() {
    MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
  },
};
</script>
<style lang="scss" scoped>
@import './assets/style/colors.scss';

.mdc-toolbar {
  background-color: $color-toolbar-background;
  color: $color-light-text;
  z-index: 2;
}
.mdc-toolbar__title {
  color: #FFF;
  text-decoration: none;
}
</style>
