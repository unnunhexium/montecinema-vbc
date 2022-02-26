<template>
  <div class="day-tab">
    <button class="day-tab__button"><slot /></button>
  </div>
</template>

<script>
export default {
  name: "DayTab",
};
</script>

<style lang="scss" scoped>
.day-tab {
  &__button {
    @include font-button;
    font-size: 18px;
    background: transparent;
    color: $text-dark;
    padding: 1rem 2.725rem;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    border: 2px solid $btn-dark;
    border-radius: 64px;
    transition: background-color 0.4s, border-color 0.2s;
    &:active,
    &:focus,
    &:hover {
      background: $btn-dark;
      color: $text-white;
    }
    &:active,
    &:focus {
      background: $btn-dark;
      color: $text-white;
    }
  }
}
</style>