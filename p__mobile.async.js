(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"2jyZ":function(e,t,r){e.exports={root:"root___1vC1Y","pixi-container":"pixi-container___3RQAu","action-wrap":"action-wrap___aJW3f","download-btn":"download-btn___EFuIr","prev-btn":"prev-btn___3k2AK","input-number":"input-number___Dc19f"}},"8Z46":function(e,t,r){e.exports={demo:"demo___3HKwN",strong:"strong___1RdiN"}},LVwu:function(e,t,r){"use strict";r.r(t);var n=r("cO38"),a=r.n(n),o=(r("kTru"),r("QOcf")),i=r("xwgP"),c=r.n(i),l=r("v1HH"),s=r.n(l),u=(r("EVom"),r("lNED")),f=(r("APZ6"),r("yypJ")),p=(r("F+ZM"),r("6hwb")),h=(r("tSZ3"),r("7OZr")),m=r("H8ty"),d=r("+qOz"),v=r("d+hu"),g=r.n(v),y=h["a"].Dragger,w={labelCol:{span:8},wrapperCol:{span:8}};function b(e){var t=Object(d["d"])(),r=Object(d["e"])(e=>e),n=r.basicInfo,a=n.formValues,o=e=>{var r=new FileReader;return r.readAsDataURL(e),r.onload=function(e){t({type:"basicInfo/saveState",payload:{image:e.target.result}})},!1},i=r=>{var n={realName:r.realName,nickName:r.nickName};window.localStorage.setItem("avatar-user-info",JSON.stringify(n)),t({type:"basicInfo/saveState",payload:{formValues:r}});var a=e.nextStep;a()};return c.a.createElement(p["a"],Object.assign({},w,{name:"basic",onFinish:i,initialValues:a,className:g.a.root}),c.a.createElement(p["a"].Item,{label:"\u59d3\u540d",name:"realName",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u59d3\u540d"},{min:2,max:4,message:"\u59d3\u540d\u957f\u5ea6\u4e3a 2 ~ 4"}]},c.a.createElement(f["a"],{placeholder:"\u59d3\u540d\u548c\u82b1\u540d\u4e0d\u8981\u586b\u53cd\u54e6"})),c.a.createElement(p["a"].Item,{label:"\u82b1\u540d",name:"nickName",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u82b1\u540d"},{min:2,max:4,message:"\u82b1\u540d\u957f\u5ea6\u4e3a 2 ~ 4"}]},c.a.createElement(f["a"],{placeholder:"\u59d3\u540d\u548c\u82b1\u540d\u4e0d\u8981\u586b\u53cd\u54e6"})),c.a.createElement(p["a"].Item,{label:"\u4e2a\u4eba\u7167\u7247",name:"userPicture",rules:[{required:!0,message:"\u8bf7\u4e0a\u4f20\u7167\u7247"}]},c.a.createElement(y,{accept:"image/*",beforeUpload:o},c.a.createElement("p",{className:"ant-upload-drag-icon"},c.a.createElement(m["a"],null)),c.a.createElement("p",{className:"ant-upload-text"},"\u70b9\u51fb\u4e0a\u4f20\u7167\u7247"))),c.a.createElement("div",{className:g.a["action-wrap"]},c.a.createElement(u["a"],{type:"primary",htmlType:"submit"},"\u4e0b\u4e00\u6b65")))}r("VWP3");var E=r("/GH5"),x=(r("nloc"),r("VwF5")),S=(r("m5xJ"),r("lvwp")),_=(r("VnVD"),r("Couc")),O=r("UWy3"),j=r.n(O),N=r("JzHH"),L=(r("qQgY"),r("hF5o")),k=r("luOz"),C=r.n(k),D=r("8Z46"),T=r.n(D);function H(e){var t=e.visible,r=e.hideExampleDialog;return c.a.createElement(L["a"],{maskClosable:!1,keyboard:!1,width:1024,title:"\u793a\u4f8b",visible:t,footer:null,onCancel:r},c.a.createElement("p",{className:T.a["strong"]},"1. \u8bf7\u786e\u4fdd\u8c03\u6574\u540e\u7684\u56fe\u7247\u6491\u6ee1\u753b\u5e03\uff0c\u56db\u5468\u4e0d\u8981\u6709\u767d\u8fb9\uff08\u80cc\u666f\u539f\u672c\u5c31\u662f\u767d\u8272\u7684\u9664\u5916\uff09\u3002"),c.a.createElement("p",null,"2. \u80cc\u666f\u6700\u597d\u4e3a\u7eaf\u767d\u8272\u3002\u4eba\u8eab\u6bd4\u4f8b\u8303\u56f4\u4e3a\u5934\u9876\u81f3\u819d\u76d6\u4e0a\u65b9\uff0c\u987b\u9ad8\u6e05\u6b63\u9762\u7167\uff0c\u5934\u9876\u7559\u767d\uff1a5mm\u3002"),c.a.createElement("p",null,"3. \u7167\u7247\u4e3b\u4f53\u53ea\u80fd\u6709\u4e00\u540d\u6210\u5e74\u4eba\uff0c\u82e5\u5408\u5f71\u4ec5\u9650\u5c0f\u670b\u53cb\u6216\u5ba0\u7269\uff0c\u4e0d\u8981\u8d85\u8fc7\u4e24\u540d\u6210\u5e74\u4eba\u3002"),c.a.createElement("img",{className:T.a["demo"],src:C.a}))}var F=r("Ow7D"),I=r.n(F);function P(e){var t=e.visible,r=e.hideDownloadDialog,n=e.src;return c.a.createElement(L["a"],{title:"\u957f\u6309\u56fe\u7247\uff0c\u4fdd\u5b58\u5230\u624b\u673a",visible:t,footer:null,onCancel:r},c.a.createElement("img",{className:I.a["image"],src:n}))}var A=r("hSsY"),G=r.n(A),V=r("2jyZ"),z=r.n(V);function q(){q=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new S(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var u={};function f(){}function p(){}function h(){}var m={};c(m,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(_([])));v&&v!==t&&r.call(v,a)&&(m=v);var g=h.prototype=f.prototype=Object.create(m);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}var a;this._invoke=function(e,r){function o(){return new t(function(t,a){n(e,r,t,a)})}return a=a?a.then(o,o):o()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function _(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=h,c(g,"constructor",h),c(h,"constructor",p),p.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(w.prototype),c(w.prototype,o,function(){return this}),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var J=320,Y=502.8;function Z(e){var t=Object(d["e"])(e=>e),r=t.basicInfo,n=r.image,o=r.formValues,l=Object(i["useState"])(null),s=a()(l,2),f=s[0],p=s[1],h=Object(i["useState"])(null),m=a()(h,2),v=m[0],g=m[1],y=Object(i["useState"])(0),w=a()(y,2),b=w[0],O=w[1],L=Object(i["useState"])(0),k=a()(L,2),C=k[0],D=k[1],T=Object(i["useState"])(1),F=a()(T,2),I=F[0],A=F[1],V=Object(i["useState"])(0),Z=a()(V,2),M=Z[0],R=Z[1],U=Object(i["useState"])(!0),B=a()(U,2),Q=B[0],W=B[1],K=Object(i["useState"])(-1e3),X=a()(K,2),$=X[0],ee=X[1],te=Object(i["useState"])(1e3),re=a()(te,2),ne=re[0],ae=re[1],oe=Object(i["useState"])(-1e3),ie=a()(oe,2),ce=ie[0],le=ie[1],se=Object(i["useState"])(1e3),ue=a()(se,2),fe=ue[0],pe=ue[1];Object(i["useEffect"])(()=>{if(f&&f.destroy(!0),n){var e=new N["Application"]({backgroundColor:16777215,width:J,height:Y,preserveDrawingBuffer:!0,resolution:4,autoDensity:!0});e.renderer.resize(J,Y),g(null),p(e)}},[n]),Object(i["useEffect"])(()=>{f&&(he(),me())},[f]),Object(i["useEffect"])(()=>{ve()},[v,I]);var he=()=>{O(0),D(0),A(1),R(0)},me=function(){var e=j()(q().mark(function e(){var t;return q().wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=document.querySelector("#pixi-container"),t&&f&&t.appendChild(f.view),e.next=4,ge();case 4:ye(),we(),W(!1);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),de=e=>{return new Promise(t=>{setTimeout(()=>{t(1)},e)})},ve=()=>{v&&(ee(-v.width/2),ae(2*v.width),le(-v.height/2),pe(2*v.height))},ge=function(){var e=j()(q().mark(function e(){var t,r,a,o;return q().wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=N["Texture"].from(n),t.baseTexture.scaleMode=N["SCALE_MODES"].NEAREST,e.next=4,new N["Sprite"](t);case 4:return r=e.sent,r.interactive=!0,r.buttonMode=!0,a=.5,r.anchor.set(a),e.next=11,de(500);case 11:r.x=J/2,r.y=Y/2,r.width>J&&(o=+Number(J/r.width).toFixed(3),r.scale.x=o,r.scale.y=o,A(o)),g(r),O(r.height*a),D(r.width*a),console.log("===userLayer",r),f&&f.stage.addChild(r);case 19:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),ye=()=>{var e=N["Texture"].from(G.a),t=new N["Sprite"](e),r=J+4;t.height=250.679,t.width=r,t.x=-2,t.y=Y-t.height,f&&f.stage.addChild(t)},we=()=>{var e=o.nickName,t=o.realName,r=new N["TextStyle"]({fontFamily:["Pingfang SC","Hiragino Sans GB","Helvetica","Droid Sans","Microsoft YaHei","Arial","sans-serif"],fontSize:30,fill:["#ffffff"]}),n=new N["Text"](e,r);n.x=130,3===e.length?n.x-=15:4===e.length&&(n.x-=28),n.y=390;var a=new N["TextStyle"]({fontFamily:["Pingfang SC","Hiragino Sans GB","Helvetica","Droid Sans","Microsoft YaHei","Arial","sans-serif"],fontSize:12,fill:["#ffffff"]}),i=new N["Text"](t,a);i.x=148,3===t.length?i.x-=5:4===t.length&&(i.x-=12),i.y=432,f&&f.stage.addChild(n),f&&f.stage.addChild(i)},be=e=>{O(e),v&&(v.y=0+e)},Ee=e=>{D(e),v&&(v.x=0+e)},xe=e=>{A(e),v&&(v.scale.x=e,v.scale.y=e)},Se=e=>{R(e),v&&(v.angle=0+e)},_e=()=>{var t=e.prevStep;t()},Oe=()=>{f&&(console.log("===app",f),ke(!0),setTimeout(()=>{var e=document.querySelector("#pixi-container>canvas");if(e){var t=e.toDataURL("image/jpg");He(t),Ge(),ke(!1)}},500))},je=Object(i["useState"])(!1),Ne=a()(je,2),Le=Ne[0],ke=Ne[1],Ce=Object(i["useState"])(null),De=a()(Ce,2),Te=De[0],He=De[1],Fe=Object(i["useState"])(!1),Ie=a()(Fe,2),Pe=Ie[0],Ae=Ie[1],Ge=()=>{Ae(!0)},Ve=()=>{Ae(!1)},ze=Object(i["useState"])(!0),qe=a()(ze,2),Je=qe[0],Ye=qe[1],Ze=()=>{Ye(!0)},Me=()=>{Ye(!1)},Re=1,Ue=4,Be=18,Qe=2;return c.a.createElement(_["a"],{spinning:Q,size:"large"},c.a.createElement(H,{visible:Je,hideExampleDialog:Me}),c.a.createElement(P,{visible:Pe,hideDownloadDialog:Ve,src:Te}),c.a.createElement("div",{id:"qwe",className:z.a.root},c.a.createElement("div",{className:z.a["pixi-container"],id:"pixi-container"}),f&&c.a.createElement("div",null,c.a.createElement(S["a"],null,c.a.createElement(x["a"],{offset:Re,span:Ue},"\u4e0a\u4e0b\uff1a"),c.a.createElement(x["a"],{span:Be},c.a.createElement(E["a"],{min:$,max:ne,step:Qe,onChange:be,value:"number"===typeof b?b:0}))),c.a.createElement(S["a"],null,c.a.createElement(x["a"],{offset:Re,span:Ue},"\u5de6\u53f3\uff1a"),c.a.createElement(x["a"],{span:Be},c.a.createElement(E["a"],{min:ce,max:fe,step:Qe,onChange:Ee,value:"number"===typeof C?C:0}))),c.a.createElement(S["a"],null,c.a.createElement(x["a"],{offset:Re,span:Ue},"\u7f29\u653e\uff1a"),c.a.createElement(x["a"],{span:Be},c.a.createElement(E["a"],{step:.01,min:.1,max:2,onChange:xe,value:"number"===typeof I?I:0}))),c.a.createElement(S["a"],null,c.a.createElement(x["a"],{offset:Re,span:Ue},"\u65cb\u8f6c\uff1a"),c.a.createElement(x["a"],{span:Be},c.a.createElement(E["a"],{min:0,max:360,onChange:Se,value:"number"===typeof M?M:0}))),c.a.createElement(S["a"],null,c.a.createElement(x["a"],{span:24,className:z.a["action-wrap"]},c.a.createElement(u["a"],{className:z.a["prev-btn"],type:"default",onClick:_e},"\u4e0a\u4e00\u6b65"),c.a.createElement(u["a"],{loading:Le,className:z.a["download-btn"],type:"primary",onClick:Oe},"\u4e0b\u8f7d\u56fe\u7247"),c.a.createElement(u["a"],{type:"ghost",onClick:Ze},"\u770b\u653b\u7565"))))))}r.d(t,"default",function(){return M});o["a"].Step;function M(){var e=Object(i["useState"])(0),t=a()(e,2),r=t[0],n=t[1];return c.a.createElement("div",{className:s.a.root},0===r&&c.a.createElement(b,{nextStep:()=>n(r+1)}),1===r&&c.a.createElement(Z,{prevStep:()=>n(r-1)}))}},Ow7D:function(e,t,r){e.exports={image:"image___2zDVN"}},"d+hu":function(e,t,r){e.exports={root:"root___2M9D3","action-wrap":"action-wrap___ner5r"}},hSsY:function(e,t,r){e.exports=r.p+"static/bg1.3e1f4495.png"},luOz:function(e,t,r){e.exports=r.p+"static/example.f819daa0.png"},v1HH:function(e,t,r){e.exports={root:"root___Jr7I8"}}}]);