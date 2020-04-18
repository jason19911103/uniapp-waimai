<template>
	<view>
		<view class="header-view">
			<view class="header-take">
				<view class="header-img">
					<image :src="shopData.img" mode="aspectFill"></image>
				</view>
				<view class="header-right">
					<text class="header-title">{{shopData.name}}</text>
					<view class="header-time">
						<image src="../../../static/img/time.svg" mode="widthFix"></image>
						<text>配送约{{shopData.time}}分钟</text>
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				shopData: {
					name: "华科外卖",
					img: "../../../static/img/hust.jpg",
					time: "20",
				}
			}
		}
	}
</script>

<style scoped>
	text {
		display: block;
	}

	.header-view {
		height: 130upx;
		background-color: #008000;
		border-bottom-left-radius: 10upx;
		border-bottom-right-radius: 10upx;
	}

	.header-img image {
		width: 100%;
		height: 100%;
		border-radius: 10upx;
	}

	.header-img {
		width: 150upx !important;
		height: 120upx !important;
		padding-right: 20upx;
	}

	.header-time image {
		width: 27upx;
		height: 27upx;
		padding-right: 9upx;
	}

	.header-time {
		display: flex;
		align-items: center;
		font-size: 27upx;
		height: 40upx;
		line-height: 40upx;
	}

	.header-take {
		display: flex;
		height: 130upx;
		padding: 0 10upx;
	}

	.header-right {
		width: 100%;
	}

	.header-title {
		font-size: 37upx;
		margin-bottom: 19upx;
		display: block;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
</style>
