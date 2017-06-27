<template>
  <div>
    <nav class="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall" data-mdc-auto-init="MDCIconToggle">
      <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
          <a href="#" class="material-icons mdc-toolbar__icon--menu">menu</a>
          <router-link to="/blogroll" class="mdc-toolbar__title">Kristoffer Darj</router-link>
        </section>
      </div>
    </nav>
    <router-view class="mdc-toolbar-fixed-adjust"></router-view>
  </div>
</template>

<script>
import * as mdc from 'material-components-web';

export default {
  name: 'app',
  mounted() {
    mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
  },
};
</script>
