<template>
  <div class="site-content home">
    <v-hero></v-hero>
    <v-contact-card></v-contact-card>
    <section class="teaser">
      <p>Thanks to my love for creating things I become a developer, hacking away at my own projects. It took me through university where I studied computer science, UX, business development and worked on the side. I began working at the marketing department at a startup (Klarna) with everything from backend development to recruitment campaigns. But a longing for the mountains and winter made my wife and I move 560 km NW where I began consulting for an advertising agency. After a few years I moved on to another company where I first started out as a frontend dev but then became a product owner instead. I have picked up some useful things about e-commerce, fintech, media, lean, ad agencies, consulting firms and it's customers along the&nbsp;way.</p>
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
