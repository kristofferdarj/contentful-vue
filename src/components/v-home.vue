<template>
  <div class="site-content home">
    <v-hero></v-hero>
    <v-contact-card></v-contact-card>
    <div class="teaser">
      <p>I'm a happy chap that loves everything about web and business development. I have worked at a number of places, ranging from startups to large coorporations and picked up some useful things about e-commerce, fintech, media, lean, ad agencies, consulting firms and it's customers along the&nbsp;way.</p>
      <p>Have a look around and just ask if you need anything else.</p>
    </div>
  </div>
</template>

<script>
import vHero from './v-hero';
import vContactCard from './v-contact-card';
import vBlogRoll from './v-blogroll';

export default {
  name: 'vHome',
  components: {
    'v-hero': vHero,
    'v-contact-card': vContactCard,
    'v-blogroll': vBlogRoll,
  },
};
</script>
<style lang="scss" scoped>
@import "node_modules/material-components-web/material-components-web.scss";
@import '../assets/style/colors.scss';

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.teaser {
  @include mdc-typography(body1);
  @include mdc-typography-adjust-margin(body1);

  margin: 16px;
  max-width: 700px;
  column-count: auto;
  column-width: 12rem;
  column-gap: 16px;
}
</style>
