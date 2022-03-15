<template>
  <nav class="breadcrumb-nav">
    <button class="breadcrumb-nav__button-back" @click="$router.go(-1)">
      <ArrowLeft />Back
    </button>
    <template v-for="breadcrumb in breadcrumbs">
      <router-link
        class="breadcrumb-nav__breadcrumb-link"
        :key="breadcrumb.title"
        :to="breadcrumb.url"
      >
        {{ breadcrumb.title }}
      </router-link>
      <img
        src="@/assets/icons/arrows/arrow-next.svg"
        class="breadcrumb-nav__arrow"
        :key="breadcrumb.url"
      />
    </template>
    <span class="breadcrumb-nav__breadcrumb-span">{{ currentRoute }}</span>
  </nav>
</template>

<script>
import ArrowLeft from "../svg/icon-arrow-left.vue";

export default {
  name: "BreadcrumbNav",
  components: {
    ArrowLeft,
  },
  computed: {
    breadcrumbs() {
      if (this.$route.name === "SingleMovie") {
        return [{ title: "Movies", url: "/movies" }];
      } else {
        return [];
      }
    },
    currentRoute() {
      if (this.$route.name === "SingleMovie") {
        return this.$store.state.movieTitle;
      } else {
        return this.$route.meta.breadcrumb || this.$route.name;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb-nav {
  margin: 0 48px;
  background: $bg-accent;
  padding: 1.25em 0 1.25em 1.5em;
  display: flex;
  align-items: center;

  &__button-back {
    @include bordered-pill;
    font-size: 16px;
    line-height: 16px;
    color: $text-dark;
    padding: 0.25em 2em 0.25em 1.75em;
    margin-right: 2em;
    border: 2px solid $btn-dark;
    display: flex;
    align-items: center;
    &:active,
    &:focus,
    &:hover {
      background: $btn-dark;
      ::v-deep svg path {
        stroke: $text-white;
      }
    }
    svg {
      margin-right: 0.75em;
    }
  }

  &__breadcrumb-span,
  &__breadcrumb-link {
    @include font-button;
    font-size: 16px;
    line-height: 16px;
    text-decoration: none;
    margin-right: 1.3125em;
  }

  &__breadcrumb-link {
    color: $text-accent;
  }

  &__breadcrumb-span {
    color: $text-dark;
  }

  &__arrow {
    margin-right: 1.3125em;
  }
}
</style>
