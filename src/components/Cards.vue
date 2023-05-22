<template>
  <div class="outer">
    <div class="q-pa-xl q-mx-sm cards">
      <Card
        v-if="villas.length > 0"
        v-for="villa in villas.slice(0, paginate)"
        :key="villa"
        :villa="villa"
      />
    </div>

    <q-separator class="grey-9" style="margin-bottom: 10px; width: 100%" />

    <div v-if="paginate <= villas.length" class="loader">
      <q-btn
        :loading="loading"
        color="grey-6"
        rounded
        @click="loadHandler"
        style="width: 150px"
      >
        Load More
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left" />
          Loading...
        </template>
      </q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Card from "./Card.vue";
import axios from "axios";
const villas = ref([]);
const paginate = ref(5);

const showLoad = ref(true);
const loading = ref(false);
const getVillaData = async () => {
  const { data, headers } = await axios.get(" http://localhost:3000/villas", {
    // params: {
    //   _page: 1,
    //   _limit: 4
    // }
  });
  console.log(headers);
  villas.value = data;
};

const loadHandler = () => {
  loading.value = true;
  setTimeout(() => {
    if (paginate.value >= villas.value.length) {
      console.log("end here " + paginate.value);
      showLoad.value = false;
    } else {
      paginate.value += 4;
      console.log("value:" + paginate.value);
    }
    loading.value = false;
  }, 1500);
};
onMounted(async () => {
  await getVillaData();
});
</script>

<style scoped>
.cards {
  display: flex;

  row-gap: 10px;
  column-gap: 55px;

  justify-content: flex-start;
  margin-left: 30px;
  flex-wrap: wrap;
}
.outer {
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
}

.loader {
  margin-top: -30px;
  margin-bottom: 10px;
}
@media screen and (max-width: 1380px) {
  .outer {
    margin-left: 29px;
  }
  .cards {
    column-gap: 9px;
  }
}
@media screen and (max-width: 771px) {
  .outer {
    margin: auto;
  }
  .cards {
    justify-content: center;
    column-gap: 2px;
  }
}
</style>
