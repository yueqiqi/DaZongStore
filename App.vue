<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// uni.setStorageSync('userToken',res.token,);
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	.font{
		color: $uni-text-color;
		font-size: $uni-font-size-lg;
		font-weight: $uni-font-weight;
	}
	.btn{
		background: $uni-color-orange;
		border: none;
		color: #fff;
		width: 100%;
	}
	.btn-normal{
		background: $uni-bg-color-white;
		border: none;
		color: $uni-color-orange;
		width: 100%;
		border: 1upx solid $uni-color-orange;
	}
	.alIcon {
		color: #666;
		text-align: center;
		font-family: texticons;
	}
	@font-face {
		font-family: texticons;
		font-weight: normal;
		font-style: normal;
		src: url('https://at.alicdn.com/t/font_1713587_d91nbnlkjnl.ttf') format('truetype');
	}
	.over {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	// @import '~@/uni.scss';
	.baseline{
		align-items: baseline;
	}
	.flex{
		display: flex;
	}
	.center{
		align-items: center;
	}
	.flex-sp{
		justify-content: space-between;
	}
	.flex-center{
		justify-content: center;
	}
	.border{
		border: 1upx solid $uni-border-color;
	}
	.border-top{
		border-top: 1upx solid $uni-border-color;
	}
	.border-bottom{
		border-bottom: 1upx solid $uni-border-color;
	}
	.plr{
		padding-left: 30upx;
		padding-right: 30upx;
	}
	.pt{
		padding-top: 30upx;
	}
	.pb{
		padding-bottom: 30upx;
	}
	.mt-sm{
		margin-top: 20upx;
	}
	.mr-sm{
		margin-right: 20upx;
	}
	.ml-sm{
		margin-left: 25upx;
	}
	.mt{
		margin-top: 30upx;
	}
	.mr{
		margin-right: 30upx;
	}
	.ml{
		margin-left: 30upx;
	}
	.mb{
		margin-bottom: 30upx;
	}
	.card{
		background: #FFFFFF;
	}
	/*每个页面公共css */
</style>
