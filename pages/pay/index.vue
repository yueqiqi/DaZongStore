<!-- 下单支付 -->
<template>
	<view class="pt">
		<view class="header plr">
			<view class="flex flex-sp border-bottom pb-sm pt-sm">
				<view>订单号</view>
				<view class="right">{{ order.orderNo }}</view>
			</view>
			<view class="flex flex-sp border-bottom pb-sm pt">
				<view>订单时间</view>
				<view class="right">{{ order.orderTime }}</view>
			</view>
			<view class="flex flex-sp border-bottom pb-sm pt">
				<view>订单金额</view>
				<view class="right">{{ order.totalPrice }}元</view>
			</view>
		</view>
		<view class="body">
			<view class="payType mb">支付方式</view>
			<block v-for="(item, index) in radios" :key="index">
				<view class="flex flex-sp center mb plr">
					<view class="flex center">
						<view><image class="img mr-sm" :src="item.img||null" mode="widthFix"></image></view>
						<view class="text">
							{{ item.payType }}
							<text class="balance ml-xs" v-if="item.val == 'balance'">(可用余额：¥{{ balance||0 }})</text>
							<text v-show="item.transRate<1" style="font-size:26rpx;color: red;margion-left" class="ml-sm">({{item.transRate}}折)</text>
						</view>
					</view>
					<view>
						<label class="radio"><radio :value="item.val" :checked="checked == item.val" :color="item.color" @click="radioChange(item.val)" /></label>
					</view>
				</view>
			</block>
		</view>
		<view class="footer flex flex-sp">
			<view class="left flex center">
				<view>
					应付：
					<!-- order.actualPrice  -->
					<!--  -->
					<text :style="{textDecoration:shouldPay<order.actualPrice?' line-through':'',color:shouldPay<order.actualPrice?'#666':''}">{{ order.actualPrice  }}元</text><text v-show="shouldPay<order.actualPrice" style="color: #D41B14;" class="ml-sm">{{shouldPay}}元</text>
				</view>
			</view>
			<view class="right" @click="pay">立即支付</view>
		</view>
	</view>
</template>

<script>
import utils from '@/static/utils.js';
import {mapState, mapMutations } from 'vuex';
window['redirectTo']=function(){
		uni.showToast({
			title:'提示',
			icon:'none'
		})
		uni.redirectTo({
			url:'/pages/list/index?title=add'
		})
	}
export default {
	data() {
		return {
			shouldPay:0,
			checked: '',
			radios: [
				{ img: require('../../static/wechat.png'), payType: '微信支付', val: 'wxpay', color: 'rgb(0, 204, 0)' ,transRate:0},
				{ img: require('../../static/ali.png'), payType: '支付宝支付', val: 'alipay', color: 'rgb(75, 159, 254)',transRate:0 },
				{ img: require('../../static/money1.png'), payType: '余额支付', val: 'balance', color: 'rgb(252,114,76)' ,transRate:0}
			]
		};
	},
	onLoad() {
		let that =this
		this.checked='wxpay'
		this.radios.map(item => {
			that.order.transRateResps.map(val => {
				if(item.val==val.platform){
					that.$set(item,'transRate',val.transRate)
					// item.transRate=
				}
			})
		})
		console.log(this.radios)
	},
	watch: {
		checked:{
			handler(newVal) {
			let that = this
			  switch(newVal){
					case 'alipay':
						this.shouldPay=(this.order.transRateResps[that.order.transRateResps.findIndex((val)=>val.platform=='alipay')].transRate*that.order.actualPrice)
					break;
					case 'balance':
					this.shouldPay=(this.order.transRateResps[that.order.transRateResps.findIndex((val)=>val.platform=='balance')].transRate*that.order.actualPrice)
					break;
					default:
					this.shouldPay=(this.order.transRateResps[that.order.transRateResps.findIndex((val)=>val.platform=='wxpay')].transRate)*that.order.actualPrice
				}
			},
			deep: true ,// 表示开启深度监听
		}
	},
	computed: {
		...mapState({
			order:state=>state.orderInfo,
			balance:state=>state.orderInfo.availableBalance
		}),
		// shouldPay(){
			
		// },
	},
	methods: {
		radioChange(val) {
			this.checked = val;
		},
		pay() {
			if(this.checked=='balance'){
				this.$api.balanceOrder(this.order.orderNo).then(res => {
					uni.redirectTo({
						url:'/pages/list/index?title=add'
					})
				})
			}else{
				let params ={
					orderNo :this.order.orderNo,
					payWay :this.checked
				} 
				let that = this
				this.$api.thPartyPay(params).then(res => {
					if(that.checked=='alipay'){
						if(uni.getStorageSync("OS")=='ios'){
							window.webkit.messageHandlers.aliPay.postMessage(JSON.stringify(res))
						}else{
							window.android.androidMethod('toPay',JSON.stringify(res))
						}
					}else{
						if(uni.getStorageSync("OS")=='ios'){
							window.webkit.messageHandlers.wxPay.postMessage(JSON.stringify(res))
						}else{
							window.android.androidMethod('wxPay',JSON.stringify(res))
						}
					}
				})
			}
		},
		
	}
};
</script>

<style lang="scss">
.header {
	font-size: $uni-font-size-lg;
	color: $uni-text-color;
	font-weight: $uni-font-weight;
	.right {
		font-weight: 100;
		color: $uni-text-color-normal;
	}
}
.body {
	.img {
		width: $uni-img-size-lg;
		height: $uni-img-size-lg;
	}
	.payType {
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		background: #f5de95;
		font-size: $uni-font-size-xl;
		text-align: center;
		font-weight: $uni-font-weight;
	}
	.balance {
		font-size: $uni-font-size-base;
		color: $uni-color-red;
	}
}
.footer {
	font-size: $uni-font-size-base;
	position: fixed;
	height: 100upx;
	bottom: 0;
	left: 0;
	right: 0;
	.left {
		width: 70%;
		border: 1upx solid $uni-color-orange;
		border-left: 0;
		border-bottom: 0;
		padding: 10upx;
		text {
			color: $uni-text-orange;
		}
		.num {
			color: $uni-color-primary;
			font-size: $uni-font-size-sm;
		}
	}
	.right {
		width: 30%;
		background-color: $uni-color-orange;
		text-align: center;
		line-height: 100upx;
		font-size: $uni-font-size-lg;
		color: $uni-bg-color-white;
	}
}
</style>
