<template>
	<view class="">
<!-- 		<section class="PullScroll-Page">
			<s-pull-scroll ref="pullScroll" :bottom='100' :back-top="false" :pullDown="pullDown" :pullUp="loadData"> -->
			<view class="endList">
				
				<view class="body plr pt pb" v-for="(item, index) in list" :key="index" @click="selectAdd(item)">
					<view class="flex baseline mt-sm">
						<view class="title">{{ item.name }}</view>
						<view class="right ml-sm">{{ item.phone }}</view>
					</view>
					<view class="flex flex-sp mt-sm center">
						<view class="flex">
							<view class="left">营业时间</view>
							<view class="right ml-sm">{{ item.startHours }}-{{ item.endHours }}</view>
						</view>
						<view class="set" @click.stop="addAddress('set', item.id)">修改</view>
					</view>
					<view class="address mt-sm over">{{ item.provinceRegion+item.detailAddress }}</view>
				</view>
			</view>
<!-- 			</s-pull-scroll>
		</section> -->
		<view class="flex center flex-center footer" @click="addAddress('add', '')">
			<view>+</view>
			<view>新增地址</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import sPullScroll from '@/components/loadMore_pull/index.vue';
export default {
	components: {
		sPullScroll
	},
	data() {
		return {
			type: 1,
			chooseType:false,
		};
	},
	onLoad(options) {
		this.type = options.type || '';//1--自提,2--配送
		this.chooseType = options.chooseType;//是否可选择
		this.getAddList(this.type);
	},
	onReady() {
		
	},
	computed: {
		...mapState({
			list:state=>state.addList
		})
	},
	methods: {
		...mapActions(['getAddList']),
		...mapMutations(['addgoods_choose_address']),
		selectAdd(val) {
			if (this.chooseType==false)return false;
			this.addgoods_choose_address(val);
			uni.navigateBack();
		},
		addAddress(val, item) {
			uni.navigateTo({
				url: '/pages/address/info?type=' + val + '&id=' + item+'&types='+this.type
			});
		},
		refresh() {
			this.$nextTick(() => {
				this.$refs.pullScroll.refresh();
			});
		},
		pullDown(pullScroll) {
			setTimeout(() => {
				this.loadData(pullScroll);
			}, 200);
		},
		loadData(pullScroll) {
			setTimeout(() => {
				if (pullScroll.page == 1) {
					this.list = [];
				}
				const curList = [];
				for (let i = this.list.length; i < this.list.length + 20; i++) {
					curList.push(i);
				}
				this.list = this.list.concat(curList);
				if (this.list.length > 60) {
					// finish(boolean:是否显示finishText,默认显示)
					pullScroll.finish(this.list.length > 5);
				} else {
					pullScroll.success();
				}
			}, 500);
		}
	}
};
</script>

<style lang="scss" scoped>
@import './index.scss';
.endList>:last-child{
	margin-bottom: 150upx;
}
</style>
