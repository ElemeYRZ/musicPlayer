<template>
	<view class="home">
		<top></top>
		<view class="banner">
			<swiper class="bannerContent" :autoplay="swiper.autoplay">
				<swiper-item v-for="(item,index) in swiper.img" :key="index">
					<image class="swiperImg" :src="item"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="homeContent">
			<view class="bar">
				<view class="iconSpan" v-for="(item,index) in contentBar" :key="index">
					<image class="iconBarImg" :src="item.src"></image>
					<view class="">{{item.name}}</view>
				</view>
			</view>
			<view class="used">
				<view class="usedImg" @tap="goUrl('../info/info')">
					<image :src="content.img"></image>
					<image class="icon" :src="imgSrc+'icon/sanjiao.png'" mode=""></image>
					<view class="imgTitle">{{content.imgTitle}}</view>
				</view>
				<view class="list">
					<view @tap="goUrl('../new/new?index='+index)" class="grayColor info" v-for="(val,index) in content.list" :key="index">
						<view class="name">{{val.name}}</view>
						<view class="desc">{{val.disc}}</view>
						<image class="listImg" :src="val.src"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 父组件向子组件传值 通过props -->
		<!-- 子组件向父组件传值 首先在子组件中绑定点击事件,使用$emit()触发事件并传参，在父组件中绑定监听事件即可 -->
		<albumblock :propdata="recommend" changeReturnParams="recom" @change="recChange"></albumblock>
		<albumblock :propdata="newest"></albumblock>
		<albumblock :propdata="sole" blockWidth="49.5%"></albumblock>
		<view class="ceshi"></view>
	</view>
</template>

