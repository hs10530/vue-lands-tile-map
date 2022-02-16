import Vue from 'vue';
import App from './App';
import router from './router';
// import '../dist/nft-lands-tile-map-component.min.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
