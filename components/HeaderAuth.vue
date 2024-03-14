<template>
  <v-app-bar
    v-if="$device.isDesktop"
    fixed
    height="80"
    color="blue-grey lighten-5"
    dense
    elevate-on-scroll
  >
    <v-row no-gutters class="transparent">
      <v-img
        src="/logo.png"
        contain
        eager
        max-width="150"
        class="ml-16"
        @click="$router.push('/')"
      />
    </v-row>
    <!-- <PublicNavigationTabAuth v-if="$device.isDesktop" /> -->
  </v-app-bar>
  <v-app-bar v-else fixed height="50" color="#fff" elevate-on-scroll>
    <v-row class="transparent">
      <v-img
        src="/logo.png"
        aspect-ratio="1.3"
        eager
        max-width="110"
        class="ml-4"
        height="40"
        contain
        @click="$router.push('/')"
      />
    </v-row>
    <!-- <PublicNavigationTabAuth v-if="$device.isDesktop" /> -->
    <!-- <PublicNavigationDropdown :items="menu" /> -->
  </v-app-bar>
</template>

<script>
// import PublicNavigationTabAuth from './PublicNavigationTabAuth.vue'
// import PublicNavigationDropdown from './PublicNavigationDropdown.vue'
export default {
  name: 'HeaderAuth',
  components: {
    // PublicNavigationTabAuth,
    // PublicNavigationDropdown,
  },
  data() {
    return {
      menu: [{ title: 'Login', to: `/login` }],
    }
  },
  computed: {},
  methods: {},
}
</script>
