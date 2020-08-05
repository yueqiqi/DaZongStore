<!-- 添加地址 -->
<template>
	<view class="info plr pt">
		<view class="flex border-bottom">
			<view class="title">姓名:</view>
			<view class="right ml"><input type="text" placeholder-class="myIp" placeholder="请输入姓名" v-model="name" /></view>
		</view>
		<view class="flex border-bottom">
			<view class="title">电话:</view>
			<view class="right ml"><input type="number" placeholder-class="myIp" placeholder="请输入电话号码" v-model="phone" /></view>
		</view>
		<view class="flex border-bottom">
			<view class="title">省市区:</view>
			<view class="right ml" @click="addressShow = true">{{ province }}</view>
		</view>
		<view class="flex border-bottom">
			<view class="title">详细地址:</view>
			<view class="right ml"><input type="text" placeholder-class="myIp" placeholder="请输入详细地址" v-model="detailAddress" /></view>
		</view>
		<view class="flex border-bottom">
			<view class="title">营业时间:</view>
			<view class="right ml">
				<span class="mr-sm" @click="selectTime('start')">{{ startHours }}</span>
				----
				<span style="margin-left: 20upx;" @click="selectTime('end')">{{ endHours }}</span>
			</view>
		</view>
		<view class="footer flex flex-center">
			<button v-if="title == 'set'" @click="delAdd" class="btn-normal">删除</button>
			<!-- <view v-if="title == 'set'" style="width: 30upx;"></view> -->
			<button @click="setAdd(title)" class="btn">{{ title == 'add' ? '新增' : '修改' }}</button>
		</view>
		<pickerAddress v-model="addressShow" @confirm="addresspick" />
		<pickerTime ref="timePicker" :start="startdate" default="start" @rundata="kxdatetime"></pickerTime>
	</view>
</template>

<script>
import pickerAddress from '@/components/picker-address/index.vue';
import pickerTime from '@/components/picker-time/index.vue';
import { mapActions } from 'vuex';
export default {
	components: {
		pickerAddress,
		pickerTime
	},
	data() {
		return {
			lid: null,
			startdate: '2020-01-01 00:00',
			timeShow: true,
			addressShow: false,
			province: '省-市-区',
			detailAddress: '',
			startHours: '开始时间',
			endHours: '结束时间',
			title: 'add',
			type: 1,
			name: '',
			phone: ''
		};
	},
	methods: {
		...mapActions(['getAddList']),
		async setAdd(val) {
			//add--新增,set--修改
			let { detailAddress, endHours, name, phone, startHours } = this;
			let params = {};
			if (val == 'set') {
				params = {
					detailAddress,
					endHours,
					phone,
					startHours,
					name,
					provinceRegion: this.province,
					type: this.type,
					id: this.lid
				};
			} else {
				params = {
					detailAddress,
					endHours,
					phone,
					startHours,
					name,
					provinceRegion: this.province,
					type: this.type
				};
			}
			let title = '';
			if (params.name == '') {
				title = '请填写姓名';
				uni.showToast({
					title: title,
					icon: 'none'
				});
				return false;
			}
			let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
			if (!reg.test(params.phone)) {
				title = '请填写正确的电话号码';
				uni.showToast({
					title: title,
					icon: 'none'
				});
				return false;
			}
			if (this.province == '省-市-区') {
				title = '请选择所属位置';
				uni.showToast({
					title: title,
					icon: 'none'
				});
				return false;
			}
			if (params.detailAddress == '') {
				title = '请填写详细地址';
				uni.showToast({
					title: title,
					icon: 'none'
				});
				return false;
			}
			if (params.startHours == '开始时间') {
				title = '请选择开始时间';
				uni.showToast({
					title: title,
					icon: 'none'
				});
				return false;
			}
			if (params.endHours == '结束时间') {
				title = '请选择结束时间';
				uni.showToast({
					title: title,
					icon: 'none'
				});
				return false;
			}
			if (val == 'add') {
				let result = await this.$api.addAddress(params);
			} else {
				let result = await this.$api.setAddress(params);
			}
			this.getAddList(this.type);
			uni.navigateBack({});
		},
		delAdd() {
			let that =this
			uni.showModal({
				title: '提示',
				content: '是否删除该地址',
				mask: true,
				confirmColor: '#fc724c',
				success(res) {
					if (res.confirm) {
						that.$api.delAddress(that.lid).then(res => {
							that.getAddList(that.type);
							uni.navigateBack({});
						});
					}
				}
			});
		},
		selectTime(val) {
			this.timeType = val;
			this.$refs.timePicker.open();
		},
		kxdatetime(e) {
			if (this.timeType == 'start') {
				this.startHours = e;
			} else {
				this.endHours = e;
			}
		},
		addresspick(obj) {
			this.province = obj.province.AreaName + obj.city.AreaName + obj.area.AreaName;
		},
		getAddInfo(lid) {
			this.$api.getAddInfo(lid).then(res => {
				this.name = res.name;
				this.phone = res.phone;
				this.detailAddress = res.detailAddress;
				this.startHours = res.startHours;
				this.endHours = res.endHours;
				this.lid = res.id;
				this.province = res.provinceRegion;
			});
		}
	},
	onLoad(option) {
		//option.type add--新增 set--修改
		this.title = option.type;
		this.type = option.types; //1--自提,2--配送
		if (option.type == 'set') {
			this.getAddInfo(option.id);
		}
	},
	onShow() {
		let title;
		if (this.title == 'add') {
			title = '新增地址';
		} else {
			title = '修改地址';
		}
		uni.setNavigationBarTitle({
			title: title
		});
	}
};
</script>

<style lang="scss">
.title {
	color: $uni-text-color;
	font-size: $uni-font-size-lg;
	font-weight: $uni-font-weight;
	width: 25%;
}
.info {
	color: $uni-text-color-normal;
	font-size: $uni-font-size-base;
}
.flex {
	align-items: baseline;
	padding-bottom: 35upx;
	margin-bottom: 35upx;
	width: 100%;
}
.right {
	width: 70%;
	// margin-left: 50upx;
}
.myIp {
	font-size: $uni-font-size-base !important;
}
.btn-normal::after {
	border-top-right-radius: 0 !important;
}
.btn::after {
	border-top-left-radius: 0 !important;
}
.footer {
	position: fixed;
	bottom: 45upx;
	right: 0upx;
	left: 0upx;
	padding-bottom: 0;
	margin-bottom: 0;
}
.btn,.btn-normal{
	width: 45%;
}

</style>
