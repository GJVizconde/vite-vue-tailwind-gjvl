<template>
    <div>
        <h1>Hola PDF Mundo!</h1>
        <PdfGenerator1
        v-if="id===1"
      
        />
        <PdfGenerator2
        v-if="id===2"
        :htmlContent="htmlContent"
        
        />
        <PdfGenerator3
        v-if="id===3"
        />
        <PdfGenerator4
        v-if="id===4"
        />

        <PdfGenerator5
        v-if="id===5"
        />

        <PdfGenerator6
        v-if="id===6"
        :htmlContent="htmlContent"
        />

    </div>
  
</template>

<script>
import PdfGenerator1 from '../components/Pdf/PdfGenerator1.vue'
import PdfGenerator2 from '../components/Pdf/PdfGenerator2.vue'
import PdfGenerator3 from '../components/Pdf/PdfGenerator3.vue'
import PdfGenerator4 from '../components/Pdf/PdfGenerator4.vue'
import PdfGenerator5 from '../components/Pdf/PdfGenerator5.vue'
import PdfGenerator6 from '../components/Pdf/PdfGenerator6.vue'

export default {

    components:{
        PdfGenerator1,
        PdfGenerator2,
        PdfGenerator3,
        PdfGenerator4,
        PdfGenerator5,
        PdfGenerator6,

    },

    props:{

        id:{
            type:Number,
            required:true
        }

    },

    setup(){
        const htmlContent = '<div class=" bg-green-500 flex items-center justify-center mx-auto"><h1 class="text-4xl font-bold text-red-500">Hello World!!!</h1></div>'

        return{
            htmlContent
        }
    }

}
</script>
