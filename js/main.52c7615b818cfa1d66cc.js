webpackJsonp([7],{"39ur":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("cHtD");t.default={router:i.a,data:function(){return{isBack:!1,slideDirection:"none"}},watch:{$route:function(n,t){null!==t.name&&(this.slideDirection=n.path.startsWith(t.path)?"left":"right")}}}},I8Sj:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"views",attrs:{id:"app"}},[e("div",{staticClass:"view"},[e("div",{staticClass:"pages navbar-fixed"},[e("f7-page-animation",{attrs:{direction:n.slideDirection}},[e("router-view")],1)],1)])])},staticRenderFns:[]}},YkRm:function(n,t,e){var i=e("VU/8")(e("39ur"),e("I8Sj"),null,null,null);n.exports=i.exports},cHtD:function(n,t,e){"use strict";function i(n){return e.i(o.b)(),n.then(function(n){return e.i(o.c)(),n},function(n){return e.i(o.c)(),alert("Network error when load page."),Promise.reject(n)})}var r=e("/5sW"),a=e("/ocq"),o=e("HLel");r.a.use(a.a);var u=new a.a({routes:[{path:"/",component:function(){return i(e.e(5).then(e.bind(null,"vkyI")))}},{path:"/navbar",component:function(){return i(e.e(3).then(e.bind(null,"Q+NJ")))}},{path:"/popup",component:function(){return i(e.e(2).then(e.bind(null,"RVWF")))}},{path:"/searchbar",component:function(){return i(e.e(1).then(e.bind(null,"lhq3")))}},{path:"/toolbar",component:function(){return i(e.e(0).then(e.bind(null,"wMIi")))}},{path:"/indicator",component:function(){return i(e.e(4).then(e.bind(null,"Fkj7")))}}]});t.a=u},lVK7:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("F3ZG"),r=(e.n(i),e("/5sW")),a=e("HLel"),o=e("YkRm"),u=e.n(o),c=e("t8iB");e.n(c);e.i(c.install)({onUpdateReady:function(){e.i(c.applyUpdate)()},onUpdated:function(){window.location.reload()}}),r.a.use(a.a),document.body.appendChild(new r.a(u.a).$mount().$el)}},["lVK7"]);
//# sourceMappingURL=main.52c7615b818cfa1d66cc.js.map