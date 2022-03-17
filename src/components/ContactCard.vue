<template>
  <div class="contact-card">
    <div class="contact-card__main-wrapper">
      <div class="contact-card__wrapper">
        <IconLocation class="contact-card__icon" />
        <p class="contact-card__location">
          Monterail Sp. z o.o. <br />
          ul. Oławska 27-29 <br />
          50-123 Wrocław <br />
          Poland
        </p>
      </div>
      <div class="contact-card__wrapper">
        <IconEmail class="contact-card__icon" />
        <a class="contact-card__email" href="mailto:hello@monterail.com">
          hello@monterail.com
        </a>
      </div>
      <div class="contact-card__wrapper">
        <IconPhone class="contact-card__icon" />
        <a class="contact-card__phone" href="tel:+48 533 600 136">
          +48 533 600 136
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import IconLocation from "./svg/contact/icon-location.vue";
import IconEmail from "./svg/contact/icon-email.vue";
import IconPhone from "./svg/contact/icon-phone.vue";

export default {
  name: "ContactCard",
  components: {
    IconLocation,
    IconEmail,
    IconPhone,
  },
};
</script>

<style lang="scss" scoped>
.contact-card {
  max-width: 600px;
  margin: 0 auto;
  padding: 3.55em;

  &__main-wrapper {
    color: $text-dark;
    font-family: "Roboto Mono";
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
  }

  &__wrapper {
    display: flex;
  }

  &__icon {
    margin-right: 1em;
    min-width: 32px;
  }

  ::v-deep svg path {
    stroke: $text-accent;
  }

  &__heading {
    @include font-heading--big;
    color: $text-dark;
  }

  &__location,
  &__email {
    margin-bottom: 2.2em;
  }

  &__email,
  &__phone {
    text-decoration: none;
    color: $text-dark;
    @include outline-non-bordered-transparent;
    &:focus-visible {
      @include outline-non-bordered-focus;
    }
  }
}
</style>
