import { createApp } from 'vue';
import App from './App.vue';
import Auckland from '../src';

import '../src/styles/index.scss';
import './index.scss';

const app = createApp(App);

app.use(Auckland);
app.mount('#app');
