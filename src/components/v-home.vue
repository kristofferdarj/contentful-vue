<template>
  <div class="site-content home">
    <v-hero></v-hero>
    <v-contact-card></v-contact-card>
    <div class="teaser">
      <p>I've worked in a number of companies, from startups to large coorporations. E-commerce, finance, media, ad agencies and consulting firms. I studied UX and have been doing anything from personas and user interviews to drawing UI:s in Sketch, as well as implementing them in front and backend.</p>
      <p>I pore over reading about business development, agile, lean, company culture and sales. I'm currently employed as a product owner meaning I do a lot of UX, prioritising and working with product visions and roadmaps.</p>
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
