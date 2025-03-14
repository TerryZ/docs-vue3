import{d as Z,p as y,q as _e,h as S,v as ee,$ as ae,X as ne,at as xe,G as l,L as se,an as Ee,P as ke,T as Te,ah as R,au as Oe,K as Ce,a as T,c as U,o as W,j as f,ak as te,w as E,k as m,F as X,al as K,ag as Me}from"./framework.DvaPEpzT.js";(function(){try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.animate-down-enter-from,.animate-down-leave-to{transform:scale(.95);opacity:0}.animate-down-enter-active{transform-origin:top left;transition-property:opacity,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-down-leave-active{transform-origin:top left;transition-property:opacity,transform;transition-duration:75ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-up-enter-from,.animate-up-leave-to{transform:scale(.95);opacity:0}.animate-up-enter-active{transform-origin:bottom left;transition-property:opacity,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.animate-up-leave-active{transform-origin:bottom left;transition-property:opacity,transform;transition-duration:75ms;transition-timing-function:cubic-bezier(.4,0,.2,1)}.dd-trigger{display:inline-flex;box-sizing:border-box;width:-moz-fit-content;width:fit-content}.dd-trigger.dd-trigger--block{display:flex;width:auto}.dd-content{-webkit-font-smoothing:subpixel-antialiased;backface-visibility:hidden;display:inline-flex;margin:0;padding:0;max-width:80vw;position:absolute;top:0;left:0;box-sizing:border-box;background-color:#fff;overflow:hidden;border:1px solid #d0d0d0;will-change:opacity,transform,top,left;box-shadow:0 9px 24px #0000002e,0 3px 6px #00000014}.dd-content.dd-no-border{border:0}.dd-rounded--small{border-radius:.25rem!important}.dd-rounded--medium{border-radius:.5rem!important}.dd-rounded--large{border-radius:.75rem!important}.dd-rounded--pill{border-radius:50rem!important}.dd-rounded--circle{border-radius:50%!important}.dd-content-rounded--small{border-radius:6px!important}.dd-content-rounded--medium{border-radius:12px!important}.dd-content-rounded--large{border-radius:18px!important}.dd-trigger-container{display:inline-block}.dd-trigger-container.dd-disabled .dd-default-trigger,.dd-trigger-container.dd-disabled:hover .dd-default-trigger{border:1px solid #eee;background-color:#eee;cursor:default;color:#aaa}.dd-trigger-container .dd-default-trigger{display:inline-flex;align-items:center;padding:.5rem 1rem;background-color:#fff;border:1px solid #ddd;border-radius:.3rem;font-size:14px;line-height:1.42857143;outline:0!important;color:#666;gap:.5rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.dd-trigger-container .dd-default-trigger:hover{border:1px solid #aaa;color:#000}.dd-trigger-container .dd-default-trigger .dd-caret-down{transition:transform .2s ease}.dd-trigger-container .dd-default-trigger.dd-opened{box-shadow:3px 2px 6px #0003;border:1px solid #666;color:#000}.dd-trigger-container .dd-default-trigger.dd-opened .dd-caret-down{transform:rotate(180deg)}.dd-trigger-container .dd-default-trigger.dd-opened:hover{border:1px solid #666}.dd-trigger-container .dd-default-trigger.dd-rounded--circle{width:38px;height:38px;padding:0;justify-content:center}.dd-caret-down{display:inline-block;width:0;height:0;border-top:4px solid;border-left:4px solid transparent;border-right:4px solid transparent;vertical-align:middle;content:""}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();var ue=function(){if(typeof Map<"u")return Map;function e(t,n){var o=-1;return t.some(function(r,i){return r[0]===n?(o=i,!0):!1}),o}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var o=e(this.__entries__,n),r=this.__entries__[o];return r&&r[1]},t.prototype.set=function(n,o){var r=e(this.__entries__,n);~r?this.__entries__[r][1]=o:this.__entries__.push([n,o])},t.prototype.delete=function(n){var o=this.__entries__,r=e(o,n);~r&&o.splice(r,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,o){o===void 0&&(o=null);for(var r=0,i=this.__entries__;r<i.length;r++){var s=i[r];n.call(o,s[1],s[0])}},t}()}(),J=typeof window<"u"&&typeof document<"u"&&window.document===document,H=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),De=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(H):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Ae=2;function Se(e,t){var n=!1,o=!1,r=0;function i(){n&&(n=!1,e()),o&&d()}function s(){De(i)}function d(){var a=Date.now();if(n){if(a-r<Ae)return;o=!0}else n=!0,o=!1,setTimeout(s,t);r=a}return d}var Be=20,Re=["top","right","bottom","left","width","height","size","weight"],ze=typeof MutationObserver<"u",je=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Se(this.refresh.bind(this),Be)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,o=n.indexOf(t);~o&&n.splice(o,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!J||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),ze?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!J||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,o=n===void 0?"":n,r=Re.some(function(i){return!!~o.indexOf(i)});r&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),de=function(e,t){for(var n=0,o=Object.keys(t);n<o.length;n++){var r=o[n];Object.defineProperty(e,r,{value:t[r],enumerable:!1,writable:!1,configurable:!0})}return e},L=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||H},ce=F(0,0,0,0);function q(e){return parseFloat(e)||0}function oe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(o,r){var i=e["border-"+r+"-width"];return o+q(i)},0)}function Le(e){for(var t=["top","right","bottom","left"],n={},o=0,r=t;o<r.length;o++){var i=r[o],s=e["padding-"+i];n[i]=q(s)}return n}function Ve(e){var t=e.getBBox();return F(0,0,t.width,t.height)}function Pe(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return ce;var o=L(e).getComputedStyle(e),r=Le(o),i=r.left+r.right,s=r.top+r.bottom,d=q(o.width),a=q(o.height);if(o.boxSizing==="border-box"&&(Math.round(d+i)!==t&&(d-=oe(o,"left","right")+i),Math.round(a+s)!==n&&(a-=oe(o,"top","bottom")+s)),!He(e)){var p=Math.round(d+i)-t,g=Math.round(a+s)-n;Math.abs(p)!==1&&(d-=p),Math.abs(g)!==1&&(a-=g)}return F(r.left,r.top,d,a)}var $e=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof L(e).SVGGraphicsElement}:function(e){return e instanceof L(e).SVGElement&&typeof e.getBBox=="function"}}();function He(e){return e===L(e).document.documentElement}function qe(e){return J?$e(e)?Ve(e):Pe(e):ce}function Ne(e){var t=e.x,n=e.y,o=e.width,r=e.height,i=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(i.prototype);return de(s,{x:t,y:n,width:o,height:r,top:n,right:t+o,bottom:r+n,left:t}),s}function F(e,t,n,o){return{x:e,y:t,width:n,height:o}}var Ue=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=F(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=qe(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),We=function(){function e(t,n){var o=Ne(n);de(this,{target:t,contentRect:o})}return e}(),Xe=function(){function e(t,n,o){if(this.activeObservations_=[],this.observations_=new ue,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=o}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof L(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Ue(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof L(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(o){return new We(o.target,o.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),fe=typeof WeakMap<"u"?new WeakMap:new ue,pe=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=je.getInstance(),o=new Xe(t,n,this);fe.set(this,o)}return e}();["observe","unobserve","disconnect"].forEach(function(e){pe.prototype[e]=function(){var t;return(t=fe.get(this))[e].apply(t,arguments)}});var Fe=function(){return typeof H.ResizeObserver<"u"?H.ResizeObserver:pe}();function Ge(){const e=window.pageXOffset!==void 0,t=(document.compatMode||"")==="CSS1Compat";return{x:e?window.pageXOffset:t?document.documentElement.scrollLeft:document.body.scrollLeft,y:e?window.pageYOffset:t?document.documentElement.scrollTop:document.body.scrollTop}}function Ie(e){return window.getComputedStyle(e).display==="none"}function re(e){const t=e.getBoundingClientRect();return{width:e.offsetWidth,height:e.offsetHeight,top:t.top,left:t.left}}function ge(e){if(!e)return{width:0,height:0,top:0,left:0};if(Ie(e)){e.style.visibility="hidden",e.style.display="inline-block";const t=re(e);return e.style.visibility="visible",e.style.display="none",t}return re(e)}const he="click",Ye="hover",Ke="contextmenu",Je=150,Q="body",G="small",I="medium",me="large",Qe="pill",ve="circle",ie=[G,I,me,Qe,ve],le=[G,I,me],be=Symbol("dropdown"),ye=Symbol("internal");function N(e){return{isTriggerByClick:e===he,isTriggerByHover:e===Ye,isTriggerByContextmenu:e===Ke}}function Ze(e){const{trigger:t,align:n,gap:o,animated:r}=e,i=y("down"),s=S(()=>r?`animate-${i.value}`:"");function d(p,g,h){const{isTriggerByContextmenu:w}=N(t.value),c=window.scrollY,_=document.documentElement.clientHeight,x=w?p:g.top+c,v=w?p:g.top+g.height+o.value+c,D=v+h.height>c+_;return!(x-o.value-h.height<c)&&D?(i.value="up",x-o.value-h.height):(i.value="down",v)}function a(p,g,h){const{isTriggerByContextmenu:w}=N(t.value),c=window.scrollX,_=document.documentElement.clientWidth,x=w?0:g.width,v=w?p:g.left+c,D=v+x/2-h.width/2,A=v+x-h.width,V=v+h.width>c+_,B=D+h.width>c+_,j=A<c;switch(n.value){case"left":return V?A:v;case"center":return B?A:j?v:D;case"right":return j?v:A}}return{transitionName:s,getTop:d,getLeft:a}}function et(e){const t=Ge();return{x:e.pageX||e.clientX+t.x,y:e.pageY||e.clientY+t.y}}function tt(e){return["dd-trigger",e.block&&"dd-trigger--block"]}function nt(e){return`dd-rounded--${!e||!ie.includes(e)?I:ie.find(t=>t===e)}`}function ot(e){return`dd-content-rounded--${!e||!le.includes(e)?G:le.find(t=>t===e)}`}function we(){return se(be,{})}function rt(e=300){let t;return n=>{clearTimeout(t),t=setTimeout(n,e)}}function it(e,t){let n=0,o=0,r;const i=d=>{n=d.width,o=d.height},s=d=>{const a=d[0].contentRect;if(!(!a.width&&!a.height)){if(n===0&&o===0)return i(a);(n!==a.width||o!==a.height)&&(i(a),t==null||t())}};ee(()=>{if(!e.value)return;const d=(window==null?void 0:window.ResizeObserver)||Fe;r=new d(s),r.observe(e.value)}),ae(()=>{!r||!e.value||r.unobserve(e.value)})}function lt(e){let t=0,n=0,o=0;const r=a=>{t=a.left,n=a.top,o=a.height},i=()=>{const a=e.value.getBoundingClientRect();return{top:a.top+window.scrollY,left:a.left+window.scrollX,height:a.height}},s=()=>{t!==0||n!==0||o!==0||r(i())};function d(a){const p=i();(t!==p.left||n!==p.top||o!==p.height)&&(r(p),ke(()=>a==null?void 0:a()))}return ee(()=>s()),{detectTriggerPositionChange:d}}const O=Z({name:"VDropdown",props:{disabled:{type:Boolean,default:!1},align:{type:String,default:"left"},toggle:{type:Boolean,default:!0},manual:{type:Boolean,default:!1},block:{type:Boolean,default:!1},trigger:{type:String,default:he},gap:{type:Number,default:5},appendTo:{type:[String,Object],default:Q}},emits:["visible-change","open","close","opened","closed"],setup(e,{slots:t,emit:n,expose:o}){const r=y(null),i=y(!1),s=y({x:null,y:null}),d=y(),a=rt(Je),{isTriggerByClick:p,isTriggerByHover:g,isTriggerByContextmenu:h}=N(e.trigger);_e(i,u=>n("visible-change",u));function w(){var u;e.disabled||((u=d.value)==null||u.call(d),g?a(()=>{i.value=!0}):i.value=!0)}function c(u=!1){e.disabled||!e.toggle&&!u||(g?a(()=>{i.value=!1}):i.value=!1)}const _=()=>i.value?c():w();function x(u){if(!i.value)return;const b=u.composedPath().some(Y=>Y===r.value);b&&!e.toggle&&!h||(!b||b&&h)&&c(!0)}const v=u=>{!p||e.manual||(u.stopPropagation(),_())},D=()=>g&&w(),A=()=>g&&c(),V=u=>{if(!h||e.manual)return;u.stopPropagation(),u.preventDefault();const b=et(u);s.value.x=b.x,s.value.y=b.y,w()},B=()=>{var u;return(u=d.value)==null?void 0:u.call(d)},j=u=>{typeof u=="function"&&(d.value=u)},{detectTriggerPositionChange:P}=lt(r),$={disabled:S(()=>e.disabled),visible:S(()=>i.value),adjust:B,close:c};function k(){return t.trigger?t.trigger($):null}return ee(()=>{document.body.addEventListener("mousedown",x)}),ae(()=>{document.body.removeEventListener("mousedown",x)}),ne(be,$),ne(ye,{position:s,display:w,close:c,registerAdjustContent:j,detectTriggerPositionChange:P,getRootRect:()=>ge(r.value),dropdownProps:xe(e),dropdownEmit:n}),o({display:w,close:c,toggleVisible:_,adjust:B,visible:i}),()=>{var u;return l("div",{ref:r,class:tt(e),onMouseenter:D,onMouseleave:A,onContextmenu:V,onClick:v},[l(k,null,null),(u=t.default)==null?void 0:u.call(t,$)])}}}),z=Z({name:"DropdownTrigger",props:{rounded:{type:String,default:I}},setup(e,{slots:t}){const n=we(),o=S(()=>{var a;return[{"dd-default-trigger":!0,"dd-opened":(a=n==null?void 0:n.visible)==null?void 0:a.value},nt(e.rounded)]}),r=S(()=>{var a;return{"dd-trigger-container":!0,"dd-disabled":(a=n==null?void 0:n.disabled)==null?void 0:a.value}}),i=()=>t.default?t.default():"Open",s=()=>e.rounded===ve?null:t.append?t.append():l("span",{class:"dd-caret-down"},null),d=()=>l("button",{type:"button",class:o.value},[l(i,null,null),l(s,null,null)]);return()=>l("div",{class:r.value},[l(d,null,null)])}}),C=Z({name:"DropdownContent",inheritAttrs:!1,props:{border:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},rounded:{type:String,default:G},zIndex:{type:Number,default:3e3}},setup(e,{slots:t,attrs:n}){var o;const r=y(null),i=y({}),s=S(()=>["dd-content",e.border||"dd-no-border",ot(e.rounded)]),{position:d,display:a,close:p,getRootRect:g,registerAdjustContent:h,detectTriggerPositionChange:w,dropdownProps:c,dropdownEmit:_}=se(ye,{}),{visible:x}=we(),{isTriggerByHover:v}=N((o=c==null?void 0:c.trigger)==null?void 0:o.value),{transitionName:D,getLeft:A,getTop:V}=Ze({trigger:c==null?void 0:c.trigger,align:c==null?void 0:c.align,gap:c==null?void 0:c.gap,animated:e.animated}),B=S(()=>{var k;return((k=c==null?void 0:c.appendTo)==null?void 0:k.value)||Q}),j=S(()=>B.value!==Q);function P(){const k=g(),u=ge(r.value),b=V(d.value.y,k,u),Y=A(d.value.x,k,u);i.value["z-index"]=e.zIndex,i.value.top=`${b}px`,i.value.left=`${Y}px`}function $(k){k.stopPropagation(),x.value&&w(P)}return h==null||h(P),it(r,P),()=>{const k={default:()=>{var u;return R(l("div",Ce({ref:r,style:i.value,class:s.value,onMousedown:b=>b.stopPropagation(),onClick:$,onMouseenter:()=>v&&a(),onMouseleave:()=>v&&p()},n),[(u=t==null?void 0:t.default)==null?void 0:u.call(t)]),[[Oe,x==null?void 0:x.value]])}};return l(Ee,{to:B.value,defer:j.value},{default:()=>[l(Te,{name:D.value,onEnter:(u,b)=>{_("open"),setTimeout(b,150)},onAfterEnter:()=>_("opened"),onLeave:(u,b)=>{_("close"),setTimeout(b,75)},onAfterLeave:()=>_("closed")},k)]})}}});function M(){return l("div",{style:"width: 400px;",class:"p-3"},[T("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])}function vt(){return l(O,null,{trigger:()=>l(z,null,{default:()=>[T("Click me")]}),default:()=>l(C,null,{default:()=>[l(M,null,null)]})})}function bt(){return l(O,{trigger:"hover"},{trigger:()=>l(z,null,{default:()=>[T("Hover me")]}),default:()=>l(C,null,{default:()=>[l(M,null,null)]})})}function yt(){return l(O,{trigger:"contextmenu",block:!0},{trigger:()=>l("div",{class:"d-flex align-items-center justify-content-center bg-light rounded-3 px-3 py-1 fs-1 text-body-secondary w-100",style:"height: 10rem;"},[T("Mouse right click me")]),default:()=>l(C,null,{default:()=>[l(M,null,null)]})})}function wt(){const e=y(null);function t(o){o.target.value==="3"?e.value.display():e.value.visible&&e.value.close()}return l(O,{ref:e,manual:!0},{trigger:()=>l("input",{type:"text",class:"border rounded-3 px-3 py-2",placeholder:"try enter 3",onInput:t},null),default:()=>l(C,null,{default:()=>[l(M,null,null)]})})}function _t(){return l(O,null,{trigger:()=>l(z,{class:"border rounded-4 bg-primary-subtle p-2"},null),default:()=>l(C,{style:"width: 500px;background-color:rgb(255, 174, 0);"},{default:()=>[l(M,null,null)]})})}function xt(){return l(O,null,{trigger:({visible:t})=>l(z,null,{default:()=>[T("visible: "),String(t.value)]}),default:({visible:t,disabled:n,close:o})=>l(C,null,{default:()=>[l("div",{class:"d-flex flex-column p-3"},[l("div",{class:"mb-3"},[T("visible: "),String(t.value)]),l("div",{class:"mb-3"},[T("disabled: "),String(n.value)]),l("button",{class:"btn btn-secondary",onClick:o},[T("Close")])])]})})}const at={class:"d-flex my-3"},st={class:"form-check form-switch mb-0 d-flex align-items-center"},Et={__name:"DropdownToggle",setup(e){const t=y(!1);return(n,o)=>(W(),U(X,null,[f("div",at,[f("div",st,[R(f("input",{class:"form-check-input me-2",type:"checkbox",role:"switch",id:"switch-toggle","onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r)},null,512),[[te,t.value]]),o[1]||(o[1]=f("label",{class:"form-check-label",for:"switch-toggle"},"Toggle",-1))])]),l(m(O),{toggle:t.value},{trigger:E(()=>o[2]||(o[2]=[f("input",{type:"text",class:"border rounded-3 px-3 py-2",placeholder:"focus on me"},null,-1)])),default:E(()=>[l(m(C),null,{default:E(()=>[l(m(M))]),_:1})]),_:1},8,["toggle"])],64))}},ut={class:"d-flex my-3"},dt={class:"form-check form-switch mb-0 d-flex align-items-center"},kt={__name:"DropdownDisabled",setup(e){const t=y(!1);return(n,o)=>(W(),U(X,null,[f("div",ut,[f("div",dt,[R(f("input",{class:"form-check-input me-2",type:"checkbox",role:"switch",id:"switch-disabled","onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r)},null,512),[[te,t.value]]),o[1]||(o[1]=f("label",{class:"form-check-label",for:"switch-disabled"},"Disabled",-1))])]),l(m(O),{disabled:t.value},{trigger:E(()=>[l(m(z))]),default:E(()=>[l(m(C),null,{default:E(()=>[l(m(M))]),_:1})]),_:1},8,["disabled"])],64))}},ct={class:"d-flex align-items-center my-3"},Tt={__name:"DropdownAlign",setup(e){const t=y("left");return(n,o)=>(W(),U(X,null,[f("div",ct,[o[2]||(o[2]=T(" Align direction: ")),R(f("select",{class:"form-select w-auto ms-3","onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r)},o[1]||(o[1]=[f("option",{value:"left"}," Left ",-1),f("option",{value:"center"}," Center ",-1),f("option",{value:"right"}," Right ",-1)]),512),[[K,t.value]])]),l(m(O),{align:t.value},{trigger:E(()=>[l(m(z))]),default:E(()=>[l(m(C),null,{default:E(()=>[l(m(M))]),_:1})]),_:1},8,["align"])],64))}},ft={class:"my-3 d-flex gap-3"},pt={class:"d-flex align-items-center"},gt={class:"d-flex align-items-center"},ht={class:"form-check form-switch d-flex align-items-center my-3"},Ot={__name:"DropdownStyles",setup(e){const t=y(!0),n=y("medium"),o=y("small");return(r,i)=>(W(),U(X,null,[f("div",ft,[f("div",pt,[i[4]||(i[4]=T(" Trigger rounded: ")),R(f("select",{class:"form-select w-auto ms-3","onUpdate:modelValue":i[0]||(i[0]=s=>n.value=s)},i[3]||(i[3]=[Me('<option value="small"> small </option><option value="medium"> medium </option><option value="large"> large </option><option value="pill"> pill </option><option value="circle"> circle </option>',5)]),512),[[K,n.value]])]),f("div",gt,[i[6]||(i[6]=T(" Content rounded: ")),R(f("select",{class:"form-select w-auto ms-3","onUpdate:modelValue":i[1]||(i[1]=s=>o.value=s)},i[5]||(i[5]=[f("option",{value:"small"}," small ",-1),f("option",{value:"medium"}," medium ",-1),f("option",{value:"large"}," large ",-1)]),512),[[K,o.value]])])]),f("div",ht,[R(f("input",{class:"form-check-input me-2",type:"checkbox",role:"switch",id:"switch-border","onUpdate:modelValue":i[2]||(i[2]=s=>t.value=s)},null,512),[[te,t.value]]),i[7]||(i[7]=f("label",{class:"form-check-label",for:"switch-border"},"Content border",-1))]),l(m(O),null,{trigger:E(()=>[l(m(z),{rounded:n.value},null,8,["rounded"])]),default:E(()=>[l(m(C),{rounded:o.value,border:t.value},{default:E(()=>[l(m(M))]),_:1},8,["rounded","border"])]),_:1})],64))}};export{vt as D,Et as _,bt as a,yt as b,kt as c,wt as d,Tt as e,Ot as f,_t as g,xt as h};
