// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  runtimeConfig: {
		public: {
			firebaseApiKey: process.env.FIREBASE_API_KEY,
			firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
			firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
			firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
			firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
			firebaseAppId: process.env.FIREBASE_APP_ID, 
		},
	},
  devtools: { enabled: true },
  modules: [,
	'@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
	cssPath: '~/assets/css/tailwind.css',
	configPath: 'tailwind.config',
	},
	
})
