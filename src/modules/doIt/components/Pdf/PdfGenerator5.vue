<template>
  <h1>PdfGenerator5!</h1>
  
  <div ref="table" class=" h-100vh bg-yellow-500 p-32">
    <article
    class="w-5/6  bg-violet-800 text-white
       mt-24 mx-auto px-6  rounded-md text-center max-w-[333px] min-h-[200px] py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]">
      <img src="../../../../../public/spiderman.jpeg"
        class="w-40 h-40 mx-auto mb-4 rounded-full object-cover">
      <h2 class="text-2xl/tight mt-6 mb-8 font-bold">Soy Spiderman</h2>
      <p class="text-lg mb-6 font-light">Bienvenido a mi universo!</p>
      <a href="#" class="bg-white text-violet-800 py-2 px-8 inline-block rounded-[50px] text-sm">fasafa</a>
    </article>
  </div>

    <button @click="onDownload" class=" bg-red-500 p-8 rounded-md">Download PDF</button>
 

  <!-- iframe para mostrar el PDF -->
  <iframe ref="pdfViewer" style="width: 100%; height: 500px;"></iframe>
</template>

<script>
import { ref } from "vue";
import { jsPDF } from "jspdf";
import domtoimage from "dom-to-image";

export default{

  setup(){

    const table = ref(null);
    const pdfViewer = ref(null);


const onDownload = () => {
  const tableWidth = table.value.clientWidth;
  const tableHeight = table.value.clientHeight;

  console.log(tableWidth)
  console.log(tableHeight)

  // Convert HTML table to PNG image using dom-to-image
  domtoimage.toPng(table.value)
  .then((imageData) => {
    // Create a new jsPDF document
    const pdf = new jsPDF("l", "pt", [tableWidth, tableHeight], true);
    // Add the PNG image to the PDF document
    pdf.addImage(imageData, "PNG", 0, 0, tableWidth, tableHeight);
    // Save the PDF document
   
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


