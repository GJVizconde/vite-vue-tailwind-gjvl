<template>
<div class="h-[4px] bg-amYellow  rounded-r-3xl transition-all max-w-1120 transition-width duration-500" :style="{ width: increaseWith + '%' }" ></div>
    <section
      class="flex bg-amHelperYellow gap-4 px-5 md:px-0  w-full relative "
      @mouseover="automaticAlertPosition(true)"       
      @mouseleave="automaticAlertPosition(false)"       
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

import {  onMounted, onUnmounted, ref, watch } from "vue";

import SymbolsCloseMenu from '../../../ui/assets/icons/SymbolsCloseMenu.vue'
import Warning from '../../../ui/assets/icons/Warning.vue'




export default {
    name:"AlertHome",
    props:["handleCloseAlert"],
    emits:["closeAlertEmit"],
    components:{
        SymbolsCloseMenu,
        Warning
    },
    setup(){

        const isComponentMounted = ref(false);

        const alertPosition = ref(0);

        const transitionTime = ref(500)

        const pauseAlert = ref(false)

        const increaseWith = ref(0)
       

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

        // const barAnimation = () => {

        //     intervalId = setInterval(increaseWith.value++, 500);
        //      return increaseWith.value;
        // };
        


        const handleButtonClick = ( index) =>{
            alertPosition.value = index
        }

        let intervalId

        const moveAlertPosition = () => {
        
        alertPosition.value = (alertPosition.value + 1) % alertMessages.value.length;
    };

        // const automaticAlertPosition =(pauseAlertEstatus)=>{

        //     pauseAlert.value=pauseAlertEstatus

        //     if(pauseAlert.value===false) {
        //         intervalId = setInterval(moveAlertPosition, transitionTime.value);
                
        //     }else{
        //         increaseWith.value++
        //         if(increaseWith.value===102)increaseWith.value=0
        //         clearInterval(intervalId)

        //     }
        // }

        // const automaticAlertPosition = (pause) => {

        //     if(!pause){

        //         setTimeout(()=>{
        //             increaseWith.value = increaseWith.value + (transitionTime.value / 100)
        //         }, transitionTime)

        //     }

        // }

        // const automaticAlertPosition = () => {
        //     intervalId = setInterval(() => {
        //         if (!pauseAlert.value) {
        //             increaseWith.value = increaseWith.value +( transitionTime.value / 100);
        //         }
        //     }, transitionTime.value);
        // }

//         const automaticAlertPosition = () => {
//             let startTimestamp;

//             const animate = (timestamp) => {

//                 if (!startTimestamp) startTimestamp = timestamp;

//                 const progress = timestamp - startTimestamp;

//                 if (!pauseAlert.value) {
//                     increaseWith.value = Math.min(progress / transitionTime.value * 100, 100);
                    
//                     if (progress < transitionTime.value) {
//                         requestAnimationFrame(animate);
//                     } else {
//                         startTimestamp = null;
//                         increaseWith.value = 0; // Reinicia a cero una vez que alcanza el 100%
//                         requestAnimationFrame(animate);
//                     }
//                 }
//             };
//     requestAnimationFrame(animate);
// };

        const automaticAlertPosition=(pause)=>{

            if (!pause && isComponentMounted.value){
                intervalId = setInterval(() => {

                    increaseWith.value = increaseWith.value + (2000/110)

                    console.log(increaseWith.value)

                    if(increaseWith.value > 110){

                        increaseWith.value = 0

                        moveAlertPosition()

                    }
                    
                }, transitionTime.value);
            }else{
                clearInterval(intervalId);
                
            }

        }

 
        

        onMounted(()=>{
            isComponentMounted.value = true;
            automaticAlertPosition(false)
            
        })

        onUnmounted(()=>{
            isComponentMounted.value = false;
            clearInterval(intervalId);

            console.log(" Unmounted YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        })
        return{
            alertMessages,
            alertPosition,
            pauseAlert,
            increaseWith,

            handleButtonClick,
            automaticAlertPosition,
            
        }

    }

}
</script>

