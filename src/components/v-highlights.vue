<template>
  <div class="mdc-card highlights">
    <v-blogroll-entry
      v-for="entry in shared.state.entries.items"
      :key="entry.sys.id"
      :id="entry.sys.id"
      :title="entry.fields.title"
      :description="(entry.fields.shortDescription.length <= 80 ? entry.fields.shortDescription : entry.fields.shortDescription.substring(0,80)+'...')"
      :createdAt="entry.sys.createdAt"
      :updatedAt="entry.sys.updatedAt"
      :featuredImage="entry.fields.featuredImage ? entry.fields.featuredImage.fields.file.url : null"></v-blogroll-entry>
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
//    store.getFeatured();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/style/colors.scss';

.blogroll {
  background-color: $color-card-background;
  margin: 16px 0;
  max-width: 100%;

  @media(min-width: 700px) {
    margin: 16px;
    width: 700px;
  }
}
</style>
