<template>
  <li class="mdc-list-item">
    <img class="mdc-list-item__start-detail" v-if="featuredImage" :src="'https:'+ featuredImage +'?fit=thumb&w=318&h=212&fm=jpg&fl=progressive'">
    <span class="mdc-list-item__text">{{ title }}
      <span class="mdc-list-item__text__secondary">
      {{ description }}
      </span>
    </span>
  </li>
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
<style lang="scss" scoped>
.mdc-list--three-line .mdc-list-item {
  height: 90px;
}
</style>
