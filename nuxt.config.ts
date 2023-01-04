import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/styles/app.scss",
    "vuetify/lib/styles/main.sass",
    "@fortawesome/fontawesome-free/css/all.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        config.plugins.push(vuetify())
      );
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // this will import on all components
          additionalData: '@use "sass:math"; @import "@/styles/variables";',
        },
      },
    },
  },
});
