<template>
	<view class="bg">
		<view class="bg-white plr header pt pb">
			<view class="flex flex-sp line">
				<view>订单号：{{ info.orderNo }}</view>
				<view :style="{ color: info.payWay =='wxpay'?'rgb(64, 186, 73)':(info.payWay =='alipay'?'rgb(0, 158, 242)':'rgb(249,137,1)') }">{{info.type=='wxpay'?'微信支付':(info.payWay =='alipay'?'支付宝支付':'余额支付')}}</view>
			</view>
			<view class="line">下单时间：{{ info.orderTime }}</view>
			<view class="line">配送时间：{{ info.takeTime }}</view>
			<view class="flex flex-sp line">
				<view>收货人：{{ info.receiverName  }}</view>
				<!-- @click="callPhone(info.receiverPhone)" -->
				<view @click="callPhone(info.receiverPhone)">
					<text class="alIcon mr-sm">&#xe682;</text>
					{{ info.receiverPhone }}
				</view>
			</view>
			<view class="line" v-if="info.type!=1">收货地址：{{ info.detailAddress }}</view>
		</view>
		<view class="body mt plr bg-white pt pb">
			<view class="flex flex-sp border-bottom pb-sm pt-sm" v-if="orderType == 'add'">
				<view class="merchant flex flex-center">
					<view class="flex flex-center mr-sm"><image src="../../static/store.png" mode=""></image></view>
					<view>{{ info.sellerName }}</view>
				</view>
				<!-- @click="callPhone(info.sellerPhone)" -->
				<view class="callphone" @click="callPhone(info.sellerPhone)">
					<text class="alIcon">&#xe682;</text>
					<!-- <text class="ml-xs">联系商家</text> -->
					<text class="ml-xs">{{info.sellerPhone}}</text>
				</view>
			</view>
			<view class="flex mt">
				<view><image class="uImg-l" :src="info.goodsImg" mode=""></image></view>
				<view>
					<view class="title ml">{{ info.goodsName }}</view>
					<view class="info ml">规格：{{ info.packSize || '散装称重' }}</view>
					<view class="info ml">
						价格：
						<text class="spe">
							{{ info.unitPrice }}元/{{info.unitName}}
							<text>({{ info.type == 1 ? '自提' : '配送' }})</text>
						</text>
					</view>
					<view class="info ml">购买数量：{{ info.num }}</view>
				</view>
			</view>
			<view class="remarks mt" v-if="info.type==1">自提地址：{{info.detailAddress}}</view>
			<view class="remarks mt">订单留言：{{ info.remark }}</view>
			<view class="remarks mt">
				订单金额：
				<text class="money">{{ info.totalPrice }}</text>
				元
			</view>
			<view class="remarks mt" v-if="orderType == 'add'">
				实付金额：
				<text class="money">{{ info.actualPrice }}</text>
				元
			</view>
		</view>
		<view class="footer" v-if="showBtn">
			<button class="btn" @click="confirm">{{ orderType == 'add' ? '确认收货' : '备货完成' }}</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orderType: null, //1--采购订单,2--销售订单
			info: '',
			orderNo: '',
			
		};
	},
	computed: {
		showBtn() {
			let isBool = false
			if(this.orderType == 'add'&&this.info.status==2){
				isBool = true
			}
			if(this.orderType != 'add'&&this.info.status==1){
				isBool= true
			}
			return isBool
		}
	},
	onLoad(options) {
		this.orderType = options.orderType;
		this.orderNo = options.orderNo;
		this.getOrderInfo(options.orderNo)
	},
	methods: {
		getOrderInfo(orderNo) {
			this.$api.getOrderInfo(orderNo).then(res => {
				this.info = res;
			});
		},
		confirm() {
			let that = this;
			uni.showModal({
				title: '状态提示',
				content: '是否确认' +( this.orderType == 'add' ? '收货' : '备货' + '?确认后订单状态将改变!'),
				success(res) {
					if (res.confirm) {
						if (that.orderType == 'add') {
							//采购订单
							that.$api.orderReceive(that.info.orderNo).then(res => {
								uni.navigateBack({});
							});
						} else {
							//销售订单
							that.$api.orderPrepare(that.info.orderNo).then(res => {
								uni.navigateBack({});
							});
						}
					} else {
						console.log(2);
					}
				}
			});
		},
		callPhone(val) {
			if(!!val){
				uni.showModal({
					content:'拨打商家电话',
					confirmText:'去拨打',
					success:res=>{
						if(res.confirm){
							uni.makePhoneCall({
								phoneNumber:val
							})
						}
					},
					fail(err) {
						uni.showToast({
							title:'拨打失败'+err,
							icon:'none'
						})
					}
				})
			}else{
				uni.showToast({
					title:'商家电话号码异常',
					icon:'none'
				})
			}
		}
	}
};
</script>
<style scoped lang="scss">
page ,.bg{
	background: $uni-bg-color !important;
}
</style>
<style lang="scss">
.alIcon {
	color: $uni-text-orange;
}
.header {
	font-size: $uni-font-size-base;
	color: $uni-color-title;
}
.body {
	.border-bottom {
		border-bottom: 1upx dashed $uni-border-color;
	}
	.merchant {
		color: $uni-text-orange;
		font-size: $uni-font-size-base;
		image {
			width: $uni-img-size-sm;
			height: $uni-img-size-sm;
		}
	}
	.callphone {
		font-size: $uni-font-size-base;
	}
	.remarks {
		color: $uni-color-subtitle;
		font-size: $uni-font-size-base;
		.money {
			color: $uni-color-error;
		}
	}
	.title,
	.info {
		line-height: 48upx;
	}
	.title {
		color: $uni-color-title;
	}
	.info {
		color: $uni-color-subtitle;
		font-size: $uni-font-size-base;
	}
	.spe {
		color: $uni-text-orange;
	}
}
.footer {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 50upx;
	button {
		width: 70%;
		border-radius: $uni-border-radius-xxl;
	}
}
.line{
	line-height: 60upx;
}
</style>
