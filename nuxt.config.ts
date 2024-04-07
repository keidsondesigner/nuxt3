// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    css: "/<rootDir>/assets/css"
  },
  css: ["@/assets/css/main.css"],
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**']
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  }
});
