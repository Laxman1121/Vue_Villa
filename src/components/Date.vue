<template>
  <!-- <q-modal v-model="minimizedModal" minimized ref="modalRef">
    <div style="padding: 50px">
      <div class="q-display-1 q-mb-md">Minimized Modal</div>
      <p>This one has backdrop on small screens too.</p>
      <q-btn color="red" v-close-overlay label="Close" />
    </div>
  </q-modal> -->
  <div>
    <p>{{ days }}</p>
  </div>
  <q-btn icon="event" size="lg" round color="primary" class="dateIcon">
    <q-popup-proxy
      @before-show="updateProxy"
      cover
      transition-show="scale"
      transition-hide="scale"
    >
      <q-date v-model="days" range>
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
import { ref, defineEmits } from "vue";

const minimizedModal = ref(false);
const days = ref({ from: "2023/05/02", to: "2023/05/05" });
const proxyDays = ref(days);
// const clickHandler = () => {
//   minimizedModal.value = !minimizedModal.value;
// };
const updateProxy = () => {
  proxyDays.value = days.value;
};

const emit = defineEmits(['selecteddates'])
const save = () => {
  days.value = proxyDays.value;
  proxyDays.value = {
    from: new Date(Date.now()).toLocaleString().split(",")[0].toString(),
    to: new Date(Date.now()).toLocaleString().split(",")[0].toString(),
  };

  emit('selecteddates',days.value);
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
