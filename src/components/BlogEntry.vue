<template>
  <div class="content site-content">
    <div id="primary" class="content-area">
      <main id="main" class="site-main" role="main">
        <article class="mdc-card mdc-card--entry">
          <header class="entry__header">
            <span class="entry__dates">
            <time class="entry__published" datetime="">{{ formatDate(shared.state.entry.sys.createdAt) }}</time>
              <time class="entry__updated" datetime="">{{ formatDate(shared.state.entry.sys.updatedAt) }}</time>
            </span>
            <h1 class="mdc-card__title mdc-card__title--large">{{ shared.state.entry.fields.title }}</h1>
          </header>
          <div class="entry-content" v-html="marked(shared.state.entry.fields.body)"></div>
          <div class="entry-author-box">
            Nåt om mig här.. nån component antar jag
          </div>
          <footer class="entry-footer">
            kategorilänkar
          </footer>
        </article>
      </main>
    </div>
  </div>
</template>

<script>
import store from '../store';
import dateMixin from '../mixins/dateMixin';

export default {
  name: 'Blogentry',
  data() {
    return {
      shared: store,
    };
  },
  created() {
    store.getPost(this.$route.params.id);
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
