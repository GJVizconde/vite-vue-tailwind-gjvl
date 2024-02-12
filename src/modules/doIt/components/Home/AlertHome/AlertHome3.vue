<template>
<div class="h-[4px] bg-amYellow  rounded-r-3xl l max-w-1120  " :style="{ width: increaseWith + '%' }" ></div>
    <section
      class="flex bg-amHelperYellow gap-4 px-5 md:px-0  w-full relative "
      @mouseover="mouseoverProgressBar()"       
      @mouseout="mouseoutProgressBar()"       
    >
        <div class=" mx-auto flex flex-col md:flex-row items-start md:items-center justify-between w-full md:px-5 py-[10px] md:py-[10px] gap-[10px]  md:gap-4 lg:gap-8">

            <div class=" flex gap-[10px] items-center  py-1 ">

                <Warning class="hidden md:flex mx-auto"></Warning>
                
             
                    <p class=" max-h-[48px]  md:h-full text-[10px] md:text-xs lg:text-sm overflow-auto pr-4 pt-[3px]">
                        <span class=" font-semibold text-left">Aviso importante.</span>
                        {{alertMessages[alertPosition].message}}
                        <a :href="alertMessages[alertPosition].link">Conoce más</a>
                    </p>
            </div>
            <div class=" flex items-center gap-8 ">
                <div class=" flex gap-2">
                    <button
                        :class="{ 
                                    'bg-amBluePremium': index === alertPosition,
                                    'opacity-20': index !== alertPosition 
                                }"               
                        class=" w-[7px] h-[7px] rounded-full bg-amBluePremium  "
                        v-for=" (alertMessage,index) in alertMessages" :key="index"
                        @click="handleButtonClick(index)"        
                      ></button>
                </div>
                <SymbolsCloseMenu 
                class="hidden md:block md:cursor-pointer"
                @click="$emit('closeAlertEmit')"
                />
            </div>
        
        </div>
        <SymbolsCloseMenu
          class="py-[10px] md:hidden mx-auto self-start flex-shrink-0 cursor-pointer mt-[3px]"
          @click="$emit('closeAlertEmit')"

        />
    </section>

    
  
</template>

<script>

import {  onMounted, onUnmounted, ref } from "vue";

import SymbolsCloseMenu from '../../../ui/assets/icons/SymbolsCloseMenu.vue'
import Warning from '../../../ui/assets/icons/Warning.vue'




export default {
    name:"AlertHome3",
    props:["handleCloseAlert"],
    emits:["closeAlertEmit"],
    components:{
        SymbolsCloseMenu,
        Warning
    },
    setup(){

        const idInterval = ref(null)
        const transitionTime = ref(2000)
        const increaseWith = ref(0)
        

        const alertPosition = ref(0);

        

        const pauseAlert = ref(false)

        
       

        const alertMessages = ref([
            {
                id: 1,
                title: "Alert_1",
                message:
                    "Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.",
                link: "https://www.google.com",
            },
            {
                id: 2,
                title: "Alert_2",
                message:
                    "Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.2",
                link: "https://www.google.com",
            },
            {
                id: 3,
                title: "Alert_3",
                message:
                    "Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.3",
                link: "https://www.google.com",
            },
            {
                id: 4,
                title: "Alert_4",
                message:
                    "Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.4",
                link: "https://www.google.com",
            }
 
        ])




        const handleButtonClick = ( index) =>{
            alertPosition.value = index
        }

        

        const moveAlertPosition = () => {
        
        alertPosition.value = (alertPosition.value + 1) % alertMessages.value.length;
    };

        const createSetInterval=()=>{

            
                idInterval.value = setInterval(() => {

                    if(increaseWith.value===100){
                        moveAlertPosition()
                        increaseWith.value = 0;
                    }else{
                        increaseWith.value += 1 / 2 / 2;
                    }

                    
                    
                }, Math.ceil(transitionTime.value / 100 / 2 / 2));
         

        }

        const mouseoverProgressBar =() => {
            clearInterval(idInterval.value)
            console.log("Mouseover working")
        }

        const mouseoutProgressBar = () => {
            createSetInterval()
            console.log("Mouseout working")
        }

 
        

        onMounted(()=>{
            createSetInterval()
            
        })

        onUnmounted(()=>{
            clearInterval(idInterval.value);

            console.log(" Unmounted YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        })
        return{
            alertMessages,
            alertPosition,
            pauseAlert,
            increaseWith,

            handleButtonClick,
            mouseoutProgressBar,
            mouseoverProgressBar
            
        }

    }

}
</script>

