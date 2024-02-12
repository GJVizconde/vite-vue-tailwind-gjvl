<template>

    <div class=" px-[30px]  flex items-center justify-center font-bold text-[#2c3e50] gap-[10px] underline" >
        <router-link to="/">Home</router-link>
        <!-- <router-link :to="{name:'alertHome-id', params:{id:50}}">Id</router-link> -->
        <router-link to="/about">About</router-link>

    </div>
  
</template>

<script>




export default {
    name:"Navbar",

    

    
   

}
</script>

<style scoped>

a.router-link-exact-active {
    color: #42b983;
}

</style>