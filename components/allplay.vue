<template>
	<view class="allplay clear borderColorTop borderColorBottom">
		<image class="allPlayIcon fl" src="/static/image/icon/kaishiH.png"></image>
		<view class="allPlayLabel fl">全部播放</view>
		<image class="allPlayUpdata fr" src="/static/image/icon/muluHei.png"></image>
		<image class="allPlayList fr" src="/static/image/icon/xiazaiHei.png"></image>
	</view>
</template>

<script>
	export default{
		name:'allplay'
	}
</script>

<style lang="scss">
	.allplay{
		line-height: 100rpx;
		font-size: 30rpx;
		padding: 0 25rpx;
		height:100rpx;
		
		.allPlayIcon{
			display: block;			width:56rpx;
			height:56rpx;
			margin-right: 30rpx;
			margin-top: 22rpx;
		}
		.allPlayUpdata,.allPlayList{
			display: block;
			width: 40rpx;
			height: 40rpx;
			margin-left:45rpx;
			margin-top: 30rpx;
		}
	}
</style>
