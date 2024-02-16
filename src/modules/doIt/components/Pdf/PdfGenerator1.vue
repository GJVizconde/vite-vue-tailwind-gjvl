<template>

    <h1>Pdf Viewer1</h1>
    <div class=" flex items-center justify-center flex-col">
    <div class=" flex gap-8">
      <button @click="page = page > 1 ? page - 1 : page">
        Prev
      </button>
      
      <button @click="page = page < pages ? page + 1 : page">
        Next
      </button>
    </div>
    <span >{{ page }} / {{ pages }}</span>
    
    <VuePDF  :pdf="pdf" :page="page" />
  </div>




        <!-- <div class="bg-white p-4 rounded-lg shadow-md">
    <button @click="generatePDF" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Generar PDF
    </button>
    <pdf v-if="pdfData" :src="pdfData" class="mt-4"></pdf>


    <div ref="contentToConvert" class="hidden">
      <h1 class="text-2xl font-bold mb-2">Ejemplo de Contenido</h1>
      <p class="text-gray-700">Este es un ejemplo de contenido que se convertirá en PDF.</p>
    </div>
  </div> -->


  
</template>

<script>
import { ref } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'


export default {
    name:"PdfGenerator1",
    props:["htmlContent"],
    components:{
        VuePDF,usePDF
       
    },

    setup(){

        const page = ref(1)
        const { pdf, pages } = usePDF('https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf')

        // const pdfData = ref(null); // Almacenar el PDF generado como datos URI

        // const contentToConvert = ref(null);

        // const generatePDF = () => {
        //     const content = contentToConvert.value;
        //         html2pdf().from(content).then(pdf => {
        //         pdfData.value = pdf.output('datauristring');
        //         });
        // };

        

        return{
            // pdfData,
            // generatePDF,
            // contentToConvert,
            page,
            pdf,
            pages
            
        }


    }


}
</script>

