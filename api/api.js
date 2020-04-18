import messageModal from "./messageModal.js"

// GET
let getMethod = function(urling) {
	return new Promise((resolve, reject) => {
		uni.request({
				url: urling,
				method: 'GET',
			})
			.then((res) => {
				resolve(res[1])
			})
			.catch((err) => {
				let errs = '服务器错误 请稍后再试'
				messageModal.messagelist(errs)
				reject(err)
			})
	})
}

// POST请求
let postMethod = function(urling, shopdata) {
	return new Promise((resolve, reject) => {
		uni.request({
				url: urling,
				method: 'POST',
				data: shopdata
			})
			.then((res) => {
				resolve(res[1])
			})
			.catch((err) => {
				let errs = '服务器错误 请稍后再试'
				messageModal.messagelist(errs)
				reject(err)
			})
	})
}
export {
	getMethod,
	postMethod
}
