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
  @include bordered-pill;
  font-size: 18px;
  color: $text-dark;
  padding: 1rem 2.725rem;
  border: 2px solid $btn-dark;
  &:active,
  &:focus,
  &:hover {
    background: $btn-dark;
  }
}
</style>
