/*
Action:通过操作mutation间接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS,
	SHOWADDRESS,
	MY_ADDRESS
} from './mutation-types'

// api接口
import $api from '@/api/index.js'

export default {
	// // 查询商品详情
	// async getGoodsInfo({commit,state},params) {
	//   const result = await $api.getAddress(params)
	//   // 提交一个mutation
	//   commit(GET_GOODS_INFO,result) 
	// },
	//回显采购下单地址
	async setMyAddress({commit,state},params){
		const result = await $api.setAddress(params)
		commit(MY_ADDRESS,params)
	},
	async myaddress({commit,state},params) {
	  const result = await $api.addAddress(params)
	  // 提交一个mutation
	  commit(MY_ADDRESS,params) 
	},
	async showAddress({commit,state},params) {
	  const result = await $api.getAddress(params)
	  // 提交一个mutation
	  commit(SHOWADDRESS,result) 
	},
  // 异步获取地址列表
  async getAddList({commit,state},type) {
    const result = await $api.getAddList(type)
    // 提交一个mutation
    commit(RECEIVE_ADDRESS,result) 
  },
  // 获取食品分类
  async getCategorys({commit}) {
    // 发送异步ajax请求
    const result = await reqCategorys()
    // 提交一个mutation
    if (result.code===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys}) 
    }
  },
}