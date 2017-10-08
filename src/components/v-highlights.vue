<template>
  <div class="highlights-container">
    <h1 class="highlights__title">Highlights</h1>
    <div class="highlights">
      <v-highlight-item
        v-for="highlight in shared.state.highlights.items"
        :key="highlight.sys.id"
        :id="highlight.sys.id"
        :title="highlight.fields.title"
        :description="(highlight.fields.shortDescription.length <= 80 ? highlight.fields.shortDescription : highlight.fields.shortDescription.substring(0,80)+'...')"
        :createdAt="highlight.sys.createdAt"
        :updatedAt="highlight.sys.updatedAt"
        :featuredImage="highlight.fields.featuredImage ? highlight.fields.featuredImage.fields.file.url : null"></v-highlight-item>
    </div>
  </div>
</template>

<script>
import store from '../store';

import vHighlightItem from './v-highlight-item';

export default {
  name: 'vHighlights',
  components: {
    'v-highlight-item': vHighlightItem,
  },
  data() {
    return {
      shared: store,
    };
  },
  created() {
    store.getHighlights();
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
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 0 16px;
  max-width: 700px;

  @media(min-width: 500px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  @media(min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media(min-width: 732px) {
    margin: 0;
  }
}
</style>
