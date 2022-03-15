<template>
  <nav class="simple-nav">
    <a href="/">
      <img src="@/assets/icons/logo.svg" class="simple-nav__logo" />
    </a>
    <p class="simple-nav__text">
      Developed with
      <span class="simple-nav__icon">♥</span>
      by Monterail
    </p>
  </nav>
</template>

<script>
export default {
  name: "SimpleNav",
};
</script>

<style lang="scss" scoped>
.simple-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.875em 48px;
  &__text {
    font-family: "Roboto Mono";
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    text-transform: uppercase;
    color: $text-dark;
  }
  &__icon {
    color: $text-accent;
  }
}
</style>
