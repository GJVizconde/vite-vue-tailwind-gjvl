<template>
    <section class=" max-w-[1120px]   justify-center mx-auto    relative overflow-hidden">

      <h1 class=" mb-11 mt-7">AlertHome: <span>#{{ id }}</span></h1>

      <div v-if="id===1">
        <AlertHome
          v-if="alertVisible"
          @closeAlertEmit="closeAlert"
          />
      </div>

  
      <div v-if="id===2">
        <AlertHome2
          v-if="alertVisible"
          @closeAlertEmit="closeAlert"
          />
      </div>

      <div v-if="id===3">
        <AlertHome3
          v-if="alertVisible"
          @closeAlertEmit="closeAlert"
          />
      </div>
  
  
    </section>
  </template>
  
  <script>
  
  import { ref } from 'vue'
  
  
  import AlertHome from '../components/Home/AlertHome/AlertHome.vue'
  import AlertHome2 from '../components/Home/AlertHome/AlertHome2.vue'
  import AlertHome3 from '../components/Home/AlertHome/AlertHome3.vue'
  
  export default {
    name: "AlertHomeV1",
    components:{
      AlertHome,
      AlertHome2,
      AlertHome3
    },
    props:{

      id:{
        type:Number,
        required:true
      }

    },
  
    setup(){  
  
      const alertVisible = ref(true)
  
      const closeAlert = () =>{
  
        alertVisible.value = false
  
      }
  
      return{
        alertVisible,
        closeAlert
      }
  
    }
  }
  
  </script>
  
  