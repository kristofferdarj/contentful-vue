<template>
  <div class="site-content home">
    <v-hero></v-hero>
    <v-contact-card></v-contact-card>
    <section class="teaser">
      <p v-html="$t('home.description')"></p>
    </section>
    <v-highlights></v-highlights>
    <v-recommendations></v-recommendations>
  </div>
</template>

<script>
import vHero from './v-hero';
import vContactCard from './v-contact-card';
import vHighlights from './v-highlights';
import vRecommendations from './v-recommendations';

export default {
  name: 'vHome',
  components: {
    'v-hero': vHero,
    'v-contact-card': vContactCard,
    'v-highlights': vHighlights,
    'v-recommendations': vRecommendations,
  },
  i18n: {
    messages: {
      en: { home: { description: 'The willingness to learn, create and change made it easy to choose education and a given to start working in parallel. That drive also makes me unable to sit still when things move slowly. I’ve made a thousand and one mistakes, learned and done better. Nowadays I work as a consultant helping companies to dare question and change old truths to improve their business.' } },
      sv: { home: { description: 'Viljan att lära mig, skapa och förändra gjorde det lätt att välja utbildning och givet att börja jobba parallellt. Den drivkraften gör också att jag inte kan sitta still när det går för sakta. Jag har gjort tusen och ett misstag, lärt mig och gjort bättre. Nu jobbar jag som konsult och hjälper företag att våga ifrågasätta och förändra gamla sanningar för att utveckla verksamheten.' } },
    },
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
