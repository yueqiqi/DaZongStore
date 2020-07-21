<!-- 搜索商家商品模板 -->
<template>
	<view>
		<search arrowleft="arrowleft" left-text="返回" rightText="搜索" @rightClick='rightClick' ></search>
		<view v-if="list==''">
			<pageNull title='输入要上架商品名称的关键字,选择所支持上架的商品上架'></pageNull>
		</view>
		<view v-else>
			<goodsCard :list='list' @addClick='add'></goodsCard>
		</view>
		<loadMore :loadingType="loadingType" :contentText="contentText" :isShowLoad='isShowLoad'></loadMore>
	</view>
</template>

<script>
	import goodsCard from '@/components/goodCard/index.vue'
	import pageNull from '@/components/pageNull/index.vue'
	import utils from '@/static/utils.js'
	import search from '@/components/search/index.vue'
	import loadMore from '@/components/load-more/index.vue';
	export default {
		components:{
			goodsCard,
			pageNull,
			search,
			loadMore
		},
		data() {
			return {
				list:[],
				page:1,
				page:1,
				loadingText: '加载中...',
				loadingType: 0, //定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
				contentText: {
					contentdown: '上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				},
				isShowLoad:false,//显示加载更多
				keyWord:'',//搜索关键词
			}
		},
		methods: {
		async	rightClick(val){
			if(this.keyWord==val&&val!='') return 
			this.keyWord=val
				let params = {
					page:1,
					key:val
				}
				let data = await this.$api.searchGoodsTem(params)
				this.list=data
			},
			add(val){
				uni.navigateTo({
					url:'/pages/addGoods/index?id='+val.id+'&type=add'
				})
			},
		},
		async	onReachBottom(){
				this.isShowLoad=true
				this.page++; //每触底一次 page +1
				let _self = this;
				if (this.loadingType != 0) {
					//loadingType!=0;直接返回
					return false;
				}
				this.loadingType = 1;
				uni.showNavigationBarLoading(); //显示加载动画
				let params = {
					page:this.page,
					key:this.keyWord
				}
				let data = await this.$api.searchGoods(params)
				this.isShowLoad=false
				if (data == '') {
					//没有数据
					_self.loadingType = 2;
					uni.hideNavigationBarLoading(); //关闭加载动画
					return;
				}
				_self.list = _self.list.concat(data); //将数据拼接在一起
				_self.loadingType = 0; //将loadingType归0重置
				uni.hideNavigationBarLoading(); //关闭加载动画	
			},
	}
</script>

<style lang="scss" scoped>

</style>
