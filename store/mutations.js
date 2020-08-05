/*
直接更新state的多个方法的对象
*/
import Vue from 'vue'
import {
	ADDGOODS_CHOOSE_ADDRESS,
	PO_ADDRESS,
	PO_SHOP,
	ADD_GOODSINFO,
	SHOWADDRESS,
	RECEIVE_ADDRESS,
	MY_ADDRESS,
	ORDER_PAY
} from './mutation-types'

export default {
	[ORDER_PAY](state,order){
		state.orderInfo=order
	},
	[MY_ADDRESS](state,address){
		// state.supplierAdd=address
	},
	[SHOWADDRESS](state,address){
		state.supplierAdd=address
	},
	[ADDGOODS_CHOOSE_ADDRESS](state,address){
		state.addGoodsAdd=address
	},
	[ADD_GOODSINFO](state,goods){
		state.goodsInfo=goods
	},
	[PO_SHOP](state,goods){
		state.POShop=goods
	},
	[PO_ADDRESS](state,address){
		state.POAddress=address
	},
	[ADDGOODS_CHOOSE_ADDRESS](state,address){
		state.addGoodsAdd=address
	},
  [RECEIVE_ADDRESS] (state,address) {
    state.addList = address
  },
}