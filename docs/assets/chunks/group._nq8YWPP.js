import{r as c,d as m,c as f,s as r}from"./v-selectmenu.BRc44lu9.js";import{c as g,a}from"./base.GgHOi61m.js";import{p as i,G as t,a as d,ap as h}from"./framework.EgVEMnwr.js";function l(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!h(e)}function s(e,{attrs:p}){let o,u,n;return g(t(c,null,{default:()=>[t(m,null,{default:()=>[d("Menu group")]}),t(f,{modelValue:e.modelValue,onChange:e.onChange},{default:()=>[t(r,{name:"group1",title:"Group1"},l(o=a("group item 1-",1))?o:{default:()=>[o]}),t(r,{name:"group2",title:"Group2"},l(u=a("group item 2-",2))?u:{default:()=>[u]}),t(r,{name:"group3",title:"Group3"},l(n=a("group item 3-",3))?n:{default:()=>[n]})]})]}))}function C(){const e=i([]);function p(u){e.value.push(u)}function o(){return t(s,{onChange:p},null)}return{NormalMenuGroup:o,logs:e}}function N(){const e=i("group2");return t(s,{modelValue:e.value},null)}export{N as M,C as m};
