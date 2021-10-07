import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

axios.defaults.headers.common = {
  'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiRGV2IFRlc3RlciJ9.NqpLPdG-Vqvo2yq1aNivHfaM_o1iBIlL5jkrubdYYqo`,
  'Accept': 'application/json'
}

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
