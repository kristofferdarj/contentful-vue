<template>
  <a href="#expandToggle" class="mdc-card highlight" @click="expandToggle">
    <img class="highlight__image" v-if="featuredImage" :src="'https:'+ featuredImage +'?w=250&h=250&fm=jpg&fl=progressive'">
    <section class="mdc-card__primary">
      <h1 class="mdc-card__title mdc-card__title--large">{{ title }}</h1>
      <h2 class="mdc-card__subtitle">{{ description }}</h2>
    </section>
    <section class="filler js-filler"></section>
    <section class="mdc-card__actions highlight__actions">
      <button class="mdc-button mdc-button--compact mdc-card__action highlight__expand fa fa-angle-down"
              v-bind:class="{ 'is-expanded': expanded }"></button>
    </section>
    <section v-bind:class="{ 'is-expanded': expanded }" class="mdc-card__supporting-text highlight__additional" v-html="marked(body)"></section>
  </a>
</template>

<script>
import dateMixin from '../mixins/dateMixin';

export default {
  name: 'vHighlightItem',
  data() {
    return {
      expanded: false,
    };
  },
  props: [
    'id',
    'title',
    'description',
    'body',
    'featuredImage',
  ],
  mixins: [dateMixin],
  mounted() {
    // Set the filler height to a constant value
    const filler = this.$el.querySelector('.js-filler');
    const fillerHeight = filler.clientHeight;
    filler.style.height = `${fillerHeight}px`;
  },
  methods: {
    expandToggle() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style lang="scss">
.highlight {
  align-self: start;
  background-color: $color-card-background;
  justify-content: flex-start;
  min-height: 320px;
  text-decoration: none;
}
.highlight__image {
  height: 150px;
  object-fit: cover;
}
.highlight__actions {
  font-size: 1.5em;
  justify-content: flex-end;
}
@keyframes colorchange {
  0% {
    color: red;
  }
  25% {
    color: orange;
  }
  50% {
    color: green;
  }
  75% {
    color: blue;
  }
  100% {
    color: purple;
  }
}
.highlight__expand {
  background: none;
  border: 0;
  cursor: pointer;
  outline: none;
  transition-duration: 1s;

  &:hover {
    animation: colorchange 4s linear infinite;
  }
}
.highlight__additional {
  max-height: 0;
  overflow: hidden;
  padding: 0 16px;
  transition: max-height 0.3s, padding-top 0.3s, padding-bottom 0.3s;

  &:last-child {
    padding-bottom: 0;
  }
}
.highlight__additional.is-expanded {
  max-height: 500px;
  padding: 10px 16px 24px 16px;
}
.highlight__expand.is-expanded {
  transform: rotate(180deg);

  &:hover {
    animation: colorchange 4s linear infinite;
  }
}
</style>
