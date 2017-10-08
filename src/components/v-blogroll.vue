<template>
  <div class="blogroll-wrapper">
    <h2 class="blogroll__title">Blogroll</h2>
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
@import "@material/typography/mixins";

.blogroll-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 16px;
  max-width: 100%;
}
.blogroll__title {
  @include mdc-typography(display2);
  margin: 3rem 0 calc(2rem - 16px) 0;
}
.blogroll {
  background-color: $color-card-background;
  margin: 16px 0;
  max-width: calc(100% - 32px);

  @media(min-width: 700px) {
    margin: 16px;
    width: 700px;
  }
}
</style>
