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
  @include bordered-pill;
  font-size: 16px;
  color: $text-accent;
  padding: 0.5rem 2rem;
  margin: 0 0.5em 0.5em 0;
  border: 2px solid $btn-default;
  &:active,
  &:focus,
  &:hover {
    background: $btn-default;
  }
}
</style>
