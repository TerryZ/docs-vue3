import{l as n,x as c,r as f}from"./v-dialogs.DJZHNv9u.js";import{s as a}from"./framework.DatLbd_V.js";function i(e){const r=a(!1),l=a("info");function s(o){n("Hello World",{...o,language:e})}function t(){n("Deleted data cannot be recovered, are you sure?",()=>{c("Delete complete.")},{messageType:"confirm",language:e,cancelCallback(){f("Canceled")}})}return{colorfulShadow:r,messageType:l,openAlert:s,openConfirm:t}}export{i as u};
