
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '../node_modules/axios';
import Element from 'element-ui'
import '../static/css/ww-blue/index.css';
import "babel-polyfill";
 Vue.use(Element)


 Vue.prototype.$axios = axios;

Vue.config.productionTip = false


new Vue({
  router,

 render:h=>h(App)
}).$mount('#app')   

