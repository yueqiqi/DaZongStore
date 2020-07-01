<template>
	<view>
		<block v-for="(item,index) in list" :key='index'>
			<view class="card plr pt pb border-bottom">
				<view class="flex flex-sp center">
					<view class="flex center">
						<view class="img"><image :src="item.img" mode=""></image></view>
						<view  :style="{lineHeight: types=='searchModel'?'50upx':'40upx'}" class="ml">
							<view class="font">{{item.title}}</view>
							<view>规格：{{item.specification}}</view>
							<view v-if="types=='searchModel'">品牌：{{item.store}}</view>
							<view v-if="types=='list'">价格： <text class="price">{{item.price}} <text>({{item.type==1?'自提':'配送'}})</text></text> </view>
							<view v-if="types=='list'">起批数量：{{item.num}}</view>
						</view>
					</view>
					<view v-if="types=='searchModel'"><image class="add" @click="add(item)" src="../../static/add.png" mode=""></image></view>
					<view v-else class="alIcon" @click="add(item)">&#xe600;</view>
				</view>
			</view>
		</block>
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
</style>
