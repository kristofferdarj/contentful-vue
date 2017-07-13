<template>
  <div class="site-content home">
    <v-hero></v-hero>
    <div class="mdc-card contact-card mdc-elevation--z1">
      <section class="mdc-card__primary contact-card__inner">
        <img class="contact-card__avatar" src="/static/avatar.jpg">
        <div>
          <h2 class="mdc-typography--display1">Kristoffer Darj</h2>
          <ul class="contact-list">
            <li><a href="mailto:kristoffer.darj@gmail.com">kristoffer.darj@gmail.com</a></li>
            <li><a href="https://twitter.com/kristofferdarj">@kristofferdarj</a></li>
            <li><a href="tel:+46703523639">070 - 352 36 39</a></li>
            <li><a href="https://www.linkedin.com/in/kristofferdarj/">LinkedIn</a></li>
          </ul>
        </div>
      </section>
    </div>
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
<style lang="scss" scoped>
@import '../assets/style/colors.scss';

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@keyframes slideInFromBottom {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20%);
  }
}
.contact-card {
  animation: slideInFromBottom 1.5s ease-out 5s 1 normal forwards;
  background-color: $color-card-background;
  max-width: 700px;
  z-index: 2;
}
.contact-card__inner {
  display: flex;
}
.contact-list {
  line-height: 1.5;
}
.contact-card__avatar {
  border: solid 3px $color-avatar-border;
  border-radius: 50%;
  height: 64px;
  margin: 0 16px 16px 0;
  width: 64px;
}
</style>
