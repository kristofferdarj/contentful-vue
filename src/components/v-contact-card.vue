<template>
  <div class="mdc-card contact-card mdc-elevation--z1">
    <section class="mdc-card__primary contact-card__inner">
      <img class="contact-card__avatar" src="/static/avatar.jpg">
      <div>
        <h2 class="mdc-typography--display1">Kristoffer Darj</h2>
        <ul class="contact-list">
          <li><i class="contact-card__symbol fa fa-envelope-o" aria-hidden="true"></i><a class="contact-card__link" href="mailto:kristoffer.darj@gmail.com">kristoffer.darj@gmail.com</a></li>
          <li><i class="contact-card__symbol fa fa-twitter"></i><a class="contact-card__link" href="https://twitter.com/kristofferdarj">@kristofferdarj</a></li>
          <li><i class="contact-card__symbol fa fa-mobile"></i><a class="contact-card__link" href="tel:+46703523639">070 - 352 36 39</a></li>
          <li><i class="contact-card__symbol fa fa-linkedin"></i><a class="contact-card__link" href="https://www.linkedin.com/in/kristofferdarj/">LinkedIn</a></li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'vContactCard',
};
</script>
<style lang="scss" scoped>
@import '../assets/style/colors.scss';

@keyframes slideInFromBottom {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-25%);
  }
}
.contact-card {
  animation: slideInFromBottom 1.5s ease-out 5s 1 normal forwards;
  background-color: $color-card-background;
  margin-top: 16px;
  max-width: 700px;
  z-index: 2;
}
.contact-card__inner {
  display: flex;
}
.contact-list {
  line-height: 1.7;
}
.contact-card__symbol {
  color: $color-subtle-text;
  display: inline-flex;
  justify-content: center;
  margin-right: 1rem;
  width: 16px;
}
.contact-card__link {
  display: inline-block;
  position: relative;
  text-decoration: none;

  &:before {
    background-color: currentColor;
    bottom: 1px;
    content: '';
    height: 1px;
    position: absolute;
    transition: width 0.3s ease-in-out;
    width: 0;
  }
  &:hover {
    &:before {
      width: 100%;
    }
  }
}
.contact-card__avatar {
  border: solid 3px $color-avatar-border;
  border-radius: 50%;
  height: 64px;
  margin: 0 16px 16px 0;
  width: 64px;
}
</style>
