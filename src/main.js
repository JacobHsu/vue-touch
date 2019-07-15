import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import touch from 'vue-directive-touch';
Vue.use(touch);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
