import{J as a}from"./chunks/v-dropdown.ce941cc0.js";import{h as d,c as b,H as l,w as n,l as o,k as s,n as E,Q as p,o as v,t as g}from"./chunks/framework.e6cf29f1.js";const m=p("",15),F=s("button",{type:"button",class:"border rounded-3 px-3 py-1 shadow-sm"},"Click me",-1),f=s("div",{class:"p-5"},[s("div",null,"some contents"),s("div",null,"some contents"),s("div",null,"some contents")],-1),D=p("",3),_=s("button",{type:"button",class:"border rounded-3 px-3 py-1 shadow-sm"},"Hover me",-1),C=s("div",{class:"p-5"},[s("div",null,"some contents"),s("div",null,"some contents"),s("div",null,"some contents")],-1),w=p("",3),k=s("div",{class:"d-flex align-items-center justify-content-center bg-light rounded-3 px-3 py-1 fs-1 text-muted",style:{height:"10rem"}}," Mouse right click me ",-1),A=s("div",{class:"p-5"},[s("div",null,"some contents"),s("div",null,"some contents"),s("div",null,"some contents")],-1),q=p("",3),B=s("input",{type:"text",class:"border rounded-3 px-3 py-2",placeholder:"focus on me"},null,-1),x=s("div",{class:"p-5"},[s("div",null,"some contents"),s("div",null,"some contents"),s("div",null,"some contents")],-1),T=p("",2),P={class:"mb-3"},S=["disabled"],I=["disabled"],V=s("div",{class:"p-5"},[s("div",null,"some contents"),s("div",null,"some contents"),s("div",null,"some contents")],-1),M=p("",3),N=s("div",{class:"p-5"},[s("div",null,"some contents"),s("div",null,"some contents"),s("div",null,"some contents")],-1),j=p("",2),R=s("button",{type:"button",class:"border rounded-3 px-3 py-1 shadow-sm"},"Click me",-1),H=s("div",{class:"p-5"},[s("div",null,"some contents"),s("div",null,"some contents"),s("div",null,"some contents")],-1),Z=p("",2),G=s("button",{type:"button",class:"border rounded-3 px-3 py-1 shadow-sm"},"Align left",-1),z=s("div",{class:"p-5"},[s("div",null,"some contents"),s("div",null,"some contents"),s("div",null,"some contents")],-1),U=s("button",{type:"button",class:"border rounded-3 px-3 py-1 shadow-sm"},"Align center",-1),O=s("div",{class:"p-5"},[s("div",null,"some contents"),s("div",null,"some contents"),s("div",null,"some contents")],-1),W=s("button",{type:"button",class:"border rounded-3 px-3 py-1 shadow-sm"},"Align center",-1),J=s("div",{class:"p-5"},[s("div",null,"some contents"),s("div",null,"some contents"),s("div",null,"some contents")],-1),Q=p("",2),Y=s("button",{type:"button",class:"border rounded-3 px-3 py-1 shadow-sm"},"Click me",-1),K=s("div",{class:"p-5"},[s("div",null,"some contents"),s("div",null,"some contents"),s("div",null,"some contents")],-1),$=p("",61),as=JSON.parse('{"title":"Dropdown","description":"","frontmatter":{},"headers":[],"relativePath":"dropdown/index.md","filePath":"dropdown/index.md","lastUpdated":1694158864000}'),L={name:"dropdown/index.md"},ls=Object.assign(L,{setup(X){const e=d(!1),c=d(null);function y(r){e.value=r}function u(r){r.target.value==="3"?c.value.display():c.value.visible&&c.value.close()}return(r,i)=>(v(),b("div",null,[m,l(o(a),null,{trigger:n(()=>[F]),default:n(()=>[f]),_:1}),D,l(o(a),{trigger:"hover"},{trigger:n(()=>[_]),default:n(()=>[C]),_:1}),w,l(o(a),{trigger:"contextmenu","full-width":!0},{trigger:n(()=>[k]),default:n(()=>[A]),_:1}),q,l(o(a),{toggle:!1},{trigger:n(()=>[B]),default:n(()=>[x]),_:1}),T,s("div",P,[s("button",{type:"button",class:E(["border rounded-3 px-3 py-1 shadow-sm me-3",{"bg-light":!e.value}]),disabled:!e.value,onClick:i[0]||(i[0]=t=>y(!1))},"Enabled",10,S),s("button",{type:"button",class:E(["border rounded-3 px-3 py-1 shadow-sm",{"bg-light":e.value}]),disabled:e.value,onClick:i[1]||(i[1]=t=>y(!0))},"Disabled",10,I)]),l(o(a),{disabled:e.value},{trigger:n(({visible:t,disabled:h})=>[s("button",{type:"button",class:E(["border rounded-3 px-3 py-1 shadow-sm transition-all",{"border-primary":t.value,"bg-primary":t.value,"bg-opacity-10":t.value}])}," Click me (visible: "+g(t)+", disabled: "+g(h)+") ",3)]),default:n(()=>[V]),_:1},8,["disabled"]),M,l(o(a),{manual:!0,ref_key:"dropdownManual",ref:c},{trigger:n(()=>[s("input",{type:"text",class:"border rounded-3 px-3 py-2",placeholder:"type enter 3",onInput:u},null,32)]),default:n(()=>[N]),_:1},512),j,l(o(a),{border:!1},{trigger:n(()=>[R]),default:n(()=>[H]),_:1}),Z,l(o(a),{class:"me-5"},{trigger:n(()=>[G]),default:n(()=>[z]),_:1}),l(o(a),{align:"center",class:"me-5"},{trigger:n(()=>[U]),default:n(()=>[O]),_:1}),l(o(a),{align:"right"},{trigger:n(()=>[W]),default:n(()=>[J]),_:1}),Q,l(o(a),{width:500},{trigger:n(()=>[Y]),default:n(()=>[K]),_:1}),$]))}});export{as as __pageData,ls as default};