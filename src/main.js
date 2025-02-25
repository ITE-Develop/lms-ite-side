import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/router';
import store from './stores';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@/library/smoothscroll.main';
import '@/style/sass/app.scss';
import VueAwesomePaginate from 'vue-awesome-paginate';
import piniaPersist from 'pinia-plugin-persistedstate';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);

app.use(router);
app.use(store);
app.use(VueAwesomePaginate);
app.mount('#app');

SmoothScroll({
  animationTime: 800,
  stepSize: 75,
  accelerationDelta: 30,
  accelerationMax: 2,
  keyboardSupport: true,
  arrowScroll: 50,
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,
  touchpadSupport: true,
  fixedBackground: true,
});
