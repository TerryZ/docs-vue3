import{o as t,c as e,j as o,t as r,F as l,C as i}from"./framework.CRoWkN6-.js";const d={class:"log-data-printer border rounded-3 overflow-hidden"},c={class:"py-2 px-3 border-bottom"},p={class:"bg-light p-3 font-monospace"},m={__name:"LogDataPrinter",props:{title:{type:String,default:"Event data logs"},logs:{type:Array,default:void 0}},setup(s){return(u,g)=>(t(),e("div",d,[o("div",c,r(s.title),1),o("div",p,[(t(!0),e(l,null,i(s.logs,(a,n)=>(t(),e("div",{key:n},[o("small",null,r(JSON.stringify(a,null,2)),1)]))),128))])]))}};export{m as _};