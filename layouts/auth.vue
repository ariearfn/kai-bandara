<template>
  <v-app>
    <!-- <HeaderAuth /> -->
    <v-main>
      <!-- <NavigationAuth /> -->
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
// import HeaderAuth from "@/components/HeaderAuth.vue";
// import NavigationAuth from "@/components/NavigationAuth.vue";
export default {
  name: "AuthLayout",
  // components: { HeaderAuth, NavigationAuth },
  middleware: "auth",
  data() {
    return {};
  },
};
</script>
