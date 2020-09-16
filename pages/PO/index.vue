<!-- 采购下单 -->
<template>
	<view class="plr pt po">
		<view class="header" v-if="!!POAddress" @click="chooseAdd">
			<view class="flex flex-sp">
				<view class="name">
					收货人：
					<text>{{ POAddress.name }}</text>
				</view>
				<view class="phone">{{ POAddress.phone }}</view>
			</view>
			<view class="flex flex flex-sp mt mb">
				<view class="over">{{ POAddress.provinceRegion || '' + POAddress.detailAddress }}</view>
				<view class="alIcon">&#xe600;</view>
			</view>
			<view class="notice">
				<text>注意：</text>
				{{ goods.type == 1 ? '自提' : '配送' }}时间仅为预估时间,特殊需求请联系商家
			</view>
		</view>
		<view v-else @click="chooseAdd" class="noAdd">暂未选择地址+</view>
		<view class="body mt">
			<view class="flex flex-sp">
				<view class="merchant flex flex-center">
					<view class="flex flex-center mr-sm"><image src="../../static/store.png" mode=""></image></view>
					<view>{{ goods.compName }}</view>
				</view>
				<!-- @click="callPhone(goods.compPhone )" -->
				<view class="callphone">
					<text class="alIcon">&#xe682;</text>
					<!-- <text class="ml-xs">联系商家</text> -->
					<text class="ml-xs">{{ goods.compPhone }}</text>
				</view>
			</view>
			<view class="goods flex mt">
				<view class="mr"><image class="uImg-l" :src="goods.headUrl" mode=""></image></view>
				<view>
					<view class="title">{{ goods.name }}</view>
					<view>规格：{{ goods.packSize || '散装称重' }}</view>
					<view class="price">
						价格：
						<text>{{ goods.price }}元/{{ goods.unitName }}({{ goods.type == 1 ? '自提' : '配送' }})</text>
					</view>
					<view class="price" v-if="goods.type == 1">自提地址：{{ goods.merchAddress }}</view>
					<view v-if="goods.mySellPrice">我的卖价：{{ goods.mySellPrice }}</view>
				</view>
			</view>
			<view class="num mt-sm flex">
				购买数量：
				<input type="number" v-model="goodsNum" placeholder-style="font-size:20upx" :placeholder="'最少起批数量' + goods.wholesaleNum" />
				<text class="ml">袋</text>
			</view>
			<view class="flex mt">
				<view class="title left-title">{{ goods.type == 1 ? '自提' : '配送' }}时间：</view>
				<view class="right-time">
					<pickerTime style="width: 100%;" @changeTime="changeTime" :sTime="sTime" :cTime="cTime">
						<view slot="pCon" class="mr-sm font-info flex flex-sp center" @click="selectTime('datetime')">
							<view>{{ timer }}</view>
							<view class="alIcon">&#xe600;</view>
						</view>
					</pickerTime>
				</view>
			</view>
			<view class="remarsk">
				<view class="mt mb">订单留言</view>
				<view class="area flex flex-center"><textarea v-model="textarea" placeholder="想对此次交易说点什么?" /></view>
			</view>
		</view>
		<view class="footer flex flex-sp">
			<view class="left">
				<view>
					共计：
					<text>{{ totalMoney }}</text>
					元
				</view>
				<view class="num" v-if="profit != 0">预计可获利：{{ profit }}</view>
			</view>
			<view class="right" @click="pay">下单支付</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import pickerTime from '@/components/select-time/picker2.vue';
