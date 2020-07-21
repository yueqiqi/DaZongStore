import Vue from 'vue'
import App from './App'
import store from './store'
import utils from '@/pages/utils/index.js'
import api from './api/index.js'

Vue.prototype.$store = store
Vue.prototype.$utils = utils
Vue.prototype.$api = api
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
