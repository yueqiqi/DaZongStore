<template>
	<view>
		<picker class="time-picker" mode="multiSelector" @change="bindStartMultiPickerChange" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
			<slot name="pCon"></slot>
		</picker>
	</view>
</template>

<script>
	export default{
		props:{
			sTime:{
				type:[Number,String],
				default:0
			},
			eTime:{
				type:[Number,String],
				default:23
			},
			dayNum:{
				type:[Number,String],
				default:5
			}
		}
		data(){
			return {
				
			}
		},
		
	}
</script>

<style>
</style>
