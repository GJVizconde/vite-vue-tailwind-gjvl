<template>
    <div>
        <div
        :class=" [pBHeight, pbBg,  'rounded-r-3xl']"
        :style="{ width: increaseWith + '%' }"
        @mouseenter="mouseoverProgressBar()"
        @mouseleave="mouseoutProgressBar()"
        ></div>
    </div>
</template>

<script>

import {  onMounted, onUnmounted, ref, watch } from "vue";



export default {
    name:"Progressbar",
    props:{
        pauseAlert: {
            type:Boolean,
            default:false
        },

        pBHeight:{
            type: String,
            default:"h-[4px]",
        },

        pbBg:{
            type:String,
            default:"bg-gradient-to-r from-white to-amYellow"
        },

        pbIntervalTime:{
            type: Number,   // time in ms
            default:2000
        }
    },


    setup(props,{emit}){

        const idInterval = ref(null)
        const increaseWith = ref(0)


        const createSetInterval=()=>{
            
            idInterval.value = setInterval(() => {

                if(increaseWith.value===100){
                    increaseWith.value = 0;
                    emit('pushEmit', "push");
                }else{
                    increaseWith.value += 1 / 2 / 2;
                }

            }, Math.ceil(props.pbIntervalTime / 100 / 2 / 2));

        }

        const mouseoverProgressBar =() => {
            clearInterval(idInterval.value)
        }

        const mouseoutProgressBar = () => {
            createSetInterval()
        }

        watch(() => props.pauseAlert, (newValue, oldValue) => {

            if(newValue === true){
                clearInterval(idInterval.value)
            }else{
                createSetInterval()
            }
        });

        onMounted(()=>{
            createSetInterval()
            
        })

        onUnmounted(()=>{
            clearInterval(idInterval.value);

        })

        return{
            increaseWith,

            mouseoverProgressBar,
            mouseoutProgressBar
        }
    }
}
</script>

