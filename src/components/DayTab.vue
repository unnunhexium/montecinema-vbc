<template>
  <button class="day-tab"><slot /></button>
</template>

<script>
export default {
  name: "DayTab",
};
</script>

<style lang="scss" scoped>
.day-tab {
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
</style>
