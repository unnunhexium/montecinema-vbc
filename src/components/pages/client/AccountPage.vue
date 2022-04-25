<template>
  <div class="account-page">
    <div class="account-page__wrapper">
      <button
        :class="[
          'account-page__title',
          { 'account-page__title--active': !secondStepActive },
        ]"
        @click="secondStepActive = false"
      >
        Personal details
      </button>
      <button
        :class="[
          'account-page__title',
          { 'account-page__title--active': secondStepActive },
        ]"
        @click="secondStepActive = true"
      >
        Reservations
      </button>
    </div>
    <PersonalDetailsCard
      :formData="formData"
      @set-form-field="setFormField"
      v-if="!secondStepActive"
    />
    <ReservationsCard v-else />
  </div>
</template>

<script>
import PersonalDetailsCard from "@/components/PersonalDetailsCard.vue";
import ReservationsCard from "@/components/ReservationsCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "AccountPage",
  components: { PersonalDetailsCard, ReservationsCard },
  data() {
    return {
      secondStepActive: false,
      formData: {
        email: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
      },
    };
  },
  methods: {
    setFormField({ value, key }) {
      this.formData[key] = value;
    },
  },
  computed: {
    ...mapGetters(["userData"]),
  },
  mounted() {
    this.formData.email = this.userData.email;
    this.formData.firstName = this.userData.first_name;
    this.formData.lastName = this.userData.last_name;
    this.formData.dateOfBirth = this.userData.date_of_birth;
  },
};
</script>

<style lang="scss" scoped>
.account-page {
  padding: 0 48px;
  margin-top: 64px;

  &__wrapper {
    display: flex;
  }

  &__title {
    all: unset;
    cursor: pointer;
    color: $text-lighter;
    font-family: "Eczar";
    font-weight: 600;
    font-size: 48px;
    line-height: 49px;
    margin: 0 0.75em 1.35em 0;

    &--active {
      color: $text-dark;
    }

    &--inactive {
      color: $text-lighter;
    }

    &:focus-visible {
      color: $text-accent;
    }
  }
}
</style>
