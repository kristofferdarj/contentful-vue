<template>
  <div class="site-content home">
    <v-hero></v-hero>
    <div>
      meep meep mep
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
}
</style>
