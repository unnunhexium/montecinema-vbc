<template>
  <div>
    <TheHeader v-if="!$route.name.startsWith('User')" />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss" scoped></style>
