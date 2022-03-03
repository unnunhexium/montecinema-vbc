<template>
  <div class="register-page">
    <div class="register-page__wrapper">
      <h1 class="register-page__heading">Ahoy you!</h1>
      <h2 class="register-page__subheading">Care to register?</h2>
      <RegisterFirstCard />
    </div>
  </div>
</template>

<script>
import RegisterFirstCard from "@/components/RegisterFirstCard.vue";

export default {
  name: "RegisterFirstPage",
  components: {
    RegisterFirstCard,
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    setInput(event) {
      this.inputValue = event.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.register-page {
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
