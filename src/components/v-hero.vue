<template>
  <div class="homepage-hero-module">
      <div class="video-container">
          <div class="filter"></div>
          <video autoplay loop class="fillWidth">
              <source src="/static/hero_background.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
              <source src="/static/hero_background.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>
          <div class="poster hidden">
              <img src="/static/hero_background.jpg" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'vHero',
  mounted() {
    this.scaleVideoContainer();

    /*
    this.initBannerVideoSize('.video-container .poster img');
    this.initBannerVideoSize('.video-container .filter');
    this.initBannerVideoSize('.video-container video');

    window.addEvent('resize', () => {
      this.scaleVideoContainer();
      this.scaleBannerVideoSize('.video-container .poster img');
      this.scaleBannerVideoSize('.video-container .filter');
      this.scaleBannerVideoSize('.video-container video');
    });
    */
  },
  methods: {
    scaleVideoContainer() {
      const height = window.innerHeight + 5;
      const unitHeight = `${parseInt(height, 10)}px`;
      const homepageHeroModule = document.querySelector('.homepage-hero-module');
      const style = window.getComputedStyle(homepageHeroModule);
      console.log(style);
    },
    /*initBannerVideoSize(element){
      $(element).each(() => {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
      });

      this.scaleBannerVideoSize(element);
    },
    scaleBannerVideoSize(element){
      const windowWidth = $(window).width(),
      windowHeight = $(window).height() + 5,
      videoWidth,
      videoHeight;

      // console.log(windowHeight);

      $(element).each(() => {
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
          videoHeight = windowHeight;
          videoWidth = videoHeight / videoAspectRatio;
          $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

          $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
      });
      */
  },
};
</script>

<style scoped>
.homepage-hero-module {
    border-right: none;
    border-left: none;
    position: relative;
}
.no-video .video-container video,
.touch .video-container video {
    display: none;
}
.no-video .video-container .poster,
.touch .video-container .poster {
    display: block !important;
}
.video-container {
    position: relative;
    bottom: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: #000;
}
.video-container .poster img {
    width: 100%;
    bottom: 0;
    position: absolute;
}
.video-container .filter {
    z-index: 100;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
}
.video-container video {
    position: absolute;
    z-index: 0;
    bottom: 0;
}
.video-container video.fillWidth {
    width: 100%;
}
</style>
