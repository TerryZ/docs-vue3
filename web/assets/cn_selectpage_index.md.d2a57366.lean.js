import{Z as p,G as F,B as b,V as v,u as y,c as B,t as D}from"./chunks/handle.3ae1c1bc.js";import{h,c as k,H as a,l as s,k as r,Q as n,o as A}from"./chunks/framework.e6cf29f1.js";const f=n("",21),q=n("",7),_=n("",5),P=n("",2),S=n("",3),T={class:"mb-3"},x=n("",5),w=n("",4),L={class:"row"},V={class:"col-md-6"},z={class:"col-md-6"},I=n("",2),N={class:"mb-3"},R=n("",3),j={class:"mb-3"},Z=n("",2),$=n("",4),G=n("",3),U=n("",101),W=JSON.parse('{"title":"SelectPage","description":"","frontmatter":{},"headers":[],"relativePath":"cn/selectpage/index.md","filePath":"cn/selectpage/index.md","lastUpdated":1694167428000}'),H={name:"cn/selectpage/index.md"},Y=Object.assign(H,{setup(J){const{fetchData:l,fetchSelectedData:E}=y(),{fetchData:u}=y(B),{fetchData:g}=y(D),i=h([1]),t=h([1,2,4]),d=[{title:"Id",data:"id"},{title:"球队名称",data:c=>`${c.abbr} - ${c.name}`,width:250},{title:"中文名",data:"desc"}],m=[{title:"area",data:"key"},{title:"time zone",data:"name"}];function C(c){return`(${c.key}) ${c.name}`}return(c,o)=>(A(),k("div",null,[f,a(s(p),{language:"zh-chs","label-prop":"desc",onFetchData:s(l)},null,8,["onFetchData"]),q,a(s(F),{"label-prop":"desc",language:"zh-chs",columns:d,onFetchData:s(l)},null,8,["onFetchData"]),_,a(s(b),{language:"zh-chs",class:"border rounded-3 shadow-sm",onFetchData:s(l)},null,8,["onFetchData"]),P,a(s(v),{language:"zh-chs",class:"border rounded-3 shadow-sm",columns:d,onFetchData:s(l)},null,8,["onFetchData"]),S,r("div",T,[a(s(p),{language:"zh-chs","label-prop":"desc",multiple:"",modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),onFetchData:s(l),onFetchSelectedData:s(E)},null,8,["modelValue","onFetchData","onFetchSelectedData"])]),x,a(s(p),{language:"zh-chs","label-prop":"desc",multiple:"",modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=e=>t.value=e),max:3,onFetchData:s(l),onFetchSelectedData:s(E)},null,8,["modelValue","onFetchData","onFetchSelectedData"]),w,r("div",L,[r("div",V,[a(s(p),{"label-prop":"desc",disabled:"",modelValue:i.value,"onUpdate:modelValue":o[2]||(o[2]=e=>i.value=e),onFetchData:s(l),onFetchSelectedData:s(E)},null,8,["modelValue","onFetchData","onFetchSelectedData"])]),r("div",z,[a(s(p),{"label-prop":"desc",disabled:"",multiple:"",modelValue:t.value,"onUpdate:modelValue":o[3]||(o[3]=e=>t.value=e),onFetchData:s(l),onFetchSelectedData:s(E)},null,8,["modelValue","onFetchData","onFetchSelectedData"])])]),I,r("div",N,[a(s(p),{"label-prop":"desc",language:"zh-chs",pagination:!1,onFetchData:s(l)},null,8,["onFetchData"])]),R,r("div",j,[a(s(p),{"label-prop":"desc",language:"zh-chs",rtl:!0,onFetchData:s(l)},null,8,["onFetchData"])]),Z,a(s(p),{"label-prop":"desc",language:"zh-chs",width:500,onFetchData:s(l)},null,8,["onFetchData"]),$,a(s(p),{"key-prop":"key",language:"zh-chs","label-prop":C,placeholder:"Countries of the world",onFetchData:s(u)},null,8,["onFetchData"]),G,a(s(F),{"key-prop":"key","label-prop":"name",language:"zh-chs",columns:m,placeholder:"World time zone",onFetchData:s(g)},null,8,["onFetchData"]),U]))}});export{W as __pageData,Y as default};
