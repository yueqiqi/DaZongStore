import http from './requestConfig.js';
const req = {
	isPrompt: true, //（默认 true 说明：本接口抛出的错误是否提示）
	load: true, //（默认 true 说明：本接口是否提示加载动画）
	headers: { //默认 无 说明：请求头
		'Content-Type': 'application/json;charset=utf-8'
	},
	isFactory: true //（默认 true 说明：本接口是否调用公共的数据处理方法，设置false后isPrompt参数奖失去作用）
}
const req2 = {
	isPrompt: true, //（默认 true 说明：本接口抛出的错误是否提示）
	load: false, //（默认 true 说明：本接口是否提示加载动画）
	headers: { //默认 无 说明：请求头
		'Content-Type': 'application/json;charset=utf-8'
	},
	isFactory: true //（默认 true 说明：本接口是否调用公共的数据处理方法，设置false后isPrompt参数奖失去作用）
}
const api = {
	thPartyPay:params => http.post('order/prepay',params,req) ,//预支付订单
	/**
	 * 商品
	 */
	getProvinces:params => http.get('merchant/provinces',params,req),//获取一二级商品分类列表
	getCategoryList:params => http.get('merchant/goods/category/list',params,req),//获取一二级商品分类列表
	getList3:params => http.get('merchant/goods/list/'+params,'',req),//根据三级分类code查询商品列表
	getList2:params => http.get('merchant/goods/name/list/'+params.id,{page:params.page,rows:'10'},req),//根据二级分类code获取三级级商品分类列表
	searchGoods:params => http.get('merchant/goods/search',{rows:'10',...params},req),//搜索商品
	searchGoodsTem:params => http.get('merchant/goods/bank/search',{rows:'10',...params},req),//搜索商品模板
	getGoodsInfo:params => http.get('merchant/goods/bank/'+params,'',req),//搜索商品模板
	putGoods:params => http.post('merchant/goods',params,req),//上架商品
	setGoods:params => http.put('merchant/goods',params,req),//修改商品
	delGoods:params => http.delete('merchant/goods/'+params,'',req),//删除商品
	echoGoodsInfo:params => http.get('merchant/goods/'+params,'',req),//回显商品信息
	
	
	/**
	 * 供应商
	 */
	getAddress:params => http.get('merchant/address',params,req),//查询我的收货地址
	getSupList:params => http.get('merchant/goods/list',params,req),//获取某供应商自己的商品列表
	getSupAdd:params => http.get('merchant/address/list/'+params,'',req),//查询某卖家供应商的地址列表
	
	/**
	 * 订单
	 */
	placeOrder:(params) => http.post('order',params,req),//下单
	getOrderList:(params,page) => http.get('order/list/'+params.type,{status:params.status,page,rows:'10'},req),//订单列表
	
	getOrderList2:(params,page) => http.get('order/list/'+params.type,{status:params.status,page,rows:'10',month:params.month},req),//订单列表无详情
	getOrderInfo:(params) => http.get('order/'+params,'',req),//订单详情
	orderPrepare:(params) => http.put('order/prepare/'+params,'',req),//订单备货
	orderReceive:(params) => http.put('order/receive/'+params,'',req),//确认收货
	balanceOrder:(orderNo) => http.post('order/pay/balance/'+orderNo,'',req),//余额支付
	
	
	/**
	 * 地址管理
	 */
	getAddList:params => http.get('merchant/address/list/'+params,'',req),//查询某卖家供应商的地址列表
	getAddInfo:params => http.get('merchant/address/'+params,'',req),//回显供应商地址
	addAddress:params => http.post('merchant/address',params,req),//新增供应商地址
	setAddress:params => http.put('merchant/address',params,req),//修改供应商地址
	delAddress:params => http.delete('merchant/address/'+params,'',req),//删除供应商地址
	
	
	
}
export default api