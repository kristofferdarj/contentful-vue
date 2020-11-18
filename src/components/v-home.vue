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
      en: {
        home: {
          description:
            'Welcome! My specialty is being a generalist. That means I can with a good conscience call myself a developer, UX-person, marketer, and entrepreneur. ' +
            'Since 2006 I\'ve worked as a consultant, at a bureau, within a startup and large companies. I\'ve moved between the media industry, finance, and tech. ' +
            'I\'ve had roles such as frontend developer, project manager, and seller. Today my primary focus is developing Currics, the educational company I co-founded.',
        },
      },
      sv: {
        home: {
          description:
            'Välkommen hit! Min specialité är att vara generalist. Det gör att jag med gott samvete kan kalla mig utvecklare, UXare, marknadsförare och entreprenör. ' +
            'Sen 2006 har jag jobbat som konsult, på byrå, på startups och stora företag. Jag har rört mig mellan mediebranschen, finansbranschen och it-branschen. ' +
            'Jag har haft roller som frontendutvecklare, marknadsförare, projektledare och säljare. Idag ligger fokus på att utveckla Currics, det utbildningsföretag jag startat.',
        },
      },
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
