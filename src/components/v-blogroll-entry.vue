<template>
  <div class="mdc-card mdc-card--entries">
    <section class="mdc-card__media">
      <img v-if="item.fields.featuredImage" :src="'https://'+item.fields.featuredImage.fields.file.url+'?fit=thumb&w=318&h=212&fm=jpg&fl=progressive'">
    </section>
    <section class="mdc-card__primary mdc-ripple-surface" data-mdc-auto-init="MDCRipple">
      <h2 class="mdc-card__title mdc-card__title--large">{{ title }}</h2>
      <h3 class="mdc-card__subtitle">{{ formatDate(item.sys.createdAt) }}</h3>
    </section>
    <section class="mdc-card__supporting-text">
      {{ item.fields.shortDescription }}
    </section>
    <section class="mdc-card__actions">
      <router-link
        class="mdc-button mdc-button--compact mdc-card__action mdc-ripple-surface entry_button"
        :to="'entry/'+item.sys.id"
        data-mdc-auto-init="MDCRipple">Read more</router-link>
    </section>
  </div>
</template>

<script>
import dateMixin from '../mixins/dateMixin';

export default {
  name: 'vBlogrollEntry',
  props: ['title', 'createdAt', 'updatedAt', 'description'],
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
