webpackJsonp([5],{A7oB:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(r("Xxa5")),o=i(r("Bph5")),a=r("uD8u"),s=i(r("TOoT"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{contacts:"",message:"",form:{}}},methods:{sendMessage:function(){var t,e,r=this;this.$validator.validateAll().then((t=n.default.mark(function t(e){var a;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e?r.$network()?(r.$LIPS(!0),a=r.contacts.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),o.default.dvaMessage({message:r.message,phone:a},function(t){return 200===t.status&&r.done(a)})):r.$networkErr():r.$networkErr("form");case 1:case"end":return t.stop()}},t,r)}),e=function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(o,a){try{var s=e[o](a),i=s.value}catch(t){return void r(t)}if(!s.done)return Promise.resolve(i).then(function(t){n("next",t)},function(t){n("throw",t)});t(i)}("next")})},function(t){return e.apply(this,arguments)}))},done:function(t){var e=this;this.$scrollToTop(),this.$LIPS(!1),s.default.setSuccess("Messages sent!"),this.form={contacts:t,contact_count:t.split(",").length,message:this.message,pages:Math.ceil(this.message.length/160)},(0,a.post)("/api/message",this.form).then(function(){return e.resetData()})},resetData:function(){for(var t in this.contacts=null,this.message=null,this.form)this.form[t]=null}},created:function(){this.resetData()}}},Bph5:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r("uD8u");e.Message=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=e,this.message=r,this.contacts=n,this.setPages(),this.setContactCount()}return n(t,[{key:"setContactCount",value:function(){this.contacts.constructor===String&&(this.contact_count=this.contacts.split(",").length),this.contacts.constructor===Array&&(this.contact_count=this.contacts.length)}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}}]),t}();e.default={message:"",welcome:function(t){this.message="Welcome to Altara credit. Please secure your login details. Staff ID: "+t.loginID+", password: "+t.loginPassword,this.send(t)},customerReg:function(t){this.message="Dear "+t.first_name+" "+t.last_name+", Welcome to Altara Credit Limited, You are hereby invited to our showroom at "+t.branch.description+" to learn more about our offerings. Pick up products now and pay later. We look forward to seeing you. For more info contact: "+t.branch.phone_yoruba+". Your customer id is: "+t.id,this.send({phone:t.telephone.substr(1)})},passwordReset:function(t){this.message="Password reset successful! if your did not request for a new password kindly report back immediately, your staff ID is "+t.staff_id+", new password: "+t.password,this.send(t)},transfer:function(t){this.message="Transfer Successful, your new staff ID is "+t.loginID+" ",this.send(t)},dvaMessage:function(t,e){this.message=t.message,this.sendWithCallback(t,e)},sendFirstReminder:function(t,e){return this.message=t.message,this.sendWithCallback(t,e)},sendWithCallback:function(t,e){var r=t.phone;(0,o.get)("/api/message/create?to="+r+"&message="+this.message).then(function(t){return 200===t.status&&console.log("sms sent successfully"),!!e&&e(t)}).catch(function(t){return!!e&&e(t)})},send:function(t){(0,o.get)("/api/message/create?to=234"+t.phone+"&message="+this.message).then(function(t){200===t.status&&console.log("sms sent successfully")})}}},GDwG:function(t,e,r){var n=r("hprc");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("a7394982",n,!0,{})},SldL:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=b;var f="suspendedStart",h="suspendedYield",d="executing",m="completed",p={},g={};g[s]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(R([])));y&&y!==n&&o.call(y,s)&&(g=y);var w=E.prototype=_.prototype=Object.create(g);L.prototype=w.constructor=E,E.constructor=L,E[c]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},P(k.prototype),k.prototype[i]=function(){return this},l.AsyncIterator=k,l.async=function(t,e,r,n){var o=new k(b(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},P(w),w[c]="Generator",w[s]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=R,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return i.type="throw",i.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],i=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var c=o.call(s,"catchLoc"),u=o.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:R(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),p}}}function b(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,a=Object.create(o.prototype),s=new S(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return D()}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var i=C(s,r);if(i){if(i===p)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=x(t,e,r);if("normal"===c.type){if(n=r.done?m:h,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=m,r.method="throw",r.arg=c.arg)}}}(t,r,s),a}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function _(){}function L(){}function E(){}function P(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(r,n){function a(){return new Promise(function(e,a){!function e(r,n,a,s){var i=x(t[r],t,n);if("throw"!==i.type){var c=i.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,a,s)},function(t){e("throw",t,a,s)}):Promise.resolve(u).then(function(t){c.value=t,a(c)},s)}s(i.arg)}(r,n,e,a)})}return e=e?e.then(a,a):a()}}function C(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function R(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:D}}function D(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,r){t.exports=r("jyFz")},bZ5I:function(t,e,r){var n=r("VU/8")(r("A7oB"),r("igh1"),!1,function(t){r("GDwG")},"data-v-ff6574ee",null);t.exports=n.exports},hprc:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"#messaging textarea[data-v-ff6574ee]{font:500 1.5rem Raleway,sans-serif!important}",""])},igh1:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeRegister"}},[r("div",{staticClass:"card"},[r("ul",{staticClass:"nav nav-tabs bg-default justify-content-center"},[r("h6",[t._v("Messaging")])]),t._v(" "),r("div",{staticClass:"card-body p-4 "},[r("form",{staticClass:"clearfix",attrs:{id:"messaging"},on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[r("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[r("label",[t._v("Phone Numbers")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contacts,expression:"contacts"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control col-sm-12",attrs:{name:"contacts",placeholder:"Kindly add the number and seperate each with a semi-colon ';'",rows:"3"},domProps:{value:t.contacts},on:{input:function(e){e.target.composing||(t.contacts=e.target.value)}}}),t._v(" "),t.errors.first("contacts")?r("small",[t._v(t._s(t.errors.first("contacts")))]):t._e()]),t._v(" "),r("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[r("label",[t._v("Message Body")]),t._v(" "),r("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control col-sm-12",attrs:{name:"message",placeholder:"the content of the message goes here",rows:"3"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),t.errors.first("message")?r("small",[t._v(t._s(t.errors.first("message")))]):t._e()]),t._v(" "),r("hr",{staticClass:"style-two"}),t._v(" "),r("div",{staticClass:"col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right"},[r("button",{staticClass:"btn btn-block btn-lg bg-default",attrs:{disabled:t.$isProcessing,type:"submit"}},[t._v("\n                            Send messages "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])},staticRenderFns:[]}},jyFz:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("SldL"),o)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}});