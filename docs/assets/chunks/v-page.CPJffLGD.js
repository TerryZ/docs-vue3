import{d as D,al as $,s as z,h as c,v as I,y as q,ah as l}from"./framework.AM8gWj8u.js";(function(){try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".v-pagination{display:flex;justify-content:flex-start;box-sizing:border-box}.v-pagination--right{justify-content:flex-end}.v-pagination--center{justify-content:center}.v-pagination.v-pagination--disabled a,.v-pagination.v-pagination--disabled select{color:#999!important}.v-pagination.v-pagination--disabled.v-pagination--border a,.v-pagination.v-pagination--disabled.v-pagination--border a:hover{background-color:#fafafa}.v-pagination ul{margin:0;padding:0;display:flex}.v-pagination ul li{list-style:none;display:flex}.v-pagination ul li.v-pagination__info a,.v-pagination ul li.v-pagination__list a{cursor:default;color:#333}.v-pagination ul li a{padding:.3rem .6rem;text-decoration:none;line-height:1.3;font-size:14px;margin:0;outline:0;color:#333;border-radius:.25rem;display:inline-flex;align-items:center}.v-pagination ul li:not(.active):not(.disabled):not(.v-pagination__list):not(.v-pagination__info):not(.v-pagination__slot) a:hover{background-color:#fafafa}.v-pagination ul li.active a{background-color:#eee;color:#aaa}.v-pagination ul li.disabled a{color:#999!important;cursor:default}.v-pagination ul li select{width:auto!important;font-size:12px;padding:0;outline:0;margin:0 0 0 5px;border:1px solid #ccc;color:#333;border-radius:.3rem}.v-pagination.v-pagination--border ul{box-shadow:0 1px 2px #0000000d;border-radius:.25rem}.v-pagination.v-pagination--border ul li:not(:first-child) a{margin-left:-1px}.v-pagination.v-pagination--border ul li a{border:1px solid #DEE2E6;border-radius:0}.v-pagination.v-pagination--border ul li:first-child>a{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.v-pagination.v-pagination--border ul li:last-child>a{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.v-pagination.v-pagination--border ul li.active a{color:#999;background-color:#eee}")),document.head.appendChild(a)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();const s=1,G=5,B=10,M=[B,20,50,100],O=0,[aa,ea,H]=["left","center","right"],[J,w,K,Q,W]=["cn","en","de","jp","pt"],A={[J]:{pageLength:"每页记录数 ",pageInfo:"当前显示第 #pageNumber# / #totalPage# 页（共#totalRow#条记录）",first:"首页",previous:"«",next:"»",last:"尾页",all:"全部"},[w]:{pageLength:"Page length ",pageInfo:"Current #pageNumber# / #totalPage# (total #totalRow# records)",first:"First",previous:"«",next:"»",last:"Last",all:"All"},[K]:{pageLength:"Seitenlänge ",pageInfo:"Aktuell #pageNumber# / #totalPage# (gesamt #totalRow# Aufzeichnungen)",first:"Zuerst",previous:"«",next:"»",last:"Letzte",all:"Alle"},[Q]:{pageLength:"ページごとの記録数",pageInfo:"現在の第 #pageNumber# / #totalPage# ページ（全部で #totalRow# 条の記録）",first:"トップページ",previous:"«",next:"»",last:"尾のページ",all:"すべて"},[W]:{pageLength:"Resultados por página ",pageInfo:"#pageNumber# / #totalPage# (total de #totalRow#)",first:"Início",previous:"<",next:">",last:"Fim",all:"Todos"}};function X(a,i,t){if(i<=t)return s;const v=Math.floor(t/2),r=i-t+1,n=a-v;return n<s?s:n>r?r:n}function Y(a,i,t){const v=X(a,i,t);return Array.from({length:t}).map((r,n)=>v+n).filter(r=>r>=s&&r<=i)}function Z(a=w){const i=String(a).toLowerCase();return i in A?A[i]:A[w]}const N=D({name:"PaginationBar",props:{modelValue:{type:Number,default:0},totalRow:{type:Number,default:0},pageSize:{type:Number,default:B},language:{type:String,default:w},align:{type:String,default:H},pageSizeMenu:{type:[Array],default:()=>M},pageSizeOptions:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},border:{type:Boolean,default:!1},info:{type:Boolean,default:!0},pageNumber:{type:Boolean,default:!0},first:{type:Boolean,default:!0},last:{type:Boolean,default:!0},displayAll:{type:Boolean,default:!1},hideOnSinglePage:{type:Boolean,default:!1}},emits:["update:modelValue","update:pageSize","change"],setup(a,{emit:i,slots:t,expose:v}){const{pageSizeOptions:r,pageSizeMenu:n,totalRow:b}=$(a),o=z(0),h=z(-1),_=z(G),g=Z(a.language),E=c(()=>Array.isArray(n.value)&&n.value.length>0?n.value:M),d=z(a.pageSize||B),u=c(()=>d.value===O?s:Math.ceil(b.value/d.value)),L=c(()=>Y(o.value,u.value,_.value)),V=c(()=>g.pageInfo.replace("#pageNumber#",o.value).replace("#totalPage#",u.value).replace("#totalRow#",b.value)),F=c(()=>({"v-pagination":!0,"v-pagination--border":a.border,"v-pagination--right":a.align==="right","v-pagination--center":a.align==="center","v-pagination--disabled":a.disabled})),P=c(()=>o.value===s),R=c(()=>o.value===u.value);I(()=>a.modelValue,e=>y(e)),I(()=>a.pageSize,C);function y(e=s){if(a.disabled||typeof e!="number")return;let f=e<s?s:e;e>u.value&&u.value>0&&(f=u.value),!(f===o.value&&d.value===h.value)&&(o.value=f,h.value=d.value,k())}function k(){i("change",{pageNumber:o.value,pageSize:Number(d.value),totalPage:u.value}),i("update:modelValue",o.value),i("update:pageSize",d.value)}function C(e){e<0||e!==d.value&&(d.value=e,y())}function x(e,f,j){return l("li",{class:e},[l("a",{href:"javascript:void(0)",onClick:()=>y(f)},j)])}return q(()=>{y(a.modelValue||s)}),v({goPage:y,current:o,totalPage:u,pageNumbers:L,reload:k}),()=>{if(a.hideOnSinglePage&&u.value<=1)return;const e=[];if(r.value){const p={disabled:a.disabled,onChange:S=>C(Number(S.target.value))},m=E.value.map(S=>l("option",{value:S},S));a.displayAll&&m.push(l("option",{value:O},g.all));const T=l("li",{class:"v-pagination__list"},[l("a",{href:"javascript:void(0)"},[l("span",g.pageLength),l("select",p,m)])]);e.push(T)}if(a.info&&e.push(l("li",{class:"v-pagination__info"},[l("a",{href:"javascript:void(0)"},V.value)])),"default"in t){const p={pageNumber:o.value,pageSize:d.value,totalPage:u.value,totalRow:b.value,isFirst:P.value,isLast:R.value},m=l("li",{class:"v-pagination__slot"},[l("a",t.default(p))]);e.push(m)}if(a.first){const p=["v-pagination__first",{disabled:P.value}];e.push(x(p,s,g.first))}const f=["v-pagination__previous",{disabled:P.value}];e.push(x(f,o.value-1,g.previous)),a.pageNumber&&e.push(...L.value.map(p=>{const m={active:p===o.value};return x(m,p,p)}));const j=["v-pagination__next",{disabled:R.value}];if(e.push(x(j,o.value+1,g.next)),a.last){const p=["v-pagination__last",{disabled:R.value}];e.push(x(p,u.value,g.last))}return l("div",{class:F.value},[l("ul",e)])}}});N.install=(a,i={})=>{if(Object.keys(i).length){const{props:t}=N,{language:v,align:r,info:n,border:b,pageNumber:o,first:h,last:_,pageSizeMenu:g}=i;v&&(t.language.default=v),r&&(t.align.default=r),typeof n=="boolean"&&(t.info.default=n),typeof b=="boolean"&&(t.border.default=b),typeof o=="boolean"&&(t.pageNumber.default=o),typeof h=="boolean"&&(t.first.default=h),typeof _=="boolean"&&(t.last.default=_),typeof g<"u"&&(t.pageSizeMenu.default=g)}a.component(N.name,N)};export{N as A};