<template>
  <div class="entries">
    <p style="color: white">Blogroll</p>
    <div v-for="item in shared.state.entries.items" class="mdc-card">
      <section class="mdc-card__primary">primary
        <h1 class="mdc-card__title mdc-card__title--large">{{ item.fields.title }}</h1>
      </section>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  data() {
    return {
      shared: store,
    };
  },
  created() {
    store.getPosts();
  },
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
