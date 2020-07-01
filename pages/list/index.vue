<!-- 采购订单列表 -->
<template>
	<view>
		<tabs :list="tabList" @changeTab='changeTab'></tabs>
		<view v-for="(item,index) in list" :key='index'>
			<view class="card plr pb pt mb-sm">
				<view class="header flex center border-bottom">
					<view class='img'><image src="@/static/store.png" mode=""></image></view>
					<view class="ml">{{item.title}}</view>
				</view>
				<view class="footer">
					<view class="flex flex-sp mt-xs mb-xs">
						<view class="orderNo">订单号:{{item.orderNo}}</view>
						<view :style="{color:item.type==1?'rgb(64, 186, 73)':'rgb(0, 158, 242)'}">{{item.type==1?'微信支付':'支付宝支付'}}</view>
					</view>
					<view class="flex flex-sp" v-for="(items,index) in item.list">
						<view >{{items.name}}</view>
						<view>x{{item.num}}</view>
					</view>
					<view class="flex flex-sp mt-sm mb-xs">
						<view >{{item.date}}</view>
					</view>
					<view class="flex flex-sp center">
						<view >合计：<text style="color: #ff0000;">{{item.price}}</text> </view>
						<view class="flex btns">
							<view class="btn-info" @click="goInfo(item)">订单详情</view>
							<view v-if="item.status==2" class="btn-confirm ml-xs" @click="confirm(item)">确认收货</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tabs from '@/components/listTabs/index.vue'
	import utils from '@/static/utils.js'
	export default {
		components: {
			tabs
		},
		data() {
			return {
				tabList:['待发货','待收货','完成'],
				flag:[false,false,false],
				list:utils.list,
				title:'',
			};
		},
		onShow(){
			let title;
			if (this.title == 'add') {
				title = '采购订单列表';
			} else {
				title = '销售订单列表';
			}
			uni.setNavigationBarTitle({
				title: title
			});
		},
		methods: {
			confirm(val){
				uni.showModal({
					title:'收货提示',
					content:'是否确认收货?确认收货订单状态将改变!',
					success(res) {
						if(res.confirm){
							console.log(1)
						}else{
							console.log(2)
						}
					}
				})
			},
			goInfo(val){
				console.log(val)
			},
			changeTab(index) {
				console.log(index)
			}
		},
	}
</script>

<style lang="scss">
page{
	background: $uni-bg-color;
}
.img image{
	width: $uni-img-size-base;
	height: $uni-img-size-base;
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
</style>
