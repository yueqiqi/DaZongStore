(function(e){function n(n){for(var a,i,s=n[0],d=n[1],u=n[2],c=0,p=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);l&&l(n);while(p.length)p.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,i=1;i<t.length;i++){var d=t[i];0!==o[d]&&(a=!1)}a&&(r.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},o={index:0},r=[];function i(e){return s.p+"static/js/"+({"pages-PO-address~pages-address-info":"pages-PO-address~pages-address-info","pages-PO-address":"pages-PO-address","pages-address-info":"pages-address-info","pages-PO-index":"pages-PO-index","pages-addGoods-index":"pages-addGoods-index","pages-address-index":"pages-address-index","pages-demo":"pages-demo","pages-index-index~pages-search-index~pages-searchGoods-index~pages-searchGoods-list":"pages-index-index~pages-search-index~pages-searchGoods-index~pages-searchGoods-list","pages-index-index":"pages-index-index","pages-search-index":"pages-search-index","pages-searchGoods-index":"pages-searchGoods-index","pages-searchGoods-list":"pages-searchGoods-list","pages-list-index":"pages-list-index","pages-list-info":"pages-list-info","pages-order-index":"pages-order-index","pages-pay-index":"pages-pay-index"}[e]||e)+"."+{"pages-PO-address~pages-address-info":"bc46e480","pages-PO-address":"aaee31f1","pages-address-info":"21bd8bba","pages-PO-index":"141d94de","pages-addGoods-index":"69d7662d","pages-address-index":"034ceaa6","pages-demo":"f9c683be","pages-index-index~pages-search-index~pages-searchGoods-index~pages-searchGoods-list":"eaf981d5","pages-index-index":"c2e0d93e","pages-search-index":"68544e81","pages-searchGoods-index":"92fc499b","pages-searchGoods-list":"9b39ec28","pages-list-index":"e47b225a","pages-list-info":"78505afb","pages-order-index":"e9a84b3f","pages-pay-index":"c1ac8b9f"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,a){t=o[e]=[n,a]}));n.push(t[2]=a);var r,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e);var u=new Error;r=function(n){d.onerror=d.onload=null,clearTimeout(c);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,t[1](u)}o[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:d})}),12e4);d.onerror=d.onload=r,document.head.appendChild(d)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="./",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=n,d=d.slice();for(var c=0;c<d.length;c++)n(d[c]);var l=u;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("8594")},"151c":function(e,n,t){"use strict";var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("8350")),r="https://takeout.lbh360.com/bulk/",i=new o.default({baseUrl:r,fileUrl:r,headers:{"content-type":"application/json;charset=UTF-8"},isPrompt:!0,load:!0,isFactory:!0}),s=0;i.requestStart=function(e){return s<=0&&(uni.showNavigationBarLoading(),e.load&&uni.showLoading({title:"加载中",mask:!0})),s+=1,e.headers["Authorization"]=uni.getStorageSync("userToken")||"",e},i.requestEnd=function(e,n){s-=1,s<=0&&(uni.hideLoading(),uni.hideNavigationBarLoading()),n.errMsg&&("request:ok"!=n.errMsg||n.statusCode&&200!=n.statusCode)&&setTimeout((function(){uni.showToast({title:"网络错误，请检查一下网络",icon:"none"})}),500)};var d=0;i.dataFactory=function(e){if(e.response.statusCode&&200==e.response.statusCode){var n=e.response.data;n.success?e.resolve(n.data):"210"==n.code||"203"==n.code?(d<=0&&(d++,uni.showToast({title:"登陆过期请登陆后尝试~",icon:"none"})),e.reject(n)):(e.isPrompt&&setTimeout((function(){uni.showToast({title:n.msg,icon:"none",duration:3e3})}),500),e.reject(n))}else e.reject(e.response)};var u=i;n.default=u},"1bd7":function(e,n,t){"use strict";var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,r=a(t("ade3")),i=(a(t("e143")),t("e2b7")),s=(o={},(0,r.default)(o,i.ORDER_PAY,(function(e,n){e.orderInfo=n})),(0,r.default)(o,i.MY_ADDRESS,(function(e,n){})),(0,r.default)(o,i.SHOWADDRESS,(function(e,n){e.supplierAdd=n})),(0,r.default)(o,i.ADDGOODS_CHOOSE_ADDRESS,(function(e,n){e.addGoodsAdd=n})),(0,r.default)(o,i.ADD_GOODSINFO,(function(e,n){e.goodsInfo=n})),(0,r.default)(o,i.PO_SHOP,(function(e,n){e.POShop=n})),(0,r.default)(o,i.PO_ADDRESS,(function(e,n){e.POAddress=n})),(0,r.default)(o,i.ADDGOODS_CHOOSE_ADDRESS,(function(e,n){e.addGoodsAdd=n})),(0,r.default)(o,i.RECEIVE_ADDRESS,(function(e,n){e.addList=n})),o);n.default=s},"1e3a":function(e,n,t){"use strict";var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("96cf");var o=a(t("1da1")),r=t("e2b7"),i=a(t("d82d")),s={setMyAddress:function(e,n){return(0,o.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,e.state,t.next=3,i.default.setAddress(n);case 3:t.sent,a(r.MY_ADDRESS,n);case 5:case"end":return t.stop()}}),t)})))()},myaddress:function(e,n){return(0,o.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,e.state,t.next=3,i.default.addAddress(n);case 3:t.sent,a(r.MY_ADDRESS,n);case 5:case"end":return t.stop()}}),t)})))()},showAddress:function(e,n){return(0,o.default)(regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,e.state,t.next=3,i.default.getAddress(n);case 3:o=t.sent,a(r.SHOWADDRESS,o);case 5:case"end":return t.stop()}}),t)})))()},getAddList:function(e,n){return(0,o.default)(regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,e.state,t.next=3,i.default.getAddList(n);case 3:o=t.sent,a(r.RECEIVE_ADDRESS,o);case 5:case"end":return t.stop()}}),t)})))()},getCategorys:function(e){return(0,o.default)(regeneratorRuntime.mark((function n(){var t,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.commit,n.next=3,reqCategorys();case 3:a=n.sent,0===a.code&&(o=a.data,t(r.RECEIVE_CATEGORYS,{categorys:o}));case 5:case"end":return n.stop()}}),n)})))()}};n.default=s},"36c8":function(e,n,t){"use strict";t.r(n);var a=t("4d62"),o=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);n["default"]=o.a},"3dac":function(e,n,t){"use strict";var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("e143")),r=a(t("2f62")),i=a(t("93aa")),s=a(t("1bd7")),d=a(t("1e3a")),u=a(t("8866"));o.default.use(r.default);var c=new r.default.Store({state:i.default,mutations:s.default,actions:d.default,getters:u.default});n.default=c},"4d62":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){e("log","App Launch"," at App.vue:4"),uni.setStorageSync("OS",uni.getSystemInfoSync().platform)},onShow:function(){e("log","App Show"," at App.vue:9")},onHide:function(){e("log","App Hide"," at App.vue:12")}};n.default=t}).call(this,t("0de9")["log"])},"517c":function(e,n,t){var a=t("24fb");n=a(!1),n.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.stick{position:-webkit-sticky;position:sticky;top:var(--window-top)}.bg-white{background:#fff}.uImg-m{width:%?150?%;height:%?150?%}.uImg-l{width:%?180?%;height:%?180?%}.uImg{width:%?120?%;height:%?120?%}\r\n/* 隐藏滚动条 */::-webkit-scrollbar{display:none;    width:0!important;-webkit-appearance:none;    height:0!important;    background-color:transparent!important}.font{color:#333;font-size:%?32?%;font-weight:700}.btn{background:#fc724c;border:none;color:#fff;width:100%;border:%?1?% solid #fc724c}.btn-normal{background:#fff;border:none;color:#fc724c;width:100%;border:%?1?% solid #fc724c}.alIcon{color:#666;text-align:center;font-family:texticons}@font-face{font-family:texticons;font-weight:400;font-style:normal;src:url(https://at.alicdn.com/t/font_1911402_g2o3c4aoagu.ttf) format("truetype")}.over{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.baseline{-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline}.flex{display:-webkit-box;display:-webkit-flex;display:flex}.center{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-sp{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.flex-center{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.border{border:%?1?% solid #ebedf0}.border-top{border-top:%?1?% solid #ebedf0}.border-bottom{border-bottom:%?1?% solid #ebedf0}.pt-xs{padding-top:%?10?%}.pb-xs{padding-bottom:%?10?%}.pt-sm{padding-top:%?20?%}.pb-sm{padding-bottom:%?20?%}.pl{padding-left:%?30?%}.pr{padding-right:%?30?%}.plr{padding-left:%?30?%;padding-right:%?30?%}.pt{padding-top:%?30?%}.pb{padding-bottom:%?30?%}.ml-xs{margin-left:%?10?%}.mt-xs{margin-top:%?10?%}.mb-xs{margin-bottom:%?10?%}.mb-sm{margin-bottom:%?20?%}.mt-sm{margin-top:%?20?%}.mr-sm{margin-right:%?20?%}.ml-sm{margin-left:%?25?%}.mt{margin-top:%?30?%}.mr{margin-right:%?30?%}.ml{margin-left:%?30?%}.mb{margin-bottom:%?30?%}.card:last-child{border:0}.card{background:#fff}\r\n/*每个页面公共css */',""]),e.exports=n},5793:function(e,n,t){var a=t("517c");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=t("4f06").default;o("7b8fb78b",a,!0,{sourceMap:!1,shadowMode:!1})},"5d1b":function(e,n,t){"use strict";function a(e){var n,t=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return t.test(e)?n=!0:(uni.showToast({title:"请填写正确的电话号码",icon:"none"}),n=!1),n}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={testPhone:a};n.default=o},"5dd6":function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return a}));var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},r=[]},8350:function(e,n,t){"use strict";(function(e){var a=t("4ea4");t("4160"),t("baa5"),t("b64b"),t("d3b7"),t("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("5530")),r=a(t("d4ec")),i=a(t("bee2")),s=t("a59a"),d=function(){function n(e){(0,r.default)(this,n),this.baseUrl=e.baseUrl||"",this.fileUrl=e.fileUrl||"",this.headers=e.headers||{},this.config={isPrompt:!1!==e.isPrompt,load:!1!==e.load,isFactory:!1!==e.isFactory,loadMore:!1!==e.loadMore}}return(0,i.default)(n,[{key:"getDefault",value:function(e,n,t){var a,o=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~/])+$/.test(e);a="file"==t?o?e:this.fileUrl+e:o?e:this.baseUrl+e;var r=Object.assign({},this.config,n);return r.httpUrl=a,r.headers=Object.assign(this.headers,n.headers),r}},{key:"post",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.getDefault(n,a,"data");return r.data=t,new Promise((function(n,t){e.getRequest("POST",r,(function(a,i){a&&r.isFactory&&e.dataFactory?e.dataFactory((0,o.default)((0,o.default)({},r),{},{response:i,resolve:n,reject:t})):a?n(i):t(i)}))}))}},{key:"get",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.getDefault(n,a,"data");return r.data=t,new Promise((function(n,t){e.getRequest("GET",r,(function(a,i){a&&r.isFactory&&e.dataFactory?e.dataFactory((0,o.default)((0,o.default)({},r),{},{response:i,resolve:n,reject:t})):a?n(i):t(i)}))}))}},{key:"put",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.getDefault(n,a,"data");return r.data=t,new Promise((function(n,t){e.getRequest("PUT",r,(function(a,i){a&&r.isFactory&&e.dataFactory?e.dataFactory((0,o.default)((0,o.default)({},r),{},{response:i,resolve:n,reject:t})):a?n(i):t(i)}))}))}},{key:"delete",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=this.getDefault(n,t,"data");return a.data="",new Promise((function(n,t){e.getRequest("DELETE",a,(function(r,i){r&&a.isFactory&&e.dataFactory?e.dataFactory((0,o.default)((0,o.default)({},a),{},{response:i,resolve:n,reject:t})):r?n(i):t(i)}))}))}},{key:"getRequest",value:function(e,n,t){var a=this;if(this.requestStart){n.method=e;var o=this.requestStart(n);if("object"!=typeof o)return void t(!1,"请求开始拦截器未通过");n.data=o.data,n.headers=o.headers,n.isPrompt=o.isPrompt,n.load=o.load,n.isFactory=o.isFactory}uni.request({url:n.httpUrl,data:n.data,method:e,header:n.headers,success:function(e){a.requestEnd&&a.requestEnd(n,e),t(!0,e)},fail:function(e){a.requestEnd&&a.requestEnd(n,e),t(!1,e)}})}},{key:"jsonp",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=this.getDefault(e,t,"data"),o="";Object.keys(n).forEach((function(e){o+=e+"="+n[e]+"&"})),""!==o&&(o=o.substr(0,o.lastIndexOf("&"))),a.httpUrl=a.httpUrl+"?"+o;var r=this;return new Promise((function(e,t){var o="callback"+Math.ceil(1e6*Math.random());if(r.requestStart){a.data=n;var i=r.requestStart(a);if("object"!=typeof i)return void t("请求开始拦截器未通过");a.data=i.data,a.headers=i.headers,a.isPrompt=i.isPrompt,a.load=i.load,a.isFactory=i.isFactory}window[o]=function(n){e(n)};var s=document.createElement("script");s.src=a.httpUrl+"&callback="+o,document.head.appendChild(s),document.head.removeChild(s),r.requestEnd&&r.requestEnd(a,{})}))}},{key:"qnImgUpload",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,t=this;return new Promise((function(a,o){uni.chooseImage({count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"],success:function(e){t.qnFileUpload(e.tempFilePaths,n).then((function(e){a(e)}),(function(e){o(e)}))}})}))}},{key:"randomChar",value:function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t="0123456789qwertyuioplkjhgfdsazxcvbnm",a="",o=new Date,r=0;r<e;r++)a+=t.charAt(Math.ceil(1e8*Math.random())%t.length);return"file/"+n+o.getTime()+a}},{key:"qnFileUpload",value:function(n,t){var a=this;return new Promise((function(o,r){if("object"==typeof n){var i=n.length,d=new Array;a.get("api/kemean/aid/qn_upload").then((function(u){function c(l){s.upload(n[l],(function(e){t&&t(e.imageURL),d.push(e.imageURL),i-1>l?c(l+1):o(d)}),(function(n){e("log","error: "+n," at api/request.js:258"),r(n)}),{region:"SCN",domain:u.visitPrefix,key:a.randomChar(8,u.folderPath),uptoken:u.token,uptokenURL:"UpTokenURL.com/uptoken"},(function(n){e("log","上传进度",n.progress," at api/request.js:267")}))}c(0)}))}else e("error","files 必须是数组类型"," at api/request.js:274"),r("files 必须是数组类型")}))}},{key:"urlImgUpload",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=this.getDefault(e,t,"file");a.data=n;var o=this;return new Promise((function(e,t){uni.chooseImage({count:n.count||9,sizeType:n.sizeType||["original","compressed"],sourceType:n.sourceType||["album","camera"],success:function(n){o.urlFileUpload(a,n.tempFiles,(function(n,a){n?e(a):t(a)}))}})}))}},{key:"urlFileUpload",value:function(e,n,t){var a=this;if(this.requestStart){e.method="FILE";var o=this.requestStart(e);if("object"==typeof o){if("object"!=typeof o)return void t(!1,"请求开始拦截器未通过");e.data=o.data,e.headers=o.headers,e.isPrompt=o.isPrompt,e.load=o.load,e.isFactory=o.isFactory}}var r=n.length-1,i=new Array;function s(o){var d={url:e.httpUrl,filePath:n[o].path,header:e.headers,name:e.name||"file",success:function(n){if(n.data=JSON.parse(n.data),a.requestEnd&&a.requestEnd(e,n),e.isFactory&&a.dataFactory){var d=a.dataFactory(e,n);d.success?(i.push(d.result),r<=o?t(!0,i):s(o+1)):t(!1,d.result)}else i.push(n.data),r<=o?t(!0,i):s(o+1)},fail:function(n){a.requestEnd&&a.requestEnd(e,n),t(!1,n)}};e.data&&(d.formData=e.data),uni.uploadFile(d)}s(0)}}]),n}();n.default=d}).call(this,t("0de9")["log"])},8594:function(e,n,t){"use strict";var a=t("4ea4"),o=a(t("5530"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("c4c4"),t("1c31");var r=a(t("e143")),i=a(t("f2ef")),s=a(t("3dac")),d=a(t("5d1b")),u=a(t("d82d"));r.default.prototype.$store=s.default,r.default.prototype.$utils=d.default,r.default.prototype.$api=u.default,r.default.config.productionTip=!1,i.default.mpType="app";var c=new r.default((0,o.default)({store:s.default},i.default));c.$mount()},8866:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={};n.default=a},"93aa":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={addGoodsAdd:"",POShop:{},goodsInfo:"",addList:[],supplierAdd:{},orderInfo:{}};n.default=a},a59a:function(e,n,t){(function(n){t("ac1f"),t("1276"),function(){var t={qiniuRegion:"",qiniuImageURLPrefix:"",qiniuUploadToken:"",qiniuUploadTokenURL:"",qiniuUploadTokenFunction:null,qiniuShouldUseQiniuFileName:!1};function a(e){t={qiniuRegion:"",qiniuImageURLPrefix:"",qiniuUploadToken:"",qiniuUploadTokenURL:"",qiniuUploadTokenFunction:null,qiniuShouldUseQiniuFileName:!1},o(e)}function o(e){e.region?t.qiniuRegion=e.region:n("error","qiniu uploader need your bucket region"," at api/qiniuUploader.js:36"),e.uptoken?t.qiniuUploadToken=e.uptoken:e.uptokenURL?t.qiniuUploadTokenURL=e.uptokenURL:e.uptokenFunc&&(t.qiniuUploadTokenFunction=e.uptokenFunc),e.domain&&(t.qiniuImageURLPrefix=e.domain),t.qiniuShouldUseQiniuFileName=e.shouldUseQiniuFileName}function r(e,a,r,d,u,c){if(null!=e)if(d&&o(d),t.qiniuUploadToken)i(e,a,r,d,u,c);else if(t.qiniuUploadTokenURL)s((function(){i(e,a,r,d,u,c)}));else{if(!t.qiniuUploadTokenFunction)return void n("error","qiniu uploader need one of [uptoken, uptokenURL, uptokenFunc]"," at api/qiniuUploader.js:73");if(t.qiniuUploadToken=t.qiniuUploadTokenFunction(),null==t.qiniuUploadToken&&t.qiniuUploadToken.length>0)return void n("error","qiniu UploadTokenFunction result is null, please check the return value"," at api/qiniuUploader.js:68");i(e,a,r,d,u,c)}else n("error","qiniu uploader need filePath to upload"," at api/qiniuUploader.js:53")}function i(e,a,o,r,i,s){if(null==t.qiniuUploadToken&&t.qiniuUploadToken.length>0)n("error","qiniu UploadToken is null, please check the init config or networking"," at api/qiniuUploader.js:80");else{var u=d(t.qiniuRegion),c=e.split("//")[1];r&&r.key&&(c=r.key);var l={token:t.qiniuUploadToken};t.qiniuShouldUseQiniuFileName||(l["key"]=c);var p=wx.uploadFile({url:u,filePath:e,name:"file",formData:l,success:function(e){var r=e.data;e.data.hasOwnProperty("type")&&"Buffer"===e.data.type&&(r=String.fromCharCode.apply(null,e.data.data));try{var i=JSON.parse(r),s=t.qiniuImageURLPrefix+"/"+i.key;i.imageURL=s,a&&a(i)}catch(d){n("log","parse JSON failed, origin String is: "+r," at api/qiniuUploader.js:113"),o&&o(d)}},fail:function(e){n("error",e," at api/qiniuUploader.js:120"),o&&o(e)}});p.onProgressUpdate((function(e){i&&i(e)})),s&&s((function(){p.abort()}))}}function s(e){wx.request({url:t.qiniuUploadTokenURL,success:function(a){var o=a.data.uptoken;o&&o.length>0?(t.qiniuUploadToken=o,e&&e()):n("error","qiniuUploader cannot get your token, please check the uptokenURL or server"," at api/qiniuUploader.js:147")},fail:function(e){n("error","qiniu UploadToken is null, please check the init config or networking: "+e," at api/qiniuUploader.js:151")}})}function d(e){var t=null;switch(e){case"ECN":t="https://up.qbox.me";break;case"NCN":t="https://up-z1.qbox.me";break;case"SCN":t="https://up-z2.qbox.me";break;case"NA":t="https://up-na0.qbox.me";break;case"ASG":t="https://up-as0.qbox.me";break;default:n("error","please make the region is with one of [ECN, SCN, NCN, NA, ASG]"," at api/qiniuUploader.js:164")}return t}e.exports={init:a,upload:r}}()}).call(this,t("0de9")["log"])},c4c4:function(e,n,t){"use strict";(function(e){var n=t("4ea4"),a=n(t("e143"));e["____050B104____"]=!0,delete e["____050B104____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"大宗商城",navigationBarBackgroundColor:"#fc724c",backgroundColor:"#F8F8F8"}},e.__uniConfig.compilerVersion="2.8.11",e.__uniConfig.responsive={minWidth:768},e.__uniConfig.router={mode:"hash",base:"./"},e.__uniConfig.publicPath="./",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=t.e,a.default.component("pages-index-index",(function(e){var n={component:Promise.all([t.e("pages-index-index~pages-search-index~pages-searchGoods-index~pages-searchGoods-list"),t.e("pages-index-index")]).then(function(){return e(t("cb02"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-address-index",(function(e){var n={component:t.e("pages-address-index").then(function(){return e(t("66fd"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-address-info",(function(e){var n={component:Promise.all([t.e("pages-PO-address~pages-address-info"),t.e("pages-address-info")]).then(function(){return e(t("feb5"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-demo",(function(e){var n={component:t.e("pages-demo").then(function(){return e(t("5a75"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-search-index",(function(e){var n={component:Promise.all([t.e("pages-index-index~pages-search-index~pages-searchGoods-index~pages-searchGoods-list"),t.e("pages-search-index")]).then(function(){return e(t("56f9"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-searchGoods-index",(function(e){var n={component:Promise.all([t.e("pages-index-index~pages-search-index~pages-searchGoods-index~pages-searchGoods-list"),t.e("pages-searchGoods-index")]).then(function(){return e(t("f876"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-searchGoods-list",(function(e){var n={component:Promise.all([t.e("pages-index-index~pages-search-index~pages-searchGoods-index~pages-searchGoods-list"),t.e("pages-searchGoods-list")]).then(function(){return e(t("614d"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-list-index",(function(e){var n={component:t.e("pages-list-index").then(function(){return e(t("dbd2"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-addGoods-index",(function(e){var n={component:t.e("pages-addGoods-index").then(function(){return e(t("0b03"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-PO-index",(function(e){var n={component:t.e("pages-PO-index").then(function(){return e(t("3ca4"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-PO-address",(function(e){var n={component:Promise.all([t.e("pages-PO-address~pages-address-info"),t.e("pages-PO-address")]).then(function(){return e(t("7ea6"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-list-info",(function(e){var n={component:t.e("pages-list-info").then(function(){return e(t("b1d0"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-pay-index",(function(e){var n={component:t.e("pages-pay-index").then(function(){return e(t("4b8e"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-order-index",(function(e){var n={component:t.e("pages-order-index").then(function(){return e(t("79ae"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationStyle:"custom",titleNView:!1})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/address/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"我的地址"})},[e("pages-address-index",{slot:"page"})])}},meta:{name:"pages-address-index",isNVue:!1,pagePath:"pages/address/index",windowTop:44}},{path:"/pages/address/info",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"添加地址"})},[e("pages-address-info",{slot:"page"})])}},meta:{name:"pages-address-info",isNVue:!1,pagePath:"pages/address/info",windowTop:44}},{path:"/pages/demo",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-demo",{slot:"page"})])}},meta:{name:"pages-demo",isNVue:!1,pagePath:"pages/demo",windowTop:44}},{path:"/pages/search/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom",titleNView:!1})},[e("pages-search-index",{slot:"page"})])}},meta:{name:"pages-search-index",isNVue:!1,pagePath:"pages/search/index",windowTop:0}},{path:"/pages/searchGoods/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom",titleNView:!1})},[e("pages-searchGoods-index",{slot:"page"})])}},meta:{name:"pages-searchGoods-index",isNVue:!1,pagePath:"pages/searchGoods/index",windowTop:0}},{path:"/pages/searchGoods/list",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom",titleNView:!1})},[e("pages-searchGoods-list",{slot:"page"})])}},meta:{name:"pages-searchGoods-list",isNVue:!1,pagePath:"pages/searchGoods/list",windowTop:0}},{path:"/pages/list/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"采购订单列表",enablePullDownRefresh:!0,backgroundTextStyle:"dark"})},[e("pages-list-index",{slot:"page"})])}},meta:{name:"pages-list-index",isNVue:!1,pagePath:"pages/list/index",windowTop:44}},{path:"/pages/addGoods/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-addGoods-index",{slot:"page"})])}},meta:{name:"pages-addGoods-index",isNVue:!1,pagePath:"pages/addGoods/index",windowTop:44}},{path:"/pages/PO/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"确认订单"})},[e("pages-PO-index",{slot:"page"})])}},meta:{name:"pages-PO-index",isNVue:!1,pagePath:"pages/PO/index",windowTop:44}},{path:"/pages/PO/address",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-PO-address",{slot:"page"})])}},meta:{name:"pages-PO-address",isNVue:!1,pagePath:"pages/PO/address",windowTop:44}},{path:"/pages/list/info",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"订单详情"})},[e("pages-list-info",{slot:"page"})])}},meta:{name:"pages-list-info",isNVue:!1,pagePath:"pages/list/info",windowTop:44}},{path:"/pages/pay/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"下单支付"})},[e("pages-pay-index",{slot:"page"})])}},meta:{name:"pages-pay-index",isNVue:!1,pagePath:"pages/pay/index",windowTop:44}},{path:"/pages/order/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"订单列表",enablePullDownRefresh:!0,backgroundTextStyle:"dark"})},[e("pages-order-index",{slot:"page"})])}},meta:{name:"pages-order-index",isNVue:!1,pagePath:"pages/order/index",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,t("c8ba"))},d658:function(e,n,t){"use strict";var a=t("5793"),o=t.n(a);o.a},d82d:function(e,n,t){"use strict";var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("5530")),r=a(t("151c")),i={isPrompt:!0,load:!0,headers:{"Content-Type":"application/json;charset=utf-8"},isFactory:!0},s={thPartyPay:function(e){return r.default.post("order/prepay",e,i)},getProvinces:function(e){return r.default.get("merchant/provinces",e,i)},getCategoryList:function(e){return r.default.get("merchant/goods/category/list",e,i)},getList3:function(e){return r.default.get("merchant/goods/list/"+e,"",i)},getList2:function(e){return r.default.get("merchant/goods/name/list/"+e.id,{page:e.page,rows:"10"},i)},searchGoods:function(e){return r.default.get("merchant/goods/search",(0,o.default)({rows:"10"},e),i)},searchGoodsTem:function(e){return r.default.get("merchant/goods/bank/search",(0,o.default)({rows:"10"},e),i)},getGoodsInfo:function(e){return r.default.get("merchant/goods/bank/"+e,"",i)},putGoods:function(e){return r.default.post("merchant/goods",e,i)},setGoods:function(e){return r.default.put("merchant/goods",e,i)},delGoods:function(e){return r.default.delete("merchant/goods/"+e,"",i)},echoGoodsInfo:function(e){return r.default.get("merchant/goods/"+e,"",i)},getAddress:function(e){return r.default.get("merchant/address",e,i)},getSupList:function(e){return r.default.get("merchant/goods/list",e,i)},getSupAdd:function(e){return r.default.get("merchant/address/list/"+e,"",i)},placeOrder:function(e){return r.default.post("order",e,i)},getOrderList:function(e,n){return r.default.get("order/list/"+e.type,{status:e.status,page:n,rows:"10"},i)},getOrderList2:function(e,n){return r.default.get("order/list/"+e.type,{status:e.status,page:n,rows:"10",month:e.month},i)},getOrderInfo:function(e){return r.default.get("order/"+e,"",i)},orderPrepare:function(e){return r.default.put("order/prepare/"+e,"",i)},orderReceive:function(e){return r.default.put("order/receive/"+e,"",i)},balanceOrder:function(e){return r.default.post("order/pay/balance/"+e,"",i)},getAddList:function(e){return r.default.get("merchant/address/list/"+e,"",i)},getAddInfo:function(e){return r.default.get("merchant/address/"+e,"",i)},addAddress:function(e){return r.default.post("merchant/address",e,i)},setAddress:function(e){return r.default.put("merchant/address",e,i)},delAddress:function(e){return r.default.delete("merchant/address/"+e,"",i)}},d=s;n.default=d},e2b7:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ORDER_PAY=n.MY_ADDRESS=n.SHOWADDRESS=n.ADD_GOODSINFO=n.PO_SHOP=n.PO_ADDRESS=n.RECEIVE_ADDRESS=n.ADDGOODS_CHOOSE_ADDRESS=void 0;var a="addgoods_choose_address";n.ADDGOODS_CHOOSE_ADDRESS=a;var o="receive_address";n.RECEIVE_ADDRESS=o;var r="po_address";n.PO_ADDRESS=r;var i="po_shop";n.PO_SHOP=i;var s="add_goodsinfo";n.ADD_GOODSINFO=s;var d="showaddress";n.SHOWADDRESS=d;var u="my_address";n.MY_ADDRESS=u;var c="order_pay";n.ORDER_PAY=c},f2ef:function(e,n,t){"use strict";t.r(n);var a=t("5dd6"),o=t("36c8");for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("d658");var i,s=t("f0c5"),d=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=d.exports}});