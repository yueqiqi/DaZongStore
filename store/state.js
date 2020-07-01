/*
State:状态对象
 */
export default {
  latitude: 23.1127, // 纬度
  longitude: 113.41724, // 经度
  address: [], // 地址相关信息对象
  categorys: [], // 食品分类数组
  shops: [], // 商家数组
  userInfo: {}, // 用户信息
  goods: [], // 商品列表
  ratings: [], // 商家评价列表
  info: {}, // 商家信息
  cartFoods: [], // 购物车中食物的列表
  searchShops: [] ,// 搜索得到的商家列表
	
	// 添加商品
	addGoodsAdd:'',//地址
	// 采购下单
	POAddress:'',//地址
	POShop:{title:'商家地址',phone:'15183233274',goods:{status:2,date:'2020-05-26 10:14:21',orderNo:'12345678998765444',img:require('@/static/logo.png'),title:'商品名字2',store:'四级生鲜',price:'55',type:'2',specification:'1*30斤/袋',num:'100',address:'大龙山街道艾迪斯',sellingPrice:'60.9元/袋',lucrative:'该价格最小批发量预计可获利890元'}},//商家信息以及商品
	
}
