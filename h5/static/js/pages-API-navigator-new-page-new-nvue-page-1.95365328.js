(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-nvue-page-1"],{1157:function(t,e,n){"use strict";n.r(e);var a=n("8494"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"25aa":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".new-page__text[data-v-96417b38]{font-size:14px;color:#666}.root[data-v-96417b38]{flex-direction:column}.page-body[data-v-96417b38]{flex:1;flex-direction:column;justify-content:flex-start;align-items:center;padding-top:50px}.new-page__text-box[data-v-96417b38]{padding:20px}.new-page__color[data-v-96417b38]{width:200px;height:100px;justify-content:center;align-items:center}.new-page__color-text[data-v-96417b38]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-96417b38]{margin-top:15px;width:300px}",""]),t.exports=e},"30df":function(t,e,n){"use strict";n.r(e);var a=n("b2f1"),o=n("1157");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("62c5");var u,c=n("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"96417b38",null,!1,a["a"],u);e["default"]=r.exports},"62c5":function(t,e,n){"use strict";var a=n("d7f9"),o=n.n(a);o.a},8494:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("5530")),i=n("26cb"),u={data:function(){return{}},computed:(0,o.default)((0,o.default)({},(0,i.mapState)(["colorIndex","colorList"])),(0,i.mapGetters)(["currentColor"])),methods:(0,o.default)((0,o.default)({},(0,i.mapMutations)(["setColorIndex"])),{},{navToNvue:function(){uni.navigateTo({url:"new-nvue-page-2"})},navToVue:function(){uni.navigateTo({url:"new-vue-page-2"})}})};e.default=u},b2f1:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"root"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:t.currentColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setColorIndex(t.colorIndex>1?0:t.colorIndex+1)}}},[n("v-uni-text",{staticClass:"new-page__color-text"},[t._v("点击改变颜色")])],1),n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[t._v("点击上方色块使用vuex在页面之间进行通讯")])],1),n("v-uni-view",{staticClass:"new-page__button"},[n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToNvue.apply(void 0,arguments)}}},[t._v("跳转NVUE页面")]),n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToVue.apply(void 0,arguments)}}},[t._v("跳转VUE页面")])],1)],1)],1)},i=[]},d7f9:function(t,e,n){var a=n("25aa");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("b0060e9c",a,!0,{sourceMap:!1,shadowMode:!1})}}]);