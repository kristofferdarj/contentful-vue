webpackJsonp([1,2],{108:function(e,t,n){"use strict";var r=n(214),s=r.createClient({space:"xaubqpmk1tze",accessToken:"f35176cd0088d5868218ef8be4c8f312d6472dc7546a015f83dae5df672570e0"}),o={debug:!1,state:{entries:{}},getPosts:function(){s.getEntries({limit:10,order:"sys.createdAt"}).then(function(e){o.debug&&console.log("getPosts triggered"),o.state.entries=e})}};t.a={state:o.state,getPosts:function(){o.getPosts()}}},192:function(e,t){},193:function(e,t,n){var r=n(106)(n(198),n(491),null,null);e.exports=r.exports},194:function(e,t,n){n(376);var r=n(106)(n(199),n(492),"data-v-a1d1feea",null);e.exports=r.exports},195:function(e,t,n){var r=n(106)(n(200),n(490),null,null);e.exports=r.exports},198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},199:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(108);t.default={data:function(){return{shared:r.a}},created:function(){r.a.getPosts()}}},200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"test"}},376:function(e,t){},490:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"testing"},[n("p",[e._v("hejsan")])])}]}},491:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("ul",[n("li",[n("router-link",{attrs:{to:"/blogroll"}},[e._v("Go to Blogroll")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/test"}},[e._v("Go to Test")])],1)]),e._v(" "),n("router-view")],1)},staticRenderFns:[]}},492:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"entries"},[n("p",{staticStyle:{color:"white"}},[e._v("Blogroll")]),e._v(" "),e._l(e.shared.state.entries.items,function(t){return n("div",[n("p",{staticStyle:{color:"white"}},[e._v("Hej: "+e._s(t.fields.title))])])})],2)},staticRenderFns:[]}},494:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(197),s=n(196),o=n(193),a=n.n(o),i=n(108),c=n(194),l=n.n(c),u=n(195),d=n.n(u);n(192),r.a.use(s.a);var f=[{path:"/blogroll",component:l.a},{path:"/test",component:d.a},{path:"*",redirect:"/blogroll"}],p=new s.a({routes:f,mode:"history"});r.a.config.debug=!0;new r.a({router:p,store:i.a,el:"#app",render:function(e){return e(a.a)}})}},[494]);
//# sourceMappingURL=app.b7bb26bc3c914c8f0d36.js.map