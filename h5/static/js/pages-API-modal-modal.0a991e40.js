(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-modal-modal"],{"4aaf":function(t,n,a){"use strict";a.r(n);var e=a("d62f"),i=a("5a4c");for(var o in i)"default"!==o&&function(t){a.d(n,t,(function(){return i[t]}))}(o);var u,d=a("f0c5"),l=Object(d["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);n["default"]=l.exports},"5a4c":function(t,n,a){"use strict";a.r(n);var e=a("f285"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},d62f:function(t,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return e}));var e={pageHead:a("d27c").default},i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.modalTap.apply(void 0,arguments)}}},[t._v("有标题的modal")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.noTitlemodalTap.apply(void 0,arguments)}}},[t._v("无标题的modal")])],1)],1)],1)},o=[]},f285:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{title:"modal",modalHidden:!0,modalHidden2:!0}},methods:{modalTap:function(t){uni.showModal({title:"弹窗标题",content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",showCancel:!1,confirmText:"确定"})},noTitlemodalTap:function(t){uni.showModal({content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",confirmText:"确定",cancelText:"取消"})}}};n.default=e}}]);