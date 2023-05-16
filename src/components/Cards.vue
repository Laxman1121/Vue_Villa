<template>
<div class="q-pa-md cards">
    
 <Card v-if="villas.length>0" v-for="villa in villas" :key="villa" :villa="villa" />
  </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Card from "./Card.vue";
import axios from 'axios'
const villas =ref([]);
const getVillaData=async()=>{
   const {data} =await axios.get(" http://localhost:3000/villas");
   villas.value =data;
}
onMounted(async() => {
    await getVillaData()
})
</script>

<style scoped>
.cards{
    display: flex;
    
    
    flex-wrap: wrap;
    
    
}
</style>