<!-- 采购下单 -->
<template>
	<view class="plr pt po">
		<view class="header" v-if="!!POAddress" @click="chooseAdd">
			<view class="flex flex-sp">
				<view class="name">
					收货人：
					<text>{{ POAddress.name }}</text>
				</view>
				<view class="phone">{{ POAddress.phone }}</view>
			</view>
			<view class="flex flex flex-sp mt mb">
				<view class="over">{{ POAddress.detailAddress }}</view>
				<view class="alIcon">&#xe600;</view>
			</view>
			<view class="notice">
				<text>注意：</text>
				{{goods.type == 1 ? '自提' : '配送'}}时间仅为预估时间,特殊需求请联系商家
			</view>
		</view>
		<view v-else @click='chooseAdd' class="noAdd">暂未选择地址+</view>
		<view class="body mt">
			<view class="flex flex-sp">
				<view class="merchant flex flex-center">
					<view class="flex flex-center mr-sm" >
						<image src="../../static/store.png" mode=""></image>
					</view>
					<view>{{ goods.compName }}</view>
				</view>
				<view class="callphone" @click="callPhone(goods.compPhone )">
					<text class="alIcon">&#xe682;</text>
					<text class="ml-xs">联系商家</text>
				</view>
			</view>
			<view class="goods flex mt">
				<view class="mr"><image class="uImg-l" :src="goods.headUrl" mode=""></image></view>
				<view>
					<view class="title">{{goods.name}}</view>
					<view>规格：{{goods.packSize||'散装称重' }}</view>
					<view class="price">价格：<text>{{goods.price}}元/{{goods.unitName }}({{goods.type==1?'自提':'配送'}})</text></view>
					<view v-if="goods.mySellPrice">我的卖价：{{goods.mySellPrice }}</view>
				</view>
			</view>
			<view class="num mt-sm flex">购买数量：<input type="number" v-model="goodsNum" placeholder-style='font-size:20upx' :placeholder="'最少起批数量'+goods.wholesaleNum"/><text class="ml">袋</text></view>
			<view class="flex mt">
				<view class="title left-title">{{ goods.type == 1 ? '自提' : '配送' }}时间：</view>
				<view class="right-time">
					<pickerTime style='width: 100%;' @changeTime="changeTime" :sTime='0' :cTime='23'>
						<view slot='pCon' class="mr-sm font-info flex flex-sp center" @click="selectTime('datetime')"><view>{{ timer }}</view><view class="alIcon">&#xe600;</view></view>
					
					</pickerTime>
				</view>
			</view>
			<view class="remarsk">
				<view class="mt mb">订单留言</view>
				<view class="area flex flex-center">
					<textarea v-model="textarea" placeholder="想对此次交易说点什么?" />
				</view>
			</view>
		</view>
		<view class="footer flex flex-sp">
			<view class="left">
				<view>共计：<text>{{totalMoney}}</text>元</view>
				<view class="num">{{goods.profit}}</view>
			</view>
			<view class="right" @click="pay">下单支付</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import pickerTime from '@/components/select-time/picker2.vue';
export default {
	components: {
		pickerTime
	},
	computed: {
		...mapState(['POShop','goodsInfo','supplierAdd']),
		totalMoney(){
			return Number((this.goods.price)*(this.goodsNum)).toFixed(2)
		},
		POAddress:{//地址信息
			get(){
				return this.supplierAdd
			},
			set(val){}
		},
	},
	data() {
		return {
			timer: '请选择时间',
			goods:'',
			goodsNum:'',//购买数量
			textarea:'',//订单留言
		};
	},
	onLoad(options) {
		this.$api.echoGoodsInfo(options.id).then(res => {
			this.goods=res
		})
		this.showAddress()
	},
	methods: {
		...mapActions(['showAddress']),
		...mapMutations(['order_pay']),
		pay(){
			if(Number(this.goodsNum)<Number(this.goods.wholesaleNum)){
				uni.showToast({
					title: '起批数量至少为'+this.goods.wholesaleNum, 
					icon: "none",
				})
				this.goodsNum=''
				return false
			}
			if(this.timer=='请选择时间'){
				uni.showToast({
					title: '请选择时间',
					icon: "none",
				})
				return false
			}
			if(this.POAddress==null){
				uni.showToast({
					title: '请选择地址', 
					icon: "none",
				})
				return false
			}
			let params = {
				bulkGoodsId :this.goods.id,
				num:this.goodsNum,
				supplierAddressId :this.POAddress.id,
				remark :this.textarea,
				takeTime :this.timer
			}
			this.$api.placeOrder(params).then(res => {
				this.order_pay(res)
				uni.navigateTo({
					url:'/pages/pay/index'
				})
			})
		},
		chooseAdd(){
			uni.navigateTo({
				url:'/pages/PO/address?type='+this.goods.type
			})
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
					}
				})
			}else{
				uni.showToast({
					title:'商家电话号码异常',
					icon:'none'
				})
			}
		},
		changeTime(val,val2){
			let end = Number(val.split(' ')[1].split(':')[0]) + 1;
			let ends = val.split(' ')[1].split(':')[1];
			if (Number(end) > 23) {
				end = 0;
			}
			if(Number(end)<10){
				end = '0'+end
			}
			let ender = end + ':' + ends;
			this.timer = val + '-' + ender;
		},
		selectTime(type) {
			this.type = type;
			this.showPicker = true;
			this.value = this[type];
		},
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
.font-info{color: #909090;width: 100%;}
.right-time{
	width: 100%;
	display: flex;
	align-items: center;
	.alIcon{
		color: #909090;
	}
}
.left-title{
	width: 222upx;
}
</style>
