<!-- 采购商城首页 -->
<template>
	<view>
		<navTab ref="navTab" :tabTitle="tabTitle" :tabClick="currentTab" @changeTab="changeTab"></navTab>
		<view class=""><swiperTab :tabList="tabTitle" :TabCur="currentTab" :details.sync="details" @swiperChange="changeTab"></swiperTab></view>
	</view>
</template>

<script>
import navTab from '@/components/tabs/index.vue'; //选项卡页面
import swiperTab from '@/components/swiper/index.vue'; //swiper页面
export default {
	components: {
		navTab,
		swiperTab
	},
	data() {
		return {
			details: {
				leftCategoryList: [
					{ title: '叶菜类' },
					{ title: '根茎类' },
					{ title: '葱姜蒜香菜' },
					{ title: '茄果实类' },
					{ title: '樱花' },
					{ title: '血制品' },
					{ title: '其他特殊类' },
				],
				rightCategoryList: [
					{
						type:false,
						title: '白菜',
						img: require('@/static/logo.png'),
						list: [
							{
								status: 1,
								date: '2020-05-26 10:14:21',
								orderNo: '12345678998765444',
								img: require('@/static/logo.png'),
								title: '商品名字',
								store: '四级生鲜',
								price: '55元/袋',
								type: '1',
								specification: '1*30斤/袋',
								num: '100',
								address: '大龙山街道艾迪斯',
								sellingPrice: '60.9元/袋',
								lucrative: '该价格最小批发量预计可获利890元'
							},
							{
								status: 1,
								date: '2020-05-26 10:14:21',
								orderNo: '12345678998765444',
								img: require('@/static/logo.png'),
								title: '商品名字',
								store: '四级生鲜',
								price: '55元/袋',
								type: '1',
								specification: '1*30斤/袋',
								num: '100',
								address: '大龙山街道艾迪斯',
								sellingPrice: '60.9元/袋',
								lucrative: '该价格最小批发量预计可获利890元'
							}
						]
					},
					{
						type:false,
						title: '生菜',
						img: require('@/static/logo.png'),
						list: [
							{
								status: 1,
								date: '2020-05-26 10:14:21',
								orderNo: '12345678998765444',
								img: require('@/static/logo.png'),
								title: '商品名字',
								store: '四级生鲜',
								price: '55元/袋',
								type: '1',
								specification: '1*30斤/袋',
								num: '100',
								address: '大龙山街道艾迪斯',
								sellingPrice: '60.9元/袋',
								lucrative: '该价格最小批发量预计可获利890元'
							},
							{
								status: 1,
								date: '2020-05-26 10:14:21',
								orderNo: '12345678998765444',
								img: require('@/static/logo.png'),
								title: '商品名字',
								store: '四级生鲜',
								price: '55元/袋',
								type: '1',
								specification: '1*30斤/袋',
								num: '100',
								address: '大龙山街道艾迪斯',
								sellingPrice: '60.9元/袋',
								lucrative: '该价格最小批发量预计可获利890元'
							}
						]
					}
				]
			},
			title: 'Hello',
			tabTitle: [
				{ title: '新鲜蔬菜', id: 1 },
				{ title: '肉禽蛋', id: 2 },
				{ title: '调料干副', id: 3 },
				{ title: '米粮面', id: 4 },
				{ title: '冻品类', id: 5 },
				{ title: '选择五', id: 5 }
			], //导航栏格式 --导航栏组件
			currentTab: 0 //sweiper所在页
		};
	},
	onLoad() {},
	methods: {
		changeTab(index) {
			this.currentTab = index;
		}
	}
};
</script>

<style>
.content {
	text-align: center;
}
</style>
