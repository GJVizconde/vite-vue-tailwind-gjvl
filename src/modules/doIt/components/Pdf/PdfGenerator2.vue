<template>

    <h1>Pdf Viewer2</h1>

    
  <div id="app" ref="testHtml">
  <h1>Test heading </h1>
  <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  <button class="btn btn-danger" @click="generatePdf">generate PDF</button>
</div>



  
</template>

<script>

import { ref } from 'vue'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'



export default {
    name:"PdfGenerator2",
    props:["htmlContent"],
    components:{

    },

    

    setup(props) {

    const testHtml = ref(null)

    async function generatePdf  (){

      const content = document.createElement('div'); // Crear un nuevo elemento div
      content.innerHTML = props.htmlContent;
      

      

      console.log(testHtml.value)
      
      const canvas = await html2canvas(testHtml.value);
      const imgData = canvas.toDataURL('image/png');
      var doc = new jsPDF( 'p', 'mm', 'A4');
      doc.addImage(imgData, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
      doc.save('archivo.pdf');

    }

    return {
      generatePdf,
      testHtml
    }
  }
    

   
  
}
</script>


