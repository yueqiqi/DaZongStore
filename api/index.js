import http from './requestConfig.js';
const req = {
	isPrompt: true, //（默认 true 说明：本接口抛出的错误是否提示）
	load: true, //（默认 true 说明：本接口是否提示加载动画）
	headers: { //默认 无 说明：请求头
		'Content-Type': 'application/json;charset=utf-8'
	},
	isFactory: true //（默认 true 说明：本接口是否调用公共的数据处理方法，设置false后isPrompt参数奖失去作用）
}
const req2 = {
	isPrompt: true, //（默认 true 说明：本接口抛出的错误是否提示）
	load: false, //（默认 true 说明：本接口是否提示加载动画）
	headers: { //默认 无 说明：请求头
		'Content-Type': 'application/json;charset=utf-8'
	},
	isFactory: true //（默认 true 说明：本接口是否调用公共的数据处理方法，设置false后isPrompt参数奖失去作用）
}
const api = {
	reqAddress:params => http.get('http://www.lbh360.com/wap/appapi/invoke',params,req2),//验证app更新
}
export default api