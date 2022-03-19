import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initQuasar } from "@/plugins/quasar"

export const app = createApp(App)

initQuasar(app)

app.use(router).mount('#app')
