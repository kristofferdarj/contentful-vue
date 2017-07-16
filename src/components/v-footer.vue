<template>
  <div class="footer">
    Powered by kittens and brainpower. <router-link to="blogroll">blogroll</router-link>
  </div>
</template>

<script>
export default {
  name: 'vFooter',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/style/colors.scss';

.footer {
  align-items: center;
  background-color: $color-footer-background;
  color: $color-subtle-text;
  display: flex;
  height: 32px;
  justify-content: center;
  margin-top: 16px;
  padding: 16px;
}
</style>
