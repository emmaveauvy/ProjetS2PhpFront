export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Le Cami - Quiz & Fun !',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      // <!-- Primary Meta Tags -->
      {
        hid:'title',
        name:'title',
        content: "Le Cami - Quiz & Fun !"
      },
      {
        hid: 'description',
        name: 'description',
        content: "Teste tes amis en créant des quiz sur tes sujets favoris !"
      },

      // <!-- Open Graph / Facebook -->
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: "https://quiz.loicquinquenel.fr/"
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Le Cami - Quiz & Fun !"
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Teste tes amis en créant des quiz sur tes sujets favoris !"
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://quiz.loicquinquenel.fr/meta_image.png'
      },

      // <!-- Twitter -->
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: "https://quiz.loicquinquenel.fr/"
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: "Le Cami - Quiz & Fun !"
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: "Teste tes amis en créant des quiz sur tes sujets favoris !"
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://quiz.loicquinquenel.fr/meta_image_twitter.png'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin:'' },
      { rel: "preload" , as: "style", rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap' },
      { rel: "preload" , as: "style", rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap' },
      { rel: "preload" , as: "style", rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp' },
      { rel: "preload" , as: "style", rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap-grid.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/reset.css',
    '~/assets/scss/global.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      './assets/scss/mixins.scss',
      './assets/scss/theme.scss',
      './assets/scss/variables.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/proxy', { ws: false }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  proxy: {
    // Simple proxy
    '/api': {
      target: 'http://localhost',
      pathRewrite: {'^/api': ''}
    }
  },

  axios: {
    proxy: true
  },
}
