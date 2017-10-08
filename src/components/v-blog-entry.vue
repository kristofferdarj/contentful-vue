<template>
  <div class="content site-content mdc-toolbar-fixed-adjust">
    <div id="primary" class="content-area">
      <main id="main" class="site-main" role="main">
        <article class="mdc-card mdc-card--entry">
          <header class="entry__header">
            <img class="entry__image" v-if="shared.entry && shared.entry.fields && shared.entry.fields.featuredImage" :src="'https:'+ shared.entry.fields.featuredImage.fields.file.url +'?fit=fill&w=700&h=300&fm=jpg&fl=progressive'">
            <div class="entry__dates">
              <time v-if="shared.entry && shared.entry.sys && shared.entry.sys.createdAt" class="entry__published" datetime="">Publicerat: {{ formatDate(shared.entry.sys.createdAt) }}</time>
              <time v-if="shared.entry && shared.entry.sys && shared.entry.sys.updatedAt" class="entry__updated" datetime="">{{ formatDate(shared.entry.sys.updatedAt) }}</time>
            </div>
            <h1 v-if="shared.entry && shared.entry.fields && shared.entry.fields.title" class="mdc-typography--headline mdc-typography--adjust-margin entry__title">{{ shared.entry.fields.title }}</h1>
          </header>
          <div v-if="shared.entry && shared.entry.fields && shared.entry.fields.body" class="entry-content" v-html="marked(shared.entry.fields.body)"></div>
          <footer class="entry__footer">
            <v-entry-author></v-entry-author>
          </footer>
        </article>
      </main>
    </div>
  </div>
</template>

<script>
import store from '../store';
import dateMixin from '../mixins/dateMixin';
import vEntryAuthor from './v-entry-author';

export default {
  name: 'vBlogEntry',
  components: {
    'v-entry-author': vEntryAuthor,
  },
  data() {
    return {
      shared: store.state,
    };
  },
  created() {
    store.getPost(this.$route.params.id);
  },
  mixins: [dateMixin],
};
</script>

<style lang="scss">
@import "@material/typography/mixins";

// Entry
.mdc-card--entry {
  background-color: $color-card-background;
  padding: 16px;
  max-width: 700px;

  h3 {
    @include mdc-typography(subheading2);
    @include mdc-typography-adjust-margin(subheading2);
    color: $color-dark-text;
  }

  p {
    @include mdc-typography(body1);
    @include mdc-typography-adjust-margin(body1);
    color: $color-dark-text;
    max-width: 33em;
  }
  p + h3{
    margin-top: 2rem;
  }
}
.entry__title {
  color: $color-dark-text;
}
.entry__image {
  max-width: 100%;
}
.entry__dates {
  color: $color-entry-dates;
  margin: 0.2rem 0 1rem 0;
}
.entry__updated {
  display: none;
}
.entry__footer {
  margin: 1.5rem 0 0 0 ;
}

.entry-content p:nth-of-type(1n)::selection {
  background-color: #80CBC4;
}
.entry-content p:nth-of-type(2n)::selection {
  background-color: #C5E1A5;
}
</style>
<style lang="scss" scoped>
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
