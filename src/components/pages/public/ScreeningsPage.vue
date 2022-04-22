<template>
  <div class="screenings-page">
    <ScreeningsSection />
  </div>
</template>

<script>
import ScreeningsSection from "@/components/ScreeningsSection.vue";

export default {
  name: "ScreeningsPage",
  components: {
    ScreeningsSection,
  },
  metaInfo: {
    title: "Screenings",
  },
};
</script>

<style lang="scss" scoped></style>
