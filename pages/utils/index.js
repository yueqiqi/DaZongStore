function testPhone(val){
	let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
	let isBool
	if (reg.test(val)) {
		isBool = true
	} else {
		uni.showToast({
			title: "请填写正确的电话号码",
			icon: "none"
		});
		isBool=false
	}
		return isBool
}
export default{
	testPhone
}