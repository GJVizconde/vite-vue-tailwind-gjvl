<template>
  <div>
    <PdfGenerator1 v-if="id === 1" />
    <PdfGenerator2 v-if="id === 2" :htmlContent="htmlContent" />
    <PdfGenerator3 v-if="id === 3" />
    <PdfGenerator4 v-if="id === 4" />

    <PdfGenerator5 v-if="id === 5" />

    <PdfGenerator6 v-if="id === 6" :htmlContent="htmlContent" />
    <PdfGenerator7 v-if="id === 7" :htmlContent="htmlContent" />

  </div>
</template>

<script>
import PdfGenerator1 from "../components/Pdf/PdfGenerator1.vue";
import PdfGenerator2 from "../components/Pdf/PdfGenerator2.vue";
import PdfGenerator3 from "../components/Pdf/PdfGenerator3.vue";
import PdfGenerator4 from "../components/Pdf/PdfGenerator4.vue";
import PdfGenerator5 from "../components/Pdf/PdfGenerator5.vue";
import PdfGenerator6 from "../components/Pdf/PdfGenerator6.vue";
import PdfGenerator7 from "../components/Pdf/PdfGenerator7.vue";

export default {
  components: {
    PdfGenerator1,
    PdfGenerator2,
    PdfGenerator3,
    PdfGenerator4,
    PdfGenerator5,
    PdfGenerator6,
    PdfGenerator7,
  },

  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  setup() {
    const htmlContent =
    '<div ref="table" class="h-full bg-yellow-500 p-32"><article class="bg-violet-800 text-white mt-24 mx-auto px-6 rounded-md text-center max-w-[333px] min-h-[200px] py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]"><img src="https://img2.rtve.es/i/?w=1600&i=1442912664626.jpg" class="w-40 h-40 mx-auto mb-4 rounded-full object-cover"/><h2 class="text-2xl/tight mt-6 mb-8 font-bold">Spiderman</h2><p class="text-lg mb-6 font-light">Hola Mundo!</p><a href="#" class="bg-white text-violet-800 py-2 px-8 inline-block rounded-[50px] text-sm">fasafa</a></article></div>';;

    return {
      htmlContent,
    };
  },
};
</script>
