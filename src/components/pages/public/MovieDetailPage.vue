<template>
  <div>
    Single movie of id:
    {{ movieId }}
  </div>
</template>

<script>
export default {
  props: {
    movieId: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped></style>
