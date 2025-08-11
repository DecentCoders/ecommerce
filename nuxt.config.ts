// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/test-utils", // '@prisma/nuxt'
    "@nuxt/image", "@nuxt/eslint",
    // "@pinia-plugin-persistedstate/nuxt",
    "nuxt-lodash"],
  css: ["~/assets/css/main.css"],
  colorMode: {
    // This is important! It ensures the 'dark' class is applied directly to <html>
    // instead of something like 'dark-mode', which Tailwind CSS expects.
    classSuffix: ''
  },
  runtimeConfig: {
    public: {
      stripePK: process.env.STRIPE_PK_KEY
    }
  },
  app: {
    head: {

      title: "AliBaba",
      script: [
      {src:"https://stripe.com/stripe.js", defer: true},
      { src: "https://js.stripe.com/v3/", defer: true }
      ],
      meta: [
        { name: "description", content: "A Ecommerce application" },
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
});
