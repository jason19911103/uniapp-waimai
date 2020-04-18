<template>
	<view>
		<view class="location">
			<image src="../../../static/img/position.png" mode="widthFix"></image>
			<text class="location-text">武汉市洪山区</text>
			<text>></text>
		</view>
		<view class="search-cont">
			<view class="search">
				<image src="../../../static/img/search.svg" mode="widthFix" class="search-img"></image>
				<input type="text" placeholder="肯德基 满50减20" />
			</view>
		</view>
		<view class="swiper-view">
			<swiper :autoplay="false" :interval="2000" :duration="1000">
				<block v-for="(item,index) in lable" :key="index">
					<swiper-item>
						<view class="swiper-item">
							<block v-for="(listdata,index) in item" :key="index">
								<view class="conteng-img">
									<image :src="listdata.img" mode="widthFix" class="uploadimg"></image>
									<text>{{listdata.title}}</text>
								</view>
							</block>
						</view>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="instruct-view">
			<block v-for="(item, index) in instructdata" :key="index">
				<view class="instruct" :class="{active:index == num}">{{item}}</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				instructdata: ["", ""],
				lable: [
					[{
							'title': '美食'
						},
						{
							'title': '超市便利'
						},
						{
							'title': '蔬菜水果'
						},
						{
							'title': '一叶专送'
						},
						{
							'title': '甜品饮品'
						},
						{
							'title': '晚餐优选'
						},
						{
							'title': '家常菜'
						},
						{
							'title': '快事简餐'
						},
						{
							'title': '能量西餐'
						},
						{
							'title': '品牌连锁'
						}
					],
					[{
							'title': '甜蜜蛋糕'
						},
						{
							'title': '小吃馆'
						},
						{
							'title': '煲仔饭'
						},
						{
							'title': '浪漫鲜花'
						},
						{
							'title': '鸭脖卤味'
						},
						{
							'title': '减免配送费'
						},
						{
							'title': '暖胃粉面'
						},
						{
							'title': '麻辣烫冒菜'
						},
						{
							'title': '无辣不欢'
						},
						{
							'title': '全部分类'
						}
					]
				]
			}
		}
	}
</script>

<style scoped>
	.location image {
		width: 35upx;
		height: 35upx;
	}

	.location {
		font-size: 30upx;
		font-weight: bold;
		display: flex;
		align-items: center;
		height: 80upx;
	}

	.location-text {
		padding: 0 10upx
	}

	.search {
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		display: flex;
		flex-direction: flex;
		background: #eff3f4;
		border-radius: 10px;
	}

	.search-img {
		margin: auto 0 auto 20upx;
		width: 40upx;
		height: 40upx;
	}

	.search input {
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		font-size: 25upx;
		color: "#666666"

	}

	.search-cont {
		display: flex;
		justify-content: space-between;
		height: 70upx;
		align-items: center;
	}

	swiper {
		height: 320upx !important;
	}

	.swiper-item {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		height: 320upx;
	}

	.conteng-img {
		width: calc((100% / 5) - 12px) !important;
		margin: 6px;
		position: relative;
		text-align: center;
	}

	.conteng-img text {
		padding-top: 20upx;
		font-size: 25upx;
	}

	.uploadimg {
		width: 70upx;
		height: 70upx;
		border-radius: 50upx;
		display: block;
		margin: 0 auto;
	}

	.instruct-view {
		display: flex;
		justify-content: center;
		padding-top: 10upx;
	}

	.instruct {
		background: #e6e6e6;
		height: 10upx;
		width: 30upx;
		border-radius: 50upx;
		margin: 0 10upx;
	}

	.active {
		background: #fbae22 !important;
	}
</style>
