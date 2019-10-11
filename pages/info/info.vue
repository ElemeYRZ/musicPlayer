<template>
	<view class="info" :style="bgStyle">
		<view class="bg"></view>
		<view class="content">
			<view class="top">
				<view class="name">{{audioList[audioIndex].name}}</view>
				<view class="author">{{audioList[audioIndex].author}}</view>
				<view class="bar">
					<view>标准</view>
					<view>音效</view>
					<view>视频</view>
				</view>
			</view>
			<view class="micImg">
				<image :class="playState?'zhuan':''" :src="audioList[audioIndex].img"></image>
			</view>
			<view class="bot">
				<view class="lineBar">
					<view class="time start">{{nowTimeForc}}</view>
					<slider min="0" :max="allTime" :value="nowTime" block-size="15" class="line" @change="sliderChange" activeColor="#55A532" />
					<view class="time end">{{allTimeForc}}</view>
				</view>
				<view class="btn">
					<view @tap="audioWayFuc">
						<image v-if="audioWay==0" class="iconbtn" src="../../static/image/icon/xunhuanbofang.png"></image>
						<image v-if="audioWay==2" class="iconbtn" src="../../static/image/icon/danquxunhuan.png"></image>
						<image v-if="audioWay==1" class="iconbtn" src="../../static/image/icon/suijibofang.png"></image>
					</view>
					<view class="playbtn">
						<view @tap="upPlay">
							<image class="iconbtn" src="../../static/image/icon/shangyishou.png" mode=""></image>
						</view>
						<view @tap="play">
							<image v-if="playState" class="iconbtn play" src="../../static/image/icon/zanting-2.png" mode=""></image>
							<image v-else class="iconbtn play" src="../../static/image/icon/kaishi-2.png" mode=""></image>
						</view>
						<view @tap="nextPlay">
							<image class="iconbtn" src="../../static/image/icon/xiayishou.png" mode=""></image>
						</view>
					</view>
					<view class="">
						<image class="iconbtn" src="../../static/image/icon/yinleliebiao.png" mode=""></image>
					</view>
				</view>
				<view class="tool">
					<view @tap="collectFunc">
						<image v-if="!collect" class="iconbtn" src="../../static/image/icon/shoucang.png" mode=""></image>
						<image v-else class="iconbtn" src="../../static/image/icon/shoucang-2.png" mode=""></image>
					</view>
					<view>
						<image class="iconbtn" src="../../static/image/icon/xiazai.png" mode=""></image>
					</view>
					<view>
						<image class="iconbtn" src="../../static/image/icon/share.png" mode=""></image>
					</view>
					<view>
						<image class="iconbtn" src="../../static/image/icon/liuyanjianyi.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var globalData = getApp().globalData;
	let innerAudioContext = '';
	export default {
		data() {
			return {
				audioIndex: 0,
				nowTime: 0,
				allTime: 0,
				audioWay: 0,
				playState: 0,
				collect: false,
				sec: '',
				audioList: [{
						name: '你的微笑',
						author: 'Shart Foeir',
						src: 'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/556/66405556.aac',
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547630730529&di=f37e409de12f9930e25507c3252a462c&imgtype=0&src=http%3A%2F%2Fmp2.iqiyipic.com%2Fimage%2F20180827%2F03%2F41%2Fh_1199242471_h_601_400_400.jpg',
					},
					{
						name: '英雄联盟群雄齐聚',
						author: '毛不易',
						src: 'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/414/66335414.aac',
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547630762297&di=2c3317bf38f107287414b1b0cd33f0e5&imgtype=0&src=http%3A%2F%2Fsingerimg.kugou.com%2Fuploadpic%2Fpass%2Fsofthead%2F400%2F20140829%2F20140829161553861786.jpg',
					},
					{
						name: 'TryEverything',
						author: 'Shakira',
						src: 'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/480/66379480.aac',
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547471202346&di=bd9b5e27beb9341b058d21e521e8d75e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F27%2F20170727210705_zcijE.jpeg',
					},
					{
						name: '我爱过几个人',
						author: '邓论',
						src: 'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/339/65390339.aac',
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547630610810&di=1a0c6d9557aa2bba822c54694a55429e&imgtype=0&src=http%3A%2F%2Fmp0.iqiyipic.com%2Fimage%2F20180827%2Fff%2F79%2Fh_1199249539_h_601_400_400.jpg',
					},
					{
						name: '浪子回头',
						author: '辉气*蛋',
						src: 'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/645/66725645.aac',
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547631130547&di=076c9275ce160baa2ff5cb66eed4ad53&imgtype=0&src=http%3A%2F%2Fwww.mixtapetorrent.com%2Fsystem%2Ffiles%2Ffollowmernb.jpg',
					},
					{
						name: '生僻字心动不已',
						author: '〃°ω°〃',
						src: 'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/359/64750359.aac',
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547631330468&di=517d6b42ed32567a5798fd9bbe13ff9c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170830%2F2dbe36dfa0a14c0c94b672f445c02a21.jpeg',
					}
				],
			}
		},
		computed: {
			bgStyle: function() {
				return 'background-image:url(' + this.audioList[this.audioIndex].img + ')'
			},
			nowTimeForc: function() {
				return this.$pubFuc.secondFormat(this.nowTime)
			},
			allTimeForc: function() {
				return this.$pubFuc.secondFormat(this.allTime)
			}
		},
		onLoad(options) {
			console.log('options', options);
			if (options.sec) {
				console.log(options.sec);
				this.sec = options.sec;
			}
		},
		onShow() {
				this.audioInit();
		},
		onUnload() {
			if (innerAudioContext) {
				innerAudioContext.destroy();
				innerAudioContext = '';
			}
		},
		methods: {
			audioWayFuc() {
				if (this.audioWay > 1) {
					this.audioWay = 0;
				} else {
					this.audioWay = this.audioWay + 1;
				}
			},
			audioInit() {
				var src = this.audioList[this.audioIndex].src;
				if (innerAudioContext) {
					innerAudioContext.destroy();
					innerAudioContext = '';
				}
				innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.src = src;
				innerAudioContext.autoplay = true;
				let lura = setInterval(() => {
					this.allTime = Math.floor(innerAudioContext.duration);
					globalData.music.allTime = this.allTime;
					if (this.allTime) {
						clearInterval(lura);
					}
				})
				innerAudioContext.onTimeUpdate(() => {
					this.nowTime = Math.floor(innerAudioContext.currentTime);
					globalData.music.musicPlayTime = this.nowTime;
				})
				innerAudioContext.onPause(() => {
					this.pauseFunc();
					globalData.isPlay = false;
				})
				innerAudioContext.onPlay(() => {
					this.playFunc();
					globalData.isPlay = true;
				})
				innerAudioContext.onEnded(() => {
					this.nextPlay();
				})
			},
			playFunc() {
				this.playState = 1;
			},
			pauseFunc() {
				this.playState = 0;
			},
			upPlay() {
				this.nowTime = 0;
				if (this.audioWay == 1) {
					//随机
					this.audioIndex = Math.floor(Math.random() * 10) % this.audioList.length;
				} else if (this.audioWay == 0) {
					if (this.audioIndex < 1) {
						this.audioIndex = this.audioList.length - 1;
					} else {
						this.audioIndex = this.audioIndex - 1;
					}
				}
				this.audioInit();
				console.log('audioIndex', this.audioIndex);
			},
			nextPlay() {
				this.nowTime = 0;
				if (this.audioWay == 1) {
					//随机
					this.audioIndex = Math.floor(Math.random() * 10) % this.audioList.length;
				} else if (this.audioWay == 0) {
					if (this.audioIndex >= (this.audioList.length - 1)) {
						this.audioIndex = 0;
					} else {
						this.audioIndex = this.audioIndex + 1;
					}
				}
				this.audioInit();
				console.log('audioIndex', this.audioIndex);
			},
			play() {
				console.log('playstate', this.playState);
				if (this.playState) {
					innerAudioContext.pause();
				} else {
					innerAudioContext.play();
				}
			},
			sliderChange(e) {
				this.nowTime = e.detail.value;
				innerAudioContext.seek(this.nowTime);
			},
			collectFunc() {
				this.collect = !this.collect;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.info {
		position: absolute;
		right: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		box-sizing: border-box;

		.bg {
			position: fixed;
			z-index: 0;
			right: 0;
			left: 0;
			width: 100%;
			height: 100%;
			filter: blur(40upx); //毛玻璃效果
			background: inherit; //继承父元素图片路径
		}

		.content {
			position: fixed;
			left: 0;
			right: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			color: #FFFDEF;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.top {
				margin-top: 20rpx;
				width: 100%;
				text-align: center;

				.name {
					font-size: 46rpx;
				}

				.author {
					font-size: 34rpx;
					line-height: 60rpx;
				}

				.bar {
					display: flex;
					width: 330rpx;
					justify-content: space-between;
					margin: 20rpx auto;

					view {
						width: 100rpx;
						height: 40rpx;
						line-height: 40rpx;
						border: solid 1upx #FFFDEF;
						text-align: center;
						border-radius: 2rpx;
					}
				}
			}

			.micImg {
				margin: 0rpx auto;
				box-sizing: border-box;

				image {
					display: block;
					margin: 0 auto;
					width: 600upx;
					height: 600upx;
					border: 16upx solid rgba(0, 0, 0, .15);
					border-radius: 50%;

					&.zhuan {
						-webkit-transform: 360deg;
						animation: rotation 8s linear infinite;
					}
				}
			}

			.bot {
				width: 100%;
				padding: 0 26rpx;
				box-sizing: border-box;
				margin-bottom: 100rpx;

				.lineBar {
					display: flex;
					justify-content: space-between;
					padding: 20rpx 0;

					.line {
						width: 520rpx;
						margin: 0;
					}
				}

				.iconbtn {
					display: block;
					width: 50rpx;
					height: 50rpx;
					margin: 0 auto;
				}

				.btn {
					display: flex;
					justify-content: space-between;
					padding: 40rpx 15rpx;

					.playbtn {
						display: flex;
						width: 500rpx;
						margin-top: -15rpx;

						view {
							flex: 1;
							align-items: center;
						}

						.iconbtn {
							width: 80rpx;
							height: 80rpx;

							&.play {
								margin-top: -20rpx;
								width: 120rpx;
								height: 120rpx;
							}
						}
					}
				}

				.tool {
					display: flex;
					width: 100%;

					view {
						flex: 1;
						text-align: center;
					}
				}
			}
		}
	}
</style>
