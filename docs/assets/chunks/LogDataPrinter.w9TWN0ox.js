import{c as t,o as e,j as o,t as r,F as l,B as i}from"./framework.DvaPEpzT.js";const d={class:"log-data-printer border rounded-3 overflow-hidden"},c={class:"py-2 px-3 border-bottom"},p={class:"bg-light p-3 font-monospace"},m={__name:"LogDataPrinter",props:{title:{type:String,default:"Event data logs"},logs:{type:Array,default:void 0}},setup(s){return(u,g)=>(e(),t("div",d,[o("div",c,r(s.title),1),o("div",p,[(e(!0),t(l,null,i(s.logs,(a,n)=>(e(),t("div",{key:n},[o("small",null,r(JSON.stringify(a,null,2)),1)]))),128))])]))}};export{m as _};
