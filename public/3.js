webpackJsonp([3],{"1gIg":function(t,e,s){var a=s("VU/8")(s("wBhk"),s("Nclh"),!1,function(t){s("ssUt")},null,null);t.exports=a.exports},"4I72":function(t,e,s){var a=s("VU/8")(s("WiSW"),s("F2N/"),!1,function(t){s("o+I/")},null,null);t.exports=a.exports},"F2N/":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{class:"full"===t.$route.meta.mode?"px-md-4 px-2":""},["full"===t.$route.meta.mode?s("app-navigation",{attrs:{forward:{path:t.$routerHistory.next().path},pageTitle:"Customer Profile",pageTitleSmall:"Customer Profile",previous:{path:t.$routerHistory.previous().path}}}):t._e(),t._v(" "),t.show?s("div",{staticClass:"pt-md-3 pt-2 verification",attrs:{id:"employeeRegister"}},[s("div",{staticClass:"customer-profile card position-relative"},[s("div",{staticClass:"design"}),t._v(" "),s("div",{staticClass:"col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left"},[s("div",{staticClass:"pt-md-3 pt-sm-2 pt-1"},[s("div",{staticClass:"justify-content-center d-flex position-relative z-1"},[s("span",{staticClass:"img-border"},[t.customer.document.passport_url?s("img",{staticClass:"profile-picture rounded-circle",attrs:{src:t.passport,alt:"customer profile pic"}}):s("i",{staticClass:"no-image fas fa-user-alt"})])]),t._v(" "),s("div",{staticClass:"justify-content-center d-flex position-relative z-1 pt-md-4 pt-sm-4 pt-2"},[s("span",{staticClass:"w-50"},[s("div",{staticClass:"text-right px-4 py-3 text-light text-muted m-0"},[t._v("\n                                    Status"),s("i",{staticClass:"ml-3 fas fa-briefcase"})]),t._v(" "),s("div",{staticClass:"data text-right px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.employment_status)))])]),t._v(" "),s("span",{staticClass:"separator"}),t._v(" "),s("span",{staticClass:"w-50"},[s("div",{staticClass:"px-4 py-3 text-muted text-light m-0"},[s("i",{staticClass:"mr-3 fas fa-transgender"}),t._v("Gender\n                                ")]),t._v(" "),s("div",{staticClass:"data px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.gender)))])])])])]),t._v(" "),s("div",{staticClass:"col-md-8 col-sm-8 col-12 px-0 pb-4 pt-md-5 pt-sm-5 pt-0 float-left"},[s("div",{staticClass:"pt-md-4 pt-0 clearfix"},[s("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 small-center"},[s("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3"},[s("i",{staticClass:"mr-3 far fa-user-circle"}),t._v(" "),s("strong",[t._v(t._s(t._f("capitalize")(t.name)))])])]),t._v(" "),s("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 d-flex justify-content-center"},[s("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-4 text-muted"},[s("strong",[t._v("Customer ID: "+t._s(t.customer.id))])])]),t._v(" "),s("div",{staticClass:"float-left p-0 m-0 col-md-4 col-12 d-flex justify-content-center"},[s("span",{class:"status mt-md-5 my-sm-2 mt-0 "+(t.approved?"approved":"not-approved")},[t._v("\n                                "+t._s(t.approved?"APPROVED":"NOT APPROVED")+"\n                                "),s("i",{class:"ml-3 fas fa-"+(t.approved?"check":"times")})])])]),t._v(" "),s("div",{staticClass:"pt-4"},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",{staticClass:"text-muted"},[s("i",{staticClass:"mr-3 fas fa-mobile-alt"}),t._v("Phone Number")]),t._v(" "),s("td",[t._v(t._s(t.customer.telephone))])]),t._v(" "),t.$store.getters.auth("DVAAccess")?s("tr",[s("th",{staticClass:"text-muted"},[s("i",{staticClass:"mr-3 fas fa-map-marker-alt"}),t._v("Address")]),t._v(" "),s("td",[t._v(t._s(t._f("capitalize")(t.address))+"\n                                ")])]):t._e(),t._v(" "),s("tr",[s("th",{staticClass:"text-muted"},[s("i",{staticClass:"mr-3 fas fa-gift"}),t._v("Registered On")]),t._v(" "),s("td",[t._v(t._s(t.customer.date_of_registration))])]),t._v(" "),s("tr",[s("th",{staticClass:"text-muted"},[s("i",{staticClass:"mr-3 far fa-user-circle"}),t._v("Registered By")]),t._v(" "),s("td",[t._v(t._s(t._f("capitalize")(t.customer.user?t.customer.user.full_name:"user not in record")))])]),t._v(" "),s("tr",[s("th",{staticClass:"text-muted"},[s("i",{staticClass:"mr-3 far fa-building"}),t._v("Branch")]),t._v(" "),s("td",[t._v(t._s(t._f("capitalize")(t.branch)))])])])])])])]),t._v(" "),"full"===t.$route.meta.mode?s("div",{staticClass:"clearfix"},[s("div",[t._v("This is full profile!")])]):t._e()]):t._e()],1)])},staticRenderFns:[]}},Gsqe:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var a,r=s("I3G/"),i=(a=r)&&a.__esModule?a:{default:a};e.EventBus=new i.default},Nclh:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"index"}},[t.$routerHistory.hasPrevious()?s("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:t.previous,id:"back"}},[s("span",{staticClass:"mr-5 float-left"},[s("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),t._v(" "),s("small",{staticClass:"back float-left ml-2 d-none d-sm-block"},[t._v("Back")])])]):t._e(),t._v(" "),s("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[s("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.pageTitle))]),t._v(" "),s("span",{staticClass:"d-block d-sm-none"},[t._v(t._s(t.pageTitleSmall))])]),t._v(" "),t.$routerHistory.hasForward()?s("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:t.forward,id:"forward"}},[s("span",{staticClass:"ml-5 float-right"},[s("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),t._v(" "),s("small",{staticClass:"forward float-right mr-2 d-none d-sm-block"},[t._v("Forward")])])]):t._e()],1)},staticRenderFns:[]}},V6Wk:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"#index a#back{left:0}#index a#forward{right:0}#index a#back,#index a#forward{margin-top:.8rem;position:absolute}#index a#back i,#index a#forward i{font-size:1.76rem}#index .back,#index .forward{line-height:2.4rem;margin-top:-.2rem;font-weight:700}@media (max-width:990px){#index a#back i,#index a#forward i{font-size:1.92rem}}@media (max-width:600px){#index [data-title=title],#index a#back,#index a#forward{margin-top:-.3rem;margin-bottom:.3rem}}",""])},WiSW:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=d(s("I3G/")),r=s("uD8u"),i=s("N71M"),o=s("Gsqe"),l=d(s("4I72")),n=d(s("1gIg")),c=s("vtN9");function d(t){return t&&t.__esModule?t:{default:t}}var m=function(){return i.store.getters.auth("DVAAccess")};e.default={props:["viewCustomer"],components:{CustomerProfile:l.default,AppNavigation:n.default},data:function(){return{customer:"",show:!1}},computed:{passport:function(){return"https://s3.eu-west-2.amazonaws.com/altara-one/"+this.customer.document.passport_url},name:function(){return(0,c.getCustomerFullName)(this.customer)},branch:function(){return this.customer.branch.description+" "+this.customer.branch.name},address:function(){return(0,c.getCustomerAddress)(this.customer)},approved:function(){return(0,c.getCustomerApprovalStatus)(this.customer.verification)}},created:function(){var t=this;$(".tooltip").remove(),this.viewCustomer&&this.setCustomer(this.viewCustomer),o.EventBus.$on("customer",function(e){t.setCustomer(e)})},beforeRouteEnter:function(t,e,s){m()?(0,r.get)("/api/customer/"+t.params.id).then(function(t){s(function(e){return e.setCustomer(t.data.customer)})}):s("/")},beforeRouteUpdate:function(t,e,s){var a=this;m()?(0,r.get)("/api/customer/"+t.params.id).then(function(t){a.setCustomer(t.data.customer),s()}):s("/")},methods:{setCustomer:function(t){a.default.set(this.$data,"customer",t),this.show=!0}}}},XMXm:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".customer-profile{position:relative}.customer-profile th{width:auto;font-weight:400}.customer-profile .data,.customer-profile td{font-size:1.3rem;font-weight:500}.customer-profile .design{position:absolute;top:13rem;bottom:0;left:0;width:101%;height:calc(100% - 8.1rem);z-index:0;background:linear-gradient(45deg,#dedede,#fff)}.customer-profile .no-image,.customer-profile .profile-picture{height:16rem;width:16rem;-webkit-box-shadow:0 7px 15px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.2);box-shadow:0 7px 15px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.2)}.customer-profile .no-image{background-color:#e3e3e3;border-radius:50%;line-height:16rem;text-align:center;font-size:8rem;color:rgba(0,0,0,.15)}.customer-profile .img-border{padding:1.1rem;background-color:#fff;border-radius:50%}.customer-profile .separator{position:absolute;left:50%;height:70%;width:1px;background-color:rgba(0,0,0,.1);top:3%}@media (max-width:600px){.customer-profile .design{background:-webkit-gradient(linear,left top,left bottom,from(#dedede),to(#fff));background:linear-gradient(180deg,#dedede,#fff)}.customer-profile .separator{top:-11%}.customer-profile .small-center{text-align:center}.customer-profile th{width:35%}.customer-profile tbody{padding:1rem 1rem 0;float:left}}",""])},"o+I/":function(t,e,s){var a=s("XMXm");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("67cc5fd8",a,!0,{})},ssUt:function(t,e,s){var a=s("V6Wk");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("05b5dcca",a,!0,{})},vtN9:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getCustomerApprovalStatus=function(t){return!!t&&(t.address&&t.id_card&&t.passport&&t.processing_fee&&t.work_guarantor&&t.personal_guarantor)},e.getCustomerFullName=function(t){return t.first_name+" "+t.last_name},e.getCustomerAddress=function(t){return t.add_houseno+" "+t.add_street+" "+t.area_address+", "+t.city+", "+t.state+"."}},wBhk:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["pageTitle","pageTitleSmall","previous","forward"]}}});