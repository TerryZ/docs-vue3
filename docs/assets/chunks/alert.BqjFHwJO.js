import{a,S as l,c as f}from"./v-dialogs.D8XbgGhc.js";import{s as n}from"./framework.AM8gWj8u.js";function i(e){const s=n(!1),t=n("info");function r(o){a("Hello World",{...o,language:e})}function c(){a("Deleted data cannot be recovered, are you sure?",()=>{l("Delete complete.")},{messageType:"confirm",language:e,cancelCallback(){f("Canceled")}})}return{colorfulShadow:s,messageType:t,openAlert:r,openConfirm:c}}export{i as u};