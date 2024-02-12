<template>

  <Navbar />

  <section class=" mx-auto max-w-[1120px] text-center">
    <router-view/>
  </section>


  
</template>

<script>

import {defineAsyncComponent} from 'vue'


export default {
  name:"App",
  components:{
        Navbar:defineAsyncComponent( () => import(/* webpackChunkName: "NavbarChunk" */ './modules/shared/components/Navbar.vue'))
    }

}
</script>

