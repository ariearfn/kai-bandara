<template>
  <div v-if="!$device.isDesktop">
    <v-app-bar
      elevation="4"
      app
      color="color1"
      height="60"
      class="font-weight-bold color1--text"
    >
      <v-avatar size="40" color="white" class="mr-2">
        <v-img src="/logo.png" contain />
      </v-avatar>
      PT SAS <sub> v1.0</sub>
      <v-spacer />
      <!-- <LogoutConfirmation /> -->
    </v-app-bar>
    <v-bottom-navigation
      :value="mobileNav"
      app
      height="80"
      active-class="grey lighten-4"
      color="color1"
      grow
    >
      <v-btn
        v-for="nav in navigation"
        :key="nav.title"
        :to="nav.to"
        :value="nav.to"
      >
        <span>{{ nav.title }}</span>
        <v-icon>{{ nav.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>

  <v-navigation-drawer
    v-else
    mobile-breakpoint="0"
    app
    :mini-variant.sync="mini"
    color="grey lighten-5"
  >
    <v-list-item-content style="background-color: red">
      <v-row v-if="!mini" class="justify-center mb-4 mt-2" no-gutters>
        <v-img src="/logo.png" max-width="60" />
      </v-row>

      <v-card-title
        v-if="!mini"
        class="py-0 display-1 font-weight-bold white--text justify-center"
        @click="mini = !mini"
      >
        PT SAS
        <v-card-title class="py-0 px-0 ml-2 caption white--text justify-center">
          v1.0
        </v-card-title>
      </v-card-title>

      <v-icon
        v-else
        large
        transition="scale-transition"
        color="color1"
        @click="mini = !mini"
        >mdi-arrow-right
      </v-icon>
    </v-list-item-content>
    <v-list dense nav>
      <v-list-item
        v-for="item in navigation"
        :key="item.title"
        :to="item.to"
        :value="activeItem"
        class="px-0"
        @click="click"
      >
        <v-list-item-icon transition="scale-transition">
          <v-icon right color="">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="text-style" style="font-weight: 600">{{
          item.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <template #append>
      <!-- <LogoutConfirmation :mini="mini" /> -->
    </template>
  </v-navigation-drawer>
</template>

<script>
// import LogoutConfirmation from "./LogoutConfirmation.vue";
export default {
  name: 'NavigationAuth',
  components: {
    // LogoutConfirmation
  },
  props: {},
  data() {
    return {
      listItem: undefined,
      listGroupItem: {},
      mini: false,
      mobileNav: '',
      navigation: [
        {
          title: 'Dashboard',
          icon: 'mdi-monitor-dashboard',
          to: '/app/dashboard',
        },
        {
          title: 'Users',
          icon: 'mdi-human-greeting',
          to: '/app/user',
        },
        {
          title: 'Categories',
          icon: 'mdi-shape',
          to: '/app/category',
        },
        {
          title: 'Products',
          icon: 'mdi-medication',
          to: '/app/product',
        },
        {
          title: 'Orders',
          icon: 'mdi-room-service',
          to: '/app/order',
        },
      ],
    }
  },
  computed: {
    activeItem() {
      return this.listItem
    },
    activeGroup() {
      return this.listGroupItem
    },
  },
  methods: {
    click() {
      this.listItem = true
      this.listGroupItem = {}
    },
    clickGroup(title) {
      this.listItem = undefined
      this.listGroupItem[title] = true
    },
  },
}
</script>
<style scoped>
.v-application .primary--text {
  color: black !important;
  caret-color: black !important;
}
.v-list .v-list-item--active {
  background-color: #d30100 !important;
  color: white;
  border-color: #eadeda !important;
  caret-color: #8a3033 !important;
}
.v-list .v-list-item-icon--active .v-icon {
  color: white;
}

.v-list--rounded .v-list-item,
.v-list--rounded .v-list-item::after,
.v-list--rounded .v-list-item > .v-ripple__container {
  border-radius: 22px 22px 22px 22px !important;
}
.v-list--rounded .v-list-item,
.v-list--rounded .v-list-item::before,
.v-list--rounded .v-list-item > .v-ripple__container {
  border-radius: 22px 22px 22px 22px !important;
}

.v-list--rounded .v-list-item {
  border-radius: 22px 22px 22px 22px !important;
}
.v-list--rounded {
  padding-right: 5px;
  padding-left: 10px;
}
.text-style {
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
</style>
