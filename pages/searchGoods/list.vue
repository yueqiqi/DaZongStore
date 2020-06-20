<template>
	<view>
		<goodsLists types='list' :list='list' @addClick='add'></goodsLists>
	</view>
</template>

<script>
	import goodsLists from '@/components/goodCard/index.vue'
	import utils from '@/static/utils.js'
	export default {
		components:{
			goodsLists
		},
		data() {
			return {
				list:utils.list
			}
		},
		methods: {
			add(val){
				console.log(val)
			}
		}
	}
</script>

<style>

</style>
