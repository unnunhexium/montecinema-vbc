<template>
  <nav class="simple-nav">
    <a href="/" class="simple-nav__logo">
      <img src="@/assets/icons/logo.svg" />
    </a>
    <p class="simple-nav__text">
      Developed with
      <span class="simple-nav__icon">♥</span>
      by
      <a href="https://www.monterail.com/" class="simple-nav__link"
        >Monterail</a
      >
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

  &__logo {
    @include outline-transparent;

    &:focus-visible {
      @include outline-focus;
    }
  }

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

  &__link {
    color: $text-dark;
    text-decoration: none;
    outline: none;
    border-radius: 44px;
    border: 2px dotted transparent;
    padding: 3px;
    &:focus-visible {
      outline: none;

      padding: 3px;
      border: 2px dotted $btn-pressed;
    }
  }
}
</style>

&__breadcrumb-link { color: $text-accent; @include outline-transparent;
&:focus-visible { @include outline-focus; } }
