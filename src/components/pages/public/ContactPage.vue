<template>
  <div class="contact-page">
    <h2 class="contact-page__heading">Contact us</h2>
    <div class="contact-page__content-wrapper">
      <img
        src="@/assets/images/map.jpg"
        class="contact-page__map"
        alt="Cinema location on the map."
      />
      <div class="contact-page__contact-card">
        <ContactCard />
      </div>
      <div class="contact-page__media-icons">
        <img src=@/assets/icons/media/twitter.svg/ alt="Logo of Twitter."> <img
        src=@/assets/icons/media/facebook.svg/ alt="Logo of Facebook."> <img
        src=@/assets/icons/media/linkedin.svg/ alt="Logo of LinkedIn."> <img
        src=@/assets/icons/media/instagram.svg/ alt="Logo of Instagram."> <img
        src=@/assets/icons/media/github.svg/ alt="Logo of GitHub."> <img
        src=@/assets/icons/media/behance.svg/ alt="Logo of Behance."><img
        src=@/assets/icons/media/basketball.svg alt="Logo of Basketball."/>
      </div>
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard.vue";

export default {
  name: "ContactPage",
  components: {
    ContactCard,
  },
};
</script>

<style lang="scss" scoped>
.contact-page {
  margin-top: 4em;
  padding: 0 48px;

  &__heading {
    @include font-heading--big;
    color: $text-dark;
    padding-bottom: 0.75em;
  }

  &__content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 0.13fr;
  }

  .contact-card {
    padding: 3.55em;
  }

  &__contact-card,
  &__media-icons {
    background: $bg-light;
  }

  &__media-icons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
    border-radius: 0px 8px 8px 0px;
  }

  &__map {
    height: 100%;
    object-fit: cover;
    border-radius: 8px 0 0 8px;
  }
}
</style>
