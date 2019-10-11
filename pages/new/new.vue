<template>
	<view class="new">
		<view class="bar">
			<view :class="[current==0?'sel':'','li']" @click="current = 0">新歌</view>
			<view :class="[current==1?'sel':'','li']" @click="current = 1">新碟</view>
			<view :class="[current==2?'sel':'','li']" @click="current = 2">影视</view>
		</view>
		<swiper @animationfinish="onSwiper" class="swiper" :current="current">
			<swiper-item>
				<view class="swiper-item">
					<allplay></allplay>
					<scroll-view scroll-y="true" class="scroll-Y">
						<playlist v-for="(item,index) in newList" :key="index" :info="item"></playlist>
					</scroll-view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<scroll-view class="titleList" scroll-x>
						<view class="li sel">推荐</view>
						<view class="li">内地</view>
						<view class="li">港台</view>
						<view class="li">欧美</view>
						<view class="li">英文</view>
						<view class="li">说唱</view>
						<view class="li">儿童</view>
						<view class="icon"></view>
					</scroll-view>
					<scroll-view scroll-y class="scroll-Y">
						<album :propdata="newDiscList" blockwidth="49.5%"></album>
					</scroll-view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="newFilms">热映动画片原生</view>
					<scroll-view scroll-y class="scroll-Y">
						<album :propdata="newFilmsList" blockwidth="49.5%"></album>
					</scroll-view>
				</view>
			</swiper-item>
		</swiper>
		<playbot></playbot>
	</view>
</template>

<script>
	import allplay from '../../components/allplay.vue';
	import playlist from '../../components/playlist.vue';
	import playbot from '../../components/playbot.vue';
	import album from '../../components/album.vue'
	export default {
		data() {
			return {
				current: 0,
				newList: [{
						Name: "像我这样的人1",
						SrcAudio: "http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author: '毛不易',
						Album: "平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ: 0,
						DJ: 1,
						HQ: 0,
						VIP: 1
					},
					{
						Name: "像我这样的人2",
						SrcAudio: "http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author: '毛不易',
						Album: "平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ: 1,
						DJ: 1,
						HQ: 0,
						VIP: 1
					},
					{
						Name: "像我这样的人3",
						SrcAudio: "http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author: '毛不易',
						Album: "平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ: 0,
						DJ: 1,
						HQ: 0,
						VIP: 0
					},
					{
						Name: "像我这样的人4",
						SrcAudio: "http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author: '毛不易',
						Album: "平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ: 0,
						DJ: 0,
						HQ: 0,
						VIP: 1
					},
					{
						Name: "像我这样的人5",
						SrcAudio: "http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author: '毛不易',
						Album: "平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ: 1,
						DJ: 1,
						HQ: 0,
						VIP: 1
					},
					{
						Name: "像我这样的人6",
						SrcAudio: "http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author: '毛不易',
						Album: "平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ: 0,
						DJ: 1,
						HQ: 1,
						VIP: 0
					},
					{
						Name: "像我这样的人7",
						SrcAudio: "http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author: '毛不易',
						Album: "平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ: 0,
						DJ: 1,
						HQ: 1,
						VIP: 0
					},
					{
						Name: "像我这样的人8",
						SrcAudio: "http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author: '毛不易',
						Album: "平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ: 0,
						DJ: 1,
						HQ: 1,
						VIP: 0
					},
					{
						Name: "像我这样的人9",
						SrcAudio: "http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author: '毛不易',
						Album: "平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ: 0,
						DJ: 1,
						HQ: 1,
						VIP: 0
					},
					{
						Name: "像我这样的人10",
						SrcAudio: "http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author: '毛不易',
						Album: "平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ: 0,
						DJ: 1,
						HQ: 1,
						VIP: 0
					},
					{
						Name: "像我这样的人11",
						SrcAudio: "http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
						Author: '毛不易',
						Album: "平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
						SQ: 0,
						DJ: 1,
						HQ: 1,
						VIP: 0
					}
				],
				newDiscList: [{
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
					},
					{
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
				],
				newFilmsList: [{
						name: "离开的接口",
						author: "刘瑞琪",
						src: "/static/image/sc12.jpg"
					},
					{
						name: "Cerll ls:The Albuild",
						author: "Made Will Made It",
						src: "/static/image/sc13.jpg"
					},
					{
						name: "SSS.GRIDMANIDSFEF",
						author: "OTX",
						src: "/static/image/sc14.jpg"
					},
					{
						name: "No place",
						author: "Backstreet",
						src: "/static/image/sc15.jpg"
					},
					{
						name: "别再闹了",
						author: "毛不易",
						src: "/static/image/sc16.jpg"
					},
					{
						name: "即刻电音",
						author: "即可电音",
						src: "/static/image/sc17.jpg"
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
				],
			}
		},
		components: {
			allplay,
			playlist,
			playbot,
			album
		},
		methods: {
			onSwiper(e){
				this.current = e.detail.current;
			}

		}
	}
</script>

<style lang="scss" scoped>
	::-webkit-scrollbar{
		width: 0;
		height: 0;
		color: transparent;
	}
	// 隐藏scroll-view滚动条
	/deep/.uni-scroll-view {
		background-color: #fff;
		overflow: auto !important;
		
	}
	/deep/.uni-scroll-view::-webkit-scrollbar {
		/* 隐藏滚动条，但依旧具备可以滚动的功能 */
		display: none
	}

	.new {
		overflow: hidden;
		.bar {
			display: flex;
			justify-content: center;
			margin: 30rpx 0;

			.li {
				padding: 0 40rpx;
				line-height: 60rpx;
				border: 1px solid #000;
				color: #000;
				border-right: none;

				&:last-child {
					border-right: 1px solid #000;
				}

				&.sel {
					background-color: #000;
					color: #fff;
				}
			}
		}

		.swiper {
			height: calc(100vh - 260rpx);
		}

		.scroll-Y {
			height: calc(100vh - 360rpx);
		}

		.titleList {
			position: relative;
			white-space: nowrap;
			display: flex;
			align-items: center;
			padding: 30rpx 0;
			.li {
				display: inline-block;
				text-align: center;
				width: 20%;
				&.sel{
					color: #f55500;
				}
			}
			.icon{
				position: absolute;
				width: 50rpx;
				height: 8rpx;
				line-height: 8rpx;
				background-color: #F55500;
				bottom: -20rpx;
				border-radius: 4rpx;
				margin-left: calc(20% - 10% - 25upx);
			}
		}
		.newFilms {
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 40rpx;
			letter-spacing: 15rpx;
		}
	}
</style>
