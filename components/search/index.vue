<!-- 搜索 -->
<template>
	<view >
			<nav-bar @clickLeft="back" :left-icon="arrowleft" :left-text="leftText" :fixed="false" :status-bar='true'>
				<view slot="default" class="border ipt"  @click="iptClick">
					<input type="text" :adjust-position='false'	 :focus='focus' v-model="keyword" class="ipt2" placeholder="请输入关键字搜索" placeholder-class='p-ipt'/>
				</view>
				<view slot="right" class="code" @click="rightClick">{{rightText}}</view>
			</nav-bar>
	</view>
</template>

<script>
	import navBar from './navBar.vue'
	export default{
		components: {
			navBar
		},
		props:{
			focus:{
				type:Boolean,
				default:true
			},
			rightText:{
				type:String,
				default:'',
			},
			arrowleft:{
				type:String,
				default:'',
			},
			leftText:{
				type:String,
				default:'',
			}
		},
		data(){
			return{
				keyword:'',//搜索的值
			}
		},
		watch: {
			keyword(newValue, oldValue) {
				
			}
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			iptClick(){
				this.$emit('iptClick')
			},
			rightClick() {
				this.$emit('rightClick',this.keyword)
			}
		},
	}
</script>

<style scoped lang="scss">
	.code{
		font-size: $uni-font-size-base; 
	}
	.ipt{
		width: 400upx;
		border-radius: $uni-border-radius-xxl!important;
		background: $uni-bg-color-white;
		color: #333333;
		
	}
	.ipt2{
		padding:0 25upx;
	}
	.p-ipt{
		font-size: $uni-font-size-base;
	}
</style>
