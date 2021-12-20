import { createApp } from 'vue';
import App from './App';

import BaseInput from '@/components/BaseInput';
import BaseTextarea from '@/components/BaseTextarea';
import BaseSelect from '@/components/BaseSelect';
import BaseCheckbox from '@/components/BaseCheckbox';
import BaseRadio from '@/components/BaseRadio';

const app = createApp(App);

app.component('BaseInput', BaseInput);
app.component('BaseTextarea', BaseTextarea);
app.component('BaseSelect', BaseSelect);
app.component('BaseCheckbox', BaseCheckbox);
app.component('BaseRadio', BaseRadio);

app.mount('#app');
