import { createApp } from 'vue'
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
defineIonPhaser(window)

createApp(App).use(createPinia()).use(router).mount('#app')
