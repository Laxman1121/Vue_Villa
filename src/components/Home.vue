<template>
  <Header />
  <Date />
  <br /><br />
  <Cards v-if="dates" :selectedDates="dates" />
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import Cards from "./Cards.vue";
import Date from "./Date.vue";
import { ref } from "vue";
export interface SelectedDates {
  from: string;
  to: string;
}
const dates = ref<SelectedDates>({ from: "", to: "" });
const saveDates = (datesArr: SelectedDates) => {
  dates.value = { ...datesArr };
  console.log(dates.value);
};
</script>
