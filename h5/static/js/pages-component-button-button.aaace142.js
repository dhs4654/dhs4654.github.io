(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-button-button"],{"15b5":function(t,n,i){var a=i("24fb");n=a(!1),n.push([t.i,"uni-button[data-v-0f0819d4]{margin-top:%?30?%;margin-bottom:%?30?%}.button-sp-area[data-v-0f0819d4]{margin:0 auto;width:60%}.mini-btn[data-v-0f0819d4]{margin-right:%?10?%}",""]),t.exports=n},"1f49":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"button",loading:!1}},onLoad:function(){this._timer=null},onShow:function(){var t=this;this.clearTimer(),this._timer=setTimeout((function(){t.loading=!0}),300)},onUnload:function(){this.clearTimer(),this.loading=!1},methods:{openTypeError:function(t){console.error("open-type error:",t)},clearTimer:function(){null!=this._timer&&clearTimeout(this._timer)}}};n.default=a},"241a":function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return r})),i.d(n,"a",(function(){return a}));var a={pageHead:i("d27c").default},e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-button",{attrs:{type:"primary"}},[t._v("页面主操作 Normal")]),i("v-uni-button",{attrs:{type:"primary",loading:t.loading}},[t._v("页面主操作 Loading")]),i("v-uni-button",{attrs:{type:"primary",disabled:"true"}},[t._v("页面主操作 Disabled")]),i("v-uni-button",{attrs:{type:"default"}},[t._v("页面次要操作 Normal")]),i("v-uni-button",{attrs:{type:"default",disabled:"true"}},[t._v("页面次要操作 Disabled")]),i("v-uni-button",{attrs:{type:"warn"}},[t._v("警告类操作 Normal")]),i("v-uni-button",{attrs:{type:"warn",disabled:"true"}},[t._v("警告类操作 Disabled")]),i("v-uni-view",{staticClass:"button-sp-area"},[i("v-uni-button",{attrs:{type:"primary",plain:"true"}},[t._v("按钮")]),i("v-uni-button",{attrs:{type:"primary",disabled:"true",plain:"true"}},[t._v("不可点击的按钮")]),i("v-uni-button",{attrs:{type:"default",plain:"true"}},[t._v("按钮")]),i("v-uni-button",{attrs:{type:"default",disabled:"true",plain:"true"}},[t._v("按钮")]),i("v-uni-button",{staticClass:"mini-btn",attrs:{type:"primary",size:"mini"}},[t._v("按钮")]),i("v-uni-button",{staticClass:"mini-btn",attrs:{type:"default",size:"mini"}},[t._v("按钮")]),i("v-uni-button",{staticClass:"mini-btn",attrs:{type:"warn",size:"mini"}},[t._v("按钮")])],1)],1)],1)},r=[]},2820:function(t,n,i){"use strict";var a=i("4015"),e=i.n(a);e.a},4015:function(t,n,i){var a=i("15b5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("5b765124",a,!0,{sourceMap:!1,shadowMode:!1})},"7d88":function(t,n,i){"use strict";i.r(n);var a=i("1f49"),e=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(n,t,(function(){return a[t]}))}(r);n["default"]=e.a},"7e18":function(t,n,i){"use strict";i.r(n);var a=i("241a"),e=i("7d88");for(var r in e)"default"!==r&&function(t){i.d(n,t,(function(){return e[t]}))}(r);i("2820");var u,o=i("f0c5"),s=Object(o["a"])(e["default"],a["b"],a["c"],!1,null,"0f0819d4",null,!1,a["a"],u);n["default"]=s.exports}}]);