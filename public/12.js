webpackJsonp([12],{"70mC":function(e,t,r){var a=r("VU/8")(r("Z++X"),r("n4ZO"),!1,null,null,null);e.exports=a.exports},DR9K:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.aces?r("div",{staticClass:"col-md-4 col-sm-6 float-left product p-4"},[r("div",{staticClass:"portal-card clearfix"},[r("div",{staticClass:"first portion clearfix"},[r("span",{staticClass:"deco"}),r("span",{staticClass:"deco second"}),e._v(" "),r("span",{staticClass:"portal-title"},[e._v(e._s(e._f("capitalize")(e.title)))])]),e._v(" "),r("div",{staticClass:"portion clearfix"},[r("p",[e._v(e._s(e._f("capitalize")(e.desc)))]),e._v(" "),r("h6",{staticStyle:{"margin-top":"2rem"}},[e._v(e._s(e._f("capitalize")(e.url_c)))]),e._v(" "),r("span",{staticClass:"deco-down first"}),e._v(" "),r("span",{staticClass:"deco-down second"},[r("router-link",{staticClass:"btn bg-default btn-round m-0",attrs:{to:e.url}},[e._v("\n                   continue "),r("span",{staticClass:"custom-icon ml-2"},[r("i",{staticClass:"now-ui-icons ui-1_send"})])])],1)])])]):e._e()},staticRenderFns:[]}},"K5f/":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:"",desc:"",url:"",url_c:"",aces:{default:!0}}}},"Z++X":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=r("mdxA"),s=(a=o)&&a.__esModule?a:{default:a};t.default={components:{PortalCard:s.default},data:function(){return{portals:[{url:"customer/create",title:"Customer Registration",url_c:"Register new customer now!",desc:"Registering new customers"},{url:"customer/update",title:"Customer Update",url_c:"Update customers details!",desc:"Updating customers details"},{url:"report",title:"Sales Reporting",url_c:"Get Reports",desc:"Real time DSA reports!",aces:this.$store.getters.auth("DSACaptain")},{url:"/customer",title:"Customer List",url_c:"View Customer List",desc:"View all registered customers!"}]}}}},aG3T:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,".portal-card{-webkit-transition:all .2s;transition:all .2s;-webkit-box-shadow:0 5px 25px 0 rgba(0,0,0,.2);box-shadow:0 5px 25px 0 rgba(0,0,0,.2);border-radius:.7rem;overflow:hidden}.portal-card:hover{-webkit-transform:scale(1.02);transform:scale(1.02)}.portal-card p{font-size:1.5rem;font-weight:300}.portal-card .portion{background-color:#fff;position:relative;padding:3rem}.portal-card .portion.first{border-bottom:1px solid #ebebeb;background:linear-gradient(30deg,#ebebeb,#f5f5f5)}.portal-card .portal-title{color:#074a74;font-size:1.95rem;padding-top:1.5rem;float:left}.portal-card .deco{position:absolute;top:4rem;width:7rem;height:.3rem;left:3rem;border-radius:4rem;background-color:#074a74}.portal-card .deco.second{left:10.5rem;background-color:#fe5a11}.portal-card .deco-down{position:absolute;z-index:10;bottom:-1px;background:linear-gradient(30deg,#ebebeb,#f5f5f5)}.portal-card .deco-down.first{height:.5rem;width:100%;left:0;border-top:1px solid #ebebeb}.portal-card .deco-down.second{width:45%;-webkit-transform:skewX(-35deg);transform:skewX(-35deg);right:-2rem;border-radius:.5rem 0 0 0;border:1px solid #ebebeb;padding:1.2rem 1rem}.portal-card a{-webkit-transform:translateX(20%) skewX(35deg);transform:translateX(20%) skewX(35deg)}@media (max-width:990px){.portal-card .portion{padding:2rem 2.5rem}.portal-card .deco{top:3rem;height:.2rem;left:2.5rem}.portal-card .deco.second{left:10rem}.portal-card .deco-down.second{padding:.8rem .5rem}.portal-card a{padding:8px 16px;-webkit-transform:translateX(14%) skewX(35deg);transform:translateX(14%) skewX(35deg)}}@media (max-width:600px){.portal-card .deco-down.second{padding:.9rem .5rem}.portal-card a{padding:9px 16px;-webkit-transform:translateX(25%) skewX(35deg);transform:translateX(25%) skewX(35deg)}}",""])},e9Xo:function(e,t,r){var a=r("aG3T");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("57d4a352",a,!0,{})},mdxA:function(e,t,r){var a=r("VU/8")(r("K5f/"),r("DR9K"),!1,function(e){r("e9Xo")},null,null);e.exports=a.exports},n4ZO:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"fade"}},[t("div",this._l(this.portals,function(e){return t("div",[t("portal-card",{attrs:{url:e.url,title:e.title,url_c:e.url_c,desc:e.desc,aces:e.aces}})],1)}))])},staticRenderFns:[]}}});