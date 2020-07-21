<template>
	<view class="plr">
		<block v-for="(item,index) in list" :key='index'>
			<view class="card pt pb border-bottom">
				<view class="flex flex-sp center">
					<view class="flex center">
						<view class="img">
							<image :src="item.headUrl" mode=""></image>
						</view>
						<view class="right ml">
							<view class="font">{{item.name  }}</view>
							<view>供应商：{{item.compName }}</view>
							<view >规格：{{item.packSize||'散装称重' }}</view>
							<view>价格： <text class='price'>{{item.price}}元/{{item.unitName }} <text >({{item.type==1?'自提':'配送'}})</text> </text></view>
							<view>起批数量：{{item.wholesaleNum }}{{item.unitName }}</view>
						</view>
					</view>
					<view><image class="add" @click="add(item)" src="../../static/add.png" mode=""></image></view>
				</view>
				<view style="width: 500upx;" class="over"><text>{{item.type==1?'提货位置':'供应商位置'}}</text>：{{item.merchAddress }}</view>
				<view>我的卖价：{{item.mySellPrice ?item.mySellPrice :'暂未上架'}}</view>
				<view v-if="!!item.profit" style="color: #007AFF;">{{item.profit}}</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		props:{
			list:{
				type:Array,
				default:()=>{
					return []
				}
			},
		},
		data(){
			return{
				
			}
		},
		methods:{
			add(val){
				this.$emit('addClick',val)
			},
		}
	}
</script>

<style scoped lang="scss">
	.img image{
		width: $uni-img-avatar;
		 height: $uni-img-avatar;
	}
	.add{
		width: $uni-img-size-base;
		height: $uni-img-size-base;
	}
	.card{
		font-size: $uni-font-size-base;
		color: $uni-text-color-normal;
		.price{
			color: $uni-text-orange;
		}
	}
</style>
