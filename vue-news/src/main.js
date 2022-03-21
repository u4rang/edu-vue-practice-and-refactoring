import Vue from 'vue'
import App from './App.vue'

import { router } from './routes/index.js';
import { store } from './store/index.js';

Vue.config.productionTip = false


// main.js는 앱의 구조를 확인 할 수 있는 청사진 역할
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
