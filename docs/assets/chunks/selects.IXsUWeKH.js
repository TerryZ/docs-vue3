import{u as V,h as t,v as b,q as o}from"./data.CRHUDsyF.js";import{u as C}from"./data.DU2x68Y8.js";import{_ as R}from"./DataChangeResult.BE28ETeN.js";import{G as e,a as s}from"./framework.EgVEMnwr.js";function U(a){const{dataValue:u,dataModel:r,change:i}=C(),{values:l,reset:c}=V();function d(){return e(o,{city:!1,language:a.value},null)}function v(){return e(o,{area:!1,language:a.value},null)}function g(){return e(o,{language:a.value},null)}function m(){return e("div",null,[e(t,{language:a.value,modelValue:u.value,"onUpdate:modelValue":n=>u.value=n,onChange:i},null),e(R,{value:u.value,model:r.value},null)])}function f(){return e("div",null,[e(t,{modelValue:l.value,"onUpdate:modelValue":n=>l.value=n,language:a.value},null),e("div",{class:"d-flex gap-3 mt-3"},[e("button",{class:"btn btn-dark",onClick:()=>{l.value=b}},[s("Change region")]),e("button",{class:"btn btn-dark",onClick:c},[s("Clear")])])])}function p(){return e(t,{modelValue:l.value,"onUpdate:modelValue":n=>l.value=n,language:a.value,disabled:!0},null)}return{RegionSelectsProvince:d,RegionSelectsCity:v,RegionSelectsArea:g,RegionSelectsTown:m,RegionSelectsInit:f,RegionSelectsDisabled:p}}export{U as u};
