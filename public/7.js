webpackJsonp([7],{"2Q7A":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e,t){e=e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),(0,r.post)("/api/log",{action:e,description:t})};var r=a("uD8u")},"8I1l":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".typeahead{border-radius:3px;border:1px solid #e3e3e3;position:relative;z-index:1}.typeahead__open{border:1px solid #0b78bc}.typeahead__open .typeahead__text{opacity:.4}.typeahead__toggle{position:relative;z-index:1;line-height:1rem}.typeahead__search{position:absolute;top:0;left:0;padding:10px;width:100%;display:block;cursor:text;background:transparent;border:none;outline:none;z-index:4}.typeahead__text{min-height:30px;line-height:1em;padding:10px;display:inline-block;position:relative;z-index:3}.typeahead__list{margin:0;padding:0;max-height:240px;overflow-y:scroll;position:absolute;background-color:#fff;width:calc(100% + 2px);border:1px solid #0b78bc;border-top:0;left:-1px;right:0;border-radius:0 0 4px 4px}.typeahead__item{display:block;border-top:1px solid #f4f4f4}.typeahead__link{display:block;padding:10px;line-height:1em;cursor:pointer}.typeahead__active{background:#0b78bc;color:#fff!important}",""])},GqYo:function(e,t,a){var r=a("VU/8")(a("MmHb"),a("qn6o"),!1,function(e){a("neUG")},null,null);e.exports=r.exports},MmHb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{options:{type:Array,default:function(){return[]}},caption:{type:[String,Number],default:null},value:{type:[String,Number],default:null}},data:function(){return{open:!1,selectIndex:0,displayText:"",search:""}},computed:{typeaheadState:function(){return this.open?"typeahead typeahead__open":"typeahead"},filteredOptions:function(){var e=this,t=new RegExp(this.search,"i");return this.options.filter(function(a){return t.test(a.id)||t.test(a[e.caption])})}},watch:{value:function(e,t){e&&this.select(this.options.find(function(t){return t.id===e}))}},methods:{onDownKey:function(){this.filteredOptions.length-1>this.selectIndex&&this.selectIndex++},onUpKey:function(){this.selectIndex>0&&this.selectIndex--},onEnterKey:function(){var e=this.filteredOptions[this.selectIndex];e&&this.select(e)},select:function(e){this.displayText=e[this.caption],this.$emit("input",e.id),this.$refs.search.blur()},toggle:function(e){e.target!==this.$refs.toggle&&e.target!==this.$refs.search&&e.target!==this.$refs[this.caption]||(this.open?e.target!==this.$refs.search&&e.target!==this.$refs[this.caption]&&this.$refs.search.blur():this.$refs.search.focus())},onFocus:function(){this.open=!0},onBlur:function(){this.search="",this.open=!1},onEscape:function(){this.$refs.search.blur()}}}},U5lv:function(e,t,a){var r=a("VU/8")(a("rMhB"),a("mHK1"),!1,null,null,null);e.exports=r.exports},mHK1:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"pt-md-3 pt-2 attendance attendance-view",attrs:{id:"index"}},[a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row align-items-center"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[e._v(e._s(e._f("capitalize")(e.mode))+" Product")]),e._v(" "),a("div",{staticClass:"row justify-content-end"},[a("router-link",{staticClass:"text-link mt-3",attrs:{to:"/log/products"}},[e._v("view all Products!")])],1)])])]),e._v(" "),a("div",{staticClass:"attendance-body"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.onSave(t)}}},[a("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm",staticStyle:{"border-radius":".4rem"}},[a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Product name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{disabled:"",placeholder:"product name",type:"text"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e._v(" "),e.error.name?a("small",[e._v(e._s(e.error.name[0]))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Product feature")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.feature,expression:"form.feature"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{name:"feature",placeholder:"product feature",type:"text"},domProps:{value:e.form.feature},on:{input:function(t){t.target.composing||e.$set(e.form,"feature",t.target.value)}}}),e._v(" "),e.errors.first("feature")?a("small",[e._v(e._s(e.errors.first("feature")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Brand ID")]),e._v(" "),a("typeahead",{attrs:{options:e.brands,caption:"name"},model:{value:e.form.brand_id,callback:function(t){e.$set(e.form,"brand_id",t)},expression:"form.brand_id"}})],1),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Category ID")]),e._v(" "),a("typeahead",{attrs:{options:e.categories,caption:"name"},model:{value:e.form.category_id,callback:function(t){e.$set(e.form,"category_id",t)},expression:"form.category_id"}})],1),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Retail Price")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.retail_price,expression:"form.retail_price"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{name:"price",placeholder:"retail price",type:"number"},domProps:{value:e.form.retail_price},on:{input:function(t){t.target.composing||e.$set(e.form,"retail_price",t.target.value)}}}),e._v(" "),e.errors.first("price")?a("small",[e._v(e._s(e.errors.first("price")))]):e._e()])]),e._v(" "),a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},["edit"===e.mode?a("button",{staticClass:"mx-3 btn btn-secondary",attrs:{type:"button"},on:{click:e.onCancel}},[e._v("Cancel")]):e._e(),e._v(" "),a("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                            "+e._s(e._f("capitalize")(e.mode))+" Product "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])},staticRenderFns:[]}},neUG:function(e,t,a){var r=a("8I1l");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("3441da72",r,!0,{})},qn6o:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"position-relative",class:e.typeaheadState},[a("div",{ref:"toggle",staticClass:"typeahead__toggle",on:{mousedown:function(t){return t.preventDefault(),e.toggle(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],ref:"search",staticClass:"typeahead__search",attrs:{type:"text"},domProps:{value:e.search},on:{blur:e.onBlur,focus:e.onFocus,keydown:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?e.onDownKey(t):null},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onEnterKey(t):null},function(t){return"button"in t||!e._k(t.keyCode,"esc",27,t.key,"Escape")?e.onEscape(t):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?e.onUpKey(t):null}],input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),a("span",{ref:"text",staticClass:"typeahead__text"},[e._v("\n        "+e._s(e.displayText)+"\n     ")])]),e._v(" "),e.open?a("ul",{staticClass:"typeahead__list"},e._l(e.filteredOptions,function(t,r){return a("li",{key:r,staticClass:"typeahead__item"},[a("a",{staticClass:"typeahead__link",class:[e.selectIndex===r?"typeahead__active":""],on:{mousedown:function(a){a.preventDefault(),e.select(t)}}},[e._v("\n                "+e._s(t[e.caption])+"\n            ")])])})):e._e()])},staticRenderFns:[]}},rMhB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a("I3G/")),o=l(a("TOoT")),n=a("uD8u"),i=l(a("GqYo")),s=a("2Q7A");function l(e){return e&&e.__esModule?e:{default:e}}function d(e){return{create:"/api/product/create",edit:"/api/product/"+e.params.id+"/edit"}[e.meta.mode]}t.default={components:{Typeahead:i.default},props:{},data:function(){return{form:{},categories:[],brands:[],mode:null,error:{},show:!1,store:"/api/product",method:"POST"}},beforeRouteEnter:function(e,t,a){(0,n.get)(d(e)).then(function(e){var t=e.data;return a(function(e){return e.prepareForm(t)})}).catch(function(e){var t=e.response;return a(function(e){return e.handleErr(t)})})},beforeRouteUpdate:function(e,t,a){var r=this;this.show=!1,(0,n.get)(d(e)).then(function(e){var t=e.data;return r.prepareForm(t)}).catch(function(e){var t=e.response;return vm.handleErr(t)}).finally(function(){return a()})},methods:{handleErr:function(e){o.default.setError("Error Preparing form")},onCancel:function(){},prepareForm:function(e){this.show=!1,this.error={},r.default.set(this.$data,"mode",this.$route.meta.mode),r.default.set(this.$data,"form",e.form),r.default.set(this.$data,"brands",e.brands),r.default.set(this.$data,"categories",e.categories),"edit"===this.mode&&(this.store="/api/product/"+this.$route.params.id,this.method="PUT"),this.show=!0},onSave:function(){var e=this;this.$validator.validateAll().then(function(t){t?e.$network()?(e.$LIPS(!0),console.log(e.method,e.store,e.form),(0,n.byMethod)(e.method,e.store,e.form).then(function(t){var a=t.data;(a.saved||a.updated)&&((0,s.log)(a.log,a.staff_id),r.default.set(e.$data,"form",a.form),o.default.setSuccess(a.message,5e3),a.updated&&e.$router.push("/log/products"))}).catch(function(t){var a=t.response;422===a.status&&(e.error=a.data.errors?a.data.errors:a.data,e.$networkErr("unique"))}).finally(function(){e.$scrollToTop(),e.$LIPS(!1)})):e.$networkErr():e.$networkErr("form")})}},watch:{form:{handler:function(e){var t=this.brands.find(function(t){return t.id===e.brand_id}),a=this.categories.find(function(t){return t.id===e.category_id});r.default.set(this.$data.form,"name",e.feature+" "+(t?t.name:"")+" "+(a?a.name:""))},deep:!0}}}}});