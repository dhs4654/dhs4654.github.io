(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-on-compass-change-on-compass-change"],{"52ba":function(t,e,i){"use strict";var n=i("d116"),a=i.n(n);a.a},"7d65":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={pageHead:i("d27c").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-hello-text uni-center",staticStyle:{"padding-bottom":"50rpx"}},[t._v("旋转手机即可获取方位信息")]),n("v-uni-view",{staticClass:"direction"},[n("v-uni-view",{staticClass:"bg-compass-line"}),n("v-uni-image",{staticClass:"bg-compass",style:"transform: rotate("+t.direction+"deg)",attrs:{src:i("9950")}}),n("v-uni-view",{staticClass:"direction-value"},[n("v-uni-text",[t._v(t._s(t.direction))]),n("v-uni-text",{staticClass:"direction-degree"},[t._v("o")])],1)],1)],1)],1)},o=[]},9950:function(t,e,i){t.exports=i.p+"static/img/compass.acb5847f.png"},d087:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".direction[data-v-1ce940f3]{position:relative;margin-top:%?70?%;display:flex;width:%?540?%;height:%?540?%;align-items:center;justify-content:center;margin:0 auto}.direction-value[data-v-1ce940f3]{position:relative;font-size:%?200?%;color:#353535;line-height:1;z-index:1}.direction-degree[data-v-1ce940f3]{position:absolute;top:0;right:%?-40?%;font-size:%?60?%}.bg-compass[data-v-1ce940f3]{position:absolute;top:0;left:0;width:%?540?%;height:%?540?%;transition:.1s}.bg-compass-line[data-v-1ce940f3]{position:absolute;left:%?267?%;top:%?-10?%;width:%?6?%;height:%?56?%;background-color:#1aad19;border-radius:%?999?%;z-index:1}",""]),t.exports=e},d116:function(t,e,i){var n=i("d087");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5d4e9f62",n,!0,{sourceMap:!1,shadowMode:!1})},e387:function(t,e,i){"use strict";i.r(e);var n=i("e732"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e732:function(t,e,i){"use strict";i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"onCompassChange",direction:0}},onReady:function(){var t=this;uni.onCompassChange((function(e){t.direction=parseInt(e.direction)}))},onUnload:function(){uni.stopCompass(),this.direction=0}};e.default=n},fd79:function(t,e,i){"use strict";i.r(e);var n=i("7d65"),a=i("e387");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("52ba");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"1ce940f3",null,!1,n["a"],s);e["default"]=r.exports}}]);