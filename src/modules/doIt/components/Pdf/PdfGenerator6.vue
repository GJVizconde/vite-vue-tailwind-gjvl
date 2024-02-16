<template>
  <h1>PdfGenerator6!</h1>
  
  <div ref="table" class=" h-100vh bg-yellow-500 p-32">
    <article
    class="w-5/6  bg-violet-800 text-white
       mt-24 mx-auto px-6  rounded-md text-center max-w-[333px] min-h-[200px] py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]">
      <img src="../../../../../public/spiderman.jpeg"
        class="w-40 h-40 mx-auto mb-4 rounded-full object-cover">
      <h2 class="text-2xl/tight mt-6 mb-8 font-bold">Spiderman</h2>
      <p class="text-lg mb-6 font-light">Hola Mundo!</p>
      <a href="#" class="bg-white text-violet-800 py-2 px-8 inline-block rounded-[50px] text-sm">fasafa</a>
    </article>
  </div>

  <div ref="table2" v-html="htmlContent"></div>

    <button @click="onDownload" class=" bg-red-500 p-8 rounded-md">Download PDF</button>
 

  <!-- iframe para mostrar el PDF -->
  <iframe ref="pdfViewer" style="width: 100%; height: 500px;"></iframe>
</template>

<script>
import { ref } from "vue";
import { jsPDF } from "jspdf";
import domtoimage from "dom-to-image";

export default{

  props:["htmlContent"],

  setup(props){

    const table = ref(null);
    const table2 = ref(null)
    const pdfViewer = ref(null);

    console.log(props.htmlContent)


const onDownload = () => {
  const tableWidth = table.value.clientWidth;
  const tableHeight = table.value.clientHeight;

  console.log(tableWidth)
  console.log(tableHeight)

  domtoimage.toPng(table.value)
  .then((imageData) => {
    const pdf = new jsPDF("l", "pt", [tableWidth, tableHeight], true);
    pdf.addImage(imageData, "PNG", 0, 0, tableWidth, tableHeight);
   
    const pdfData = pdf.output('datauristring',{filename:"fileNameOutput.pdf"})


    pdfViewer.value.src = pdfData;

    
  })
  .catch((error)=>{
    console.log("Error al generar el PDF:",error)
  })
};

  return{
    table,
    pdfViewer,

    onDownload

  }



  }

}


</script>


