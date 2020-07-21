<!-- 添加地址 -->
<template>
	<view class="info plr pt">
		<view class="flex border-bottom">
			<view class="title">姓名:</view>
			<view class="right ml"><input type="text" placeholder-class="myIp" placeholder="请输入姓名" v-model="name" /></view>
		</view>
		<view class="flex border-bottom">
			<view class="title">电话:</view>
			<view class="right ml"><input type="number" maxlength="11" placeholder-class="myIp" placeholder="请输入电话号码" v-model="phone" /></view>
		</view>
		<view class="flex border-bottom" v-if="addressType != 1">
			<view class="title">省市区:</view>
			<view class="right ml" @click="addressShow = true">{{ province }}-{{ city }}-{{ area }}</view>
		</view>
		<view class="flex border-bottom">
			<view class="title">{{ addressType == 1 ? '自提' : '详细' }}地址:</view>
			<view class="right ml"><input :disabled="addressType == 1&&supplierAdd!=null" type="text" placeholder-class="myIp" placeholder="请输入详细地址" v-model="address" /></view>
		</view>
		<!-- <view class="flex border-bottom">
			<view class="title">{{ addressType == 1 ? '自提' : '配送' }}时间:</view>
			<view class="right ml">
				<pickerTime @changeTime="changeTime" :sTime='0' :cTime='23'>
					<span slot='pCon' class="mr-sm" @click="selectTime('datetime')">{{ timer }}</span>
				</pickerTime>
			</view>
		</view> -->
		<view class="footer flex-center flex"><button class="btn" @click="save">保存</button></view>
		<pickerAddress v-model="addressShow" @confirm="addresspick" />
		<!-- <pickerTime :show="showPicker" :type="type" :value="value" :show-tips="false" @confirm="onSelected" @cancel="showPicker = false"></pickerTime> -->
		
	</view>
</template>

<script>
import pickerAddress from '@/components/picker-address/index.vue';
import pickerTime from '@/components/select-time/picker2.vue';
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
	components: {
		pickerAddress,
		pickerTime
	},
	computed: {
		...mapState(['supplierAdd']),
	},
	data() {
		return {
			type: '',
			value: '',
			showPicker: false,
			phone: '',
			name: '',
			addressType: null, //1--自提,2--配送
			timeShow: true,
			addressShow: false,
			province: '省',
			city: '市',
			area: '区',
			address: '',
			timer: '请选择时间'
		};
	},
	methods: {
		...mapActions(['myaddress','showAddress']),
		testInput(){
			if(this.name==''){
				uni.showToast({
					title: "请填写姓名",
					icon: "none"
				});
				return false
			}
			if(this.phone==''){
				uni.showToast({
					title: "请填写电话号码",
					icon: "none"
				});
				return false
			}else{
				let isBool = this.$utils.testPhone(this.phone)
				if(!isBool){
					this.phone=''
				}
				return isBool
			}
			if(this.addressType!=1){
				if(this.province==''){
					uni.showToast({
						title: "请填写城市",
						icon: "none"
					});
					return false
				}
			}
			if(this.addressType!=1){
				if(this.address==''){
					uni.showToast({
						title: "请填写详细地址",
						icon: "none"
					});
					return false
				}
			}
		},
		save(){//保存
		let address
		this.addressType!=1?address=this.province+this.city+this.area+this.address:address=''
		let params={}
		if(this.addressType==1){//自提
			 params = {
				detailAddress :this.address,//详细地址
				name:this.name,
				phone:this.phone,
				type:3,
			}
		}else{
			params={
				detailAddress :this.address,//详细地址
				name:this.name,
				phone:this.phone,
				type:3,
				provinceRegion :address,
			}
		}
			this.testInput()
			this.myaddress(params)
			this.showAddress()
			uni.navigateBack()
		},
		changeTime(val,val2){
			let end = Number(val.split(' ')[1].split(':')[0]) + 1;
			let ends = val.split(' ')[1].split(':')[1];
			if (Number(end) > 23) {
				end = 0;
			}
			if(Number(end)<10){
				end = '0'+end
			}
			let ender = end + ':' + ends;
			this.timer = val + '--' + ender;
			// this.timer=val
		},
		selectTime(type) {
			this.type = type;
			this.showPicker = true;
			this.value = this[type];
		},
		onSelected(e) {
			//选择
			this.showPicker = false;
			if (e) {
				// this[this.type] = e.value;
				//选择的值
				let end = Number(e.value.split(' ')[1].split(':')[0]) + 1;
				let ends = e.value.split(' ')[1].split(':')[1];
				if (Number(end) > 23) {
					end = 0;
				}
				if(Number(end)<10){
					end = '0'+end
				}
				let ender = end + ':' + ends;
				this.timer = e.value + '--' + ender;
				// console.log('value => ' + e.value);
				//原始的Date对象
				// console.log('date => ' + e.date);
			}
		},
		addresspick(obj) {
			this.province = obj.province.AreaName;
			this.city = obj.city.AreaName;
			this.area = obj.area.AreaName;
		}
	},
	onLoad(option) {
		this.addressType = option.type;
		if(this.supplierAdd!=null&&this.supplierAdd!=''){
			this.name=this.supplierAdd.name
			this.phone=this.supplierAdd.phone
			this.address=this.supplierAdd.detailAddress
			this.province=this.supplierAdd.detailAddress
		}
	},
	onShow() {
		let title;
		this.addressType == 1 ? (title = '联系方式') : (title = '收货地址');
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
	button {
		width: 80%;
		border-radius: $uni-border-radius-xxl;
	}
}
</style>
