<template>
  <div class="error-card">
    <h3 class="error-card__title">Oh no!</h3>
    <h4 class="error-card__subtitle">Something went wrong...</h4>
    <p class="error-card__description">Please go back and try again.</p>
    <BaseButton
      class="error-card__button"
      @click="$router.go(-1)"
      type="primary"
      >Go back</BaseButton
    >
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: "ErrorCard",
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.error-card {
  &__title,
  &__subtitle {
    font-family: "Eczar";
    font-size: 48px;
    line-height: 49px;
    font-weight: 600;
    font-size: 48px;
    margin-bottom: 1em;
  }

  &__title {
    color: $text-dark;
    margin-bottom: 5px;
  }

  &__subtitle {
    color: $text-accent-b;
  }

  &__description {
    @include font-paragraph--small;
    color: $text-dark;
    padding-bottom: 8em;
  }

  &__button {
    display: block;
    font-size: 18px;
    line-height: 18px;
    padding: 0.95em 2em;
    margin-left: auto;
  }
}
</style>
