<template>
	<view>
		<view class="no-order" v-if="list==''">
			<view class="info">
				<view><image src="../../static/404.png" mode=""></image></view>
				<!-- <view>暂无数据</view> -->
			</view>
		</view>
		<view v-else>
			
		<block v-for="(item,index) in list" :key='index'>
			<view class="card plr pt pb border-bottom" @click="add(item)">
				<view class="flex flex-sp center">
					<view class="flex center">
						<view class="img"><image :src="item.headurl||item.headUrl" mode=""></image></view>
						<view  :style="{lineHeight: types=='searchModel'?'50upx':'40upx'}" class="ml">
							<view class="font">{{item.name}}</view>
							<view>规格：{{item.packsize||'散装称重' }}</view>
							<view v-if="types=='searchModel'">品牌：{{item.brand }}</view>
							<view v-if="types=='list'">价格： <text class="price">{{item.price}}元/{{item.unitName }} <text>({{item.type==1?'自提':'配送'}})</text></text> </view>
							<view v-if="types=='list'">起批数量：{{item.wholesaleNum }}{{item.unitName }}</view>
						</view>
					</view>
					<view v-if="types=='searchModel'&&!item.isMyGoods"><image class="add" src="../../static/add.png" mode=""></image></view>
					<view v-else class="alIcon">&#xe600;</view>
				</view>
			</view>
		</block>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			types:{
				type:String,
				default:'searchModel'
			},
			list:{
				type:Array,
				defailt:[],
			}
		},
		data(){
			return{
				
			}
		},
		methods: {
			add(val) {
				this.$emit('addClick',val)
			}
		},
	}
</script>

<style lang="scss" scoped>
	.add{
		width: $uni-img-size-base;
		height: $uni-img-size-base;
	}
	.img image{
		width: $uni-img-avatar;
		 height: $uni-img-avatar;
	}
	.card{
		font-size: $uni-font-size-base;
		color: $uni-text-color-normal;
	}
	.alIcon{
		font-size: 40upx;
	}
	.price{
		color: $uni-text-orange;
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
			text-align: center;
			image{
				width: 220upx;
				height: 220upx;
			}
		}
	}
</style>
