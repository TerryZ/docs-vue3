import{u as r,K as l,X as o,N as C,U as A,c as D,t as b}from"./chunks/handle.BATaQpoV.js";import{p as c,c as v,o as B,ag as a,G as n,j as k,k as i}from"./chunks/framework.DvaPEpzT.js";const f={class:"mb-3"},P={class:"row"},_={class:"col-md-6"},T={class:"col-md-6"},S={class:"mb-3"},q={class:"mb-3"},L=JSON.parse('{"title":"SelectPage","description":"","frontmatter":{},"headers":[],"relativePath":"select-page/index.md","filePath":"en/select-page/index.md","lastUpdated":1742107533000}'),x={name:"select-page/index.md"},R=Object.assign(x,{setup(w){const{fetchData:t,fetchSelectedData:d}=r(),{fetchData:y}=r(D),{fetchData:F}=r(b),E=c([1]),h=c([1,2,4]),g=[{title:"Id",data:"id"},{title:"Team name",data:p=>`${p.abbr} - ${p.name}`,width:250},{title:"Description",data:"desc"}],u=[{title:"area",data:"key"},{title:"time zone",data:"name"}];function m(p){return`(${p.key}) ${p.name}`}return(p,s)=>(B(),v("div",null,[s[4]||(s[4]=a("",21)),n(i(l),{onFetchData:i(t)},null,8,["onFetchData"]),s[5]||(s[5]=a("",7)),n(i(o),{columns:g,onFetchData:i(t)},null,8,["onFetchData"]),s[6]||(s[6]=a("",5)),n(i(C),{class:"border rounded-3 shadow-sm",onFetchData:i(t)},null,8,["onFetchData"]),s[7]||(s[7]=a("",2)),n(i(A),{class:"border rounded-3 shadow-sm",columns:g,onFetchData:i(t)},null,8,["onFetchData"]),s[8]||(s[8]=a("",3)),k("div",f,[n(i(l),{multiple:"",modelValue:h.value,"onUpdate:modelValue":s[0]||(s[0]=e=>h.value=e),onFetchData:i(t),onFetchSelectedData:i(d)},null,8,["modelValue","onFetchData","onFetchSelectedData"])]),s[9]||(s[9]=a("",5)),n(i(l),{multiple:"",modelValue:h.value,"onUpdate:modelValue":s[1]||(s[1]=e=>h.value=e),max:3,onFetchData:i(t),onFetchSelectedData:i(d)},null,8,["modelValue","onFetchData","onFetchSelectedData"]),s[10]||(s[10]=a("",4)),k("div",P,[k("div",_,[n(i(l),{disabled:"",modelValue:E.value,"onUpdate:modelValue":s[2]||(s[2]=e=>E.value=e),onFetchData:i(t),onFetchSelectedData:i(d)},null,8,["modelValue","onFetchData","onFetchSelectedData"])]),k("div",T,[n(i(l),{disabled:"",multiple:"",modelValue:h.value,"onUpdate:modelValue":s[3]||(s[3]=e=>h.value=e),onFetchData:i(t),onFetchSelectedData:i(d)},null,8,["modelValue","onFetchData","onFetchSelectedData"])])]),s[11]||(s[11]=a("",2)),k("div",S,[n(i(l),{pagination:!1,onFetchData:i(t)},null,8,["onFetchData"])]),s[12]||(s[12]=a("",3)),k("div",q,[n(i(l),{rtl:!0,onFetchData:i(t)},null,8,["onFetchData"])]),s[13]||(s[13]=a("",2)),n(i(l),{width:500,onFetchData:i(t)},null,8,["onFetchData"]),s[14]||(s[14]=a("",4)),n(i(l),{"key-prop":"key","label-prop":m,placeholder:"Countries of the world",onFetchData:i(y)},null,8,["onFetchData"]),s[15]||(s[15]=a("",3)),n(i(o),{"key-prop":"key","label-prop":"name",columns:u,placeholder:"World time zone",onFetchData:i(F)},null,8,["onFetchData"]),s[16]||(s[16]=a("",52))]))}});export{L as __pageData,R as default};
