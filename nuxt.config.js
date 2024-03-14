import colors from "vuetify/es5/util/colors";

export default {
  ssr: false,
  target: "static",
  head: {
    titleTemplate: "%s - kai-bandara",
    title: "kai-bandara",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ["@nuxtjs/vuetify", "@nuxtjs/moment"],

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/device",
    "@nuxtjs/auth-next",
    "@nuxtjs/toast",
  ],

  axios: {
    baseURL: process.env.API
      ? process.env.API
      : "https://reservationdev.railink.co.id:8001/api/service/artsmidapp/",
  },

  auth: {
    redirect: {
      login: "/login",
      logout: false,
      callback: false,
      home: "/",
    },
    strategies: {
      local: {
        token: {
          property: "test",
          type: "Bearer",
          global: true,
          maxAge: 86400,
        },
        user: {
          property: "data",
        },
        endpoints: {
          login: { url: "/api/auth/login", method: "post" },
          logout: { url: "/api/auth/logout", method: "get" },
          user: { url: "/api/auth/me", method: "get" },
        },
      },
    },
  },
  toast: {
    position: "bottom-center",
    duration: 3000,
  },

  moment: {
    defaultLocale: "id",
    locales: ["id"],
  },
  vuetify: {
    treeShake: true,
    defaultAssets: {
      font: {
        family: "Rubik",
      },
    },
    theme: {
      light: true,
      themes: {
        light: {
          color1: "#2e2c71",
          color2: "#f16827",
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
