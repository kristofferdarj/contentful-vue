<template>
  <div class="hero">
    <div class="video-container">
      <video autoplay loop muted class="video-container__video" poster="/static/hero_background.jpg">
          <source v-bind:src="'/static/' + selectedVideo + '.mp4'" type="video/mp4">
          <source v-bind:src="'/static/' + selectedVideo + '.webm'" type="video/webm">
          <source v-bind:src="'/static/' + selectedVideo + '.ogv'" type="video/ogg">
      </video>
      <img class="video-container__poster" v-bind:src="'/static/' + selectedVideo + '.jpg'">
    </div>
    <div class="hero_title-container">
      <h1 class="hero_title" v-html="$t('hero.title')"></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vHero',
  i18n: {
    messages: {
      en: { hero: { title: 'Hi! I create, develop and scale different types of business ideas, often using&nbsp;technology.' } },
      sv: { hero: { title: 'Hej! Jag skapar, utvecklar och skalar olika typer av affärsidéer, ofta med hjälp av&nbsp;teknik.' } },
    },
  },
  data() {
    return {
      videos: [
        'hero_background',
        'hero_background2',
      ],
      selectedVideo: '',
    };
  },
  created() {
    const idx = Math.floor(Math.random() * this.videos.length);
    this.selectedVideo = this.videos[idx];
  },
};
</script>

<style lang="scss" scoped>
@import "node_modules/material-components-web/material-components-web.scss";

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
  @include mdc-typography(display1);
  @include mdc-typography-adjust-margin(display1);

  color: $color-light-text;
  max-width: 700px;
  word-wrap: break-word;

  @media(min-width: 500px) {
    @include mdc-typography(display2);
    @include mdc-typography-adjust-margin(display2);
  }
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
