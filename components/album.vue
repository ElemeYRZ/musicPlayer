<template>
	<view v-if="propdata" class="block">
		<view v-for="(item,index) in propdata" :key="index" class="bContent" :style="{width:blockwidth}">
			<view class="blockspan">
				<image class="img" :src="item.src" mode='widthFix'></image>
				<image class="icon" :src="imgSrc+'icon/kaishi-2.png'" mode='widthFix'></image>
				<view class="listenCount">
					<image :src="imgSrc+'icon/yinle.png'"></image>
					{{item.count}}
				</view>
			</view>
			<view class="name">{{item.name}}</view>
			<view class="author">{{item.author}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'album',
		props: {
			propdata: {
				type: Array,
				default: []
			},
			blockwidth: {
				type: String,
				default: '32.8%'
			}
		},
		data() {
			return {
				imgSrc: '/static/image/',
			}
		}
	}
</script>

<style lang="scss" scoped>
	.block {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;

		.bContent {
			margin-bottom:30rpx;
			.blockspan{
				position:relative;
				.img {
					width: 100%;
					display: block;
				}
				.icon{
					position: absolute;
					width: 40rpx;
					right: 10rpx;
					bottom:10rpx;
					opacity: .9;
				}
				.listenCount{
					position:absolute;
					left:10rpx;
					bottom:10rpx;
					color:rgba($color: #fff, $alpha: 0.8);
					font-size:20rpx;
					image{
						width: 28rpx;
						height: 32rpx;
						margin-right: 6rpx;
						vertical-align: text-bottom;
					}
				}
			}
			.name,.author{
				font-size: 26rpx;
				padding: 0 6rpx;
				white-space: wrap;
				overflow: hidden;
			}
			.author{
				color: #999;
			}
		}
	}
</style>
