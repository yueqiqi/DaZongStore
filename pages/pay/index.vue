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
				<view class="right">{{ order.date }}</view>
			</view>
			<view class="flex flex-sp border-bottom pb-sm pt">
				<view>订单金额</view>
				<view class="right">{{ order.price }}元</view>
			</view>
		</view>
		<view class="body">
			<view class="payType mb">支付方式</view>
			<block v-for="(item, index) in radios" :key="index">
				<view class="flex flex-sp center mb plr">
					<view class="flex center">
						<view><image class="img mr-sm" :src="item.img" mode="widthFix"></image></view>
						<view class="text">
							{{ item.payType }}
							<text class="balance ml-xs" v-if="item.val == 'balance'">(可用余额：¥{{ balance.toFixed(2) }})</text>
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
					<text>{{ order.price }}元</text>
				</view>
			</view>
			<view class="right" @click="pay">立即支付</view>
		</view>
	</view>
</template>

<script>
import utils from '@/static/utils.js';
export default {
	data() {
		return {
			balance: 3500,
			order: utils.list[0],
			checked: 'wechat',
			radios: [
				{ img: require('@/static/wechat.png'), payType: '微信支付', val: 'wechat', color: 'rgb(0, 204, 0)' },
				{ img: require('@/static/ali.png'), payType: '支付宝支付', val: 'alipay', color: 'rgb(75, 159, 254)' },
				{ img: require('@/static/yue.png'), payType: '余额支付', val: 'balance', color: '#f37b1d' }
			]
		};
	},
	methods: {
		radioChange(val) {
			this.checked = val;
		},
		pay() {
			console.log('立即支付');
		}
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
