<!-- 添加地址 -->
<template>
	<view class="info plr pt">
			<view class="flex border-bottom">
				<view class="title">姓名:</view>
				<view class="right ml"><input type="text" placeholder-class="myIp" placeholder="请输入姓名" name="name" /></view>
			</view>
			<view class="flex border-bottom">
				<view class="title">电话:</view>
				<view class="right ml"><input type="number" placeholder-class="myIp" placeholder="请输入电话号码" name="phone" /></view>
			</view>
			<view class="flex border-bottom">
				<view class="title">省市区:</view>
				<view class="right ml" @click="addressShow = true">{{ province }}-{{ city }}-{{ area }}</view>
			</view>
			<view class="flex border-bottom">
				<view class="title">详细地址:</view>
				<view class="right ml"><input type="number" placeholder-class="myIp" placeholder="请输入详细地址" name="address" /></view>
			</view>
			<view class="flex border-bottom">
				<view class="title">营业时间:</view>
				<view class="right ml">
					<span class="mr-sm" @click="selectTime('start')">{{startTime}}</span>
					----
					<span style="margin-left: 20upx;" @click="selectTime('end')">{{endTime}}</span>
				</view>
			</view>
			<view class="footer flex">
				<button v-if="title=='set'" class="btn-normal">删除</button>
				<view v-if="title=='set'" style="width: 30upx;"></view>
				<button class="btn">{{title=='add'?'新增':'修改'}}</button>
			</view>
		<pickerAddress v-model="addressShow" @confirm="addresspick" />
		<pickerTime ref='timePicker' :type='timeType'  @rundata='kxdatetime' >
		</pickerTime>
	</view>
</template>

<script>
import pickerAddress from '@/components/picker-address/index.vue';
import pickerTime from '@/components/picker-time/index.vue';
export default {
	components: {
		pickerAddress,
		pickerTime
	},
	data() {
		return {
			timeType:'',
			timeShow: true,
			addressShow: false,
			province: '省',
			city: '市',
			area: '区',
			aaddress: '请选择详细地址',
			startTime:'开始时间',
			endTime:'结束时间',
			title:'add',
		};
	},
	methods: {
		selectTime(val){
			this.timeType=val
			this.$refs.timePicker.open()
		},
		kxdatetime(e) {
			if(this.timeType=='start'){
				this.startTime=e
			}else{
				this.endTime=e
			}
			// console.log(e,this.timeType)
		},
		addresspick(obj) {
			this.province = obj.province.AreaName;
			this.city = obj.city.AreaName;
			this.area = obj.area.AreaName;
		},
	},
	onLoad(option) {
		//option.type add--新增 set--修改
		this.title = option.type;
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
.btn-normal::after{
	border-top-right-radius: 0!important;
}
.btn::after{
	border-top-left-radius: 0!important;
}
.footer{
	position: fixed;
	bottom: 45upx;
	right: 0upx;
	left: 0upx;
	padding-bottom: 0;
	margin-bottom: 0;
}
</style>
