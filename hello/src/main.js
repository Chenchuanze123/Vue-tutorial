import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //render(h){
  //return h(App);
  //}
}).$mount('#app')   //挂载到index.html中id为app的容器上 
    