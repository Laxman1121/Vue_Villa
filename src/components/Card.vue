<template>
  <div class="q-pa-sm row items-start q-gutter-md card-container" style="width:350px;height:auto">
    <q-card class="my-card" >
      <q-img style="object-fit: cover;"
        :src="villa.url"
      />

      <q-card-section>
    
        <div class="text-h5 q-mt-xs ">{{villa.name}}</div>
        <div class="features">
            <p class=" q-mt-sm q-mb-xs text-black f-head">Features: </p>
           
           <div class="feature">
            <span  class="text-italic text-subtitle2" v-for="feature in villa.features" :key="feature">{{feature+',' }} <span></span></span>
           </div>
        </div>
        <div class="price">
            <p class=" q-mt-sm q-mb-xs text-black f-head">Price: </p>
           
            <div class="fprice">
             <span  class="text-subtitle1 text-bold text-green-7"  >${{villa.price}} <span></span></span>
            </div>
        </div>
        <div class="location">
            <p class=" q-mt-sm q-mb-xs text-black f-head">Location: </p>
           
            <div style="margin-top: 3px;">
             <span  class="text-italic"    >{{villa.location}}</span>
            </div>
        </div>
    
      </q-card-section>
     <q-separator/>
      <q-card-actions>
        <q-btn flat no-caps color="primary" label="Details" @click="detailsHandler(villa.id)" />
        <q-btn flat  no-caps color="secondary" label="Book" />

        <q-space />

      
      </q-card-actions>

    
    </q-card>
  </div>
</template>


<script setup lang="ts">

import { useRouter } from 'vue-router';

const {villa}=defineProps(["villa"])
 const router =useRouter();

 const detailsHandler=(id:String)=>{
  router.push({path:`/details/${id}`,params:{id:1}});
 }

</script>


<style scoped>
.card-container{
   
   flex:1;
   
}
.my-card{
  overflow: hidden;
    border-radius: 15px;
   

}
.features,.price,.location{
   
    display: flex;
    align-items: center;
  padding: 0;
  margin: auto;
  margin-bottom: 10px;
   
}
.location{
    margin-bottom: 0;
}
.feature{
   
    padding-top: 25px;
}
.f-head{
    font-size: 15px;
    padding-right: 10px;
    font-weight: "semi-bold";
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  
   
}
.fprice{
    margin:auto;
    margin-left: 20px;
}

</style>