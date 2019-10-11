<template>
	<view class="content bgColor">
		<view class="bar">
			<image :src="imgSrc+'icon/fenlei.png'" class="icon"></image>
			<view class="barContent">
				<text>我的</text>
				<text class="sel">音乐馆</text>
				<text>发现</text>
			</view>
			<image :src="imgSrc+'icon/jiahao.png'" class="icon"></image>
		</view>
		<view class="search bgDeepColor">
			<input type="text" placeholder="搜索" placeholder-style="color:#fff;" />
			<image :src="imgSrc+'icon/sousuo5.png'" class="icon"></image>
		</view>
	</view>
</template>

<script>
	export default{
		name:'top',
		data(){
			return{
				imgSrc:'/static/image/'
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import '../static/css/common.scss';
	.content{
		color:#fff;
		font-size:32rpx;
		padding:40rpx 20rpx;
		.bar{
			display:flex;
			justify-content:space-between;
			line-height:44rpx;
			
			.icon{
				width: 44rpx;
				height: 44rpx;
			}
			.barContent{
				display: flex;
				justify-content: space-between;
				width: 360rpx;
				margin: 0 auto;
				.sel{
					font-size: 36rpx;
					font-weight: 600;
				}
			}
		}
		.search{
			position:relative;
			margin-top:32rpx;
			padding:0rpx 20rpx;
			height:76rpx;
			display:flex;
			align-items:center;
			input{
				padding-left: 60rpx;
			}
			.icon{
				width: 40rpx;
				height: 40rpx;
				position: absolute;
			}
		}
	}
</style>
