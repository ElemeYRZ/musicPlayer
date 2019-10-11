<template>
	<view class="playlist clear borderColorBottom">
		<view class="fl">
			<view class="name">{{info.Name}}</view>
			<view class="other">
				<view v-if="info.HQ" class="biao">HQ</view>
				<view v-if="info.SQ" class="biao sq">SQ</view>
				<view v-if="info.DJ" class="biao">独家</view>
				<view v-if="info.VIP" class="biao sq">VIP</view>
				{{info.Author}} - {{info.Album}}
			</view>
		</view>
		<image class="fr playListGengduo" src="/static/image/icon/gengduoHui.png"></image>
		<image class="fr playListBofang" src="/static/image/icon/bofangHui.png"></image>
	</view>
</template>

<script>
	export default{
		props:{
			info:{
				type:Object,
				default:{
					Name:"像我这样的人",
					SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
					Author:'毛不易',
					Album:"平凡的一天",
					SQ:0,
					DJ:1,
					HQ:0,
					VIP:1
				}
			}
		},
		data(){
			return{
				
			}
		}
		
	}
</script>

<style lang="scss">
	.playlist{
		margin-left:30upx;
		padding:15upx 25upx 20upx 0;
		.name{
			font-size: 38rpx;
			line-height: 60rpx;
		}
		.other{
			font-size: 26rpx;
			line-height: 40rpx;
			color: rgb(75,75,75);
			width: 520rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			.biao{
				display: inline-block;
				vertical-align: text-bottom;
				padding: 2rpx 6rpx;
				margin-right: 10rpx;
				border: solid 1px #f55500;
				color: #f55500;
				border-radius: 4upx;
				font-size: 24upx;
				line-height: 24upx;
				&.sq{
					color: #9c8200;
					border: solid 1px #9c8200;
				}
			}
		}
		.playListBofang,
		.playListGengduo{
			display: block;
			width: 40upx;
			height: 40upx;
			margin-left: 45upx;
			margin-top: 20upx;
		}
	}
</style>
