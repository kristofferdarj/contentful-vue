<template>
  <div class="highlights-container">
    <h1 class="highlights__title" v-html="$t('highlights.title')"></h1>
    <div class="highlights">
      <v-highlight-item
        v-for="highlight of $t('highlights.blocks')"
        :key="highlight.id"
        :id="highlight.id"
        :title="highlight.title"
        :description="highlight.description"
        :body="highlight.body"
        :featuredImage="highlight.image"></v-highlight-item>
    </div>
  </div>
</template>

<script>
import vHighlightItem from './v-highlight-item';

export default {
  name: 'vHighlights',
  components: {
    'v-highlight-item': vHighlightItem,
  },
  i18n: {
    messages: {
      en: {
        highlights: {
          title: 'Highlights',
          blocks: [
            {
              id: 1,
              image: '/static/highlight_megafone.jpg',
              title: 'Practice what you preach',
              description: 'Consultant, maker of things',
              body: "I run my own company and create stuff, market it and learn from my mistakes. It makes me a manager of one. I don't need specifications or heavy direction to get things done, I figure it out.",
            },
            {
              id: 2,
              image: '/static/highlight_klarna.jpg',
              title: 'Out of the comfort zone',
              description: 'Startup mania',
              body: 'Working at a startup on steroids constantly challenged me to get out of my comfort zone. As the head of web development and the inhouse bureau (at the same time) I did everything between recruiting and diving deep into code. This period will forever shape what I view as possible and doable.',
            },
            {
              id: 3,
              image: '/static/highlight_desk.jpg',
              title: 'UX',
              description: 'Users and prototypes',
              body: 'I started to learn about UX at university and never stopped. If you should do one thing right in your process, this is the one. By finding your users needs and wants, and making sure you are solving a real problem you are far ahead of most competition.',
            },
            {
              id: 4,
              image: '/static/highlight_scooter.jpg',
              title: 'Product owner',
              description: 'Roadmaps and delivery',
              body: 'I was employed as a product owner of a sales tool. Several companies and lots of their customers are using it daily to handle their marketing campaigns. I created the product vision, worked with business development and UX, and led the team. I know agile inside out as a dev, scrum master and product owner. I hold workshops and teach agile as well.',
            },
            {
              id: 5,
              image: '/static/highlight_bubbles.jpg',
              title: 'A link',
              description: 'Tech and business',
              body: 'Tech people and business people rarely speak the same language. Since I know both I make sure everyone understands each other. That the entire team is moving in the same direction is key to success.',
            },
            {
              id: 6,
              image: '/static/highlight_lightbulb.jpg',
              title: 'Constant learning',
              description: 'Try, learn, repeat',
              body: 'I constantly read, watch talks or listen to podcasts. It might be marketing, behavioural science, business or something completely different like city planning. Picking up new stuff quickly is useful in any organisation and vital to companies that are moving quickly.',
            },
          ],
        },
      },
      sv: {
        highlights: {
          title: 'Utvalt',
          blocks: [
            {
              image: '/static/highlight_megafone.jpg',
              title: 'Leva som man lär',
              description: 'Konsult, skapare av saker',
              body: 'Jag driver mitt eget företag, skapar saker, marknadsför dem och lär av mina misstag. Det har gjort mig självgående. Jag behöver inte färdiga specar och strikt styrning för att få saker gjorda, jag löser det.',
            },
            {
              image: '/static/highlight_klarna.jpg',
              title: 'Utanför komfortzonen',
              description: 'Startup mania',
              body: 'Att jobba för en startup på steroider utmanade mig konstant att kliva ut ur komfortzonen. Som ansvarig för webbutvecklingen och inhouse-byrån (samtidigt) gjorde jag allt mellan att rekrytera och djupdyka i kod. Den här tiden kommer för alltid påverka vad jag ser som möjligt och görbart.',
            },
            {
              image: '/static/highlight_desk.jpg',
              title: 'UX',
              description: 'Användare och prototyper',
              body: 'Jag började lära mig UX (interaktionsdesign) på universitetet och sen slutade inlärningen aldrig. Om du ska göra en sak rätt är det den här. Genom att ta reda på vad dina användare behöver och vill ha samtidigt som du säkerställer att du löser ett verkligt problem ligger du före den mesta konkurrensen.',
            },
            {
              image: '/static/highlight_scooter.jpg',
              title: 'Produktägare',
              description: 'Planering and leveranser',
              body: 'Jag har varit anställd som produktägare för ett säljverktyg. Flera företag och en mängd av deras kunder använder det dagligen för att hantera sin marknadsföring. Jag satte produktvisionen, affärsutvecklade, jobbade med interaktionsdesign och ledde teamet. Jag har jobbat agilt som utvecklare, scrum master och produktägare. Jag håller också workshops och föreläser om agil utveckling.',
            },
            {
              image: '/static/highlight_bubbles.jpg',
              title: 'En länk',
              description: 'Teknik och affär',
              body: 'Personer som jobbar med teknik respektive affär talar sällan samma språk. Eftersom jag kan båda delar ser jag till att alla förstår varandra. Att hela teamet drar åt samma håll är en nyckel till framgång ',
            },
            {
              image: '/static/highlight_lightbulb.jpg',
              title: 'Konstant lärande',
              description: 'Testa, lär, repetera',
              body: 'Jag läser konstant, tittar på föreläsningar och lyssnar på poddar. Det kan handla om marknadsföring, beteendevetenskap, eller nånting helt annat som stadsplanering. Att snappa upp nya saker snabbt är användbart i alla organisationer och livsviktigt för företag som rör sig snabbt.',
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

.highlights-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}
.highlights__title {
  @include mdc-typography(display2);
  margin: 3rem 0 2rem 0;
}
.highlights {
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto auto auto;
  margin: 0 16px;
  max-width: 700px;

  @media(min-width: 500px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
  }

  @media(min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
  }

  @media(min-width: 732px) {
    margin: 0;
  }
}
</style>
