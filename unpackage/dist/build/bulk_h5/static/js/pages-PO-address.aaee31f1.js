(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-PO-address"],{"0816":function(e,t,i){"use strict";i.r(t);var s=i("56a6"),a=i.n(s);for(var r in s)"default"!==r&&function(e){i.d(t,e,(function(){return s[e]}))}(r);t["default"]=a.a},"1d36":function(e,t,i){var s=i("24fb");t=s(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.title[data-v-f5ef8fec]{color:#333;font-size:%?32?%;font-weight:700;width:25%}.info[data-v-f5ef8fec]{color:#666;font-size:%?28?%}.flex[data-v-f5ef8fec]{-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding-bottom:%?35?%;margin-bottom:%?35?%;width:100%}.right[data-v-f5ef8fec]{width:70%}.myIp[data-v-f5ef8fec]{font-size:%?28?%!important}.btn-normal[data-v-f5ef8fec]::after{-webkit-border-top-right-radius:0!important;border-top-right-radius:0!important}.btn[data-v-f5ef8fec]::after{-webkit-border-top-left-radius:0!important;border-top-left-radius:0!important}.footer[data-v-f5ef8fec]{position:fixed;bottom:%?45?%;right:%?0?%;left:%?0?%;padding-bottom:0;margin-bottom:0}.footer uni-button[data-v-f5ef8fec]{width:80%;-webkit-border-radius:%?70?%;border-radius:%?70?%}',""]),e.exports=t},2174:function(e,t,i){"use strict";var s;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return s}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"info plr pt"},[i("v-uni-view",{staticClass:"flex border-bottom"},[i("v-uni-view",{staticClass:"title"},[e._v("姓名:")]),i("v-uni-view",{staticClass:"right ml"},[i("v-uni-input",{attrs:{type:"text","placeholder-class":"myIp",placeholder:"请输入姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1),i("v-uni-view",{staticClass:"flex border-bottom"},[i("v-uni-view",{staticClass:"title"},[e._v("电话:")]),i("v-uni-view",{staticClass:"right ml"},[i("v-uni-input",{attrs:{type:"number",maxlength:"11","placeholder-class":"myIp",placeholder:"请输入电话号码"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1)],1),1!=e.addressType?i("v-uni-view",{staticClass:"flex border-bottom"},[i("v-uni-view",{staticClass:"title"},[e._v("省市区:")]),i("v-uni-view",{staticClass:"right ml",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addressShow=!0}}},[e._v(e._s(e.province)+"-"+e._s(e.city)+"-"+e._s(e.area))])],1):e._e(),i("v-uni-view",{staticClass:"flex border-bottom"},[i("v-uni-view",{staticClass:"title"},[e._v(e._s(1==e.addressType?"自提":"详细")+"地址:")]),i("v-uni-view",{staticClass:"right ml"},[i("v-uni-input",{attrs:{disabled:1==e.addressType&&null!=e.supplierAdd,type:"text","placeholder-class":"myIp",placeholder:"请输入详细地址"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1)],1),i("v-uni-view",{staticClass:"footer flex-center flex"},[i("v-uni-button",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.save.apply(void 0,arguments)}}},[e._v("保存")])],1),i("pickerAddress",{on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.addresspick.apply(void 0,arguments)}},model:{value:e.addressShow,callback:function(t){e.addressShow=t},expression:"addressShow"}})],1)},r=[]},4464:function(e,t,i){"use strict";var s=i("c921"),a=i.n(s);a.a},"56a6":function(e,t,i){"use strict";(function(e){var s=i("4ea4");i("a9e3"),i("ac1f"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var a=s(i("1da1")),r=s(i("5530")),n=s(i("f517")),u=s(i("8420")),o=i("2f62"),l={components:{pickerAddress:n.default,pickerTime:u.default},computed:(0,r.default)({},(0,o.mapState)(["supplierAdd"])),data:function(){return{type:"",value:"",showPicker:!1,phone:"",name:"",addressType:null,timeShow:!0,addressShow:!1,province:"省",city:"市",area:"区",address:"",timer:"请选择时间"}},methods:(0,r.default)((0,r.default)({},(0,o.mapActions)(["myaddress","showAddress","setMyAddress"])),{},{testInput:function(){if(""==this.name)return uni.showToast({title:"请填写姓名",icon:"none"}),!1;if(""==this.phone)return uni.showToast({title:"请填写电话号码",icon:"none"}),!1;var e=this.$utils.testPhone(this.phone);return e||(this.phone=""),e},save:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=1!=e.addressType?e.province+"/"+e.city+"/"+e.area:"",s={},s=1==e.addressType?{detailAddress:e.address,name:e.name,phone:e.phone,type:3}:{detailAddress:e.address,name:e.name,phone:e.phone,type:3,provinceRegion:i},e.testInput(),null==e.supplierAdd||""==e.supplierAdd){t.next=10;break}return s.id=e.addressId,t.next=8,e.setMyAddress(s);case 8:t.next=12;break;case 10:return t.next=12,e.myaddress(s);case 12:return t.next=14,e.showAddress();case 14:uni.navigateBack();case 15:case"end":return t.stop()}}),t)})))()},changeTime:function(e,t){var i=Number(e.split(" ")[1].split(":")[0])+1,s=e.split(" ")[1].split(":")[1];Number(i)>23&&(i=0),Number(i)<10&&(i="0"+i);var a=i+":"+s;this.timer=e+"--"+a},selectTime:function(e){this.type=e,this.showPicker=!0,this.value=this[e]},onSelected:function(e){if(this.showPicker=!1,e){var t=Number(e.value.split(" ")[1].split(":")[0])+1,i=e.value.split(" ")[1].split(":")[1];Number(t)>23&&(t=0),Number(t)<10&&(t="0"+t);var s=t+":"+i;this.timer=e.value+"--"+s}},addresspick:function(e){this.province=e.province.AreaName,this.city=e.city.AreaName,this.area=e.area.AreaName}}),onLoad:function(t){this.addressType=t.type,null!=this.supplierAdd&&""!=this.supplierAdd&&(e("log",this.supplierAdd," at pages/PO/address.vue:184"),this.name=this.supplierAdd.name,this.phone=this.supplierAdd.phone,this.address=this.supplierAdd.detailAddress,this.addressId=this.supplierAdd.id,this.province=this.supplierAdd.provinceRegion.split("/")[0]||this.supplierAdd.provinceRegion,this.city=this.supplierAdd.provinceRegion.split("/")[1]||"市",this.area=this.supplierAdd.provinceRegion.split("/")[2]||"区")},onShow:function(){var e;e=1==this.addressType?"联系方式":"收货地址",uni.setNavigationBarTitle({title:e})}};t.default=l}).call(this,i("0de9")["log"])},"5af7":function(e,t,i){"use strict";(function(e){i("a434"),i("a9e3"),i("e25e"),i("ac1f"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={props:{sTime:{type:[Number,String],default:"0"},cTime:{type:[Number,String],default:"23"},timeNum:{type:[Number,String],default:"1"},interval:{type:[Number,String],default:"1"},sDay:{type:[Number,String],default:"0"},dayNum:{type:[Number,String],default:"7"}},data:function(){return{sDayNum:0,multiArray:[[],[0,1,2,3,4,5,6]],multiIndex:[0,0,0],multiSelector:""}},beforeMount:function(){},watch:{cTime:function(e,t){this.pickerTap()}},methods:{timeFormat:function(e){return e<10&&1==(e+"").length?"0"+e:e},pickerTap:function(){var e=new Date,t=[],i=[],s=[];this.sDayNum=this.sDay;var a=new Date(e),r=+this.sTime,n=+this.cTime;if(r<=n){var u=a.getHours()<r?r:a.getHours();if(u+=parseInt(this.timeNum),u>n||this.sDayNum>0){this.sDayNum=this.sDayNum<=0?parseInt(this.sDay)+1:parseInt(this.sDay);for(var o=r;o<=n;o++)i.push(this.timeFormat(o)+"时")}else for(var l=r;l<=n;l++)i.push(this.timeFormat(l)+"时")}else{var d=a.getHours()<r?r:a.getHours();if(d+=parseInt(this.timeNum),d>n&&d<r||d>23||this.sDayNum>0){this.sDayNum=this.sDayNum<=0?parseInt(this.sDay)+1:parseInt(this.sDay);for(var c=0;c<=23;c++)c<r&&c>n||i.push(this.timeFormat(c)+"时")}else for(var p=d;p<=23;p++)p<r&&p>n||i.push(this.timeFormat(p)+"时")}for(var h=+this.sDayNum;h<=parseInt(this.sDayNum)+parseInt(this.dayNum);h++){var f=new Date(e);f.setDate(e.getDate()+h);var m=f.getFullYear()+"/"+this.timeFormat(f.getMonth()+1)+"/"+this.timeFormat(f.getDate());t.push(m)}for(var v=+this.interval<60?+this.interval:59,y=0;y<60;y+=v)s.push(y<10?"0"+y+"分":y+"分");var b={multiArray:this.multiArray,multiIndex:this.multiIndex};b.multiArray[0]=t,b.multiArray[1]=i,this.multiArray=b.multiArray,this.multiIndex=b.multiIndex},bindMultiPickerColumnChange:function(t){this.multiIndex.splice(t.detail.column,1,t.detail.value);var i=[];if(0==t.detail.column&&0==t.detail.value&&0==+this.sDayNum){var s=new Date,a=new Date(s),r=+this.sTime,n=+this.cTime;if(e("log","sT",r," at components/select-time/picker2.vue:155"),r<=n){var u=a.getHours()<r?r:a.getHours();if(u+=parseInt(this.timeNum),u>n||this.sDayNum>0){this.sDayNum=this.sDayNum<=0?parseInt(this.sDay)+1:parseInt(this.sDay);for(var o=r;o<=n;o++)i.push(this.timeFormat(o)+"时")}else for(var l=u;l<=n;l++)i.push(this.timeFormat(l)+"时")}else{var d=a.getHours()<r?r:a.getHours();if(d+=parseInt(this.timeNum),d>n&&d<r||d>23||this.sDayNum>0){this.sDayNum=this.sDayNum<=0?parseInt(this.sDay)+1:parseInt(this.sDay);for(var c=0;c<=23;c++)c<r&&c>n||i.push(this.timeFormat(c)+"时")}else for(var p=d;p<=23;p++)p<r&&p>n||i.push(this.timeFormat(p)+"时")}this.multiArray.splice(1,1,i)}else if(0==t.detail.column&&0!=t.detail.value){var h=+this.sTime,f=+this.cTime;if(h<=f)for(var m=h;m<=f;m++)i.push(this.timeFormat(m)+"时");else for(var v=0;v<=23;v++)v<h&&v>f||i.push(this.timeFormat(v)+"时");this.multiArray.splice(1,1,i)}},bindStartMultiPickerChange:function(e){this.multiIndex=e.detail.value;var t=this.multiArray,i=e.detail.value,s=t[0][i[0]]+" "+t[1][i[1]].replace("时",""),a=new Date(s.replace(/-/g,"/")).getTime()/1e3;this.$emit("changeTime",s,1e3*a)}}};t.default=s}).call(this,i("0de9")["log"])},"7ea6":function(e,t,i){"use strict";i.r(t);var s=i("2174"),a=i("0816");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("4464");var n,u=i("f0c5"),o=Object(u["a"])(a["default"],s["b"],s["c"],!1,null,"f5ef8fec",null,!1,s["a"],n);t["default"]=o.exports},8420:function(e,t,i){"use strict";i.r(t);var s=i("e334"),a=i("da0e");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);var n,u=i("f0c5"),o=Object(u["a"])(a["default"],s["b"],s["c"],!1,null,"58a3245e",null,!1,s["a"],n);t["default"]=o.exports},c921:function(e,t,i){var s=i("1d36");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var a=i("4f06").default;a("ace8033e",s,!0,{sourceMap:!1,shadowMode:!1})},da0e:function(e,t,i){"use strict";i.r(t);var s=i("5af7"),a=i.n(s);for(var r in s)"default"!==r&&function(e){i.d(t,e,(function(){return s[e]}))}(r);t["default"]=a.a},e334:function(e,t,i){"use strict";var s;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return s}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-picker",{staticClass:"time-picker",attrs:{mode:"multiSelector",value:e.multiIndex,range:e.multiArray},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindStartMultiPickerChange.apply(void 0,arguments)},columnchange:function(t){arguments[0]=t=e.$handleEvent(t),e.bindMultiPickerColumnChange.apply(void 0,arguments)}}},[e._t("pCon")],2)],1)},r=[]}}]);