<template>
  <div class="contact-card">
    <h2 class="contact-card__heading">Contact us</h2>
    <div class="contact-card__main-wrapper">
      <div class="contact-card__wrapper">
        <IconLocation class="contact-card__icon" />
        <p class="contact-card__location">
          Monterail Sp. z o.o. <br />
          ul. Oławska 27-29 <br />
          50-123 Wrocław Poland
        </p>
      </div>
      <div class="contact-card__wrapper">
        <IconEmail class="contact-card__icon" />
        <p class="contact-card__email">hello@monterail.com</p>
      </div>
      <div class="contact-card__wrapper">
        <IconPhone class="contact-card__icon" />
        <p class="contact-card__phone">+48 533 600 136</p>
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
  &__heading {
    text-align: center;
    padding-bottom: 0.75em;
  }
  &__main-wrapper {
    background: $bg-light;
    color: $text-dark;
    font-family: "Roboto Mono";
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    padding: 3.55em;
    border-radius: 24px;
  }

  &__wrapper {
    display: flex;
  }

  &__icon {
    margin-right: 1em;
  }

  ::v-deep svg path {
    stroke: $text-accent;
  }

  &__heading {
    @include font-heading--big;
    color: $text-dark;
  }

  &__location {
    padding-bottom: 2.2em;
  }

  &__email {
    padding-bottom: 2.2em;
  }
}
</style>
