<!-- 采购商城首页 -->
<template>
	<view>
		<search :cBack='true' arrowleft="arrowleft" :focus='false'  :rightWidth='0' @iptClick='iptClick'></search>
		<navTab wWidth='100%' ref="navTab" :tabTitle="tabTitle" :tabClick="currentTab" @changeTab="changeTab"></navTab>
		<view class="sticks"><swiperTab ref='swiperTab' :parent_id='parent_id' :tabList="tabTitle" :TabCur="currentTab" :leftCategoryList='endList'></swiperTab></view>
	</view>
</template>

<script>
import navTab from '@/components/tabs/index.vue'; //选项卡页面
import swiperTab from '@/components/swiper/index.vue'; //swiper页面
import search from '@/components/search/index.vue'
export default {
	components: {
		navTab,
		swiperTab,
		search,
	},
	data() {
		return {
			endList:[],
			parent_id:0,
			rightCategoryList:[],
			details: {
				leftCategoryList: [],
				rightCategoryList: []
			},
			title: 'Hello',
			list:[], //导航栏格式 --导航栏组件
			currentTab: 0 //sweiper所在页
		};
	},
async	onLoad(options) {
	
	if(!!options.token){
		uni.setStorageSync('userToken',options.token);
	}
	await	this.getCategoryList()
		this.endList =	this.leftCategoryList.filter(val => {
				return val.parentid==this.tabTitle[0].id
			})
	},
	computed: {
		tabTitle() {
			return this.list.filter(val => {
				return val.pathlevel==1
			}) 
		},
		leftCategoryList(){
			return this.list.filter(val => {
				return val.pathlevel==2
			})
		}
	},
	methods: {
		async getCategoryList(){
		await	this.$api.getCategoryList('').then(res => {
				this.list=res
			})
		},
		iptClick(){
			uni.navigateTo({
				url:'/pages/search/index'
			})
		},
		rightClick(val){
			uni.navigateTo({
				url:'/pages/searchGoods/list'
			})
		},
		changeTab(index,id) {
		this.endList =	this.leftCategoryList.filter(val => {
				return val.parentid==id
			})
			this.currentTab = index;
		}
	}
};
</script>

<style>
.content {
	text-align: center;
}
.sticks{
	position: fixed;
	top: 190upx;
	width: 100%;
}
</style>
