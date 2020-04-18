<template>
	<view>
		<block v-for="(item,index) in shop" :key="index">
			<view class="content-view" @click="toShop(item.id)">
				<view class="content-img">
					<image :src="item.img" mode="aspectFill"></image>
				</view>
				<view class="content-title">
					<text class="content-take">{{item.name}}</text>
					<!-- 		<view class="content-monthly">
						<text>月售200</text>
						<text>约{{item.duration}}分钟</text>
					</view>
					<view class="content-starting">
						<text>起送¥{{item.delivering}}</text>
						<text>配送¥{{item.physical}}</text>
						<text>人均¥{{item.capita}}</text>
					</view>
					<view class="content-starting">
						<image src="" mode="widthFix"></image>
						<text>{{item.types}}</text>
					</view>
				 -->
				</view>
			</view>
		</block>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				shop: [{
					"img": "../../../static/img/hust.jpg",
					"name": "华科外卖",
					"time": "",
					"distance": "500m",
				}]
			}
		},
		methods: {
			toShop(id) {
				wx.navigateTo({
					url: "../shop/shop"
				})
			}
		}
	}
</script>

<style>
	.content-view text {
		display: block;
	}

	.content-view {
		display: flex;
		justify-content: space-between;
		height: 200upx !important;
		overflow: hidden;
		border-bottom: 1rpx solid #E4E8EB;
		padding-bottom: 5upx;
		margin: 30upx 0;
		color: #898989;
	}

	.content-img {
		width: 350upx !important;
		height: 200upx !important;
	}

	.content-img image {
		width: 100%;
		height: 100%;
		border-radius: 10upx;
	}

	.content-title {
		width: 100%;
		padding-left: 10upx;
		font-size: 24upx;
	}

	.content-take {
		color: #333333;
		height: 50upx;
		font-size: 33upx;
		font-weight: bold;
		line-height: 50upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.content-monthly {
		display: flex;
		justify-content: space-between;
		height: 50upx;
		line-height: 50upx;
	}

	.content-starting {
		display: flex;
		align-items: center;
		height: 50upx;
		line-height: 50upx;
	}

	.content-starting text {
		width: 130upx;
	}

	.content-starting image {
		width: 24upx;
		height: 24upx;
		padding-right: 10upx;
	}
</style>
