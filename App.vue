<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			uni.setStorageSync('userToken','323a58a3-e46c-4365-857b-c5fbe7d67d1c');
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	.stick {
		/* #ifndef APP-PLUS-NVUE */
		position: -webkit-sticky;
		/* #endif */
		position: sticky;
		top: var(--window-top);
	}
	.bg-white{
		background: $uni-bg-color-white;
	}
	.uImg-m{
		width: 150upx;
		height: 150upx;
	}
	.uImg-l{
		width: 180upx;
		height: 180upx;
	}
	.uImg{
		width: 120upx;
		height: 120upx;
	}
	/* 隐藏滚动条 */
		/* #ifdef H5 */
	::-webkit-scrollbar {
				display: none;
		    width: 0!important;
				-webkit-appearance: none;
		    height: 0!important;
		    background-color: transparent!important;
		}
		/* #endif */
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
		border: 1upx solid $uni-color-orange;
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
		src: url('https://at.alicdn.com/t/font_1911402_g2o3c4aoagu.ttf') format('truetype');
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
	.pt-xs{
		padding-top: 10upx;
	}
	.pb-xs{
		padding-bottom: 10upx;
	}
	.pt-sm{
		padding-top: 20upx;
	}
	.pb-sm{
		padding-bottom: 20upx;
	}
	.pl{
		padding-left: 30upx;
	}
	.pr{
		padding-right: 30upx;
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
	.ml-xs{
		margin-left: 10upx;
	}
	.mt-xs{
		margin-top: 10upx;
	}
	.mb-xs{
		margin-bottom: 10upx;
	}
	.mb-sm{
		margin-bottom: 20upx;
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
	.card:last-child{
		border: 0;
	}
	.card{
		background: #FFFFFF;
	}
	/*每个页面公共css */
</style>
