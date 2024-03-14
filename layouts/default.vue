<template>
  <v-app>
    <v-main>
      <HeaderFooter />
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import HeaderFooter from "@/components/HeaderFooter.vue";
export default {
  name: "DefaultLayout",
  components: { HeaderFooter },
  data() {
    return {};
  },
};
</script>
