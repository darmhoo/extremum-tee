webpackJsonp([23],{"+O4B":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-5 attendance-head"},[r("div",{staticClass:"mb-5 row align-items-center"},[r("div",{staticClass:"col-12 title-con"},[r("span",{staticClass:"title"},[e._v(e._s(e._f("capitalize")(e.title)))]),e._v(" "),e.to?r("div",{staticClass:"row justify-content-end"},[r("router-link",{staticClass:"text-link mt-3",attrs:{to:e.to}},[e._v(e._s(e.buttonTitle))])],1):e._e()])])])},staticRenderFns:[]}},EJ7O:function(e,t,r){var a=r("VU/8")(r("oKx2"),r("+O4B"),!1,null,null,null);e.exports=a.exports},UorG:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(r("K23+")),o=r("p/p5"),s=i(r("EJ7O"));function i(e){return e&&e.__esModule?e:{default:e}}t.default={components:{CustomHeader:s.default},beforeCreate:function(){var e=this;!this.$store.getters.auth("DSACaptain")&&this.$networkErr("page"),(0,o.get)("/api/user/"+this.$store.state.user_id).then(function(t){var r=t.data;e.report.branch=r.user.branch,e.pageBranch.push(r.user.branch)}),(0,o.get)("/api/user/getBranchUsers").then(function(t){var r=t.data;return e.users=r.DSAs}),this.$prepareBranches()},created:function(){this.setDates(),this.initForm()},data:function(){return{types:[{name:"sales report",slug:"sales_report"},{name:"score card",slug:"score_card"},{name:"weekly operations",slug:"weekly_operations"}],report:{to:"",from:"",branch:{id:"",name:""},employee:"",type:""},users:null,dailyReport:null,pageBranch:[]}},methods:{initForm:function(){this.dailyReport={user_id:"",date:this.$getDate(),number_on_portal:"",number_to_captain:"",remark:""}},generateReport:function(){var e=this;this.$validator.validateAll("f1").then(function(t){if(t)if(e.$network()){var r=e.$store.state.branches.find(function(t){return t.id===e.report.branch.id});e.report.branch=r,(0,o.postD)("/api/report",e.report).then(function(t){var a=t.data,o=window.URL.createObjectURL(new Blob([a])),s=document.createElement("a");s.href=o,s.setAttribute("download",e.report.type+"_for_"+r.name+".xlsx"),document.body.appendChild(s),s.click()})}else e.$networkErr();else e.$networkErr("form")})},setDates:function(){var e=function(e){return e<10?"0"+e:e},t=function(t){return t.getFullYear()+"-"+e(t.getMonth()+1)+"-"+e(t.getDate())},r=new Date,a=r.getDay(),o=r.getDate()-a+(0===a?-6:1),s=new Date(r.setDate(o)),i=new Date;i.setDate(s.getDate()+5),this.report.from=s=t(s),this.report.to=i=t(i)},submitReport:function(){var e=this;this.$validator.validateAll("f2").then(function(t){t?e.$network()?(e.$LIPS(!0),(0,o.post)("/api/dsa_daily_registration",e.dailyReport).then(function(t){var r=t.data;e.$validator.reset(),e.initForm(),e.$scrollToTop(),e.$LIPS(!1),r.submitted&&a.default.setSuccess(r.message)}).catch(function(){return a.default.setError("Error logging report please try again later!")})):e.$networkErr():e.$networkErr("form")})}}}},khuM:function(e,t,r){var a=r("VU/8")(r("UorG"),r("rgtB"),!1,null,null,null);e.exports=a.exports},oKx2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:"",buttonTitle:null,to:null}}},rgtB:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2 attendance-view",attrs:{id:"index"}},[r("custom-header",{attrs:{title:"Generate Report"}}),e._v(" "),r("div",{staticClass:"attendance-body"},[r("form",{attrs:{"data-vv-scope":"f1"},on:{submit:function(t){return t.preventDefault(),e.generateReport(t)}}},[r("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm card-radius"},[r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Type")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.report.type,expression:"report.type"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"report type","data-vv-validate-on":"blur",name:"report_type"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report,"type",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select type")]),e._v(" "),e._l(e.types,function(t){var a=t.slug,o=t.name;return r("option",{domProps:{value:a}},[e._v(e._s(e._f("capitalize")(o)))])})],2),e._v(" "),e.errors.first("f1.report_type")?r("small",[e._v(e._s(e.errors.first("f1.report_type")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Branch")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.report.branch.id,expression:"report.branch.id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{disabled:!e.$store.getters.auth("DSALead"),"data-vv-as":"office branch","data-vv-validate-on":"blur",name:"branch_id"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report.branch,"id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select branch")]),e._v(" "),e._l(e.$store.getters.auth("DSALead")?e.$store.state.branches:e.pageBranch,function(t){return r("option",{domProps:{value:t.id}},[e._v("\n                                "+e._s(t.name)+"\n                            ")])})],2),e._v(" "),e.errors.first("f1.branch_id")?r("small",[e._v(e._s(e.errors.first("f1.branch_id")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date from:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.from,expression:"report.from"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{"data-vv-as":"Date from",name:"date_from",type:"date"},domProps:{value:e.report.from},on:{input:function(t){t.target.composing||e.$set(e.report,"from",t.target.value)}}}),e._v(" "),e.errors.first("f1.date_from")?r("small",[e._v(e._s(e.errors.first("f1.date_from")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date To:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.to,expression:"report.to"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{"data-vv-as":"Date to",name:"date_to",type:"date"},domProps:{value:e.report.to},on:{input:function(t){t.target.composing||e.$set(e.report,"to",t.target.value)}}}),e._v(" "),e.errors.first("f1.date_to")?r("small",[e._v(e._s(e.errors.first("f1.date_to")))]):e._e()])]),e._v(" "),r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[r("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                            Generate Report "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])])]),e._v(" "),r("custom-header",{attrs:{title:"Send Daily Report"}}),e._v(" "),r("div",{staticClass:"attendance-body"},[r("form",{attrs:{"data-vv-scope":"f2",id:"dsaDailyReportForm"},on:{submit:function(t){return t.preventDefault(),e.submitReport(t)}}},[r("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm card-radius"},[r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("DSA (Name-ID)")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.user_id,expression:"dailyReport.user_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"dsa"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.dailyReport,"user_id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select DSA")]),e._v(" "),e._l(e.users,function(t){return r("option",{domProps:{value:t.id}},[e._v(e._s(t.full_name+" - ("+t.staff_id+")"))])})],2),e._v(" "),e.errors.first("f2.dsa")?r("small",[e._v(e._s(e.errors.first("f2.dsa")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.date,expression:"dailyReport.date"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{name:"date",type:"date"},domProps:{value:e.dailyReport.date},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"date",t.target.value)}}}),e._v(" "),e.errors.first("f2.date")?r("small",[e._v(e._s(e.errors.first("f2.date")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Forms registered on portal")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.number_on_portal,expression:"dailyReport.number_on_portal"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number on portal",name:"number_on_portal",type:"number"},domProps:{value:e.dailyReport.number_on_portal},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"number_on_portal",t.target.value)}}}),e._v(" "),e.errors.first("f2.number_on_portal")?r("small",[e._v(e._s(e.errors.first("f2.number_on_portal")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Forms submitted to captain")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.number_to_captain,expression:"dailyReport.number_to_captain"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number to captain",name:"number_to_captain",type:"number"},domProps:{value:e.dailyReport.number_to_captain},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"number_to_captain",t.target.value)}}}),e._v(" "),e.errors.first("f2.number_to_captain")?r("small",[e._v(e._s(e.errors.first("f2.number_to_captain")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",{staticClass:"w-100 float-left"},[e._v("Remark/Comment")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.remark,expression:"dailyReport.remark"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control",attrs:{cols:"1",name:"remark"},domProps:{value:e.dailyReport.remark},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"remark",t.target.value)}}}),e._v(" "),e.errors.first("f2.remark")?r("small",[e._v(e._s(e.errors.first("f2.remark")))]):e._e()])]),e._v(" "),r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[r("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                            Log Report "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])],1)])},staticRenderFns:[]}}});