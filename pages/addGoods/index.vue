<!-- 添加商品 -->
<template>
	<view class="goodsInfo plr pt">
		<view class="flex">
			<view><image class="uImg-l" :src="info.img" mode=""></image></view>
			<view>
				<view class="title ml">{{info.title}}</view>
				<view class="info ml">品牌：{{info.title||'--'}}</view>
				<view class="info ml">规格：{{info.title}}</view>
			</view>
		</view>
		<view class="body mt">
			<block v-for="(item,index) in list" :key='index'>
				<view class="flex flex-sp mb">
					<view class="left flex">{{item.title}}：<input type="number" placeholder-class='phr' :placeholder="item.placeholder" v-model="item.val" /></view>
					<view class="right">{{item.type}}</view>
				</view>
			</block>
			<view class="type">
				<view class="flex flex-sp mt">
					<view>送货方式</view>
					<view class="right" @click="$refs.pickers.show()">{{deliveryType}} <text class="alIcon">&#xe600;</text> </view>
				</view>
				<view class="flex flex-sp mt">
					<view>{{deliveryType=='自提'?'自提地址':'商家地址'}}</view>
					<view @click="chooseAdd" class="right over">{{address.address||'请选择地址'}} <text class="alIcon">&#xe600;</text> </view>
				</view>
				<view class="flex flex-sp mt">
					<view>营业时间</view>
					<view class="right">{{ address|openHour}}</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="mt mb">商品描述</view>
			<view class="area flex flex-center">
				<textarea :value="textarea" placeholder="请输入该商品描述" />
			</view>
		</view>
		<view class="foot flex">
			<view class="left-btn" @click="cancel"><button class="btn-normal">{{goodsType=='add'?'取消':'删除'}}</button></view>
			<view class="right-btn" @click="save"><button class="btn">保存</button></view>
		</view>
		<lbPicker ref='pickers' cancel-color='#fff' confirm-color='#fff' :list='pickerList' v-model='deliveryType' @confirm="handleConfirm"></lbPicker>
	</view>
</template>

<script>
	import { mapState, mapActions, mapMutations } from 'vuex';
	import utils from '@/static/utils.js'
	import lbPicker from '@/components/picker/index.vue'
	export default {
		components: {
			lbPicker
		},
		data() {
			return {
				pickerList:[
					{label:'自提',value:'自提'},
					{label:'配送',value:'配送'},
				],
				textarea:'',//商品描述
				info:utils.list[0],
				goodsType:null,
				deliveryType:'自提',
				list:[
					{title:'最小批发',val:'',type:'斤',placeholder:'最小批发量'},
					{title:'批发价格',val:'',type:'元/斤',placeholder:'请输入单价'},
				]
			};
		},
		filters: {
			openHour(value) {
				switch(value.startTime){
					case undefined :
					return '请先选择地址'
					break;
					default : 
					return value.startTime+'--'+value.endTime;
					break;
				}
			},
		},
		computed: {
			...mapState({
				address:state=>state.addGoodsAdd||'请选择',
			})
		},
		onShow() {
			let title 
			this.goodsType=='add'?title='添加'+this.info.title:title='修改'+this.info.title
			uni.setNavigationBarTitle({
				title: title
			});
		},
		methods: {
			...mapMutations(['addgoods_choose_address']),
			handleConfirm (item) {
				console.log('confirm::', item)
			},
			chooseAdd() {
				uni.navigateTo({
					url:'/pages/address/index?type=choose'
				})
			},
			cancel(){
				if(this.goodsType=='add'){//新增
					uni.navigateBack()
				}else{//修改
					
				}
			},
			save(){
				
			},
		},
		onLoad(options){
			this.goodsType=options.type
		},
		onUnload(){
			this.addgoods_choose_address('')
		},
	}
</script>
<style scoped>
	page{
		background-color: #fff!important;
	}
</style>
<style lang="scss">
	.goodsInfo{
		font-size: $uni-font-size-xl;
		.title,.info{
			line-height: 60upx;
		}
		.title{
			color: $uni-color-title;
		}
		.info{
			color: $uni-color-subtitle;
			font-size: $uni-font-size-base;
		}
	}
	.body{
		font-size: $uni-font-size-lg;
		color: $uni-text-color;
		.left input{
			border: 1upx solid $uni-text-color-placeholder;
			width: 400upx;
			padding:0 10upx
		}
		.right{
			width: 100upx;
			text-align: left;
		}
		.type{
			.right{
				text-align: right;
				width: 350upx;
				font-size: 30upx;
				color: $uni-text-color-normal;
			}
		}
	}
	.footer{
		width: 100%;
		text-align: center;
		textarea{
			text-align: left;
			padding: 10upx;
			border: 1upx solid $uni-text-color-placeholder;
		}
	}
	.foot{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		button{
			border-radius:0 ;
			border-bottom: 0;
		}
		.left-btn{
			flex: 1;
		}
		.right-btn{
			flex: 1;
		}
	}
	.phr{
		font-size: $uni-font-size-base;
	}
</style>
