import{d as E,aa as V,h as _,g as b,x as F,j as T,a9 as n}from"./framework.833c18f3.js";(function(){try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".v-pagination{display:flex;justify-content:flex-start;box-sizing:border-box}.v-pagination--right{justify-content:flex-end}.v-pagination--center{justify-content:center}.v-pagination.v-pagination--disabled a,.v-pagination.v-pagination--disabled select{color:#999!important}.v-pagination.v-pagination--disabled.v-pagination--border a,.v-pagination.v-pagination--disabled.v-pagination--border a:hover{background-color:#fafafa}.v-pagination ul{margin:0;padding:0;display:flex}.v-pagination ul li{list-style:none;display:flex}.v-pagination ul li.v-pagination__info a,.v-pagination ul li.v-pagination__list a{cursor:default;color:#333}.v-pagination ul li a{padding:.3rem .6rem;text-decoration:none;line-height:1.3;font-size:14px;margin:0;outline:0;color:#333;border-radius:.25rem;display:inline-flex;align-items:center}.v-pagination ul li:not(.active):not(.disabled):not(.v-pagination__list):not(.v-pagination__info):not(.v-pagination__slot) a:hover{background-color:#fafafa}.v-pagination ul li.active a{background-color:#eee;color:#aaa}.v-pagination ul li.disabled a{color:#999!important;cursor:default}.v-pagination ul li select{width:auto!important;font-size:12px;padding:0;outline:0;margin:0 0 0 5px;border:1px solid #ccc;color:#333;border-radius:.3rem}.v-pagination.v-pagination--border ul{box-shadow:0 1px 2px #0000000d;border-radius:.25rem}.v-pagination.v-pagination--border ul li:not(:first-child) a{margin-left:-1px}.v-pagination.v-pagination--border ul li a{border:1px solid #DEE2E6;border-radius:0}.v-pagination.v-pagination--border ul li:first-child>a{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.v-pagination.v-pagination--border ul li:last-child>a{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.v-pagination.v-pagination--border ul li.active a{color:#999;background-color:#eee}")),document.head.appendChild(a)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();const[O,R,Z,q,D]=["cn","en","de","jp","pt"],L={[O]:{pageLength:"每页记录数 ",pageInfo:"当前显示第 #pageNumber# / #totalPage# 页（共#totalRow#条记录）",first:"首页",previous:"«",next:"»",last:"尾页",all:"全部"},[R]:{pageLength:"Page length ",pageInfo:"Current #pageNumber# / #totalPage# (total #totalRow# records)",first:"First",previous:"«",next:"»",last:"Last",all:"All"},[Z]:{pageLength:"Seitenlänge ",pageInfo:"Aktuell #pageNumber# / #totalPage# (gesamt #totalRow# Aufzeichnungen)",first:"Zuerst",previous:"«",next:"»",last:"Letzte",all:"Alle"},[q]:{pageLength:"ページごとの記録数",pageInfo:"現在の第 #pageNumber# / #totalPage# ページ（全部で #totalRow# 条の記録）",first:"トップページ",previous:"«",next:"»",last:"尾のページ",all:"すべて"},[D]:{pageLength:"Resultados por página ",pageInfo:"#pageNumber# / #totalPage# (total de #totalRow#)",first:"Início",previous:"<",next:">",last:"Fim",all:"Todos"}},p=1,G=5,M=10,H=[M,20,50,100],I=0;function J(a,i,t){if(i<=t)return p;const v=Math.floor(t/2),l=i-t+1,r=a-v;return r<p?p:r>l?l:r}function K(a,i,t){const v=J(a,i,t);return Array.from({length:t}).map((l,r)=>v+r).filter(l=>l>=p&&l<=i)}const j=E({name:"PaginationBar",props:{modelValue:{type:Number,default:0},totalRow:{type:Number,default:0},language:{type:String,default:R},pageSizeMenu:{type:[Boolean,Array],default:()=>H},align:{type:String,default:"right"},disabled:{type:Boolean,default:!1},border:{type:Boolean,default:!1},info:{type:Boolean,default:!0},pageNumber:{type:Boolean,default:!0},first:{type:Boolean,default:!0},last:{type:Boolean,default:!0},displayAll:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(a,{emit:i,slots:t,expose:v}){const{pageSizeMenu:l,totalRow:r}=V(a),o=_(0),s=_(l.value===!1?M:l.value[0]),N=_(G),g=_(L[a.language]||L[R]),m=_(-1),d=b(()=>s.value===I?p:Math.ceil(r.value/s.value)),A=b(()=>K(o.value,d.value,N.value)),S=b(()=>g.value.pageInfo.replace("#pageNumber#",o.value).replace("#totalPage#",d.value).replace("#totalRow#",r.value)),k=b(()=>({"v-pagination":!0,"v-pagination--border":a.border,"v-pagination--right":a.align==="right","v-pagination--center":a.align==="center","v-pagination--disabled":a.disabled})),z=b(()=>o.value===p),P=b(()=>o.value===d.value);F(()=>a.modelValue,e=>{typeof e=="number"&&e>0&&h(e,!1)});function h(e=p,x=!0){if(a.disabled||typeof e!="number")return;let f=e<p?p:e;e>d.value&&d.value>0&&(f=d.value),!(f===o.value&&s.value===m.value)&&(o.value=f,x&&i("update:modelValue",o.value),m.value=s.value,B())}function B(){i("change",{pageNumber:o.value,pageSize:Number(s.value)})}function y(e,x,f){return n("li",{class:e},[n("a",{href:"javascript:void(0)",onClick:()=>h(x)},f)])}return T(()=>{h(a.modelValue||p)}),v({current:o,totalPage:d,pageNumbers:A,goPage:h,reload:B}),()=>{const e=[];if(Array.isArray(l.value)&&l.value.length){const u={disabled:a.disabled,onChange:w=>{s.value=Number(w.target.value),h()}},c=l.value.map(w=>n("option",{value:w},w));a.displayAll&&c.push(n("option",{value:I},g.value.all));const C=n("li",{class:"v-pagination__list"},[n("a",{href:"javascript:void(0)"},[n("span",g.value.pageLength),n("select",u,c)])]);e.push(C)}if(a.info&&e.push(n("li",{class:"v-pagination__info"},[n("a",{href:"javascript:void(0)"},S.value)])),"default"in t){const u={pageNumber:o.value,pageSize:s.value,totalPage:d.value,totalRow:r.value,isFirst:z.value,isLast:P.value},c=n("li",{class:"v-pagination__slot"},[n("a",t.default(u))]);e.push(c)}if(a.first){const u=["v-pagination__first",{disabled:z.value}];e.push(y(u,p,g.value.first))}const x=["v-pagination__previous",{disabled:z.value}];e.push(y(x,o.value-1,g.value.previous)),a.pageNumber&&e.push(...A.value.map(u=>{const c={active:u===o.value};return y(c,u,u)}));const f=["v-pagination__next",{disabled:P.value}];if(e.push(y(f,o.value+1,g.value.next)),a.last){const u=["v-pagination__last",{disabled:P.value}];e.push(y(u,d.value,g.value.last))}return n("div",{class:k.value},[n("ul",e)])}}});j.install=(a,i={})=>{if(Object.keys(i).length){const{props:t}=j,{language:v,align:l,info:r,border:o,pageNumber:s,first:N,last:g,pageSizeMenu:m}=i;v&&(t.language.default=v),l&&(t.align.default=l),typeof r=="boolean"&&(t.info.default=r),typeof o=="boolean"&&(t.border.default=o),typeof s=="boolean"&&(t.pageNumber.default=s),typeof N=="boolean"&&(t.first.default=N),typeof g=="boolean"&&(t.last.default=g),typeof m<"u"&&(t.pageSizeMenu.default=m)}a.component(j.name,j)};export{j as R};
