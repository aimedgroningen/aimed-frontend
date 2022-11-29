// https://nuxt.com/docs/api/configuration/nuxt-config
import IconsResolver from 'unplugin-icons/resolver'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
  typescript: { shim: false, strict: true, typeCheck: true },
  modules: [
    'unplugin-icons/nuxt',
    '@pinia/nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-windicss',
    'nuxt-headlessui',
  ],
  headlessui: {
    prefix: '',
  },
  components: true,
  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },
})
