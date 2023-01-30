import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import Tetikus from '@namchee/tetikus';
import '@namchee/tetikus/dist/tetikus.css';

const app = createApp(App);
app.use(Tetikus);

app.use(router).mount('#app')
