<!-- 搜索商家商品模板 -->
<template>
	<view>
		<view v-if="list==''">
			<pageNull title='输入要上架商品名称的关键字,选择所支持上架的商品上架'></pageNull>
		</view>
		<view v-else>
			<goodsCard :list='list' @addClick='add'></goodsCard>
		</view>
	</view>
</template>

<script>
	import goodsCard from '@/components/goodCard/index.vue'
	import pageNull from '@/components/pageNull/index.vue'
	import utils from '@/static/utils.js'
	export default {
		components:{
			goodsCard,
			pageNull
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

</style>
