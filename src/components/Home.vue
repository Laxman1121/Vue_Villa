<template>
  <Header />
  <Date :selecteddates="" />
  <br /><br />
  <Cards />
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import Cards from "./Cards.vue";
import Date from "./Date.vue";
import { ref } from "vue";

const dates = ref<Date[]>([]);
const saveDates = (datesArr: Date[]) => {
  dates.value.push(...datesArr);
};
</script>
