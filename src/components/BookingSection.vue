<template>
  <div class="booking-section" id="online-booking">
    <h4 class="booking-section__title">Online booking</h4>
    <p class="booking-section__subtitle">Soon</p>
    <div class="booking-section__wrapper">
      <a href="#the-header">
        <img src="@/assets/logo.svg" class="booking-section__logo" />
      </a>
      <template v-if="!subscribed">
        <p class="booking-section__content">
          Leave us your email address and we’ll let you know as soon as the
          machine will start.
        </p>
        <form @submit.prevent="" class="booking-section__form">
          <BaseInput @input="setInput" :error="invalidEmail" />
          <BaseButton @click="subscribe">Let me know!</BaseButton>
        </form>
      </template>
      <template v-else>
        <p class="booking-section__message">
          Your email has been added to the list.
        </p>
        <p class="booking-section__message--thank-you">Thank you!</p>
      </template>
    </div>
  </div>
</template>

<script>
import BaseInput from "./base/BaseInput.vue";
import BaseButton from "./base/BaseButton.vue";
import { ref } from "@/vue/composition-api";

export default {
  setup() {
    const subscribed = ref(false);
    const invalidEmail = ref(false);
    const inputValue = ref("");

    const subscribe = () => {
      if (inputValue.value.length > 0) {
        subscribed.value = !subscribed.value;
      } else {
        invalidEmail.value = true;
      }
    };
    const setInput = (event) => {
      inputValue.value = event.target.value;
    };
    return {
      subscribed,
      invalidEmail,
      inputValue,
      subscribe,
      setInput,
    };
  },

  name: "BookingSection",
  components: {
    BaseInput,
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.booking-section {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    @include font-heading--large;
    padding-bottom: 0.15em;
    @include md {
      font-size: 54px;
      line-height: 56px;
    }
    @include sm {
      font-size: 40px;
      line-height: 41px;
    }
  }

  &__subtitle {
    @include font-paragraph--medium;
    padding-bottom: 2.15em;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    padding: 4em;
    border-radius: 24px;
    box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
    @include md {
      padding: 2em;
    }
    @include sm {
      padding: 0;
      box-shadow: none;
    }
  }

  &__logo {
    max-width: 185px;
    padding-bottom: 2.5em;
    cursor: pointer;
  }

  &__content,
  &__message {
    @include font-paragraph--large;
    padding-bottom: 1.65em;
    text-align: center;
    @include sm {
      padding: 0 0 2em;
      box-shadow: none;
    }
  }

  &__message {
    font-size: 20px;
  }

  &__form,
  &__form > * {
    width: 100%;
  }

  &__message--thank-you {
    font-family: "Roboto Mono";
    font-weight: 400;
    font-size: 24px;
    line-height: 18px;
    text-transform: uppercase;
    color: $text-accent;
  }

  .base-button {
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 1.5px;
    margin-top: 2.25em;
    padding: 0.75em 0 0.75em;
  }
}
</style>
