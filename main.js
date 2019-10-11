import Vue from 'vue'
import App from './App'
// 公共js
import pubFuc from './publicjs/common'
Vue.config.productionTip = false
// 挂载
Vue.prototype.$pubFuc = pubFuc;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
