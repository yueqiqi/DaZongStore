<!-- 添加商品 -->
<template>
	<view class="goodsInfo plr pt">
		<view class="flex">
			<view><image class="uImg-l" :src="info.headurl||info.headUrl" mode=""></image></view>
			<view>
				<view class="title ml">{{ info.name || '--' }}</view>
				<view class="info ml">品牌：{{ info.brand || '--' }}</view>
				<view class="info ml">规格：{{ info.packsize || '--' }}</view>
			</view>
		</view>
		<view class="body mt">
			<block v-for="(item, index) in list" :key="index">
				<view class="flex flex-sp mb">
					<view class="left flex">
						{{ item.title }}：
						<input type="number" placeholder-class="phr" :placeholder="item.placeholder" v-model="item.val" />
					</view>
					<view class="right">{{ item.type }}</view>
				</view>
			</block>
			<view class="type">
				<view class="flex flex-sp mt">
					<view>送货方式</view>
					<view class="right" @click="$refs.pickers.show()">
						{{ deliveryType }}
						<text class="alIcon">&#xe600;</text>
					</view>
				</view>
				<view class="flex flex-sp mt">
					<view>{{ deliveryType == '自提' ? '自提地址' : '商家地址' }}</view>
					<view @click="chooseAdd" class="right over">
						{{ address.provinceRegion + address.detailAddress || '请选择地址' }}
						<text class="alIcon">&#xe600;</text>
					</view>
				</view>
				<view class="flex flex-sp mt">
					<view>营业时间</view>
					<view class="right">{{ address | openHour }}</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="mt mb">商品描述</view>
			<view class="area flex flex-center"><textarea v-model="textarea" placeholder="请输入该商品描述" /></view>
		</view>
		<view class="foot flex">
			<view class="left-btn" @click="cancel">
				<button class="btn-normal">{{ goodsType == 'add' ? '取消' : '删除' }}</button>
			</view>
			<view class="right-btn" @click="save">
				<button class="btn">{{ goodsType == 'add' ? '保存' : '修改' }}</button>
			</view>
		</view>
		<lbPicker ref="pickers" cancel-color="#fff" confirm-color="#fff" :list="pickerList" v-model="deliveryType" @confirm="handleConfirm"></lbPicker>
	</view>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import utils from '@/static/utils.js';
