import{h as l,g as G,c as g,k as s,H as p,l as o,F as x,D as N,a1 as c,a2 as L,a as t,a3 as O,a4 as w,a5 as F,w as U,Q as r,o as h,t as y}from"./chunks/framework.d4a444b2.js";import{R as e}from"./chunks/v-page.f88ae70b.js";const j=r("",21),M={class:"border rounded-3 shadow-sm p-2"},Z=s("p",null,[t("分页事件 "),s("a",{href:"#change"},"change"),t(" 响应数据")],-1),Q={class:"bg-light rounded-3 p-3 font-monospace"},H=r("",2),J={class:"border rounded-3 shadow-sm pt-2 ps-2 mb-2 d-flex flex-wrap"},W=["textContent"],Y=r("",3),$={class:"mb-3"},K=r("",2),X={class:"mb-3"},ss=s("option",null,"left",-1),as=s("option",null,"center",-1),ns=s("option",null,"right",-1),ls=[ss,as,ns],ps=r("",2),os=r("",2),es={class:"border shadow-sm p-2 d-inline-flex rounded-3 mb-3"},ts=s("label",{for:"radio-enabled"},"启用",-1),cs=s("label",{for:"radio-disabled"},"禁用",-1),rs={class:"my-3"},Es=s("h3",{id:"功能模块的启用与关闭",tabindex:"-1"},[t("功能模块的启用与关闭 "),s("a",{class:"header-anchor",href:"#功能模块的启用与关闭","aria-label":'Permalink to "功能模块的启用与关闭"'},"​")],-1),ys=s("p",null,"设置分页栏模块的启用与关闭",-1),is={class:"my-3 user-select-none border shadow-sm p-2 rounded-3"},ds=s("label",{for:"checkbox-info"},"分页信息栏",-1),us=s("label",{for:"checkbox-page-size-menu"},"每页数据量栏",-1),gs=s("label",{for:"checkbox-page-number"},"分页码栏",-1),Fs=s("label",{for:"checkbox-first"},"首页按钮",-1),hs=s("label",{for:"checkbox-last"},"尾页按钮",-1),vs=r("",3),bs={class:"d-flex"},ms={class:"me-1"},Cs=["textContent"],fs={class:"me-1"},Bs=["textContent"],As={class:"me-1"},qs=["textContent"],Ds={class:"me-1"},_s=["textContent"],ks={class:"me-1"},Ps=["textContent"],xs=["textContent"],Ns=r("",3),ws=r("",53),Vs=JSON.parse('{"title":"Pagination","description":"","frontmatter":{},"headers":[],"relativePath":"cn/page/index.md","filePath":"cn/page/index.md","lastUpdated":1694852604000}'),Ts={name:"cn/page/index.md"},Rs=Object.assign(Ts,{setup(Ss){const m=Array(88).fill(0).map((E,n)=>n+1),_=l([]),k=l([]),i=l(!1),C=l("left"),v=l(3),d=l("2"),f=l(!0),B=l(!0),A=l(!0),q=l(!0),D=l(!0),T=G(()=>q.value?[10,20]:!1);function S(E){_.value.push(E)}function z({pageNumber:E,pageSize:n}){const a=n*(E-1),u=a+n>m.length?m.length:a+n;k.value=m.filter((P,b)=>b>=a&&b<u)}function I(){if(!d.value)return;const E=Number(d.value);if(window.isNaN(E)){d.value="";return}v.value=E}return(E,n)=>(h(),g("div",null,[j,s("div",M,[p(o(e),{align:"center",language:"cn","total-row":21,onChange:S})]),Z,s("div",Q,[(h(!0),g(x,null,N(_.value,(a,u)=>(h(),g("div",{key:u},[s("small",null,y(JSON.stringify(a,null,2)),1)]))),128))]),H,s("div",J,[(h(!0),g(x,null,N(k.value,a=>(h(),g("div",{style:{height:"100px",width:"126px"},class:"rounded-2 bg-light me-2 mb-2 fs-1 text-body-secondary d-flex align-items-center justify-content-center",key:a,textContent:y(a)},null,8,W))),128))]),p(o(e),{align:"left",language:"cn","total-row":88,onChange:z}),Y,s("div",$,[c(s("input",{type:"text",class:"border border-secondary me-2 rounded-1 px-2","onUpdate:modelValue":n[0]||(n[0]=a=>d.value=a)},null,512),[[L,d.value]]),s("button",{type:"button",class:"border me-2 px-3 rounded-1 shadow-sm",onClick:I}," Go "),s("button",{type:"button",class:"border px-3 rounded-1 shadow-sm",onClick:n[1]||(n[1]=a=>v.value++)}," pageNumber + 1 ")]),p(o(e),{align:"left",language:"cn",modelValue:v.value,"onUpdate:modelValue":n[2]||(n[2]=a=>v.value=a),"total-row":58},null,8,["modelValue"]),K,s("div",X,[t(" 指定对齐方向 "),c(s("select",{"onUpdate:modelValue":n[3]||(n[3]=a=>C.value=a),style:{"-webkit-appearance":"auto"},class:"border border-secondary"},ls,512),[[O,C.value]])]),p(o(e),{"total-row":28,align:C.value,language:"cn",border:""},null,8,["align"]),ps,p(o(e),{"total-row":28,align:"left",language:"cn",border:""}),os,s("div",es,[c(s("input",{type:"radio","onUpdate:modelValue":n[4]||(n[4]=a=>i.value=a),value:!1,id:"radio-enabled"},null,512),[[w,i.value]]),ts,c(s("input",{type:"radio","onUpdate:modelValue":n[5]||(n[5]=a=>i.value=a),value:!0,id:"radio-disabled"},null,512),[[w,i.value]]),cs]),s("div",rs,[p(o(e),{"total-row":28,disabled:i.value,language:"cn",align:"left"},null,8,["disabled"])]),p(o(e),{"total-row":28,disabled:i.value,border:"",align:"left",language:"cn"},null,8,["disabled"]),Es,ys,s("div",is,[s("div",null,[c(s("input",{type:"checkbox",value:!0,"onUpdate:modelValue":n[6]||(n[6]=a=>f.value=a),id:"checkbox-info"},null,512),[[F,f.value]]),ds]),s("div",null,[c(s("input",{type:"checkbox","onUpdate:modelValue":n[7]||(n[7]=a=>q.value=a),id:"checkbox-page-size-menu"},null,512),[[F,q.value]]),us]),s("div",null,[c(s("input",{type:"checkbox",value:!0,"onUpdate:modelValue":n[8]||(n[8]=a=>D.value=a),id:"checkbox-page-number"},null,512),[[F,D.value]]),gs]),s("div",null,[c(s("input",{type:"checkbox",value:!0,"onUpdate:modelValue":n[9]||(n[9]=a=>B.value=a),id:"checkbox-first"},null,512),[[F,B.value]]),Fs]),s("div",null,[c(s("input",{type:"checkbox",value:!0,"onUpdate:modelValue":n[10]||(n[10]=a=>A.value=a),id:"checkbox-last"},null,512),[[F,A.value]]),hs])]),p(o(e),{align:"left",language:"cn","total-row":28,info:f.value,"page-size-menu":T.value,"page-number":D.value,first:B.value,last:A.value},null,8,["info","page-size-menu","page-number","first","last"]),vs,p(o(e),{border:"",align:"left",language:"cn","total-row":28,"page-size-menu":!1,info:!1,first:!1,last:!1},{default:U(({pageNumber:a,pageSize:u,totalPage:P,totalRow:b,isFirst:V,isLast:R})=>[s("div",bs,[s("div",ms,[t("page: "),s("span",{textContent:y(a)},null,8,Cs)]),s("div",fs,[t("pageSize: "),s("span",{textContent:y(u)},null,8,Bs)]),s("div",As,[t("totalPage: "),s("span",{textContent:y(P)},null,8,qs)]),s("div",Ds,[t("totalRow: "),s("span",{textContent:y(b)},null,8,_s)]),s("div",ks,[t("isFirst: "),s("span",{textContent:y(V)},null,8,Ps)]),s("div",null,[t("isLast: "),s("span",{textContent:y(R)},null,8,xs)])])]),_:1}),Ns,p(o(e),{"total-row":28,"display-all":!0,align:"left",language:"cn"}),ws]))}});export{Vs as __pageData,Rs as default};
