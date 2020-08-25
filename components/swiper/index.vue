<template>
	<view>
		<!-- @touchstart="refreshStart" @touchmove="refreshMove" @touchend="refreshEnd" -->
		<refresh ref="refresh" @isRefresh="isRefresh"></refresh>
		<!-- <button @click="look">查看</button> -->
		<!-- <swiper
			:current="TabCur"
			class="swiper"
			duration="300"
			indicator-color="rgba(255,255,255,0)"
			indicator-active-color="rgba(255,255,255,0)"
			@change="swiperChange"
			:style="{ height: swiperHeight + 'px' }"
		>
			<swiper-item v-for="(val, index) in tabList" :key="index"> -->
		<scroll-view scroll-y="true">
			<view class="list">
				<scroll-view scroll-y="true">
					<view class="flex categoryList">
						<view class="left-categoryList">
							<scroll-view scroll-y="true" :style="{ height: swiperHeight + 'px' }">
								<block v-for="(val, left_index) in leftCategoryList" :key="left_index">
									<view @click="leftClick(left_index, val.id)" class="left-title" :class="left_index === leftIndex ? 'click-left' : ''">{{ val.name }}</view>
								</block>
							</scroll-view>
						</view>
						<view class="right-categoryList pt">
							<!-- upper-threshold="10"
							refresher-background="#f1f1f1"
							:refresher-threshold="60"
							refresher-enabled="true"
							:refresher-triggered="triggered"
							:enable-back-to-top="true"
							:scroll-with-animation="true"
							refresher-default-style="none"						
							@scrolltoupper="refreshStart"
							@refresherpulling="refreshMove"
							@touchend="refreshEnd"
							 lower-threshold='1' -->
							<scroll-view scroll-y="true" :style="{ height: swiperHeight + 'px' }" @scrolltolower="refend">
								<block v-for="(rightCategoryList, right_index) in rightCategoryLists" :key="right_index">
									<view class="card-list mb border-bottom pb">
										<view class="card-header flex flex-sp center plr" @click="openCategoryList(rightCategoryList, right_index)">
											<view class="flex center" style="width: 80%;">
												<view class="uImg mr-sm "><image style="width: 100%;height: 100%;" :src="rightCategoryList.smallUrl" mode=""></image></view>
												<view style="font-size: 28upx;flex: auto;" class="over">
													{{ rightCategoryList.name }}
													<text class="type ml-xs">({{ rightCategoryList.num + '种' }})</text>
												</view>
											</view>
											<view style="width: 20%" class="open">
												{{ rightCategoryList.type ? '关闭' : '展开' }}
												<text class="alIcon">&#xe600;</text>
											</view>
										</view>
										<view class="card-body" v-if="rightCategoryList.type"><card :isShowNotice='false' :list="endList" @addClick="add"></card></view>
									</view>
								</block>
							</scroll-view>
						</view>
					</view>
				</scroll-view>
			</view>
		</scroll-view>
		<!-- </swiper-item>
		</swiper> -->
	</view>
</template>

<script>
import refresh from '../refresh/index.vue'; //下拉刷新页面
import card from '../card/index.vue';
export default {
	components: {
		refresh,
		card
	},
	props: {
		parent_id: {},
		leftCategoryList: {
			type: Array,
			default: () => {
				return [];
			}
		},
		tabList: {
			type: Array
		},
		TabCur: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			rightTrue: true,
			rightPage: 1,
			rightId: '',
			endList: [],
			rightCategoryLists: [],
			leftIndex: 0,
			triggered: false,
			swiperHeight: 0 //外部的高度
		};
	},
	watch: {
		leftCategoryList(newValue, oldValue) {
			if (newValue.length > 0) {
				this.leftClick(0, newValue[0].id);
			}
		}
	},
	created() {
		let _this = this;
		setTimeout(() => {
			let list = '.list';
			_this.getlistHeight(list);
		}, 10);
	},
	methods: {
		refend(val) {
			if (!this.rightTrue) return;
			this.rightPage += 1;
			let params = {
				id: this.rightId,
				page: this.rightPage
			};
			this.$api.getList2(params).then(res => {
				res.items.map(val => {
					val.type = false;
				});
				if (res.items != '') {
					this.rightCategoryLists = this.rightCategoryLists.concat(res.items);
				} else {
					uni.showToast({
						title: '暂无更多数据',
						icon: 'none'
					});
					this.rightTrue = false;
				}
			});
		},
		add(val) {
			this.$store.commit('add_goodsinfo',val)
			uni.navigateTo({
				url:'/pages/PO/index?id='+val.id
			})
		},
		openCategoryList(item, idx) {
			this.rightCategoryLists.map((val, ix) => {
				if (idx != ix) {
					val.type = false;
				}
			});
			//右侧点击展开
			item.type = !item.type;
			this.$api.getList3(item.id).then(res => {
				this.endList = res;
				// console.log(this.endList.length)
			});
		},
		leftClick(index, id) {
			this.rightId = id;
			//左侧列表点击
			this.leftIndex = index;
			let params = {
				id,
				page: 1
			};
			this.$api.getList2(params).then(res => {
				res.items.map(val => {
					val.type = false;
				});
				this.rightCategoryLists = res.items;
			});
		},

		refreshStart(e) {
			this.triggered = true;
			this.$refs.refresh.refreshStart(e);
		},
		refreshMove(e) {
			this.triggered = 'restore';
			this.$refs.refresh.refreshMove(e);
		},
		refreshEnd(e) {
			this.triggered = false;
			this.$refs.refresh.refreshEnd(e);
		},
		isRefresh() {
			setTimeout(() => {
				uni.showToast({
					icon: 'success',
					title: '刷新成功'
				});
				this.$refs.refresh.endAfter(); //刷新结束调用
			}, 1000);
		},
		swiperChange(e) {
			let { current } = e.target;
			this.$emit('swiperChange', current);
		},
		getlistHeight(list) {
			let _this = this;
			uni.getSystemInfo({
				success: res => {
					let info = uni.createSelectorQuery().select(list);
					info
						.boundingClientRect(function(data) {
							_this.swiperHeight = data.height; // 获取元素高度
							if (res.windowHeight > data.height) {
								//设备高度和元素高度相比较
								_this.swiperHeight = res.windowHeight;
							}
						})
						.exec();
				}
			});
		}
	}
};
</script>

<style scoped lang="scss">
.categoryList {
	width: 100%;
	height: 100%;
}
.left-categoryList {
	width: 25%;
	height: 100%;
	.left-title {
		width: 100%;
		text-align: center;
		height: 100upx;
		line-height: 100upx;
		font-size: $uni-font-size-base;
		&.click-left {
			color: #fff;
			background: $uni-color-orange;
		}
	}
}
.right-categoryList {
	width: 75%;
	height: 100%;
}
.card-list:last-child {
	border: 0;
}
.card-list {
	background: #fff;
	.card-header {
		// flex: 1;
		.type {
			font-size: $uni-font-size-sm;
		}
		.open {
			font-size: $uni-font-size-lg;
			color: $uni-text-orange;
			text {
				color: $uni-text-orange;
			}
		}
	}
}
</style>
