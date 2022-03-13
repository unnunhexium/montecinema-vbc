<template>
  <div class="register-first-page">
    <div class="register-first-page__wrapper">
      <h1 class="register-first-page__heading">Ahoy you!</h1>
      <h2 class="register-first-page__subheading">Care to register?</h2>
      <RegisterCard />
    </div>
  </div>
</template>

<script>
import RegisterCard from "@/components/auth/RegisterCard.vue";

export default {
  name: "RegisterFirstPage",
  components: {
    RegisterCard,
  },
};
</script>

<style lang="scss" scoped>
.register-first-page {
  &__wrapper {
    max-width: 624px;
    padding: 2em 0.5em 0;
    margin: 0 auto;
  }

  &__heading,
  &__subheading {
    @include font-heading--large;
  }

  &__subheading {
    color: $text-light;
    padding-bottom: 0.5em;
  }

  &__description-wrapper {
    display: flex;
    padding-top: 2.5em;
  }

  &__info,
  &__link {
    @include font-paragraph--smaller;
    line-height: 1.75em;
  }

  &__info {
    padding-right: 0.25em;
  }

  &__link {
    color: $text-accent;
  }
}
</style>