<script>
	import top from '../../components/top';
	import albumblock from '../../components/albumblock.vue';
	export default {
		data() {
			return {
				imgSrc: '/static/image/',
				swiper: {
					autoplay: true,
					img: [
						'/static/image/1.jpeg',
						'/static/image/2.jpeg',
						'/static/image/3.jpeg'
					]
				},
				contentBar: [{
						name: "歌手",
						src: '/static/image/icon/ren_l.png'
					},
					{
						name: "排行",
						src: '/static/image/icon/paixingbang_l.png'
					},
					{
						name: "分类歌单",
						src: '/static/image/icon/fenlei1_l.png'
					},
					{
						name: "电台",
						src: '/static/image/icon/xinhaojieshouqi_l.png'
					},
					{
						name: "视频",
						src: '/static/image/icon/shipin-tianchong_l.png'
					}
				],
				content: {
					img: "/static/image/sc1.jpg",
					imgTitle: '个性电台',
					list: [{
							name: "新歌新碟",
							disc: "神秘嘉宾先生选择新歌",
							src: '/static/image/sc2.jpeg'
						},
						{
							name: "动画片专辑|热映",
							disc: "李建老狼联手现场",
							src: '/static/image/sc3.jpeg'
						}
					]
				},
				recommend: {
					title: "为你推荐",
					list: [{
							name: "你的独家品味推荐",
							src: "/static/image/sc5.jpg",
							count: "53133000",
							updateTime: "刚刚更新"
						},
						{
							name: "慢跑随身听",
							src: "/static/image/sc7.jpg",
							count: "210000",
							updateTime: "刚刚更新"
						},
						{
							name: "失恋解药",
							src: "/static/image/sc8.jpg",
							count: "4000",
							updateTime: "刚刚更新"
						},
						{
							name: "薛之谦创作歌曲集",
							src: "/static/image/sc9.jpg",
							count: "9200000",
							updateTime: "刚刚更新"
						},
						{
							name: "青春是一场未知的探险",
							src: "/static/image/sc10.jpg",
							count: "8909",
							updateTime: "刚刚更新"
						},
						{
							name: "欧美|渐入佳境的入耳暖心旋律",
							src: "/static/image/sc11.jpg",
							count: "120000",
							updateTime: "刚刚更新"
						}
					]
				},
				newest: {
					title: "最新专辑",
					list: [{
							name: "离开的接口",
							author: "刘瑞琪",
							count: "200",
							src: "/static/image/sc12.jpg"
						},
						{
							name: "Cerll ls:The Albuild",
							author: "Made Will Made It",
							count: "200",
							src: "/static/image/sc13.jpg"
						},
						{
							name: "SSS.GRIDMANIDSFEF word",
							author: "OTX",
							count: "200",
							src: "/static/image/sc14.jpg"
						},
						{
							name: "No place",
							author: "Backstreet",
							count: "200",
							src: "/static/image/sc15.jpg"
						},
						{
							name: "别再闹了",
							author: "毛不易",
							count: "200",
							src: "/static/image/sc16.jpg"
						},
						{
							name: "即刻电音",
							author: "即可电音",
							count: "200",
							src: "/static/image/sc17.jpg"
						}
					]
				},
				sole: {
					title: "独家内容",
					list: [{
							name: "乐见大牌|靖佩瑶清唱《清风是》又勾起广大会议",
							count: "531330000",
							src: "/static/image/sc22.jpg"
						},
						{
							name: "精心专用！法兰的歌声让你情绪在温暖的夜色和平",
							count: "53130000",
							src: "/static/image/sc19.jpg"
						},
						{
							name: "你妹听过的\"成功学\"说唱：人生赢家的秘诀在于洗澡",
							count: "31330000",
							src: "/static/image/sc20.jpg"
						},
						{
							name: "为N对情侣现场恋爱BGM.Kris Wu甘当电灯泡",
							count: "1338000",
							src: "/static/image/sc21.jpg"
						},
					]
				},
			}
		},
		components: {
			top,
			albumblock
		},
		methods: {
			recChange(val) {
				if (val == 'recom') {
					let arry = this.recommend.list.splice(0, 2);
					this.recommend.list = [...this.recommend.list, ...arry]
				}
			},
			goUrl(url) {
				wx.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		width: 100vw;
		color: #333;
		padding-bottom: 60rpx;

		.ceshi {
			width: 100rpx;
			height: 100rpx;
			background-color: #007AFF;
			border-radius: 50%;
			position: absolute;
			top: 300rpx;
			left: 100rpx;
			animation: myfirst 3s cubic-bezier(0.42,0,1,1);
		}

		@keyframes myfirst {
			from {
				background: red;
				left: -100rpx;
			}

			to {
				background: yellow;
				left: 100rpx;
			}
		}

		.bannerContent {
			width: 100%;
			height: 320rpx;

			.swiperImg {
				width: 100%;
				height: 100%;
			}
		}

		.homeContent {
			padding: 20rpx;
			box-sizing: border-box;

			.bar {
				display: flex;
				align-items: center;
				background: #FFFFFF;
				box-shadow: 4upx 4upx 10upx #CCCCCC;
				position: relative;
				margin-top: -28rpx;
				padding: 36rpx 0;

				.iconSpan {
					flex: 1;
					text-align: center;

					.iconBarImg {
						width: 44rpx;
						height: 44rpx;
					}
				}
			}

			.used {
				display: flex;
				margin-top: 40rpx;

				.usedImg {
					width: 220rpx;
					height: 220rpx;
					position: relative;
					margin-right: 20rpx;

					image {
						width: 100%;
						height: 100%;
					}

					.icon {
						width: 50rpx;
						height: 50rpx;
						position: absolute;
						top: 50%;
						left: 50%;
						margin-left: -25rpx;
						margin-top: -25rpx;
					}

					.imgTitle {
						position: absolute;
						color: #fff;
						bottom: 20rpx;
						width: 100%;
						text-align: center;
					}
				}

				.list {
					flex: 1;

					.info {
						height: 100rpx;
						padding: 12upx 20upx;
						box-sizing: border-box;
						position: relative;

						&:first-child {
							margin-bottom: 20rpx;
						}

						.name {
							font-size: 32rpx;
						}

						.desc {
							font-size: 26rpx;
							color: #6f6f6f;
						}

						.listImg {
							position: absolute;
							top: 0;
							right: 0;
							width: 100rpx;
							height: 100rpx;
						}
					}
				}
			}
		}
	}
</style>
