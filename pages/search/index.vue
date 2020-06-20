<!-- 采购商品搜索 -->
<template>
	<view>
		<card :list="list" @addClick='add'></card>
	</view>
</template>

<script>
	import card from '@/components/card/index.vue'
	import utils from '@/static/utils.js'
	export default {
		components: {
			card
		},
		data() {
			return {
					list:utils.list
			}
		},
		methods: {
			add(val){
				console.log(1,val)
			}
		}
	}
</script>

<style>

</style>
