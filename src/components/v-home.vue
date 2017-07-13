<template>
  <div class="site-content home">
    <v-hero></v-hero>
    <v-contact-card></v-contact-card>
  </div>
</template>

<script>
import vHero from './v-hero';
import vContactCard from './v-contact-card';
import vBlogRoll from './v-blogroll';

export default {
  name: 'vHome',
  components: {
    'v-hero': vHero,
    'v-contact-card': vContactCard,
    'v-blogroll': vBlogRoll,
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/style/colors.scss';

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
