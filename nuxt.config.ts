// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint";
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Anime Thai List",
      meta: [{ name: "description", content: "Anime Thai List." }],
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
    baseURL: 'anime-thai-list'
  },

  ssr: false,

  typescript: {
    strict: true,
    typeCheck: true,
  },

  plugins: ["~/plugins/sweetalert2.ts"],

  modules: ["@intlify/nuxt3", "@pinia/nuxt", "@element-plus/nuxt"],

  css: [
    "bootstrap/dist/css/bootstrap.css",
    "@fortawesome/fontawesome-free/css/all.css",
    "assets/sass/app.scss",
  ],

  vite: {
    plugins: [eslintPlugin()],
  },

  intlify: {
    localeDir: "locales",
    vueI18n: {
      locale: "en",
      fallbackLocale: "en",
    },
  },
});
