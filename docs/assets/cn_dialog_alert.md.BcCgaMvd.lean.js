import{o,c as g,j as s,a3 as h,a4 as k,k as n,a5 as e,a6 as c,a7 as r}from"./chunks/framework.BhJCiThr.js";import{u as E}from"./chunks/alert.DQPF96t7.js";import"./chunks/v-dialogs.lIx8ktvn.js";const y=r("",4),F={class:"my-3"},A={class:"form-check form-check-inline"},u=s("label",{class:"form-check-label",for:"toast-info"},"Information",-1),D={class:"form-check form-check-inline"},C=s("label",{class:"form-check-label",for:"toast-warning"},"Warning",-1),b={class:"form-check form-check-inline"},m=s("label",{class:"form-check-label",for:"toast-error"},"Error",-1),f={class:"form-check form-check-inline"},_=s("label",{class:"form-check-label",for:"toast-success"},"Success",-1),B={class:"my-3"},v={class:"form-check"},T=s("label",{class:"form-check-label",for:"alert-colorful-shadow"}," Colorful Shadow ",-1),S=r("",2),P=r("",2),x={class:"my-3"},V=r("",4),O=JSON.parse('{"title":"Alert","description":"","frontmatter":{},"headers":[],"relativePath":"cn/dialog/alert.md","filePath":"cn/dialog/alert.md","lastUpdated":1720339179000}'),w={name:"cn/dialog/alert.md"},R=Object.assign(w,{setup(I){const{colorfulShadow:p,messageType:l,openAlertCN:t,openConfirmCN:d}=E();return(q,i)=>(o(),g("div",null,[y,s("div",F,[s("div",A,[h(s("input",{class:"form-check-input",type:"radio",id:"toast-info",value:"info","onUpdate:modelValue":i[0]||(i[0]=a=>e(l)?l.value=a:null)},null,512),[[k,n(l)]]),u]),s("div",D,[h(s("input",{class:"form-check-input",type:"radio",id:"toast-warning",value:"warning","onUpdate:modelValue":i[1]||(i[1]=a=>e(l)?l.value=a:null)},null,512),[[k,n(l)]]),C]),s("div",b,[h(s("input",{class:"form-check-input",type:"radio",id:"toast-error",value:"error","onUpdate:modelValue":i[2]||(i[2]=a=>e(l)?l.value=a:null)},null,512),[[k,n(l)]]),m]),s("div",f,[h(s("input",{class:"form-check-input",type:"radio",id:"toast-success",value:"success","onUpdate:modelValue":i[3]||(i[3]=a=>e(l)?l.value=a:null)},null,512),[[k,n(l)]]),_])]),s("div",B,[s("div",v,[h(s("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":i[4]||(i[4]=a=>e(p)?p.value=a:null),"true-value":!0,"false-value":!1,id:"alert-colorful-shadow"},null,512),[[c,n(p)]]),T])]),s("div",null,[s("button",{type:"button",class:"btn btn-dark",onClick:i[5]||(i[5]=a=>n(t)({colorfulShadow:n(p),messageType:n(l)}))},"Open message")]),S,s("div",null,[s("button",{type:"button",class:"btn btn-dark",onClick:i[6]||(i[6]=(...a)=>n(d)&&n(d)(...a))},"Confirm")]),P,s("div",x,[s("button",{type:"button",class:"btn btn-dark me-2",onClick:i[7]||(i[7]=a=>n(t)({icon:!1}))},"No message type icon"),s("button",{type:"button",class:"btn btn-dark me-2",onClick:i[8]||(i[8]=a=>n(t)({header:!1}))},"No header"),s("button",{type:"button",class:"btn btn-dark me-2",onClick:i[9]||(i[9]=a=>n(t)({title:"Custom title"}))},"Custom title"),s("button",{type:"button",class:"btn btn-dark",onClick:i[10]||(i[10]=a=>n(t)({shake:!0}))},"Outside click shaking")]),V]))}});export{O as __pageData,R as default};
