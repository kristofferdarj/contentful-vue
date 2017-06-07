<template>
  <div class="entries">
    <p style="color: white">Blogroll</p>
    <div v-for="item in shared.state.entries.items" class="mdc-card">
      <section class="mdc-card__primary">primary
        <h2 class="mdc-card__title mdc-card__title--large">{{ item.fields.title }}</h2>
        <h3 class="mdc-card__subtitle">{{ formatDate(item.sys.createdAt) }}</h3>
      </section>
      <section class="mdc-card__supporting-text">
        {{ item.fields.shortDescription }}
      </section>
    </div>
  </div>
</template>

<script>
import store from '../store';
import dateMixin from '../mixins/dateMixin';

export default {
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
