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
  line-height: 18px;
  color: $text-dark;
  max-height: 56px;
  padding: 0 39px;
  border: 2px solid $btn-dark;
  &:active,
  &:focus,
  &:hover {
    background: $btn-dark;
  }
}
</style>
