<!-- 采购下单 -->
<template>
	<view class="plr pt po">
		<!-- v-if="!!address" -->
		<view class="header" @click="chooseAdd">
			<view class="flex flex-sp">
				<view class="name">
					收货人：
					<text>{{ POAddress.name }}</text>
				</view>
				<view class="phone">{{ POAddress.phone }}</view>
			</view>
			<view class="flex flex flex-sp mt-xs mb-xs">
				<view class="over">{{ POAddress.address }}</view>
				<view class="alIcon">&#xe600;</view>
			</view>
			<view class="flex flex flex-sp mt-xs mb">
				<view class="time">配送时间：</view>
				<view class="right">{{ POAddress.time }}</view>
			</view>
			<view class="notice">
				<text>注意：</text>
				{{ POAddress.notice }}
			</view>
		</view>
		<!-- <view v-else @click='chooseAdd' class="noAdd">暂未选择地址+</view> -->
		<view class="body mt">
			<view class="flex flex-sp">
				<view class="merchant flex flex-center">
					<view class="flex flex-center mr-sm" >
						<image src="../../static/store.png" mode=""></image>
					</view>
					<view>{{ POShop.title }}</view>
				</view>
				<view class="callphone" @click="callPhone(POShop.phone)">
					<text class="alIcon">&#xe682;</text>
					<text class="ml-xs">联系商家</text>
				</view>
			</view>
			<view class="goods flex mt">
				<view class="mr"><image class="uImg-l" :src="goods.img" mode=""></image></view>
				<view>
					<view class="title">{{goods.title}}</view>
					<view>规格：{{goods.specification}}</view>
					<view class="price">价格：<text>{{goods.price}}({{goods.type==1?'自提':'配送'}})</text></view>
					<view>我的卖价：{{goods.sellingPrice}}</view>
				</view>
			</view>
			<view class="num mt-sm flex">购买数量：<input type="number" v-model="goodsNum" placeholder-style='font-size:20upx' placeholder="最少起批数量100"/><text class="ml">袋</text></view>
			<view class="remarsk">
				<view class="mt mb">订单留言</view>
				<view class="area flex flex-center">
					<textarea :value="textarea" placeholder="想对此次交易说点什么?" />
				</view>
			</view>
		</view>
		<view class="footer flex flex-sp">
			<view class="left">
				<view>共计：<text>{{totalMoney}}</text>元</view>
				<view class="num">{{goods.lucrative}}</view>
			</view>
			<view class="right">下单支付</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
	computed: {
		...mapState(['POAddress','POShop']),
		goods(){
			return this.POShop.goods
		},
		totalMoney(){
			return Number((this.goods.price)*(this.goodsNum)).toFixed(2)
		},
	},
	data() {
		return {
			goodsNum:'',//购买数量
			textarea:'',//订单留言
		};
	},
	methods: {
		chooseAdd(){
			uni.navigateTo({
				url:'/pages/PO/address?type='+this.goods.type
			})
		},
		callPhone(val) {
			uni.makePhoneCall({
				phoneNumber:val
			})
		}
	},
};
</script>

<style lang="scss">
.header,
.noAdd {
	border-bottom: 1upx dashed $uni-border-color;
	height: 220upx;
}
.time{
	color: $uni-color-primary;
}
.noAdd {
	line-height: 220upx;
	text-align: center;
	color: $uni-text-color;
	font-size: $uni-font-size-xl;
}
.header {
	font-size: $uni-font-size-lg;
	color: $uni-color-title;
	.notice{
		font-size: $uni-font-size-base;
		text{
			color: $uni-color-error;
		}
	}
}
.body {
	font-size: $uni-font-size-lg;
	.merchant {
		color: $uni-text-orange;
		image {
			width: $uni-img-size-sm;
			height: $uni-img-size-sm;
		}
	}
	.alIcon{
		color: $uni-text-orange;
	}
	.goods{
		.title{
			font-size: $uni-font-size-lg;
			color: $uni-color-title;
		}
		.price{
			text{
				color: $uni-text-orange;
			}
		}
		view{
			font-size: $uni-font-size-base;
			color: $uni-color-subtitle;
			line-height: 45upx;
		}
	}
	.num{
		input{
			width: 60%;
			border: 1upx solid $uni-text-color-placeholder;
			padding: 0upx 10upx;
		}
	}
	.remarsk{
		width: 100%;
		text-align: center;
		textarea{
			width: 100%;
			text-align: left;
			padding: 10upx;
			border: 1upx solid $uni-text-color-placeholder;
			height: 150upx;
		}
	}
}
.footer{
	font-size: $uni-font-size-base;
	position: fixed;
	height: 100upx;
	bottom: 0;
	left: 0;
	right:0;
	.left{
		width: 70%;
		border: 1upx solid $uni-color-orange;
		border-bottom: 0;
		padding: 10upx;
		text{
			color:$uni-text-orange;
		}
		.num{
			color: $uni-color-primary;
			font-size: $uni-font-size-sm;
		}
	}
	.right{
		width: 30%;
		background-color: $uni-color-orange;
		text-align: center;
		line-height: 100upx;
		font-size: $uni-font-size-lg;
		color: $uni-bg-color-white;
	}
}
</style>
