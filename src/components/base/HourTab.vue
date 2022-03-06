<template>
  <div class="hour-tab"><slot /></div>
</template>

<script>
export default {
  name: "HourTab",
};
</script>

<style lang="scss" scoped>
.hour-tab {
  @include time-pill;
  font-size: 16px;
  color: $text-accent;
  padding: 0.75rem 2rem;
  border: 2px solid $btn-default;
  &:active,
  &:focus,
  &:hover {
    background: $btn-default;
  }
}
</style>
