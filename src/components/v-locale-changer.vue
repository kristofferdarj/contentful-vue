<template>
  <div class="locale-changer">
    <a class="locale__item" v-if="this.$i18n.locale === 'sv'" v-on:click="langSwitch" href="#en">Eng</a>
    <a class="locale__item" v-if="this.$i18n.locale === 'en'" v-on:click="langSwitch" href="#sv">Sv</a>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  methods: {
    langSwitch() {
      if (this.$i18n.locale === 'sv') {
        this.$i18n.locale = 'en';
      } else {
        this.$i18n.locale = 'sv';
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@material/typography/mixins";

.locale-changer {
  margin-right: 24px;
}
.locale__item {
  color: $color-light-text;
  padding: 10px;
  text-decoration: none;

  @include mdc-typography(body1);
}
</style>
