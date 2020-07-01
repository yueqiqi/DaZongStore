<template>
	<view class="bg">
		<view class="bg-white plr header pt">
			<view class="flex flex-sp">
				<view>订单号：{{ info.orderNo }}</view>
				<view :style="{ color: info.payType == 1 ? 'rgb(64, 186, 73)' : 'rgb(0, 158, 242)' }">{{ info.payType == 1 ? '微信支付' : '支付宝支付' }}</view>
			</view>
			<view>下单时间：{{ info.date }}</view>
			<view>配送时间：{{ info.date }}</view>
			<view class="flex flex-sp">
				<view>收货人：{{ info.title }}</view>
				<view @click="callPhone(info.phone)">
					<text class="alIcon mr-sm">&#xe682;</text>
					{{ info.phone }}
				</view>
			</view>
			<view>收货地址：{{ info.address }}</view>
		</view>
		<view class="body mt plr">
			<view class="flex flex-sp border-bottom pb-sm pt-sm" v-if="orderType==1">
				<view class="merchant flex flex-center">
					<view class="flex flex-center mr-sm"><image src="../../static/store.png" mode=""></image></view>
					<view>{{ goods.title }}</view>
				</view>
				<view class="callphone" @click="callPhone(goods.phone)">
					<text class="alIcon">&#xe682;</text>
					<text class="ml-xs">联系商家</text>
				</view>
			</view>
			<view class="flex mt">
				<view><image class="uImg-l" :src="goods.img" mode=""></image></view>
				<view>
					<view class="title ml">{{ info.title }}</view>
					<view class="info ml">规格：{{ info.title || '--' }}</view>
					<view class="info ml">
						价格：
						<text class="spe">
							{{ info.title }}
							<text>({{ goods.type == 1 ? '自提' : '配送' }})</text>
						</text>
					</view>
					<view class="info ml">购买数量：{{ info.num }}</view>
				</view>
			</view>
			<view class="remarks mt">订单留言：{{ goods.remarks }}</view>
			<view class="remarks mt">
				订单金额：
				<text class="money">{{ goods.money }}</text>
				元
			</view>
			<view class="remarks mt" v-if="orderType==1">
				实付金额：
				<text class="money">{{ goods.money }}</text>
				元
			</view>
		</view>
		<view class="footer">
			<button class="btn">{{ orderType == 1 ? '确认收货' : '备货完成' }}</button>
		</view>
	</view>
</template>

<script>
import utils from '@/static/utils.js';
export default {
	data() {
		return {
			orderType: null, //1--采购订单,2--销售订单
			info: utils.list[0],
			goods: {
				status: 2,
				date: '2020-05-26 10:14:21',
				phone: 15183233274,
				title: '商品名字',
				orderNo: '12345678998765444',
				img: require('@/static/logo.png'),
				title: '商品名字2',
				store: '四级生鲜',
				price: '55',
				type: '2',
				specification: '1*30斤/袋',
				num: '100',
				address: '大龙山街道艾迪斯',
				sellingPrice: '60.9元/袋',
				lucrative: '该价格最小批发量预计可获利890元'
			}
		};
	},
	onLoad(options) {
		this.orderType = options.orderType;
	},
	methods: {
		callPhone(val) {
			uni.makePhoneCall({
				phoneNumber: val
			});
		}
	}
};
</script>
<style scoped>
page,
.bg {
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
	.border-bottom{
		border-bottom:1upx dashed $uni-border-color
	}
	.merchant {
		color: $uni-text-orange;
		font-size: $uni-font-size-base;
		image {
			width: $uni-img-size-sm;
			height: $uni-img-size-sm;
		}
	}
	.callphone{
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
.footer{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 50upx;
	button{
		width: 70%;
		border-radius: $uni-border-radius-xxl;
	}
}
</style>
