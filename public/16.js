webpackJsonp([16],{"+O4B":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-5 attendance-head"},[r("div",{staticClass:"mb-5 row align-items-center"},[r("div",{staticClass:"col-12 title-con"},[r("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")(t.title)))]),t._v(" "),t.to?r("div",{staticClass:"row justify-content-end"},[r("router-link",{staticClass:"text-link mt-3",attrs:{to:t.to}},[t._v(t._s(t.buttonTitle))])],1):t._e()])])])},staticRenderFns:[]}},EJ7O:function(t,e,r){var a=r("VU/8")(r("oKx2"),r("+O4B"),!1,null,null,null);t.exports=a.exports},TuDH:function(t,e,r){var a=r("VU/8")(r("YWwI"),r("xNIZ"),!1,null,null,null);t.exports=a.exports},YWwI:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l(r("I3G/")),o=r("ic49"),n=l(r("K23+")),s=r("p/p5"),i=l(r("EJ7O"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={components:{CustomHeader:i.default},data:function(){return{form:{},mode:null,error:{},show:!1,store:"/api/category",method:"POST"}},beforeRouteEnter:function(t,e,r){(0,s.get)(function(t){return{create:"/api/category/create",edit:"/api/category/"+t.params.id+"/edit"}[t.meta.mode]}(t)).then(function(t){var e=t.data;return r(function(t){return t.prepareForm(e)})}).catch(function(){return r(function(){return n.default.setError("Error Preparing form")})})},methods:{prepareForm:function(t){var e=t.form;a.default.set(this.$data,"mode",this.$route.meta.mode),a.default.set(this.$data,"form",e),"edit"===this.mode&&(this.store="/api/category/"+this.$route.params.id,this.method="PUT"),this.show=!0},onSave:function(){var t=this;this.$validator.validateAll().then(function(e){e?t.$network()?(t.$LIPS(!0),(0,s.byMethod)(t.method,t.store,t.form).then(function(e){var r=e.data;(r.saved||r.updated)&&((0,o.log)(r.log,r.staff_id),a.default.set(t.$data,"form",r.form),n.default.setSuccess(r.message,5e3),r.updated&&t.$router.push("/log/categories")),t.error={}}).catch(function(e){var r=e.response,a=r.data;422===r.status&&(t.error=a.errors?a.errors:a,t.$networkErr("unique"))}).finally(function(){t.$scrollToTop(),t.$LIPS(!1)})):t.$networkErr():t.$networkErr("form")})}}}},ic49:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t,e){t=t.replace(/([A-Z])/g," $1").replace(/^./,function(t){return t.toUpperCase()}),(0,a.post)("/api/log",{action:t,description:e})};var a=r("p/p5")},oKx2:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:"",buttonTitle:null,to:null}}},xNIZ:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2 attendance-view",attrs:{id:"index"}},[r("custom-header",{attrs:{to:"/log/categories",title:t.mode+" Category","button-title":"view categories!"}}),t._v(" "),r("div",{staticClass:"attendance-body"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.onSave(e)}}},[r("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm card-radius"},[r("div",{staticClass:"form-group col-12 float-left px-0 px-md-3"},[r("label",[t._v("Category name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control mb-2",attrs:{placeholder:"category name",name:"category name",type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.errors.first("category name")?r("small",[t._v(t._s(t.errors.first("category name")))]):t._e(),t._v(" "),t.error.name?r("small",[t._v(t._s(t.error.name[0]))]):t._e()])]),t._v(" "),r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},["edit"===t.mode?r("router-link",{staticClass:"mx-5 text-link mt-4 pt-2",attrs:{to:"/log/categories"}},[t._v("\n                            Cancel\n                        ")]):t._e(),t._v(" "),r("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing,type:"submit"}},[t._v("\n                            "+t._s(t._f("capitalize")(t.mode))+" Category "),r("i",{staticClass:"far fa-paper-plane ml-1"})])],1)])])])],1)])},staticRenderFns:[]}}});