<template>
  <div class=" bg-yellow-500 mx-auto flex items-center justify-center flex-col p-8" ref="table">
    <h1 class=" text-green-600">Hola Mundo</h1>
    <h3>PDF Generado con Vue y Tailwind</h3>
    <img src="../../../../../public/spiderman.jpeg" class=" w-[100px] h-[100px] rounded-full object-cover">
    <img src="../../../../../public/spiderman.jpeg" class=" w-[100px] h-[100px] rounded-full object-cover">
    <img src="../../../../../public/spiderman.jpeg" class=" w-[100px] h-[100px] rounded-full object-cover">
    <img src="../../../../../public/spiderman.jpeg" class=" w-[100px] h-[100px] rounded-full object-cover">

    <button @click="onDownload" class=" bg-red-500 p-8 rounded-md">Download PDF</button>
  </div>

  <!-- iframe para mostrar el PDF -->
  <iframe ref="pdfViewer" style="width: 100%; height: 500px;"></iframe>
</template>

<script setup>
import { ref } from "vue";
import { jsPDF } from "jspdf";
import domtoimage from "dom-to-image";

const table = ref(null);
const pdfViewer = ref(null);


const onDownload = () => {
  const tableWidth = table.value.clientWidth;
  const tableHeight = table.value.clientHeight;

  console.log(tableWidth)
  console.log(tableHeight)

  console.log(table)

  // Convert HTML table to PNG image using dom-to-image
  domtoimage.toPng(table.value).then((imageData) => {
    // Create a new jsPDF document
    const pdf = new jsPDF("l", "pt", [tableWidth, tableHeight],true);
    // Add the PNG image to the PDF document
    pdf.addImage(imageData, "PNG", 0, 0, tableWidth, tableHeight);
    // Save the PDF document
    console.log(pdf)
    pdf.save("fileName.pdf");
    const pdfData = pdf.output('datauristring',{filename:"fileNameOutput.pdf"})

    console.log(pdfData)
    pdfViewer.value.src = pdfData;
  });
};
</script>


