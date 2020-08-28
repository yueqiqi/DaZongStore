<template>
	<view class="bg">
		<!-- <u-picker mode="time" v-model="show" :params="params" :start-year="endYear-5" :end-year="endYear"></u-picker> -->
		<view class="no-order" v-if="list==''">
			<view class="info">
				<view><image src="../../static/noOrder.png" mode=""></image></view>
				<view>暂无订单记录</view>
			</view>
		</view>
		<view v-else>
		<block v-for="(item, index) in list">
			<view class="body">
				<view class="flex-sp flex">
					<view class="left">
						<text>订单号：{{ item.orderNo }}</text>
					</view>
					<view class="right">
						<text :style="{ color: item.payWay == 'wxpay' ? 'rgb(64, 186, 73)' : item.payWay == 'alipay' ? 'rgb(0, 158, 242)' : 'rgb(249,137,1)' }">
							{{ item.payWay == 'wxpay' ? '微信支付' : item.payWay == 'alipay' ? '支付宝支付' : '余额支付' }}
						</text>
					</view>
				</view>
				<view class="flex-sp flex">
					<view class="left">{{ type == 1 ?  '供应商：' : '买家名称'  }}</view>
					<view class="right">{{ type == 1 ? item.sellerName : item.buyerName }}</view>
				</view>
				<view class="flex-sp flex">
					<view class="left">订单时间：</view>
					<view class="right">{{ item.orderTime }}</view>
				</view>
				<view class="flex-sp flex">
					<view class="left">订单状态：</view>
					<view class="right">{{ item.status==0 ? '已下单':(item.status==1?'已支付':(item.status==2?'已备货':(item.status==3?'已收货':'已取消'))) }}</view>
				</view>
				<view class="flex-sp flex">
					<view class="left">订单金额：</view>
					<view class="right">{{ item.actualPrice }}元</view>
				</view>
			</view>
		</block>
		</view>
		<loadMore :loadingType="loadingType" :contentText="contentText" :isShowLoad="isShowLoad"></loadMore>
	</view>
</template>

<script>
import loadMore from '@/components/load-more/index.vue';
export default {
	components: {
		loadMore
	},
	data() {
		return {
			list: [],
			month: '',
			status: '',
			type: '',

			page: 1,
			loadingText: '加载中...',
			loadingType: 0, //定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
			contentText: {
				contentdown: '上拉显示更多',
				contentrefresh: '正在加载...',
				contentnomore: '没有更多数据了'
			},
			isShowLoad: false //显示加载更多
		};
	},
	watch: {
		type(newValue, oldValue) {
			let title;
			if (newValue == 1) {
				title = '采购订单';
			} else {
				title = '销售订单';
			}
			uni.setNavigationBarTitle({
				title
			});
		}
	},
	onLoad(options) {
		if (!!options.token) {
			uni.setStorageSync('userToken', options.token);
		}
		this.month=options.month
		this.type=options.type
		this.status=options.status||''
		this.getList(1, false);
	},
	methods: {
		async getList() {
			let params = {
				month: this.month,
				status: this.status,
				type: this.type
			};
			let data = await this.$api.getOrderList2(params, 1);
			this.list = data.items;
		}
	},
	async onPullDownRefresh() {
		await this.getList();
		uni.stopPullDownRefresh();
	},
	async onReachBottom() {
		this.isShowLoad = true;
		this.page++; //每触底一次 page +1
		let _self = this;
		if (this.loadingType != 0) {
			//loadingType!=0;直接返回
			return false;
		}
		this.loadingType = 1;
		uni.showNavigationBarLoading(); //显示加载动画
		let params = {
			month: _self.month,
			status: _self.status,
			type: _self.type
		};
		let data = await _self.$api.getOrderList2(params, _self.page);
		_self.isShowLoad = false;
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
	onUnload() {
		if(uni.getStorageSync("OS")=='ios'){
			window.webkit.messageHandlers.navBack.postMessage(null)
		}else{
		window.android.androidMethod('toBack','')
		}
	}
};
</script>

<style lang="scss" scoped>
// @import 'uview-ui/index.scss';
.bg,
page {
	background: $uni-bg-color;
}
.body {
	background: $uni-bg-color-white;
	margin-bottom: 15upx;
	padding: 20upx 10upx;
	font-size: $uni-font-size-lg;
	.flex-sp {
		line-height: 60upx;
	}
}
.no-order{
	position: fixed;
	top: 0px;
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
