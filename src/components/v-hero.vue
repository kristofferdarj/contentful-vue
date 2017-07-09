<template>
  <div class="hero">
    <div class="video-container">
        <video autoplay loop class="video-container__video" poster="/static/hero_background.jpg">
            <source src="/static/hero_background.mp4" type="video/mp4">
            <source src="/static/hero_background.webm" type="video/webm">
            <source src="/static/hero_background.ogv" type="video/ogg">
        </video>
    </div>
    <div class="mdc-card hero_card mdc-elevation--z1">
      <img class="" src="https://www.gravatar.com/avatar/D2192205C9299A119584261269B3D06B?s=200">
      <section class="mdc-card__primary">
          <ul>
            <li>Kristoffer Darj</li>
            <li>@kristofferdarj</li>
            <li>T: +46 (0)70 - 352 36 39</li>
          </ul>
        <h2 class="mdc-typography--display1"></h2>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vHero',
};
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.video-container {
  height: 70vh;
  min-height: 600px;
  overflow: hidden;
}
.video-container__video {
  object-fit: cover;
}
.hero_card {
  background-color: #FFF;
  margin-top: -50vh;
  max-width: 700px;
  z-index: 2;
}
</style>
