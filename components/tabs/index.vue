<template>
	<view class="stick" style="z-index: 998;">
		
		<view class="navTabBox border-bottom">
			<view class="longTab" :style="{ background: bgColor }">
				<scroll-view scroll-x="true" style="white-space: nowrap; display: flex" scroll-with-animation :scroll-left="tabLeft">
					<view
						class="longItem over"
						:style="{ width: isWidth + 'px', color: index === tabClick ? clickItem : normal }"
						:data-index="index"
						v-for="(item, index) in tabTitle"
						:key="index"
						:id="'id' + index"
						@click="longClick(index,item.id)"
					>
						{{ item[titleKey] }}
					</view>
					<view class="underlineBox" :style="'transform:translateX(' + isLeft + 'px);width:' + isWidth + 'px'"><view :style="lineStyle"></view></view>
				</scroll-view>
			</view>
			<view class="rightBox"><view class="alIcon icon" @click="showoutBox">&#xe92e;</view></view>
		</view>
		<view class="outBox" :class="isShow == true ? 'show' : 'hide'">
			<view class="animate" v-for="(item, index) in tabTitle" :key="index">
				<view class="titleKey" :class="index === tabClick ? 'animateItem' : 'animateNormal'" @click="longClick(index,item.id)">{{ item[titleKey] }}</view>
			</view>
		</view>
		<view class="mask" @click="close" :class="isShow ? 'show' : 'hide'"></view>
	</view>
</template>

<script>
export default {
	name: 'navTab',
	props: {
		//选项卡名称列表
		tabTitle: {
			type: Array
		},
		bgColor: {
			//背景颜色
			type: String,
			default: '#fff'
		},
		lineStyle: {
			//下划线的样式
			type: Object,
			default: () => {
				return {
					width: '100%',
					height: '4px',
					background: 'white'
				};
			}
		},
		titleKey: {
			//选项卡映射的键
			type: String,
			default: 'name'
		},
		clickItem: {
			//选中时的样式
			type: String,
			default: '#F98901'
		},
		normal: {
			//正常样式
			type: String,
			default: '#333'
		},
		tabClick: {
			type:Number,
			default:0
		}, //导航栏被点击
	},
	data() {
		return {
			isLeft: 0, //导航栏下划线位置
			isWidth: 0, //每个导航栏占位
			tabLeft: 0,
			animationData: '',
			isShow: false
		};
	},
	watch: {
		tabClick(newValue, oldValue) {//用于件听下划线的位置
			if (this.tabTitle.length > 5) {
				var tempIndex = newValue - 2;
				tempIndex = tempIndex <= 0 ? 0 : tempIndex;
				this.tabLeft = (newValue - 2) * this.isWidth; //设置下划线位置
			}
			this.isLeft = newValue * this.isWidth; //设置下划线位置
		}
	},
	updated() {
		var that = this;
		if(that.tabTitle.length==0)return
		// 获取设备宽度
		uni.getSystemInfo({
			success(e) {
				if (that.tabTitle.length <= 5) {
					that.isWidth = e.windowWidth / that.tabTitle.length; //宽度除以导航标题个数=一个导航所占宽度
				} else {
					that.isWidth = e.windowWidth / 5;
				}
			}
		});
	},
	methods: {
		close(){
			this.isShow=false
		},
		showoutBox() {
			this.isShow = !this.isShow;
		},
		// 导航栏点击
		longClick(index,id) {
			this.$emit('changeTab', index,id); //设置swiper的第几页
			this.isShow=false
		},
	}
};
</script>

<style lang="scss">
.navTabBox {
	display: flex;
	z-index: 9999;
	.rightBox {
		z-index: 999;
		background: #fff;
		width: 10%;
	}
	.longTab {
		z-index: 999;
		width: 90%;
		.longItem {
			height: 90upx;
			display: inline-block;
			line-height: 90upx;
			text-align: center;
			font-size: $uni-font-size-base;
		}
		.underlineBox {
			height: 3px;
			width: 20%;
			display: flex;
			align-content: center;
			justify-content: center;
			transition: 0.5s;
		}
	}
}
.icon {
	width: 100%;
	height: 100%;
	font-size: 40upx;
	line-height: 90upx;
}
.outBox {
	padding: 30upx;
	display: grid;
	text-align: center;
	grid-template-columns: repeat(4, 1fr);
	justify-items: center;
	align-items: center;
	background: #fff;
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
	position:relative;
	z-index: 99999;
	&.hide {
		display: none;
		transform: translate(0px, -200px);
		transition: -webkit-transform 300ms linear 0ms, transform 300ms linear 0ms;
		transform-origin: 50% 50% 0px;
	}

	&.show {
		transform: translate(0px, 0px);
		transition: -webkit-transform 300ms linear 0ms, transform 300ms linear 0ms;
		transform-origin: 50% 50% 0px;
		z-index: 99999;
	}
	.animate {
		.titleKey {
			padding: 10upx 15upx;
			margin-bottom: 30upx;
			font-size: $uni-font-size-base;
		}
	}
}
.mask {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0);
	transition: background-color 0.15s linear;
	z-index: 8;
	&.show {
		background-color: rgba(0, 0, 0, 0.5);
		
	}
	&.hide {
		display: none;
	}
}
.animateNormal {
	//下拉选择默认样式
	background: #fff;
	color: #333;
}
,
.animateItem {
	//下拉选择选中样式
	background: #fff;
	color: #F98901;
}
</style>
