<template>
  <div class="site-content home">
    <v-hero></v-hero>
    <v-contact-card></v-contact-card>
    <section class="teaser">
      <p>Thanks to this love for technology I became a developer, hacking away at my own projects. It took me through university where I studied computer science and developed an interest in UX and business development, while working odd hours as a developer. I then joined the marketing department at a startup (Klarna) where I got to do everything from backend development to recruitment. But eventually a longing for the mountains and real winter made my wife and I move 560 km NW where I began consulting for an advertising agency instead. After a few years I moved on to another company where I now work as product owner and with education of the sales force.</p>
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
