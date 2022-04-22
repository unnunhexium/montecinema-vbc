<template>
  <div class="account-page">
    <div class="account-page__wrapper">
      <h2 class="account-page__title">Personal details</h2>
      <h2 class="account-page__title">Reservations</h2>
    </div>
    <PersonalDetailsCard></PersonalDetailsCard>
  </div>
</template>

<script>
import PersonalDetailsCard from "@/components/PersonalDetailsCard.vue";
export default {
  name: "AccountPage",
  components: { PersonalDetailsCard },
};
</script>

<style lang="scss" scoped>
.account-page {
  padding: 0 48px;
  margin-top: 0.75em;
  &__wrapper {
    display: flex;
  }
  &__title {
    font-family: "Eczar";
    font-weight: 600;
    font-size: 48px;
    line-height: 49px;
    margin: 0 0.75em 1.35em 0;
  }
}
</style>
