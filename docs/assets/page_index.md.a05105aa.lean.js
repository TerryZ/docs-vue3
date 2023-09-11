import{h as p,u as L,g as U,c as F,k as s,H as o,l,F as w,D as N,a1 as c,a2 as O,a as t,a3 as j,a4 as T,a5 as h,w as M,Q as r,o as m,t as i}from"./chunks/framework.833c18f3.js";import{R as e}from"./chunks/v-page.06a927af.js";const Z=r("",21),H={class:"border rounded-3 shadow-sm p-2"},J=s("p",null,[t("Pagination "),s("a",{href:"#change"},"change"),t(" event response data")],-1),Q={class:"bg-light rounded-3 p-3 font-monospace"},Y=r("",2),X={class:"border rounded-3 shadow-sm pt-2 ps-2 mb-2 d-flex flex-wrap"},W=["textContent"],$=r("",3),K={class:"mb-3"},ss=r("",2),as={class:"mb-3"},ns=s("option",null,"left",-1),ls=s("option",null,"center",-1),ps=s("option",null,"right",-1),os=[ns,ls,ps],es=r("",2),ts=r("",2),cs={class:"border shadow-sm p-2 d-inline-flex rounded-3 mb-3"},rs=s("label",{for:"radio-enabled"},"Enabled",-1),Es=s("label",{for:"radio-disabled"},"Disabled",-1),ys={class:"my-3"},is=s("h3",{id:"modules-on-off",tabindex:"-1"},[t("Modules on / off "),s("a",{class:"header-anchor",href:"#modules-on-off","aria-label":'Permalink to "Modules on / off"'},"​")],-1),ds=s("p",null,"Setup pagination modules on or off",-1),us={class:"my-3 user-select-none border shadow-sm p-2 rounded-3"},gs=s("label",{for:"checkbox-info"},"Pagination status information",-1),Fs=s("label",{for:"checkbox-page-size-menu"},"Page size list",-1),hs=s("label",{for:"checkbox-page-number"},"Page numbers",-1),ms=s("label",{for:"checkbox-first"},"First page button",-1),vs=s("label",{for:"checkbox-last"},"Last page button",-1),bs=r("",3),fs={class:"d-flex"},Cs={class:"me-1"},Bs=["textContent"],As={class:"me-1"},Ds=["textContent"],qs={class:"me-1"},_s=["textContent"],ks={class:"me-1"},Ps=["textContent"],xs={class:"me-1"},ws=["textContent"],Ns=["textContent"],Ts=r("",3),Ss=r("",53),Gs=JSON.parse('{"title":"Pagination","description":"","frontmatter":{},"headers":[],"relativePath":"page/index.md","filePath":"page/index.md","lastUpdated":1694423486000}'),zs={name:"page/index.md"},Ls=Object.assign(zs,{setup(Is){const f=Array(88).fill(0).map((y,n)=>n+1),k=p([]),P=p([]),d=p(!1),C=p("left"),v=p(3),u=p("2"),B=p(!0),A=p(!0),D=p(!0),q=p(!0),_=p(!0),{lang:E}=L(),S=U(()=>q.value?[10,20]:!1);function z(y){k.value.push(y)}function I({pageNumber:y,pageSize:n}){const a=n*(y-1),g=a+n>f.length?f.length:a+n;P.value=f.filter((x,b)=>b>=a&&b<g)}function V(){if(!u.value)return;const y=Number(u.value);if(window.isNaN(y)){u.value="";return}v.value=y}return(y,n)=>(m(),F("div",null,[Z,s("div",H,[o(l(e),{"total-row":21,language:l(E),align:"center",onChange:z},null,8,["language"])]),J,s("div",Q,[(m(!0),F(w,null,N(k.value,(a,g)=>(m(),F("div",{key:g},[s("small",null,i(JSON.stringify(a,null,2)),1)]))),128))]),Y,s("div",X,[(m(!0),F(w,null,N(P.value,a=>(m(),F("div",{style:{height:"100px",width:"126px"},class:"rounded-2 bg-light me-2 mb-2 fs-1 text-muted d-flex align-items-center justify-content-center",key:a,textContent:i(a)},null,8,W))),128))]),o(l(e),{"total-row":88,language:l(E),align:"left",onChange:I},null,8,["language"]),$,s("div",K,[c(s("input",{type:"text",class:"border border-secondary me-2 rounded-1 px-2","onUpdate:modelValue":n[0]||(n[0]=a=>u.value=a)},null,512),[[O,u.value]]),s("button",{type:"button",class:"border me-2 px-3 rounded-1 shadow-sm",onClick:V}," Go "),s("button",{type:"button",class:"border px-3 rounded-1 shadow-sm",onClick:n[1]||(n[1]=a=>v.value++)}," pageNumber + 1 ")]),o(l(e),{align:"left",modelValue:v.value,"onUpdate:modelValue":n[2]||(n[2]=a=>v.value=a),"total-row":58,language:l(E)},null,8,["modelValue","language"]),ss,s("div",as,[t(" Specify alignment direction "),c(s("select",{"onUpdate:modelValue":n[3]||(n[3]=a=>C.value=a),style:{"-webkit-appearance":"auto"},class:"border border-secondary"},os,512),[[j,C.value]])]),o(l(e),{"total-row":28,align:C.value,language:l(E),border:""},null,8,["align","language"]),es,o(l(e),{"total-row":28,language:l(E),align:"left",border:""},null,8,["language"]),ts,s("div",cs,[c(s("input",{type:"radio","onUpdate:modelValue":n[4]||(n[4]=a=>d.value=a),value:!1,id:"radio-enabled"},null,512),[[T,d.value]]),rs,c(s("input",{type:"radio","onUpdate:modelValue":n[5]||(n[5]=a=>d.value=a),value:!0,id:"radio-disabled"},null,512),[[T,d.value]]),Es]),s("div",ys,[o(l(e),{"total-row":28,disabled:d.value,align:"left"},null,8,["disabled"])]),o(l(e),{"total-row":28,disabled:d.value,border:"",align:"left"},null,8,["disabled"]),is,ds,s("div",us,[s("div",null,[c(s("input",{type:"checkbox",value:!0,"onUpdate:modelValue":n[6]||(n[6]=a=>B.value=a),id:"checkbox-info"},null,512),[[h,B.value]]),gs]),s("div",null,[c(s("input",{type:"checkbox","onUpdate:modelValue":n[7]||(n[7]=a=>q.value=a),id:"checkbox-page-size-menu"},null,512),[[h,q.value]]),Fs]),s("div",null,[c(s("input",{type:"checkbox",value:!0,"onUpdate:modelValue":n[8]||(n[8]=a=>_.value=a),id:"checkbox-page-number"},null,512),[[h,_.value]]),hs]),s("div",null,[c(s("input",{type:"checkbox",value:!0,"onUpdate:modelValue":n[9]||(n[9]=a=>A.value=a),id:"checkbox-first"},null,512),[[h,A.value]]),ms]),s("div",null,[c(s("input",{type:"checkbox",value:!0,"onUpdate:modelValue":n[10]||(n[10]=a=>D.value=a),id:"checkbox-last"},null,512),[[h,D.value]]),vs])]),o(l(e),{align:"left","total-row":28,language:l(E),info:B.value,"page-size-menu":S.value,"page-number":_.value,first:A.value,last:D.value},null,8,["language","info","page-size-menu","page-number","first","last"]),bs,o(l(e),{border:"",align:"left","total-row":28,"page-size-menu":!1,info:!1,first:!1,last:!1,language:l(E)},{default:M(({pageNumber:a,pageSize:g,totalPage:x,totalRow:b,isFirst:R,isLast:G})=>[s("div",fs,[s("div",Cs,[t("page: "),s("span",{textContent:i(a)},null,8,Bs)]),s("div",As,[t("pageSize: "),s("span",{textContent:i(g)},null,8,Ds)]),s("div",qs,[t("totalPage: "),s("span",{textContent:i(x)},null,8,_s)]),s("div",ks,[t("totalRow: "),s("span",{textContent:i(b)},null,8,Ps)]),s("div",xs,[t("isFirst: "),s("span",{textContent:i(R)},null,8,ws)]),s("div",null,[t("isLast: "),s("span",{textContent:i(G)},null,8,Ns)])])]),_:1},8,["language"]),Ts,o(l(e),{"total-row":28,"display-all":!0,language:l(E),align:"left"},null,8,["language"]),Ss]))}});export{Gs as __pageData,Ls as default};
