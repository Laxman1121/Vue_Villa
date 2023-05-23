<template>
  <!-- <q-modal v-model="minimizedModal" minimized ref="modalRef">
    <div style="padding: 50px">
      <div class="q-display-1 q-mb-md">Minimized Modal</div>
      <p>This one has backdrop on small screens too.</p>
      <q-btn color="red" v-close-overlay label="Close" />
    </div>
  </q-modal> -->
  <div>
    <p>{{ typeof selectedDates.from }}</p>
  </div>
  <q-btn icon="event" size="lg" round color="primary" class="dateIcon">
    <q-popup-proxy
      @before-show="updateProxy"
      cover
      transition-show="scale"
      transition-hide="scale"
    >
      <q-date v-model="proxyDays" range>
        <div class="row items-center justify-end q-gutter-sm">
          <q-btn label="Cancel" color="primary" flat v-close-popup />
          <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
        </div>
      </q-date>
    </q-popup-proxy>
  </q-btn>
  <!-- <div class="inner">
    <q-icon
      name="today"
      class="text-black"
      size="3.2em"
      :onClick="clickHandler"
    />
    <q-date v-if="minimizedModal" v-model="days" multiple  />
  </div> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { SelectedDates } from "./Home.vue";

let today = new Date(Date.now())
  .toISOString()
  .split("T")[0]
  .split("-")
  .join("/");
let tomorrow = new Date();
const selectedDates = ref<SelectedDates>({ from: "", to: "" });

tomorrow.setDate(new Date(Date.now()).getDate() + 1);
const days = ref({
  from: today,
  to: tomorrow.toISOString().split("T")[0].split("-").join("/"),
});
const proxyDays = ref({ from: "2023/05/10", to: "2023/05/15" });

const emit = defineEmits<{
  (e: "dates", selectedDates: SelectedDates): void;
}>();

// const clickHandler = () => {
//   minimizedModal.value = !minimizedModal.value;
// };
const updateProxy = () => {
  proxyDays.value = days.value;
};

const save = () => {
  selectedDates.value = proxyDays.value;
  emit("dates", selectedDates.value);
};
</script>

<style scoped>
.dateIcon {
  margin-top: 20px;
  display: flex;
  float: right;
  margin-right: 15px;
}
.date,
.text {
  width: 10%;

  position: absolute;
  top: 15px;
  right: 0;
  margin-right: 0;
}
.text {
  padding: 4px;
  width: 25%;
  position: absolute;
  right: 10px;
  text-decoration: underline;
}
</style>
