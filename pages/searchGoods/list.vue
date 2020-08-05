<!-- 我的商品 -->
<template>
	<view>
		<search arrowleft="arrowleft"  rightText="上架商品" @rightClick='rightClick' ></search>
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
		onLoad(options) {
			if(!!options.token){
				uni.setStorageSync('userToken',options.token);
			}
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
