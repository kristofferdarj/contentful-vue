<template>
  <div class="recommendations-wrapper">
    <h1 class="recommendations__title" v-html="$t('recommendations.title')"></h1>
    <div class="recommendations">
      <v-recommendation-item
        v-for="recommendation of $t('recommendations.blocks')"
        :key="recommendation.id"
        :id="recommendation.id"
        :name="recommendation.name"
        :title="recommendation.title"
        :body="recommendation.body"
        :featuredImage="recommendation.image"></v-recommendation-item>
    </div>
  </div>
</template>

<script>
import vRecommendationItem from './v-recommendation-item';

export default {
  name: 'vRecommendations',
  components: {
    'v-recommendation-item': vRecommendationItem,
  },
  i18n: {
    messages: {
      en: {
        recommendations: {
          title: 'Recommendations',
          blocks: [
            {
              id: 1,
              image: '/static/recommendations_kristina.jpeg',
              name: 'Kristina Magnusson',
              title: 'Business developer Mittmedia',
              body: '(Translated) This is a developer to trust! He challenges, spots brilliant solutions and spreads sweet music in the hallway!!',
            },
            {
              id: 2,
              image: '/static/recommendations_johan.jpeg',
              name: 'Johan Henkow',
              title: 'Digital consultant',
              body: 'Kristoffer is a really smart and driven guy that is really likeable. Not only is he a great webdeveloper but also an excellent leader which he has proven at his current position.<br /><br />Kristoffer has the ability to always stay calm in stressed situations, finding easy solutions for complex problems and at the same time making sure that his employees are happy.<br /><br />Kristoffer is a great colleague aswell as a really nice guy that I would recommend to anyone.',
            },
            {
              id: 3,
              image: '/static/recommendations_fritjof.jpeg',
              name: 'Fritjof Andersson',
              title: 'Founder & CEO at RelationDesk.com',
              body: "Kristoffer is the kind of guy you can send to a brand new client and just have no worries, you know he's going to handle it. In parallel to Kristoffer's MSc studies he was a highly valuable consultant at several web development projects with Redblond's customers, and on top of this he also managed most of the company's books. I highly recommend Kristoffer, he's a very talented developer and highly professional consultant.",
            },
          ],
        },
      },
      sv: {
        recommendations: {
          title: 'Reko&shy;mmen&shy;da&shy;tioner',
          blocks: [
            {
              id: 1,
              image: '/static/recommendations_kristina.jpeg',
              name: 'Kristina Magnusson',
              title: 'Affärsutvecklare Mittmedia',
              body: 'Detta är en utvecklare att lita på! Han utmanar, ser lösningar som är briljanta och är en kollega som sprider ljuv musik i korridoren!!',
            },
            {
              id: 2,
              image: '/static/recommendations_johan.jpeg',
              name: 'Johan Henkow',
              title: 'Digital consultant',
              body: 'Kristoffer is a really smart and driven guy that is really likeable. Not only is he a great webdeveloper but also an excellent leader which he has proven at his current position.<br /><br />Kristoffer has the ability to always stay calm in stressed situations, finding easy solutions for complex problems and at the same time making sure that his employees are happy.<br /><br />Kristoffer is a great colleague aswell as a really nice guy that I would recommend to anyone.',
            },
            {
              id: 3,
              image: '/static/recommendations_fritjof.jpeg',
              name: 'Fritjof Andersson',
              title: 'Founder & CEO at RelationDesk.com',
              body: "Kristoffer is the kind of guy you can send to a brand new client and just have no worries, you know he's going to handle it. In parallel to Kristoffer's MSc studies he was a highly valuable consultant at several web development projects with Redblond's customers, and on top of this he also managed most of the company's books. I highly recommend Kristoffer, he's a very talented developer and highly professional consultant.",
            },
          ],
        },
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@material/typography/mixins";
.recommendations-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 16px;
  max-width: 100%;
}
.recommendations__title {
  @include mdc-typography(display2);
  margin: 3rem 0 2rem 0;
}
.recommendations {
  background-color: $color-card-background;
  margin: 16px 0;
  max-width: calc(100% - 32px);
  @media(min-width: 700px) {
    margin: 16px;
    width: 700px;
  }
}
</style>
