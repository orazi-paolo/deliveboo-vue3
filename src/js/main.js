
import { createApp } from 'vue';
import App from '../App.vue';
import router from './router';

// Importazione FontAwesome
import '@fortawesome/fontawesome-free/css/all.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Aggiungi tutte le icone "solid" alla libreria
library.add(fas);

const app = createApp(App);

app.use(router)
    // Registra il componente FontAwesome globalmente
    .component('font-awesome-icon', FontAwesomeIcon)

    .mount('#app');
