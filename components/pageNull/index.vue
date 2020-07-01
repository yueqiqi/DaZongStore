<!-- 搜索提示页面 -->
<template>
	<view class="searchNull flex center flex-center">
		<view style="width: 70%;">{{title}}</view>
	</view>
</template>

<script>
	export default{
		props:{
			title:{
				type:String
			}
		}
	}
</script>

<style>
	.searchNull{
		text-align: center;
		width: 100%;
		height: 100%;
		position: absolute;
		background: #ffffff;
		color: $uni-text-color-normal;
	}
</style>
