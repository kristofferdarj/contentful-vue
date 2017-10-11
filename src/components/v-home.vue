<template>
  <div class="site-content home">
    <v-hero></v-hero>
    <v-contact-card></v-contact-card>
    <section class="teaser">
      <p>I'm a happy chap that loves everything about web and business development. I have worked at a number of places, ranging from startups to large coorporations and picked up some useful things about e-commerce, fintech, media, lean, ad agencies, consulting firms and it's customers along the way. Have a look around and drop me a&nbsp;line.</p>
    </section>
    <v-highlights></v-highlights>
    <v-blogroll></v-blogroll>
  </div>
</template>

<script>
import vHero from './v-hero';
import vContactCard from './v-contact-card';
import vHighlights from './v-highlights';
import vBlogRoll from './v-blogroll';

export default {
  name: 'vHome',
  components: {
    'v-hero': vHero,
    'v-contact-card': vContactCard,
    'v-blogroll': vBlogRoll,
    'v-highlights': vHighlights,
  },
};
</script>
<style lang="scss" scoped>
@import "@material/typography/mixins";

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
