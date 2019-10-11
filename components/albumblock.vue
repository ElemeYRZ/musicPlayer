<template>
	<view v-if="propdata" class="recommend">
		<view class="title">
			{{propdata.title}}
			<image :src="imgSrc+'/jiantou2.png'"></image>
		</view>
		<album :propdata="propdata.list" :blockwidth="blockWidth"></album>
		<view v-if="changeReturnParams" class="change" @tap="changeFunc">
			<image :src="imgSrc+'icon/shuaxin.png'"></image>
			换一批
		</view>
	</view>
</template>

<script>
	import album from './album.vue';
	export default{
		name:'albumblock',
		components:{
			album
		},
		props:{
			propdata:{
				type:Object,
				default:{}
			},
			blockWidth:{
				type:String,
				default:'32.8%'
			},
			changeReturnParams:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				imgSrc:'/static/image/'
			}
		},
		methods:{
			changeFunc(){
				this.$emit('change',this.changeReturnParams);
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.recommend{
		.title{
			font-size: 32rpx;
			text-align:center;
			height: 100rpx;
			line-height: 100rpx;
			position:relative;
			image{
				width: 40rpx;
				height: 40rpx;
				position: absolute;
				right: 40rpx;
				top: 30rpx;
			}
		}
		.change{
			width: 28%;
			line-height: 56rpx;
			border:1rpx solid #ccc;
			margin:0 auto;
			text-align:center;
			font-size:26rpx;
			margin-bottom:20rpx;
			image{
				width: 32rpx;
				height: 32rpx;
				vertical-align: text-bottom;
			}
		}
	}
	
</style>
