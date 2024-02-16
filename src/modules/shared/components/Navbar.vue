<template>
  <div
    class="px-[30px] flex items-center justify-center font-bold text-[#2c3e50] gap-[10px] underline"
  >
    <!-- <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link> -->
    <CustomLink v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";

export default {
  name: "Navbar",

  components: {
    CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
  },

  setup() {
    const links = ref([
      { to: "/", name: "Home" },
      { to: "/alertHome/4", name: "Por ID" },
      { to: "/about", name: "About" },
      { to: "/pdf/6", name: "Pdf" },
      { to: "https://google.com", name: "Google" },
    ]);

    return {
      links,
    };
  },
};
</script>

<style scoped>
/* a.router-link-exact-active {
    color: #42b983;
} */
</style>
