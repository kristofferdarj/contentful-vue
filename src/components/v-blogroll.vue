<template>
  <div class="site-content mdc-toolbar-fixed-adjust">
    <div class="entries">
      <v-blogroll-entry
        v-for="entry in shared.state.entries.items"
        :key="entry.sys.id"
        :id="entry.sys.id"
        :title="entry.fields.title"
        :description="entry.fields.shortDescription"
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
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
