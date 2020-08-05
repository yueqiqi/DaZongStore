<template>
	<view class="tabs">
		<scroll-view scroll-x="true" style="white-space: nowrap; display: flex" scroll-with-animation class="scroll">
			<view
				class="longItem"
				v-for="(item, index) in list"
				:key="index"
				:data-index="index"
				:style="{ width: isWidth + 'px'}"
				:id="'id' + index"
				@click="longClick(index)"
				:class="index == cur ? 'tabClick':''"
			>
				{{ item }}
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	props: {
		currentTab:{
			type:String,
			default:null
		},
		list: {
			type: Array,
			default: []
		},
		clickItem: {
			//选中时的样式
			type: String,
			default: '#fff'
		},
		normal: {
			//正常样式
			type: String,
			default: '#333'
		}
	},
	data() {
		return {
			cur: 0, //点击的tab
			isWidth: 0 //每个tab的宽度
		};
	},
	created() {
		let that = this;
		uni.getSystemInfo({
			success(e) {
				if (that.list.length <= 5) {
					that.isWidth = e.windowWidth / that.list.length; //宽度除以导航标题个数=一个导航所占宽度
				} else {
					that.isWidth = e.windowWidth / 5;
				}
			}
		});
	},
	methods: {
		longClick(index) {
			let that = this
			that.cur=index
			this.$emit('changeTab',index); //设置swiper的第几页
		},
	}
};
</script>

<style lang="scss" scoped>
.longItem {
	height: 90upx;
	display: inline-block;
	line-height: 90upx;
	text-align: center;
	font-size: 34upx;
	border: 1upx solid #eeeeee;
	border-top: 0upx;
	box-sizing: border-box;
	background: #FFFFFF;
}
.scroll :nth-child(2){
	border-right: 0upx!important;
	border-left: 0upx!important;
}
.scroll :first-child{
	border-left: 0upx;
}
.scroll :last-child{
	border-right: 0upx;
}
.tabClick{
	color: $uni-color-orange!important;
}
</style>
