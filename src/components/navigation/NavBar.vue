<template>
  <nav class="nav-bar">
    <ul class="nav-bar__list">
      <li>
        <router-link :to="{ name: 'Movies' }" class="nav-bar__list-item"
          >Movies</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'Screenings' }" class="nav-bar__list-item"
          >Screenings</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'Contact' }" class="nav-bar__list-item"
          >Contact us</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.nav-bar {
  &__list {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
  &__list-item {
    @include font-paragraph--small;
    color: $text-light;
    text-decoration: none;
    padding: 0 1em;
    @include outline-transparent;
    &:focus-visible {
      @include outline-focus;
    }
  }
}
</style>
