<template>
  <div>
    <v-app-bar
      fixed
      elevate-on-scroll
      height="80px"
      color="white"
      elevation="4"
      :class="$device.isDesktop ? 'px-16' : ''"
    >
      <v-img
        src="/kai-bandara.webp"
        max-width="100px"
        position="left left"
        transition="fab-transition"
        @click="$router.go()"
      />
      <v-spacer v-if="isMobile" />
      <v-menu v-if="isMobile" offset-y>
        <template #activator="{ on, attrs }">
          <v-btn absolute right icon v-bind="attrs" v-on="on">
            <v-icon color="color1">mdi-menu</v-icon></v-btn
          >
        </template>
        <v-list class="pa-0">
          <v-list-item
            v-for="(mobileMenuObject, mobileMenuIndex) in menu"
            :key="mobileMenuIndex"
            :to="mobileMenuObject?.to"
            color="color1"
          >
            <v-list-item-title>
              {{ mobileMenuObject?.title ? mobileMenuObject?.title : "?" }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-btn to="/login" class="text-none color1 white--text" block>
              Login
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-tabs v-else centered color="color1" hide-slider>
        <v-tab
          v-for="(menuObject, menuIndex) in menu"
          :key="menuIndex"
          :to="menuObject?.to"
          active-class="font-weight-bold"
          class="text-none subtitle-1"
        >
          {{ menuObject?.title ? menuObject?.title : "?" }}
        </v-tab>
      </v-tabs>
      <v-row v-if="$auth.user" no-gutters>
        <v-list-item>
          <v-list-item-avatar size="50">
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
            />
          </v-list-item-avatar>
          <v-row no-gutters>
            <v-col cols="12">
              <span class="subtitle-2 font-weight-bold">{{
                $auth.user.name
              }}</span></v-col
            >
            <v-col cols="12">
              <span class="caption font-weight-normal grey--text">{{
                $auth.user.role
              }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-menu left offset-y>
              <template #activator="{ on, attrs }">
                <v-btn
                  color="white"
                  fab
                  x-small
                  elevation="0"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list class="pa-0">
                <v-list-item-group color="color1">
                  <v-list-item @click="$router.push('/pesanan')">
                    <v-list-item-icon>
                      <v-icon>mdi-cart-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Pesanan Saya</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item
                    @click="$toast.info('This feature is on development 😊')"
                  >
                    <v-list-item-icon>
                      <v-icon>mdi-clipboard-text-clock</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Riwayat Pesanan</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item @click="handleLogout">
                    <v-list-item-icon>
                      <v-icon>mdi-logout</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </v-row>
        </v-list-item>
      </v-row>
      <v-row v-else no-gutters>
        <!-- Login btn -->
        <v-col cols="5" align-self="center">
          <v-btn
            v-if="$device.isDesktop"
            elevation="0"
            class="font-weight-bold black--text transparent text-none"
            to="/login"
            style="border-radius: 10px; margin-right: 100px"
          >
            Login
          </v-btn>
        </v-col>
        <!-- Register btn -->
        <v-col cols="5" align-self="center">
          <v-btn
            v-if="$device.isDesktop"
            elevation="0"
            class="font-weight-bold white--text text-none"
            color="color1"
            to="/register"
            outlined
            style="border-radius: 10px; border-color: #d30100"
          >
            Register
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-footer app class="justify-center white--text color1">
      {{ footerText }}
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "HeaderFooter",
  props: {
    menu: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    footerText() {
      return "Copyright © 2022 PT Railink | All Rights Reserved";
    },
    isMobile() {
      const innerWidth = parseInt(window.innerWidth);
      if (innerWidth < 800) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    handleLogout() {
      try {
        this.$auth.logout();
        this.$router.push("/");
      } catch (err) {
        this.$toast.error(err);
      }
    },
  },
};
</script>

<style></style>
