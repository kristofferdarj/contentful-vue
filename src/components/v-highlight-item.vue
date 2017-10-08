<template>
  <router-link :to="'highlight/' + id" class="mdc-card highlight">
    <img class="" v-if="featuredImage" :src="'https:'+ featuredImage +'?fit=thumb&w=250&h=150&fm=jpg&fl=progressive'">
    <section class="mdc-card__primary">
      <h1 class="mdc-card__title mdc-card__title--large">{{ title }}</h1>
      <h2 class="mdc-card__subtitle">{{ description }}</h2>
    </section>
  </router-link>
</template>

<script>
import dateMixin from '../mixins/dateMixin';

export default {
  name: 'vHighlightItem',
  props: [
    'id',
    'title',
    'description',
    'featuredImage',
  ],
  mixins: [dateMixin],
};
</script>

<style lang="scss">
.highlight {
  background-color: $color-card-background;
  justify-content: flex-start;
  text-decoration: none;
}
</style>
