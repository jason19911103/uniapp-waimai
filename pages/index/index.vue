<template>
	<view class="content">
		<Header></Header>
		<Preference></Preference>
		<Nearby></Nearby>
		<Sift></Sift>
		<Content></Content>
	</view>
</template>

<script>
	import Header from "./components/header.vue"
	import Preference from "./components/preference.vue"
	import Nearby from "./components/nearby.vue"
	import Sift from "./components/sift.vue"
	import Content from "./components/content.vue"
	export default {
		components: {
			Header,
			Preference,
			Nearby,
			Sift,
			Content,
		},
		data() {
			return {}
		},
		methods: {
		},


		mounted() {
		}
	}
</script>

<style>
	.content {
		margin: 0 15upx;
	}
</style>
