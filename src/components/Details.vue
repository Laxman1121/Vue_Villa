<template>
    <div class="main-container">
        <div id="q-app" style="min-height: 100%;">
            <div class="">
                <q-carousel
                  swipeable
                  animated
                  v-model="slide"
                  :autoplay="autoplay"
                  ref="carousel"
                  infinite
                  >
                  <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg"></q-carousel-slide>
                  <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg"></q-carousel-slide>
                  <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg"></q-carousel-slide>
                  <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg"></q-carousel-slide>
            
                  <template v-slot:control>
                 
                    <q-carousel-control
                      position="bottom-right"
                      :offset="[18, 18]"
                      class="q-gutter-xs"
                    >
                      <q-btn
                        push round dense color="orange" text-color="black" icon="arrow_left"
                        @click="$refs.carousel.previous()"
                      ></q-btn>
                      <q-btn
                        push round dense color="orange" text-color="black" icon="arrow_right"
                        @click="$refs.carousel.next()"
                      ></q-btn>
                    </q-carousel-control>
                  </template>
                </q-carousel>
              </div>
            </div>
          <div class="maincard">
            <div class=" q-mt-xs text-h3 text-weight-bold text-red-6" style="text-decoration:underline;">{{villa.name}}</div>
            <div class="features">
                <p class=" q-mt-sm q-mb-xs text-black f-head">Features: </p>
               
               <div class="feature">
                <span  class="text-italic  text-bold text-h5 feature" v-for="feature in villa.features" :key="feature">{{feature+',' }} <span></span></span>
               </div>
            </div>
            <div class="price">
                <p class=" q-mt-sm q-mb-xs text-black f-head">Price: </p>
               
                <div class="fprice">
                 <span  class="text-h5 text-bold text-green-7"  >${{villa.price}} <span></span></span>
                </div>
            </div>
            <div class="location">
                <p class=" q-mt-sm q-mb-xs text-black f-head">Location: </p>
               
                <div style="margin-top: 3px;">
                 <span  class="text-italic text-bold text-h5"    >{{villa.location}}</span>
                </div>
            </div>
            <div class="q-pa-md q-gutter-sm button-container">
            
              <q-btn :loading="loading" color="secondary" class=" q-px-xl q-py-xs" size="lg" rounded no-caps  @click="confirmModal" label="Book"></q-btn>
              <q-btn :loading="loading" color="red" style="background-color: white !important;" class=" q-px-xl q-py-xs q-mx-lg " size="lg"  outline rounded no-caps  @click="cancelHandler" label="Cancel"></q-btn>
              </div>
          </div>
         

    </div>
</template>


<script setup>
import {ref,onMounted} from "vue"
import {useRoute,useRouter} from "vue-router";
import axios from 'axios'
const route =useRoute();
const router =useRouter();

const villa =ref({})
const {id}=route.params;
const loading = ref([
      false,
      false,
    ])
  const autoplay=ref(true);
  const slide =ref(1);
console.log(id)
  onMounted(async() => {
    console.log("mounred")
    const {data} =await axios.get(`http://localhost:3000/villas/${id}`);
    console.log(data)
   villa.value =data;
  })


const confirmModal =()=>{
  alert('Booked SUccesfully')
}
const cancelHandler=()=>{
  router.push({path:'/'})
}
</script>


<style scoped>
.main-container{
   display: flex;
   flex-direction: column;
}
.maincard{
  background-color: rgb(209, 223, 233);
  width: 100%;
  height: auto;
 
}
.features,.price,.location{
   
  display: flex;
  align-items: center;
padding: 0;
margin: auto;
margin-bottom: 10px;
 
}
.feature{
  margin-top: -20px;
  padding-top: 25px;
}
.location{
  margin-bottom: 0;
}

.f-head{
  font-size: 20px;
  padding-right: 10px;
  font-weight: "bold";
  font: 2rem sans-serif;
  font-family: 'sans-serif';

 
}
.fprice{
  margin:auto;
  margin-left: 20px;
}

.button-container{
  display: flex;
  justify-content: center;
}
</style>