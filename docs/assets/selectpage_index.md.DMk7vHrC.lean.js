import{K as e,X as g,N as b,U as C,u as r,c as v,t as B}from"./chunks/handle.Ch-KK7q7.js";import{s as c,c as f,I as i,k as s,j as k,a3 as a,o as D}from"./chunks/framework.DfkYPkeI.js";const A=a("",21),_=a("",7),q=a("",5),P=a("",2),x=a("",3),T={class:"mb-3"},S=a("",5),w=a("",4),V={class:"row"},I={class:"col-md-6"},L={class:"col-md-6"},j=a("",2),z={class:"mb-3"},R=a("",3),N={class:"mb-3"},Z=a("",2),K=a("",4),W=a("",3),U=a("",107),G=JSON.parse('{"title":"SelectPage","description":"","frontmatter":{},"headers":[],"relativePath":"selectpage/index.md","filePath":"selectpage/index.md","lastUpdated":1697008323000}'),$={name:"selectpage/index.md"},J=Object.assign($,{setup(H){const{fetchData:t,fetchSelectedData:d}=r(),{fetchData:y}=r(v),{fetchData:F}=r(B),E=c([1]),h=c([1,2,4]),o=[{title:"Id",data:"id"},{title:"Team name",data:p=>`${p.abbr} - ${p.name}`,width:250},{title:"Description",data:"desc"}],u=[{title:"area",data:"key"},{title:"time zone",data:"name"}];function m(p){return`(${p.key}) ${p.name}`}return(p,n)=>(D(),f("div",null,[A,i(s(e),{onFetchData:s(t)},null,8,["onFetchData"]),_,i(s(g),{columns:o,onFetchData:s(t)},null,8,["onFetchData"]),q,i(s(b),{class:"border rounded-3 shadow-sm",onFetchData:s(t)},null,8,["onFetchData"]),P,i(s(C),{class:"border rounded-3 shadow-sm",columns:o,onFetchData:s(t)},null,8,["onFetchData"]),x,k("div",T,[i(s(e),{multiple:"",modelValue:h.value,"onUpdate:modelValue":n[0]||(n[0]=l=>h.value=l),onFetchData:s(t),onFetchSelectedData:s(d)},null,8,["modelValue","onFetchData","onFetchSelectedData"])]),S,i(s(e),{multiple:"",modelValue:h.value,"onUpdate:modelValue":n[1]||(n[1]=l=>h.value=l),max:3,onFetchData:s(t),onFetchSelectedData:s(d)},null,8,["modelValue","onFetchData","onFetchSelectedData"]),w,k("div",V,[k("div",I,[i(s(e),{disabled:"",modelValue:E.value,"onUpdate:modelValue":n[2]||(n[2]=l=>E.value=l),onFetchData:s(t),onFetchSelectedData:s(d)},null,8,["modelValue","onFetchData","onFetchSelectedData"])]),k("div",L,[i(s(e),{disabled:"",multiple:"",modelValue:h.value,"onUpdate:modelValue":n[3]||(n[3]=l=>h.value=l),onFetchData:s(t),onFetchSelectedData:s(d)},null,8,["modelValue","onFetchData","onFetchSelectedData"])])]),j,k("div",z,[i(s(e),{pagination:!1,onFetchData:s(t)},null,8,["onFetchData"])]),R,k("div",N,[i(s(e),{rtl:!0,onFetchData:s(t)},null,8,["onFetchData"])]),Z,i(s(e),{width:500,onFetchData:s(t)},null,8,["onFetchData"]),K,i(s(e),{"key-prop":"key","label-prop":m,placeholder:"Countries of the world",onFetchData:s(y)},null,8,["onFetchData"]),W,i(s(g),{"key-prop":"key","label-prop":"name",columns:u,placeholder:"World time zone",onFetchData:s(F)},null,8,["onFetchData"]),U]))}});export{G as __pageData,J as default};
