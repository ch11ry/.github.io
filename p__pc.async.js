(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"+IzV":function(e,t,a){"use strict";a.r(t);a("nloc");var r=a("VwF5"),n=(a("m5xJ"),a("lvwp")),o=a("cO38"),i=a.n(o),c=(a("kTru"),a("QOcf")),l=a("xwgP"),s=a.n(l),u=a("SaUt"),p=a.n(u),f=(a("EVom"),a("lNED")),m=(a("APZ6"),a("yypJ")),h=(a("F+ZM"),a("6hwb")),d=(a("tSZ3"),a("7OZr")),v=a("H8ty"),y=a("+qOz"),g=d["a"].Dragger,E={labelCol:{span:8},wrapperCol:{span:8}},w={wrapperCol:{offset:11,span:16}};function x(e){var t=Object(y["d"])(),a=Object(y["e"])(e=>e),r=a.basicInfoPc,n=r.formValues,o=e=>{var a=new FileReader;return a.readAsDataURL(e),a.onload=function(e){t({type:"basicInfoPc/saveState",payload:{image:e.target.result}})},!1},i=a=>{var r={realName:a.realName,nickName:a.nickName};window.localStorage.setItem("avatar-user-info",JSON.stringify(r)),t({type:"basicInfoPc/saveState",payload:{formValues:a}});var n=e.nextStep;n()};return s.a.createElement(l["Fragment"],null,s.a.createElement(h["a"],Object.assign({},E,{name:"basic",onFinish:i,initialValues:n}),s.a.createElement(h["a"].Item,{label:"\u59d3\u540d",name:"realName",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u59d3\u540d"},{min:2,max:4,message:"\u59d3\u540d\u957f\u5ea6\u4e3a 2 ~ 4"}]},s.a.createElement(m["a"],{placeholder:"\u59d3\u540d\u548c\u82b1\u540d\u4e0d\u8981\u586b\u53cd\u54e6"})),s.a.createElement(h["a"].Item,{label:"\u82b1\u540d",name:"nickName",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u82b1\u540d"},{min:2,max:4,message:"\u82b1\u540d\u957f\u5ea6\u4e3a 2 ~ 4"}]},s.a.createElement(m["a"],{placeholder:"\u59d3\u540d\u548c\u82b1\u540d\u4e0d\u8981\u586b\u53cd\u54e6"})),s.a.createElement(h["a"].Item,{label:"\u4e2a\u4eba\u7167\u7247",name:"userPicture",rules:[{required:!0,message:"\u8bf7\u4e0a\u4f20\u7167\u7247"}]},s.a.createElement(g,{accept:"image/*",beforeUpload:o},s.a.createElement("p",{className:"ant-upload-drag-icon"},s.a.createElement(v["a"],null)),s.a.createElement("p",{className:"ant-upload-text"},"\u8bf7\u4e0a\u4f20\u672c\u4eba\u7167\u7247"),s.a.createElement("p",{className:"ant-upload-hint"},"\u628a\u6587\u4ef6\u62d6\u5165\u6307\u5b9a\u533a\u57df\uff0c\u5b8c\u6210\u4e0a\u4f20\uff0c\u540c\u6837\u652f\u6301\u70b9\u51fb\u4e0a\u4f20\u3002"))),s.a.createElement(h["a"].Item,Object.assign({},w),s.a.createElement(f["a"],{type:"primary",htmlType:"submit"},"\u4e0b\u4e00\u6b65"))))}a("viqK");var b=a("ENW9"),S=(a("VWP3"),a("/GH5")),_=(a("VnVD"),a("Couc")),O=a("UWy3"),N=a.n(O),L=a("JzHH"),j=a("8FC3"),C=a.n(j),k=(a("qQgY"),a("hF5o")),P=a("luOz"),T=a.n(P),F=a("uSRu"),I=a.n(F);function D(e){var t=e.visible,a=e.hideExampleDialog;return s.a.createElement(k["a"],{maskClosable:!1,keyboard:!1,width:1024,title:"\u793a\u4f8b",visible:t,footer:null,onCancel:a},s.a.createElement("p",{className:I.a["strong"]},"1. \u8bf7\u786e\u4fdd\u8c03\u6574\u540e\u7684\u56fe\u7247\u6491\u6ee1\u753b\u5e03\uff0c\u56db\u5468\u4e0d\u8981\u6709\u767d\u8fb9\uff08\u80cc\u666f\u539f\u672c\u5c31\u662f\u767d\u8272\u7684\u9664\u5916\uff09\u3002"),s.a.createElement("p",null,"2. \u80cc\u666f\u6700\u597d\u4e3a\u7eaf\u767d\u8272\u3002\u4eba\u8eab\u6bd4\u4f8b\u8303\u56f4\u4e3a\u5934\u9876\u81f3\u819d\u76d6\u4e0a\u65b9\uff0c\u987b\u9ad8\u6e05\u6b63\u9762\u7167\uff0c\u5934\u9876\u7559\u767d\uff1a5mm\u3002"),s.a.createElement("p",null,"3. \u7167\u7247\u4e3b\u4f53\u53ea\u80fd\u6709\u4e00\u540d\u6210\u5e74\u4eba\uff0c\u82e5\u5408\u5f71\u4ec5\u9650\u5c0f\u670b\u53cb\u6216\u5ba0\u7269\uff0c\u4e0d\u8981\u8d85\u8fc7\u4e24\u540d\u6210\u5e74\u4eba\u3002"),s.a.createElement("img",{src:T.a}))}var G=a("hSsY"),z=a.n(G),H=a("dyI1"),V=a.n(H);function q(){q=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,a){return e[t]=a}}function l(e,t,a,r){var n=t&&t.prototype instanceof p?t:p,o=Object.create(n.prototype),i=new S(r||[]);return o._invoke=function(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return O()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var c=w(i,a);if(c){if(c===u)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var l=s(e,t,a);if("normal"===l.type){if(r=a.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r="completed",a.method="throw",a.arg=l.arg)}}}(e,a,i),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var u={};function p(){}function f(){}function m(){}var h={};c(h,n,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(_([])));v&&v!==t&&a.call(v,n)&&(h=v);var y=m.prototype=p.prototype=Object.create(h);function g(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){function r(n,o,i,c){var l=s(e[n],e,o);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==typeof p&&a.call(p,"__await")?t.resolve(p.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(p).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(l.arg)}var n;this._invoke=function(e,a){function o(){return new t(function(t,n){r(e,a,t,n)})}return n=n?n.then(o,o):o()}}function w(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function b(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function _(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=m,c(y,"constructor",m),c(m,"constructor",f),f.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new E(l(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(y),c(y,i,"Generator"),c(y,n,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=_,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),b(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;b(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:_(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var A=600,Y=942.7;function J(e){var t=Object(y["e"])(e=>e),a=t.basicInfoPc,o=a.image,c=a.formValues,u=Object(l["useState"])(null),p=i()(u,2),m=p[0],h=p[1],d=Object(l["useState"])(null),v=i()(d,2),g=v[0],E=v[1],w=Object(l["useState"])(0),x=i()(w,2),O=x[0],j=x[1],k=Object(l["useState"])(0),P=i()(k,2),T=P[0],F=P[1],I=Object(l["useState"])(1),G=i()(I,2),H=G[0],J=G[1],M=Object(l["useState"])(0),R=i()(M,2),U=R[0],Z=R[1],W=Object(l["useState"])(!0),B=i()(W,2),K=B[0],Q=B[1];Object(l["useEffect"])(()=>{if(m&&m.destroy(!0),o){var e=new L["Application"]({backgroundColor:16777215,width:A,height:Y,preserveDrawingBuffer:!0,resolution:2,autoDensity:!0});e.renderer.resize(A,Y),E(null),h(e)}},[o]),Object(l["useEffect"])(()=>{m&&(X(),$())},[m]);var X=()=>{j(0),F(0),J(1),Z(0)},$=function(){var e=N()(q().mark(function e(){var t;return q().wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=document.querySelector("#pixi-container"),t&&m&&t.appendChild(m.view),e.next=4,te();case 4:ae(),re(),Q(!1);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),ee=e=>{return new Promise(t=>{setTimeout(()=>{t(1)},e)})},te=function(){var e=N()(q().mark(function e(){var t,a,r;return q().wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=L["Texture"].from(o),t.baseTexture.scaleMode=L["SCALE_MODES"].NEAREST,e.next=4,new L["Sprite"](t);case 4:return a=e.sent,e.next=7,ee(500);case 7:console.log("===userLayer.width",a.width),a.x=0,a.y=0,a.width>A&&(r=+Number(A/a.width).toFixed(3),a.scale.x=r,a.scale.y=r,J(r)),E(a),console.log("===userLayer",a),m&&m.stage.addChild(a);case 14:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),ae=()=>{var e=L["Texture"].from(z.a),t=new L["Sprite"](e),a=A+4;t.height=470,t.width=a,t.x=-2,t.y=Y-t.height,m&&m.stage.addChild(t)},re=()=>{var e=c.nickName,t=c.realName,a=new L["TextStyle"]({fontFamily:["Pingfang SC","Hiragino Sans GB","Helvetica","Droid Sans","Microsoft YaHei","Arial","sans-serif"],fontSize:60,fill:["#ffffff"]}),r=new L["Text"](e,a);r.x=245,3===e.length?r.x-=26:4===e.length&&(r.x-=59),r.y=730;var n=new L["TextStyle"]({fontFamily:["Pingfang SC","Hiragino Sans GB","Helvetica","Droid Sans","Microsoft YaHei","Arial","sans-serif"],fontSize:24,fill:["#ffffff"]}),o=new L["Text"](t,n);o.x=282,3===t.length?o.x-=13:4===t.length&&(o.x-=25),o.y=810,m&&m.stage.addChild(r),m&&m.stage.addChild(o)},ne=e=>{j(e),g&&(g.y=0+e)},oe=e=>{F(e),g&&(g.x=0+e)},ie=e=>{J(e),g&&(g.scale.x=e,g.scale.y=e)},ce=e=>{Z(e),g&&(g.angle=0+e)},le=()=>{var t=e.prevStep;t()},se=()=>{var e=document.querySelector("#pixi-container>canvas");C()(e,{name:"".concat(c.realName,"\u7684\u5de5\u724c\u7167"),type:"jpg",quality:1})},ue=Object(l["useState"])(!0),pe=i()(ue,2),fe=pe[0],me=pe[1],he=()=>{me(!0)},de=()=>{me(!1)},ve=4,ye=16,ge=4,Ee=2,we=-5e3,xe=5e3;return s.a.createElement(_["a"],{spinning:K,size:"large"},s.a.createElement(D,{visible:fe,hideExampleDialog:de}),s.a.createElement("div",{className:V.a.root},s.a.createElement("div",{className:V.a["pixi-container"],id:"pixi-container"}),m&&s.a.createElement("div",{className:V.a["options-wrap"]},s.a.createElement(n["a"],null,s.a.createElement(r["a"],{span:ve},"\u4e0a\u4e0b\u5fae\u8c03\uff1a"),s.a.createElement(r["a"],{span:ye},s.a.createElement(S["a"],{min:we,max:xe,step:Ee,onChange:ne,value:"number"===typeof O?O:0})),s.a.createElement(r["a"],{span:ge},s.a.createElement(b["a"],{step:Ee,min:we,max:xe,value:O,onChange:ne}))),s.a.createElement(n["a"],null,s.a.createElement(r["a"],{span:ve},"\u5de6\u53f3\u5fae\u8c03\uff1a"),s.a.createElement(r["a"],{span:ye},s.a.createElement(S["a"],{min:we,max:xe,step:Ee,onChange:oe,value:"number"===typeof T?T:0})),s.a.createElement(r["a"],{span:ge},s.a.createElement(b["a"],{step:Ee,min:we,max:xe,value:T,onChange:oe}))),s.a.createElement(n["a"],null,s.a.createElement(r["a"],{span:ve},"\u7f29\u653e\u5fae\u8c03\uff1a"),s.a.createElement(r["a"],{span:ye},s.a.createElement(S["a"],{step:.01,min:.1,max:5,onChange:ie,value:"number"===typeof H?H:0})),s.a.createElement(r["a"],{span:ge},s.a.createElement(b["a"],{step:.01,min:.1,max:5,value:H,onChange:ie}))),s.a.createElement(n["a"],null,s.a.createElement(r["a"],{span:ve},"\u65cb\u8f6c\u5fae\u8c03\uff1a"),s.a.createElement(r["a"],{span:ye},s.a.createElement(S["a"],{min:0,max:360,onChange:ce,value:"number"===typeof U?U:0})),s.a.createElement(r["a"],{span:ge},s.a.createElement(b["a"],{min:0,max:360,value:U,onChange:ce}))),s.a.createElement(n["a"],null,s.a.createElement(r["a"],{span:24,className:V.a["action-wrap"]},s.a.createElement(f["a"],{className:V.a["prev-btn"],type:"default",onClick:le},"\u4e0a\u4e00\u6b65"),s.a.createElement(f["a"],{className:V.a["download-btn"],type:"primary",onClick:se},"\u4e0b\u8f7d\u56fe\u7247"),s.a.createElement(f["a"],{type:"link",onClick:he},"\u67e5\u770b\u653b\u7565"))))))}a.d(t,"default",function(){return R});var M=c["a"].Step;function R(){var e=Object(l["useState"])(0),t=i()(e,2),a=t[0],o=t[1];return s.a.createElement("div",{className:p.a.root},s.a.createElement(n["a"],{className:p.a["step-wrap"]},s.a.createElement(r["a"],{span:6,offset:9},s.a.createElement(c["a"],{current:a},s.a.createElement(M,{title:"\u586b\u5199\u4fe1\u606f"}),s.a.createElement(M,{title:"\u5fae\u8c03&\u4e0b\u8f7d"})))),0===a&&s.a.createElement(x,{nextStep:()=>o(a+1)}),1===a&&s.a.createElement(J,{prevStep:()=>o(a-1)}))}},SaUt:function(e,t,a){e.exports={root:"root___3nnZK","step-wrap":"step-wrap___2lW12"}},dyI1:function(e,t,a){e.exports={root:"root___3YhSt","options-wrap":"options-wrap___1bucv","action-wrap":"action-wrap___28E91","download-btn":"download-btn___3sCsX","prev-btn":"prev-btn___3Tyz9"}},hSsY:function(e,t,a){e.exports=a.p+"static/bg1.3e1f4495.png"},luOz:function(e,t,a){e.exports=a.p+"static/example.f819daa0.png"},uSRu:function(e,t,a){e.exports={strong:"strong___3cl8x"}}}]);