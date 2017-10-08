<template>
  <router-link :to="'entry/' + id" class="mdc-list-item blogroll__item">
    <img class="mdc-list-item__start-detail" v-if="featuredImage" :src="'https:'+ featuredImage +'?fit=thumb&w=40&h=40&fm=jpg&fl=progressive'">
    <span class="mdc-list-item__text title-wrapper">
      <span class="title-text">{{ title }}</span>
      <span class="mdc-list-item__text__secondary title-text">
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
.blogroll__item {
  margin: 0 16px;
  max-width: 100%;

  @media(min-width: 732px) {
    margin: 0;
  }
}
.title-wrapper {
  overflow: hidden;
}
.title-text {
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mdc-list--three-line .mdc-list-item {
  height: 90px;
}
</style>
