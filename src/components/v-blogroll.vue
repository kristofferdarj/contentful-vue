<template>
  <div class="mdc-card blogroll">
    <div class="mdc-list mdc-list--avatar-list mdc-list--three-line">
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
  </div>
</template>

<script>
import store from '../store';
import dateMixin from '../mixins/dateMixin';

import vBlogrollEntry from './v-blogroll-entry';

export default {
  name: 'vBlogRoll',
  components: {
    'v-blogroll-entry': vBlogrollEntry,
  },
  data() {
    return {
      shared: store,
    };
  },
  created() {
    store.getPosts();
  },
  mixins: [dateMixin],
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