// import clay from "@/components/clay-time/index.vue"//时间选择组件
export default {
	components: {
		pickerTime
		// clay
	},
	computed: {
		...mapState(['POShop', 'goodsInfo', 'supplierAdd']),
		profit() {
			let price = 0;
			if (!!this.goods.mySellPrice) {
				price = (this.goods.mySellPrice - this.goods.price) * (this.goodsNum <= this.goods.wholesaleNum ? this.goods.wholesaleNum : this.goodsNum);
			} else {
				price = 0;
			}
			return price.toFixed(2);
		},
		totalMoney() {
			return Number(this.goods.price * this.goodsNum).toFixed(2);
		},
		POAddress: {
			//地址信息
			get() {
				return this.supplierAdd;
			},
			set(val) {}
		}
	},
	data() {
		return {
			timer: '请选择时间',
			goods: '',
			goodsNum: '', //购买数量
			textarea: '', //订单留言
			sTime: 0, //开始时间
			cTime: 23 //结束时间
		};
	},
	async onLoad(options) {
		let that = this;
		let res = await this.$api.echoGoodsInfo(options.id);
		that.goods = res;
		that.sTime = Number(res.startHours.split(':')[0]);
		that.$set(that, 'cTime', Number(res.endHours.split(':')[0]));
		this.showAddress();
		this.getTimes();
	},
	methods: {
		...mapActions(['showAddress']),
		...mapMutations(['order_pay']),
		kxdatetime(e) {
			this.date = e;
		},
		getTimes(sHour = 0, sMin = 0, eHour = 23, eMin = 59) {
			// replace(/\//g, '-')
			let startTime = 0; //开始时间
			let endTime = 0; //结束时间
			let date = new Date();
			let selfTime = date.toLocaleTimeString(); //获取日期与时间
			let hour = date.getHours(); //获取当前小时数
			let min = date.getMinutes(); //获取当前分钟
			let day = date.toLocaleDateString(); //获取当前日期
			if (sHour < hour) {
				//未超过配送时间
				startTime = hour;
				// if(sMin<=min){//未超过配送分钟

				// }else{//超过配送分钟

				// }
			}
			// else if(){//超过起始配送时间但不超过结束配送时间

			// }
			console.log(hour, min, day);
			// if(time)
		},
		pay() {
			if (Number(this.goodsNum) < Number(this.goods.wholesaleNum)) {
				uni.showToast({
					title: '起批数量至少为' + this.goods.wholesaleNum,
					icon: 'none'
				});
				this.goodsNum = '';
				return false;
			}
			if (this.timer == '请选择时间') {
				uni.showToast({
					title: '请选择时间',
					icon: 'none'
				});
				return false;
			}
			if (this.POAddress == null) {
				uni.showToast({
					title: '请选择地址',
					icon: 'none'
				});
				return false;
			}
			let params = {
				bulkGoodsId: this.goods.id,
				num: this.goodsNum,
				supplierAddressId: this.POAddress.id,
				remark: this.textarea,
				takeTime: this.timer
			};
			this.$api.placeOrder(params).then(res => {
				this.order_pay(res);
				uni.navigateTo({
					url: '/pages/pay/index'
				});
			});
		},
		chooseAdd() {
			uni.navigateTo({
				url: '/pages/PO/address?type=' + this.goods.type
			});
		},
		callPhone(val) {
			if (!!val) {
				uni.showModal({
					content: '拨打商家电话',
					confirmText: '去拨打',
					success: res => {
						if (res.confirm) {
							uni.makePhoneCall({
								phoneNumber: val
							});
						}
					}
				});
			} else {
				uni.showToast({
					title: '商家电话号码异常',
					icon: 'none'
				});
			}
		},
		changeTime(val, val2) {
			console.log(val,val2)
			let end = Number(val.split(' ')[1]) + 1;
			let ends = '00';
			if (Number(end) > 23) {
				end = 0;
			}
			if (Number(end) < 10) {
				end = '0' + end;
			}
			let ender = end + ':' + ends;
			this.timer = val+':00' + '-' + ender;
		},
		selectTime(type) {
			this.type = type;
			this.showPicker = true;
			this.value = this[type];
		}
	}
};
</script>

<style lang="scss">
.header,
.noAdd {
	border-bottom: 1upx dashed $uni-border-color;
	height: 220upx;
}
.time {
	color: $uni-color-primary;
}
.noAdd {
	line-height: 220upx;
	text-align: center;
	color: $uni-text-color;
	font-size: $uni-font-size-xl;
}
.header {
	font-size: $uni-font-size-lg;
	color: $uni-color-title;
	.notice {
		font-size: $uni-font-size-base;
		text {
			color: $uni-color-error;
		}
	}
}
.body {
	font-size: $uni-font-size-lg;
	.merchant {
		color: $uni-text-orange;
		image {
			width: $uni-img-size-sm;
			height: $uni-img-size-sm;
		}
	}
	.alIcon {
		color: $uni-text-orange;
	}
	.goods {
		.title {
			font-size: $uni-font-size-lg;
			color: $uni-color-title;
		}
		.price {
			text {
				color: $uni-text-orange;
			}
		}
		view {
			font-size: $uni-font-size-base;
			color: $uni-color-subtitle;
			line-height: 45upx;
		}
	}
	.num {
		input {
			width: 60%;
			border: 1upx solid $uni-text-color-placeholder;
			padding: 0upx 10upx;
		}
	}
	.remarsk {
		width: 100%;
		text-align: center;
		textarea {
			width: 100%;
			text-align: left;
			padding: 10upx;
			border: 1upx solid $uni-text-color-placeholder;
			height: 150upx;
		}
	}
}
.footer {
	font-size: $uni-font-size-base;
	position: fixed;
	height: 100upx;
	bottom: 0;
	left: 0;
	right: 0;
	background: #ffffff;
	.left {
		width: 70%;
		border: 1upx solid $uni-color-orange;
		border-bottom: 0;
		padding: 10upx;
		text {
			color: $uni-text-orange;
		}
		.num {
			color: $uni-color-primary;
			font-size: $uni-font-size-sm;
		}
	}
	.right {
		width: 30%;
		background-color: $uni-color-orange;
		text-align: center;
		line-height: 100upx;
		font-size: $uni-font-size-lg;
		color: $uni-bg-color-white;
	}
}
.font-info {
	color: #909090;
	width: 100%;
}
.right-time {
	width: 100%;
	display: flex;
	align-items: center;
	.alIcon {
		color: #909090;
	}
}
.left-title {
	width: 222upx;
}
</style>
