<template>
	<view class="">
		<view class="body plr pt pb" v-for="(item, index) in list" :key="index" @click="selectAdd(item)">
			<view class="flex baseline mt-sm">
				<view class="title">{{ item.name }}</view>
				<view class="right ml-sm">{{ item.phone }}</view>
			</view>
			<view class="flex flex-sp mt-sm center">
				<view class="flex">
					<view class="left">营业时间</view>
					<view class="right ml-sm">{{ item.startTime }}-{{ item.endTime }}</view>
				</view>
				<view class="set" @click.stop="addAddress('set',item.id)">修改</view>
			</view>
			<view class="address mt-sm over">{{item.address}}</view>
		</view>
		<view class="flex center flex-center footer" @click="addAddress('add','')">
			<view>+</view>
			<view>新增地址</view>
		</view>
	</view>
</template>

<script>
// const Vuex = this.$store
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
	data() {
		return {
			list: [
				{ name: '王老吉', phone: '15183233274', startTime: '6:00', endTime: '18:00', address: '重庆市九龙坡区石桥铺万昌b111' },
				{ name: '王老吉', phone: '15183233274', startTime: '6:00', endTime: '18:00', address: '重庆市九龙坡区石桥铺万昌b111' }
			],
			type:'',
		};
	},
	onLoad(options) {
		this.type=options.type||''
		this.getAddress;
	},
	computed: {
		// ...mapState({
		// 	list:state=>state.address
		// })
	},
	methods: {
		...mapActions(['getAddress']),
		...mapMutations(['addgoods_choose_address']),
		selectAdd(val){
			if(this.type==''){
				return false
			}
			this.addgoods_choose_address(val)
			uni.navigateBack()
		},
		addAddress(val,item) {		
			uni.navigateTo({
				url :'/pages/address/info?type='+val+'&id='+item
			});
		}
	}
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
