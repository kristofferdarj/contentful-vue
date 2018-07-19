<template>
  <div class="recommendation">
    <img class="recommendation__image" v-if="featuredImage" :src="featuredImage">
    <h1 class="recommendation__name">{{ name }}</h1>
    <h1 class="recommendation__title">{{ title }}</h1>
    <div v-html="marked(body)" class="recommendation__body"></div>
  </div>
</template>

<script>
export default {
  name: 'vRecommendationItem',
  props: [
    'id',
    'title',
    'name',
    'body',
    'featuredImage',
  ],
};
</script>

<style lang="scss">
@import "@material/typography/mixins";

.recommendation {
  border-bottom: 1px solid $color-divider;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
}
.recommendation__image {
  border: solid 3px $color-avatar-border;
  border-radius: 50%;
  height: 64px;
  width: 64px;
}
.recommendation__name {
  @include mdc-typography(body1);
}
.recommendation__title {
  @include mdc-typography(body1);
  color: $color-subtle-text;
}
.recommendation__body {
  @include mdc-typography(body1);
  margin: 16px;
  text-align: center;
}
</style>
