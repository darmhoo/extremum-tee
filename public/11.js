webpackJsonp([11],{"8VgG":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=a("mdxA"),s=(r=o)&&r.__esModule?r:{default:r};e.default={components:{PortalCard:s.default},data:function(){return{portals:[{url:"employee",title:"Staff Management",url_c:"Manage staff Details!",desc:"For Registering new staff"},{url:"attendance",title:"Manage Attendance",url_c:"Manage Attendance!",desc:"Managing staff attendance"},{url:"caution",title:"Manage Caution",url_c:"Manage Caution!",desc:"Managing staff caution"}]}}}},DR9K:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.aces?a("div",{staticClass:"col-md-4 col-sm-6 float-left product p-4"},[a("div",{staticClass:"portal-card clearfix"},[a("div",{staticClass:"first portion clearfix"},[a("span",{staticClass:"deco"}),a("span",{staticClass:"deco second"}),t._v(" "),a("span",{staticClass:"portal-title"},[t._v(t._s(t._f("capitalize")(t.title)))])]),t._v(" "),a("div",{staticClass:"portion clearfix"},[a("p",[t._v(t._s(t._f("capitalize")(t.desc)))]),t._v(" "),a("h6",{staticStyle:{"margin-top":"2rem"}},[t._v(t._s(t._f("capitalize")(t.url_c)))]),t._v(" "),a("span",{staticClass:"deco-down first"}),t._v(" "),a("span",{staticClass:"deco-down second"},[a("router-link",{staticClass:"btn bg-default btn-round m-0",attrs:{to:t.url}},[t._v("\n                   continue "),a("span",{staticClass:"custom-icon ml-2"},[a("i",{staticClass:"now-ui-icons ui-1_send"})])])],1)])])]):t._e()},staticRenderFns:[]}},EHT1:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",this._l(this.portals,function(t){return e("div",[e("portal-card",{attrs:{desc:t.desc,title:t.title,url:t.url,url_c:t.url_c}})],1)}))])},staticRenderFns:[]}},"K5f/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:"",desc:"",url:"",url_c:"",aces:{default:!0}}}},aG3T:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".portal-card{-webkit-transition:all .2s;transition:all .2s;-webkit-box-shadow:0 5px 25px 0 rgba(0,0,0,.2);box-shadow:0 5px 25px 0 rgba(0,0,0,.2);border-radius:.7rem;overflow:hidden}.portal-card:hover{-webkit-transform:scale(1.02);transform:scale(1.02)}.portal-card p{font-size:1.5rem;font-weight:300}.portal-card .portion{background-color:#fff;position:relative;padding:3rem}.portal-card .portion.first{border-bottom:1px solid #ebebeb;background:linear-gradient(30deg,#ebebeb,#f5f5f5)}.portal-card .portal-title{color:#074a74;font-size:1.8rem;padding-top:1.5rem;float:left}.portal-card .deco{position:absolute;top:4rem;width:7rem;height:.3rem;left:3rem;border-radius:4rem;background-color:#074a74}.portal-card .deco.second{left:10.5rem;background-color:#fe5a11}.portal-card .deco-down{position:absolute;z-index:10;bottom:-1px;background:linear-gradient(30deg,#ebebeb,#f5f5f5)}.portal-card .deco-down.first{height:.5rem;width:100%;left:0;border-top:1px solid #ebebeb}.portal-card .deco-down.second{width:45%;-webkit-transform:skewX(-35deg);transform:skewX(-35deg);right:-2rem;border-radius:.5rem 0 0 0;border:1px solid #ebebeb;padding:1.2rem 1rem}.portal-card a{-webkit-transform:translateX(20%) skewX(35deg);transform:translateX(20%) skewX(35deg)}@media (max-width:990px){.portal-card .portion{padding:2rem 2.5rem}.portal-card .deco{top:3rem;height:.2rem;left:2.5rem}.portal-card .deco.second{left:10rem}.portal-card .deco-down.second{padding:.8rem .5rem}.portal-card a{padding:8px 16px;-webkit-transform:translateX(14%) skewX(35deg);transform:translateX(14%) skewX(35deg)}}@media (max-width:600px){.portal-card .deco-down.second{padding:.9rem .5rem}.portal-card a{padding:9px 16px;-webkit-transform:translateX(25%) skewX(35deg);transform:translateX(25%) skewX(35deg)}}",""])},e9Xo:function(t,e,a){var r=a("aG3T");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("57d4a352",r,!0,{})},hNO1:function(t,e,a){var r=a("VU/8")(a("8VgG"),a("EHT1"),!1,null,null,null);t.exports=r.exports},mdxA:function(t,e,a){var r=a("VU/8")(a("K5f/"),a("DR9K"),!1,function(t){a("e9Xo")},null,null);t.exports=r.exports}});