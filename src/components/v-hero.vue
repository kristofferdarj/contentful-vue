<template>
  <div class="hero">
    <div class="video-container">
      <video autoplay loop muted class="video-container__video" poster="/static/hero_background.jpg">
          <source src="/static/hero_background.mp4" type="video/mp4">
          <source src="/static/hero_background.webm" type="video/webm">
          <source src="/static/hero_background.ogv" type="video/ogg">
      </video>
      <img class="video-container__poster" src="/static/hero_background.jpg">
    </div>
    <div class="hero_title-container">
      <h1 class="hero_title">Hi, you found me! I'm a business and web developer from Sweden specialized in making awesome&nbsp;stuff.</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vHero',
};
</script>

<style lang="scss" scoped>
@import "node_modules/material-components-web/material-components-web.scss";
@import '../assets/style/colors.scss';

.hero {
  height: 100vh;
  position: relative;
  width: 100vw;
}
.hero_title-container {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  margin: 32px;
  position: absolute;
  top: 0;
  width: calc(100vw - 64px);
  z-index: 1;
}
.hero_title {
  @include mdc-typography(display2);
  @include mdc-typography-adjust-margin(display2);

  color: $color-light-text;
  max-width: 15em;
  word-wrap: break-word;
}
.video-container {
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
}
.video-container__video {
  display: none;
  height: 100vh;
  object-fit: cover;
  width: 100vw;
  object-position: 100% 50%;

  @media screen and (min-width: 768px) {
    display: block;
  }
}
.video-container__poster {
  display: block;
  height: 100vh;
  object-fit: cover;
  width: 100vw;
  object-position: 100% 50%;

  @media screen and (min-width: 768px) {
    display: none;
  }
}
</style>
