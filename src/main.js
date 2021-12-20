import { createApp } from 'vue';
import App from './App';

import BaseInput from '@/components/BaseInput';
import BaseTextarea from '@/components/BaseTextarea';

const app = createApp(App);

app.component('BaseInput', BaseInput);
app.component('BaseTextarea', BaseTextarea);

app.mount('#app');
