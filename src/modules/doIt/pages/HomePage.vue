
<template>
    <h1>Home Page</h1>
    <div class=" flex gap-5 items-center justify-center mt-4">
        <button class=" bg-slate-500 p-3 rounded-lg text-white" @click="routeAlertPage(1)">Alerta1</button>
        <button class=" bg-slate-500 p-3 rounded-lg text-white" @click="routeAlertPage(2)">Alerta2</button>
        <button class=" bg-slate-500 p-3 rounded-lg text-white" @click="routeAlertPage(3)">Alerta3</button>
        <button class=" bg-slate-500 p-3 rounded-lg text-white" @click="routeAlertPage(4)">Alerta4</button>
        
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {    
    name:"HomePage",

    setup(){

        const router = useRouter()

        const routeAlertPage =(id)=>{

            router.push({name:'alertHome-id', params: { id }})

        }

        return{
            routeAlertPage
        }
    }
}


</script>