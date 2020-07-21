<!-- 我的商品 -->
<template>
	<view>
		<search arrowleft="arrowleft" left-text="返回" rightText="添加商品" @rightClick='rightClick' ></search>
		<goodsLists types='list' :list='list' @addClick='add'></goodsLists>
	</view>
</template>

<script>
	import goodsLists from '@/components/goodCard/index.vue'
	import utils from '@/static/utils.js'
	import search from '@/components/search/index.vue'
	export default {
		components:{
			goodsLists,
			search
		},
		data() {
			return {
				list:[]
			}
		},
		onShow() {
			this.getList()
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList(){
				this.$api.getSupList().then(res => {
					this.list=res.items
				})
			},
			rightClick(){
				uni.navigateTo({
					url:'/pages/searchGoods/index'
				})
			},
			add(val){
				uni.navigateTo({
					url:'/pages/addGoods/index?id='+val.id+'&type=set'
				})
			}
		}
	}
</script>

<style>

</style>
