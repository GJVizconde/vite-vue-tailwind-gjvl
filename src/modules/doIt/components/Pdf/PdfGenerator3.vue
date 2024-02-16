<template>
  <div>
    <h1>Pdf Viewer3</h1>

    <div ref="htmlContent">
      <!-- Tu HTML aquí -->
      <h1>Ejemplo de HTML para PDF</h1>
      <p>Este es un ejemplo de contenido HTML que se convertirá en un archivo PDF.</p>
    </div>
    <button @click="generatePdf">Generar PDF</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default {
  setup() {
    const htmlContent = ref(null);

    const generatePdf = async () => {
      const content = htmlContent.value;
      const canvas = await html2canvas(content);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
      pdf.save('archivo.pdf');
    };

    return {
      htmlContent,
      generatePdf
    };
  }
};
</script>