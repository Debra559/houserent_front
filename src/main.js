import { createApp } from 'vue'
import './style.css'
import router from './router/index.js'
import App from './App.vue'
import Ant from 'ant-design-vue';
import DevUI from 'vue-devui';
import 'vue-devui/style.css';
import '@devui-design/icons/icomoon/devui-icon.css';
import { ThemeServiceInit, infinityTheme } from 'devui-theme';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store/index.js';

ThemeServiceInit({ infinityTheme }, 'infinityTheme');


const app = createApp(App);

app.use(ElementPlus).use(Ant).use(DevUI).use(store).use(router).mount('#app')
