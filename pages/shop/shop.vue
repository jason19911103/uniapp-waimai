<template>
	<view>
		<!-- 商家介绍 -->
		<Header></Header>
		<!-- tab切换 -->
		<Tabs></Tabs>
		<view class="ordering-sceate">
			<!-- 商品下单 -->
			<Order :class="[hideing === 0 ? 'actineclass' : 'errorclass']" :itemdata="itemdata"></Order>
			<!-- 评价 -->
			<Message :class="[hideing === 1 ? 'actineclass' : 'errorclass']" :messagedata="messagedata" :tabmessage="tabmessage"
			 :empty="empty"></Message>
			<!-- 商家详情 -->
			<Introduce :busidata="busidata" :class="[hideing === 2 ? 'actineclass' : 'errorclass']"></Introduce>
		</view>
	</view>
</template>

<script>
	import Header from "./components/header.vue";
	import Tabs from './components/tabs.vue';
	import Order from "./components/order.vue";
	import Message from "./components/message.vue"
	import Introduce from "./components/introduce.vue"

	import {
		getMenu
	} from '../../api/request.js'

	import {
		postMethod
	} from '../../api/api.js'

	export default {
		components: {
			Header,
			Tabs,
			Order,
			Message,
			Introduce
		},
		data() {
			return {
				hideing: 0,
				// 商家介绍
				busidata: {},
				// 商品数据
				itemdata: {},
				// 评论
				messagedata: [],
				// 评论分类的标签
				tabmessage: [],
				// 标识没有评论
				empty: '',
				// 商家唯一标识
				ids: ''
			}
		},
		methods: {
			fatherMethod(index) {
				console.log(index)
				this.hideing = index
			},
			takeFun(ids) {
				let data = {
					openid: ids
				}
				let disdata = {
					merchantid: ids
				}
				postMethod(getMenu)
					.then((res) => {
						this.itemdata = res.data.menu
					})
					.catch((err) => {
						console.log(err)
					})
			}
		},
		mounted() {
			this.takeFun()
		}
	}
</script>

<style scoped>
	.actineclass {
		display: block;
		overflow-y: auto;
		height: 100%;
	}

	.errorclass {
		display: none;
	}

	.ordering-sceate {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 230upx;
	}
</style>
