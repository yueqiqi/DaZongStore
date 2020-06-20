/*
vuex最核心的管理对象store
组装模块并导出 store 的地方
 */
// 首先引入Vue及Vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 引入四个基本模块
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// import createPersistedState from "vuex-persistedstate";
// 一定要声明使用插件
Vue.use(Vuex)

// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
export default new Vuex.Store({
	// plugins: [
	// 	createPersistedState({
	// 		storage: {
	// 			getItem: key => uni.getStorageSync(key),
	// 			setItem: (key, value) => uni.setStorageSync(key, value),
	// 			removeItem: key => uni.removeStorageSync(key)
	// 		}
	// 	})
	// ],
	state,
	mutations,
	actions,
	getters
})
