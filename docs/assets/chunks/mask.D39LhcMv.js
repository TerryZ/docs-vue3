import{v as e,S as c}from"./v-dialogs.lIx8ktvn.js";function r(){function a(){const t=e();setTimeout(()=>{t(),c("Data loaded successfully")},3e3)}function n(t){const o=e("Data loading...",{appendTo:t});setTimeout(()=>{o()},3e3)}function s(t){const o=e(t);setTimeout(()=>{o()},3e3)}function u(t){s({...t,language:"cn"})}return{loadDataList:a,coverTargetArea:n,openMask:s,openMaskCN:u}}export{r as u};