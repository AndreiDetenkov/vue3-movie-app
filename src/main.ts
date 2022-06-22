import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import '@/assets/index.css'

import setupInterceptors from '@/plugins/axiosInterceptors/interceptors'
setupInterceptors()

import i18n from '@/plugins/i18n'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
