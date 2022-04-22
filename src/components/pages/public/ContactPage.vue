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
        <a
          :href="icon.href"
          class="contact-page__media-icon"
          v-for="icon in icons"
          :key="icon.name"
        >
          <img
            :src="require('../../../assets/icons/media/' + icon.src)"
            :alt="logoAlt(icon.name)"
          />
        </a>
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
  data() {
    return {
      icons: [
        {
          src: "twitter.svg",
          name: "Twitter",
          href: "https://twitter.com/monterail",
        },
        {
          src: "facebook.svg",
          name: "Facebook",
          href: "https://www.facebook.com/monterail",
        },
        {
          src: "linkedin.svg",
          name: "Linkedin",
          href: "https://pl.linkedin.com/company/monterail",
        },
        {
          src: "instagram.svg",
          name: "Instagram",
          href: "https://www.instagram.com/monterail/",
        },
        {
          src: "github.svg",
          name: "Github",
          href: "https://github.com/monterail",
        },
        {
          src: "behance.svg",
          name: "Behance",
          href: "https://www.behance.net/monterail",
        },
        {
          src: "dribbble.svg",
          name: "Dribbble",
          href: "https://dribbble.com/monterail",
        },
      ],
    };
  },
  methods: {
    logoAlt(name) {
      return `A logo of ${name}.`;
    },
  },
  metaInfo: {
    title: "Contact us",
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
  a {
    @include outline-non-bordered-transparent;

    &:focus-visible {
      @include outline-non-bordered-focus;
    }
  }

  &__map {
    height: 100%;
    object-fit: cover;
    border-radius: 8px 0 0 8px;
  }
}
</style>
