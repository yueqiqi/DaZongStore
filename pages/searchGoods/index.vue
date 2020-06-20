<!-- 搜索商家商品模板 -->
<template>
	<view>
		<view class="searchNull flex center flex-center" v-if="list==''">
			<view style="width: 70%;">输入要上架商品名称的关键字,选择所支持上架的商品上架</view>
		</view>
		<view v-else>
			<goodsCard :list='list' @addClick='add'></goodsCard>
		</view>
	</view>
</template>

<script>
	import goodsCard from '@/components/goodCard/index.vue'
	import utils from '@/static/utils.js'
	export default {
		components:{
			goodsCard
		},
		data() {
			return {
				list:utils.list
			}
		},
		methods: {
			add(val){
				console.log(val)
			},
		}
	}
</script>

<style lang="scss" scoped>
.searchNull{
	text-align: center;
	width: 100%;
	height: 100%;
	position: absolute;
	background: #ffffff;
	color: $uni-text-color-normal;
}
</style>
