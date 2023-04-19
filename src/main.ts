import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createSharedElementDirective } from 'v-shared-element';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(createSharedElementDirective());

app.mount('#app');
