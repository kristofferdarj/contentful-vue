<template>
  <div class="hero">
    <div class="video-container">
        <video autoplay loop class="video-container__video" poster="/static/hero_background.jpg">
            <source src="/static/hero_background.mp4" type="video/mp4">
            <source src="/static/hero_background.webm" type="video/webm">
            <source src="/static/hero_background.ogv" type="video/ogg">
        </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vHero',
};
</script>

<style scoped>
.video-container {
  display: flex;
  justify-content: center;
}
.video-container__video {
  height: 100%;
  width: 177.77777778vh; /* 100 * 16 / 9 */
  min-width: 100%;
  min-height: 56.25vw; /* 100 * 9 / 16 */
}
</style>
