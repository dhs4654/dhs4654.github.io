(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-component-communication-component-communication"],{"029d":function(t,n,e){"use strict";var r=e("91ff"),a=e.n(r);a.a},"03fa":function(t,n,e){"use strict";e.r(n);var r=e("0703"),a=e("2fb1");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);var c,i=e("f0c5"),f=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"7c80fd46",null,!1,r["a"],c);n["default"]=f.exports},"0703":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return r}));var r={pageHead:e("d27c").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:"组件通讯示例"}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("reciver"),e("sender"),e("sender-bus")],1)],1)],1)},u=[]},"1d4c":function(t,n,e){"use strict";e.r(n);var r=e("4f6e"),a=e("9202");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("7e2f");var c,i=e("f0c5"),f=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"8a1ffc22",null,!1,r["a"],c);n["default"]=f.exports},"26f6":function(t,n,e){"use strict";e("e25e"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={methods:{send:function(){var t=parseInt(1e4*Math.random());uni.$emit("cc",{msg:"From uni.$emit -> "+t})}}};n.default=r},"2fb1":function(t,n,e){"use strict";e.r(n);var r=e("91e9"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=a.a},"3b5e":function(t,n,e){var r=e("856b");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=e("4f06").default;a("565d7508",r,!0,{sourceMap:!1,shadowMode:!1})},"4f6e":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return r}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"sender-container"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.send.apply(void 0,arguments)}}},[t._v("点击发送消息")])],1)},u=[]},"544a":function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,".reciver[data-v-6fc920a8]{padding:40px 0;text-align:center;line-height:40px}",""]),t.exports=n},6796:function(t,n,e){"use strict";e.r(n);var r=e("e784"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=a.a},"6d06":function(t,n,e){var r=e("f141");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=e("4f06").default;a("2691ab6d",r,!0,{sourceMap:!1,shadowMode:!1})},"6d23":function(t,n,e){"use strict";e.r(n);var r=e("b655"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=a.a},"74df":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return r}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"sender-container"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.send.apply(void 0,arguments)}}},[t._v("自定义EventBus")])],1)},u=[]},"7e2f":function(t,n,e){"use strict";var r=e("3b5e"),a=e.n(r);a.a},"856b":function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,".sender-container[data-v-8a1ffc22]{padding:20px}",""]),t.exports=n},"91e9":function(t,n,e){"use strict";var r=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("9c92")),u=r(e("1d4c")),c=r(e("dbc4")),i={components:{reciver:a.default,sender:u.default,senderBus:c.default},data:function(){return{}},methods:{}};n.default=i},"91ff":function(t,n,e){var r=e("544a");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=e("4f06").default;a("506cdcc0",r,!0,{sourceMap:!1,shadowMode:!1})},9202:function(t,n,e){"use strict";e.r(n);var r=e("26f6"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=a.a},"9c92":function(t,n,e){"use strict";e.r(n);var r=e("bc1f"),a=e("6d23");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("029d");var c,i=e("f0c5"),f=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"6fc920a8",null,!1,r["a"],c);n["default"]=f.exports},b655:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){return{msg:""}},created:function(){uni.$on("cc",this.recive)},beforeDestroy:function(){uni.$off("cc",this.recive)},methods:{recive:function(t){this.msg=t.msg}}};n.default=r},bc1f:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return r}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"reciver"},[t._v(t._s(""===t.msg?"等待发送":"收到消息：")+t._s(t.msg))])],1)},u=[]},da8a:function(t,n,e){"use strict";var r=e("6d06"),a=e.n(r);a.a},dbc4:function(t,n,e){"use strict";e.r(n);var r=e("74df"),a=e("6796");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("da8a");var c,i=e("f0c5"),f=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"6c33cc76",null,!1,r["a"],c);n["default"]=f.exports},e784:function(t,n,e){"use strict";e("e25e"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={methods:{send:function(){var t=parseInt(1e4*Math.random());uni.$emit("cc",{msg:"From event bus -> "+t})}}};n.default=r},f141:function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,".sender-container[data-v-6c33cc76]{padding:20px}",""]),t.exports=n}}]);