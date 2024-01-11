
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia'
import App from './App.vue'
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeflex/primeflex.scss';
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(PrimeVue);
app.use(createPinia())

app.mount('#app')
