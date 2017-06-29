<template>
  <div>
    <nav class="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall" data-mdc-auto-init="MDCIconToggle">
      <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
          <router-link to="/blogroll" class="mdc-toolbar__title">Kristoffer Darj</router-link>
        </section>
      </div>
    </nav>
    <router-view class="mdc-toolbar-fixed-adjust"></router-view>
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
<style scoped>
.mdc-toolbar {
  background-color: #263238;
  color: #FFF;
}
.mdc-toolbar__title {
  color: #FFF;
  text-decoration: none;
}
</style>
