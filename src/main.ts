import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import doCookieOperation from './helper/CookieHelper';
import Notifications from 'vue-notification';

Vue.prototype.$doCookieOperation = doCookieOperation;
Vue.use(Notifications);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
