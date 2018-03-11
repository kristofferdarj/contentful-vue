<template>
  <router-link :to="'entry/' + id" class="mdc-list-item blogroll__item">
    <img class="blogroll__avatar" v-if="featuredImage" :src="'https:'+ featuredImage +'?fit=thumb&w=40&h=40&fm=jpg&fl=progressive'">
    <span class="title-wrapper">
      <span class="title-text">{{ title }}</span>
      <span class="title-text title-text--secondary">
      {{ description }}
      </span>
    </span>
  </router-link>
</template>

<script>
import dateMixin from '../mixins/dateMixin';

export default {
  name: 'vBlogrollEntry',
  props: [
    'id',
    'title',
    'description',
    'featuredImage',
    'createdAt',
    'updatedAt',
  ],
  mixins: [dateMixin],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@material/typography/mixins";

.blogroll__item {
  margin: 0 16px;
  max-width: 100%;

  @media(min-width: 732px) {
    margin: 0;
  }
}
.blogroll__avatar {
  margin-right: 16px;
  border-radius: 50%;
}
.title-wrapper {
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
}
.title-text {
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title-text--secondary {
  @include mdc-typography(body1);
  color: $color-subtle-text;
}
.mdc-list--three-line .mdc-list-item {
  height: 90px;
}
</style>
