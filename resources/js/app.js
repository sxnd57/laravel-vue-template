import './bootstrap';
import {createApp} from 'vue';
import router from './router';
import App from './components/App.vue';
import PrimeVue from 'primevue/config';
import { ZiggyVue } from 'ziggy-js'
import {
    Button,
    Column,
    DataTable,
    InputText,
    Tag,
    Drawer,
    OverlayBadge,
    IconField,
    InputIcon,
    MultiSelect,
    Select,
    Slider,
    DatePicker,
    InputNumber,
    ProgressBar,
    Avatar,
    Menu
} from "primevue";
import Lara from '@primeuix/themes/aura';

const app = createApp(App)

app.use(ZiggyVue)
app.use(router)

app.use(PrimeVue, {
    theme: {
        preset: Lara,
        options: {
            prefix: 'p',
            darkModeSelector: 'light',
            cssLayer: false
        }
    }
});

app.component('Button', Button);
app.component('InputText', InputText);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Tag', Tag);
app.component('Avatar', Avatar);
app.component('Drawer', Drawer);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('MultiSelect', MultiSelect);
app.component('Select', Select);
app.component('Slider', Slider);
app.component('DatePicker', DatePicker);
app.component('InputNumber', InputNumber);
app.component('ProgressBar', ProgressBar);
app.component('OverlayBadge', OverlayBadge);
app.component('Menu', Menu);


app.mount('#app')
