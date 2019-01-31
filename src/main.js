import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';
import Apis from './apis';
var AV = require('leancloud-storage');
var APP_ID = 'HfJzvYmInaLcGgIeKYHU2xiK-gzGzoHsz';
var APP_KEY = 'sEM6i1sE9eEPpGIh9xJLPipY';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

Vue.config.productionTip = false;
Vue.prototype.$apis = Apis;
Vue.prototype.$AV = AV;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
