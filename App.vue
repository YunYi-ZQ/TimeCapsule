<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	/* 自定义底部导航栏全局样式 */
	.custom-tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100rpx;
		background-color: #ffffff;
		border-top: 1rpx solid #e6e6e6;
		display: flex;
		align-items: center;
		justify-content: space-around;
		z-index: 999;
		padding-bottom: env(safe-area-inset-bottom);
	}
	
	.tabbar-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		padding: 10rpx 0;
		transition: all 0.3s ease;
	}
	
	.tabbar-item.active {
		color: #007aff;
	}
	
	.tabbar-icon {
		width: 44rpx;
		height: 44rpx;
		margin-bottom: 6rpx;
	}
	
	.tabbar-text {
		font-size: 20rpx;
		line-height: 1;
	}
	
	.tabbar-item.active .tabbar-text {
		font-weight: 600;
	}
	
	/* 页面容器基础样式 */
	.page-container {
		width: 100%;
		min-height: 100vh;
		background-color: #f5f5f5;
		padding-bottom: 100rpx; /* 给底部导航栏留空间 */
	}
	
	/* 通用导航项样式 */
	.nav-section {
		background-color: #fff;
		border-radius: 16rpx;
		margin: 0 20rpx 20rpx;
		overflow: hidden;
	}
	
	.nav-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30rpx 32rpx;
		border-bottom: 1rpx solid #f0f0f0;
	}
	
	.nav-item:last-child {
		border-bottom: none;
	}
	
	.nav-left {
		display: flex;
		align-items: center;
	}
	
	.nav-icon {
		width: 48rpx;
		height: 48rpx;
		margin-right: 20rpx;
	}
	
	.nav-title {
		font-size: 32rpx;
		color: #333;
	}
	
	.nav-arrow {
		width: 24rpx;
		height: 24rpx;
		opacity: 0.5;
	}
</style>