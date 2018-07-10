<template>
  <div class="footer">
    {{ $t('footer') }}
  </div>
</template>

<script>
export default {
  name: 'vFooter',
  i18n: {
    messages: {
      en: {
        footer: 'Powered by 🌈 and 🦄',
      },
      sv: {
        footer: 'Drivs av 🌈 och 🦄',
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@material/typography/mixins";

.footer {
  @include mdc-typography(body1);
  @include mdc-typography-adjust-margin(body1);

  align-items: center;
  background-color: $color-footer-background;
  color: $color-subtle-text;
  display: flex;
  height: 32px;
  justify-content: center;
  margin-bottom: 0;
  margin-top: 16px;
  padding: 16px;
}
</style>