import lbPicker from '@/components/picker/index.vue';
export default {
	components: {
		lbPicker
	},
	data() {
		return {
			pickerList: [{ label: '自提', value: '自提' }, { label: '配送', value: '配送' }],
			textarea: '', //商品描述
			info: '',
			goodsType: null,
			deliveryType: '自提',
			list: [{ title: '最小批发', val: '', type: '斤', placeholder: '最小批发量' }, { title: '批发价格', val: '', type: '元/斤', placeholder: '请输入单价' }]
		};
	},
	filters: {
		openHour(value) {
			switch (value.startHours) {
				case undefined:
					return '请先选择地址';
					break;
				default:
					return value.startHours + '--' + value.endHours;
					break;
			}
		}
	},
	watch: {
		info(newValue, oldValue) {
			if (newValue) {
				let title;
				this.goodsType == 'add' ? (title = this.info.name+'(添加)') : (title =  this.info.name+'(修改)');
				uni.setNavigationBarTitle({
					title: title
				});
			}
		}
	},
	computed: {
		...mapState({
			address: state => state.addGoodsAdd || ''
		})
	},
	methods: {
		...mapMutations(['addgoods_choose_address']),
		handleConfirm(item) {
			if (item.value == this.deliveryType) return;
			this.addgoods_choose_address('');
		},
		chooseAdd() {
			let type = this.deliveryType == '自提' ? 1 : 2;
			uni.navigateTo({
				url: '/pages/address/index?type=' + type + '&chooseType=' + true
			});
		},
		cancel() {
			let that = this;
			if (this.goodsType == 'add') {
				//新增
				uni.navigateBack();
			} else {
				//修改
				uni.showModal({
					title: '提示',
					content: '是否删除该商品?',
					success(res) {
						if(res.confirm){
							that.$api.delGoods(that.info.id).then(res => {
								uni.showToast({
									title: '删除商品成功',
									icon: 'none',
									mask: true
								});
								setTimeout(() => {
									uni.navigateBack();
								}, 1000);
							})
						}
					}
				});
			}
		},
		save() {
			if(this.list[0].val==''){
				uni.showToast({
					title:'请输入最小批发量',
					icon:'none'
				})
				return false
			}
			if(this.list[1].val==''){
				uni.showToast({
					title:'请输入商品单价',
					icon:'none'
				})
				return false
			}
			if(this.address==''){
				uni.showToast({
					title:'请选择地址',
					icon:'none'
				})
				return false
			}
			if (this.goodsType == 'add') {
				//保存
				let params = {
					description: this.textarea,
					merchBankId : this.info.id,
					endHours :this.address.endHours,
					startHours:this.address.startHours,
					merchAddress :this.address.provinceRegion+this.address.detailAddress,
					price: this.list[1].val,
					type: this.deliveryType == '自提' ? 1 : 2,
					wholesaleNum: this.list[0].val
				};
				this.$api.putGoods(params).then(res => {
					uni.showToast({
						title: '上架商品成功',
						icon: 'none',
						mask: true
					});
					setTimeout(() => {
						uni.navigateBack();
					}, 1000);
				});
			} else {
				//修改
				let params = {
					description: this.textarea,
					id: this.info.id,
					endHours :this.address.endHours,
					startHours:this.address.startHours,
					merchAddress :this.address.provinceRegion+this.address.detailAddress,
					merchBankId: this.info.merchBankId,
					price: this.list[1].val,
					type: this.deliveryType == '自提' ? 1 : 2,
					wholesaleNum: this.list[0].val
				};
				this.$api.setGoods(params).then(res => {
					uni.showToast({
						title: '修改商品成功',
						icon: 'none',
						mask: true
					});
					setTimeout(() => {
						uni.navigateBack();
					}, 1000);
				});
			}
		},
		async getGoodsInfo(val) {
			let data = await this.$api.getGoodsInfo(val);
			this.info = data;
			this.list[0].type = data.unitname;
			this.list[1].type = '元/' + data.unitname;
		}
	},
	onLoad(options) {
		this.goodsType = options.type;
		if(options.type=='add'){
			this.getGoodsInfo(options.id);
		}else{
			this.$api.echoGoodsInfo(options.id).then(res => {
				this.info=res
				this.list[0].type = res.unitName;
				this.list[1].type = '元/' + res.unitName;
				this.deliveryType= res.type==1?'自提':'配送'
				this.list[0].val=res.price 
				this.list[1].val=res.wholesaleNum
				this.textarea=res.description
				let data = {
					startHours:res.startHours,
					endHours:res.endHours,
					provinceRegion:'',
					detailAddress:res.merchAddress,
				}
				this.addgoods_choose_address(data)
			})
		}
	},
	onUnload() {
		this.addgoods_choose_address('');
	}
};
</script>
<style scoped>
page {
	background-color: #fff !important;
}
</style>
<style lang="scss">
.goodsInfo {
	font-size: $uni-font-size-xl;
	.title,
	.info {
		line-height: 60upx;
	}
	.title {
		color: $uni-color-title;
	}
	.info {
		color: $uni-color-subtitle;
		font-size: $uni-font-size-base;
	}
}
.body {
	font-size: $uni-font-size-lg;
	color: $uni-text-color;
	.left input {
		border: 1upx solid $uni-text-color-placeholder;
		width: 400upx;
		padding: 0 10upx;
	}
	.right {
		width: 100upx;
		text-align: left;
	}
	.type {
		.right {
			text-align: right;
			width: 350upx;
			font-size: 30upx;
			color: $uni-text-color-normal;
		}
	}
}
.footer {
	width: 100%;
	text-align: center;
	textarea {
		text-align: left;
		padding: 10upx;
		border: 1upx solid $uni-text-color-placeholder;
	}
}
.foot {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	button {
		border-radius: 0;
		border-bottom: 0;
	}
	.left-btn {
		flex: 1;
	}
	.right-btn {
		flex: 1;
	}
}
.phr {
	font-size: $uni-font-size-base;
}
</style>
