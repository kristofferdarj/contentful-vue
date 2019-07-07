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
            'Once upon a time, there was a young man who was interested in technology and started to create websites. He wanted to get better and went to the university, where he studied programming, psychology, and technology-based business development. 📚 ' +
            'To get closer to reality, he started his own company and helped real customers. 💻 ' +
            'Since then, the young man has worked at a startup, a digital agency, a media house and as an IT consultant. In countless industries where companies needed assistance. As a developer, interaction designer, marketer, project manager, and seller. ☎️ ' +
            'Today he helps companies with the complete picture. Technology, interaction, business, employee skill development, and marketing. Sometimes he is operational, sometimes strategic and sometimes a link between those who need to be connected.',
        },
      },
      sv: {
        home: {
          description:
            'Det var en gång en ung man som intresserade sig för teknik och började skapa hemsidor. Han ville bli bättre och sökte sig till universitetet, där han studerade programmering, psykologi och teknikbaserad affärsutveckling. 📚' +
            'För att komma närmare verkligheten startade han eget och hjälpte riktiga kunder. 💻 ' +
            'Därefter har den unge mannen jobbat på en startup, en byrå, ett mediehus och som it-konsult. Inom otaliga branscher där företag behövt assistans. Som utvecklare, interaktionsdesigner, marknadsförare, projektledare och säljare. ☎️ ' +
            'Idag hjälper han företag med helheten. Teknik, interaktion, affär, kompetensutveckling och marknadsföring. Ibland är han operativ, ibland strategisk och ibland en länk mellan de som behöver kopplas ihop.',
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
