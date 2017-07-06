<template>
  <div class="site-content home">
    <v-hero></v-hero>
    <div>
      reference customers
    </div>
    <div>
      blog posts
    </div>
    <div>
      cases
    </div>
    <div>
      fun
    </div>
  </div>
</template>

<script>
import vHero from './v-hero';

export default {
  name: 'vHome',
  components: {
    'v-hero': vHero,
  },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
