<!-- 采购订单列表 -->
<template>
	<view>
		<view class="stick">	
		<tabs ref='tabs2' :list="tabList" @changeTab='changeTab'></tabs>
		</view>
		<view class="no-order" v-if="list==''">
			<view class="info">
				<view><image src="../../static/noOrder.png" mode=""></image></view>
				<view>暂无订单记录</view>
			</view>
		</view>
		<view v-for="(item,index) in list" :key='index' v-else>
			<view class="card plr pb pt mb-sm">
				<view class="header flex center border-bottom">
					<view class='img'><image src="@/static/store.png" mode=""></image></view>
					<view class="ml">{{title == 'add' ?item.sellerName : item.buyerName }}</view>
				</view>
				<view class="footer">
					<view class="flex flex-sp mt-xs mb-xs">
						<view class="orderNo">订单号:{{item.orderNo}}</view>
						<view :style="{color:item.payWay =='wxpay'?'rgb(64, 186, 73)':(item.payWay =='alipay'?'rgb(0, 158, 242)':'rgb(249,137,1)')}">{{item.payWay=='wxpay'?'微信支付':(item.payWay =='alipay'?'支付宝支付':'余额支付')}}</view>
					</view>
					<view class="flex flex-sp">
						<view>{{item.goodsName}}</view>
						<view>x{{item.num}}</view>
					</view>
					<view class="flex flex-sp mt-sm mb-xs">
						<view >{{item.orderTime}}</view>
					</view>
					<view class="flex flex-sp center">
						<view >合计：<text style="color: #ff0000;">¥{{item.totalPrice }}元</text><text>({{item.type==1?'自提':'配送'}})</text> </view>
						<view class="flex btns">
							<view class="btn-info" @click="goInfo(item.orderNo)">订单详情</view>
							<view v-if="(title == 'add'&&item.status==2)||(title != 'add'&&item.status==1)" class="btn-confirm ml-xs" @click="confirm(item,index)">{{title=='add'?'确认收货':'备货完成'}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<loadMore :loadingType="loadingType" :contentText="contentText" :isShowLoad='isShowLoad'></loadMore>
	</view>
</template>

<script>
	import tabs from '@/components/listTabs/index.vue'
	import utils from '@/static/utils.js'
	import loadMore from '@/components/load-more/index.vue';
	export default {
		components: {
			tabs,
			loadMore
		},
		data() {
			return {
				cur:1,
				currentTab:null,//其他链接跳转
				tabList:['待发货','待收货','完成'],
				flag:[false,false,false],
				list:[],
				title:'',
				
				page:1,
				loadingText: '加载中...',
				loadingType: 0, //定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
				contentText: {
					contentdown: '上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				},
				isShowLoad:false,//显示加载更多
				isFromAndroid:false,//是否从安卓过来
			};
		},
		onShow(){
			let title;
			if (this.title == 'add') {
				title = '采购订单';
			} else {
				title = '销售订单';
			}
			uni.setNavigationBarTitle({
				title: title
			});
		},
	async	onLoad(options) {
			if(!!options.token){
				uni.setStorageSync('userToken',options.token);
				this.isFromAndroid = true
			}
			if(!!options.currentTab){
			setTimeout(()=>{
					this.$refs.tabs2.longClick(options.currentTab)
				},100)
			}
			this.title=options.title
			await	this.getList()
		},
		onUnload() {
			if(this.isFromAndroid){
				if(uni.getStorageSync("OS")=='ios'){
					window.webkit.messageHandlers.navBack.postMessage(null)
				}else{
				window.android.androidMethod('toBack','')
				}
			}else{
				uni.redirectTo({
					url:'/pages/index/index'
				})
			}
		},
		methods: {
		async	getList(){
				let params = {
					status: this.cur,//订单状态 已支付:1 已备货:2 已收货:3
					type:this.title == 'add'?1:2,//订单类型 采购订单:1 销售订单:2
				}
			await	this.$api.getOrderList(params,1).then(res => {
						this.list=res.items
				})
			},
			confirm(val,index){
				let that = this 
				uni.showModal({
					title:'收货提示',
					content:'是否确认'+this.title=='add'?'收货':'备货'+'?确认后订单状态将改变!',
					success(res) {
						if(res.confirm){
							if(that.title=='add'){//采购订单
								that.$api.orderReceive(val.orderNo).then(res => {
									that.list.splice(index,1)
								})
							}else{//销售订单
								that.$api.orderPrepare(val.orderNo).then(res => {
									that.list.splice(index,1)
								})
							}
						}else{
						}
					}
				})
			},
			goInfo(val){
				uni.navigateTo({
					url:'/pages/list/info?orderNo='+val+'&orderType='+this.title
				})
			},
			changeTab(index) {
				this.cur = Number(index)+1
				this.getList()
			}
		},
	async	onPullDownRefresh() {
		await	this.getList().catch(err=> {
			uni.stopPullDownRefresh();
		})
			uni.stopPullDownRefresh();
		},
		async	onReachBottom(){
				this.isShowLoad=true
				this.page++; //每触底一次 page +1
				let _self = this;
				if (this.loadingType != 0) {
					//loadingType!=0;直接返回
					return false;
				}
				this.loadingType = 1;
				uni.showNavigationBarLoading(); //显示加载动画
				let params = {
					status: _self.cur,//订单状态 已支付:1 已备货:2 已收货:3
					type:_self.title == 'add'?1:2,//订单类型 采购订单:1 销售订单:2
				}
				let data = await _self.$api.getOrderList(params,_self.page)
				this.isShowLoad=false
				if (data.items == '') {
					//没有数据
					_self.loadingType = 2;
					uni.hideNavigationBarLoading(); //关闭加载动画
					return;
				}
				_self.list = _self.list.concat(data.items); //将数据拼接在一起
				_self.loadingType = 0; //将loadingType归0重置
				uni.hideNavigationBarLoading(); //关闭加载动画	
			},
	}
</script>

<style lang="scss">
page{
	background: $uni-bg-color;
}
.img image{
	width: 45upx;
	height: 45upx;
}
.header{
	font-size: $uni-font-size-lg;
	color: $uni-text-color;
	padding-bottom: 15upx;
}
.footer{
	font-size: $uni-font-size-base;
	color: $uni-text-color;
	.orderNo{
		font-size: $uni-font-size-sm;
		color: $uni-text-color-grey;
		-webkit-user-select: text!important;
		-moz-user-select: text!important;
		-ms-user-select: text!important;
		user-select: text!important;

	}
	.btns{
		font-size: $uni-font-size-sm;
	.btn-confirm{
		color: #fff;
		background: $uni-color-orange;
		border-radius: $uni-border-radius-xxl;
		height: 45upx;
		line-height: 45upx;
		width: 140upx;
		text-align: center;
	}
	.btn-info{
		border:1upx solid rgb(0, 158, 242);
		color:rgb(0, 158, 242);
		border-radius: $uni-border-radius-xxl;
		height: 45upx;
		line-height: 45upx;
		width: 140upx;
		text-align: center;
	}
	}
}
.no-order{
	position: fixed;
	top: 90px;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	.info{
		font-size: $uni-font-size-xl;
		color: $uni-text-color-grey;
		image{
			width: 220upx;
			height: 220upx;
		}
	}
}
</style>
