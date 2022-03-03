<template>
  <div class="the-hero">
    <div class="the-hero__text-wrapper">
      <h1 class="the-hero__title">Welcome to the best cinema in Monterail</h1>
      <p class="the-hero__content">
        Best movies, best experiences, best people. And all that doesn’t exist.
        Yikes.
      </p>
      <BaseButton href="#online-booking">Book a ticket</BaseButton>
    </div>
    <img
      src="@/assets/images/cinema.jpg"
      class="the-hero__image"
      alt="People sitting in cinema"
    />
  </div>
</template>

<script>
import BaseButton from "./base/BaseButton.vue";
export default {
  name: "TheHero",
  components: { BaseButton },
};
</script>

<style lang="scss" scoped>
.the-hero {
  display: flex;
  margin: 0 3em 4em;
  background: $bg-accent;
  @include md {
    margin: 0 0 4em;
    text-align: center;
    justify-content: center;
  }

  &__text-wrapper {
    padding: 5em;
    @include lg {
      text-align: center;
    }
    @include sm {
      width: 100%;
      padding: 2em;
    }
  }

  &__title {
    @include font-heading--large;
    padding: 0 0.5em 0.5em;
    @include md {
      font-size: 48px;
      line-height: 49px;
      letter-spacing: -1px;
      padding-bottom: 0.8em;
    }
  }

  &__content {
    @include font-paragraph--medium;
    padding-bottom: 1.85em;
  }
  &__image {
    max-width: 45%;
    object-fit: cover;
    @include lg {
      display: none;
    }
  }

  .base-button {
    font-size: 22px;
    line-height: 22px;
    padding: 0.8em 1.8em;
    border-radius: 30px;
    @include sm {
      width: 100%;
    }
  }
}
</style>
