import{c as N,U as L,Q as y,o as D,a as h,t as P,F as E,J as k,W as B,l as o,d as T,Z as v,b as V,u as U,r as w}from"./v-selectmenu.BmzpQXtl.js";import{p as c,h as S,o as g,c as b,j as t,G as s,w as l,k as a,a as n,t as p,F as x,C as z,b as H}from"./framework.CVLWRb36.js";const M=[{id:1,name:"Chicago Bulls",desc:"芝加哥公牛"},{id:2,name:"Cleveland Cavaliers",desc:"克里夫兰骑士"},{id:3,name:"Detroit Pistons",desc:"底特律活塞"},{id:4,name:"Indiana Pacers",desc:"印第安纳步行者"},{id:5,name:"Milwaukee Bucks",desc:"密尔沃基雄鹿"},{id:6,name:"Brooklyn Nets",desc:"布鲁克林篮网"},{id:7,name:"Boston Celtics",desc:"波士顿凯尔特人"},{id:8,name:"New York Knicks",desc:"纽约尼克斯"},{id:9,name:"Philadelphia 76ers",desc:"费城76人"},{id:10,name:"Toronto Raptors",desc:"多伦多猛龙"},{id:11,name:"Atlanta Hawks",desc:"亚特兰大老鹰"},{id:12,name:"Charlotte Hornets",desc:"夏洛特黄蜂"},{id:13,name:"Miami Heat",desc:"迈阿密热火"},{id:14,name:"Orlando Magic",desc:"奥兰多魔术"},{id:15,name:"Washington Wizards",desc:"华盛顿奇才"}],C=[{id:16,name:"Denver Nuggets",desc:"丹佛掘金"},{id:17,name:"Minnesota Timberwolves",desc:"明尼苏达森林狼"},{id:18,name:"Oklahoma City Thunder",desc:"俄克拉荷马雷霆"},{id:19,name:"Portland Trail Blazers",desc:"波特兰开拓者"},{id:20,name:"Utah Jazz",desc:"犹他爵士"},{id:21,name:"Golden State Warriors",desc:"金州勇士"},{id:22,name:"Los Angeles Clippers",desc:"洛杉矶快船"},{id:23,name:"Los Angeles Lakers",desc:"洛杉矶湖人"},{id:24,name:"Phoenix Suns",desc:"菲尼克斯太阳"},{id:25,name:"Sacramento Kings",desc:"萨克拉门托国王"},{id:26,name:"Dallas Mavericks",desc:"达拉斯小牛"},{id:27,name:"Houston Rockets",desc:"休斯顿火箭"},{id:28,name:"Memphis Grizzlies",desc:"孟菲斯灰熊"},{id:29,name:"New Orleans Pelicans",desc:"新奥尔良鹈鹕"},{id:30,name:"San Antonio Spurs",desc:"圣安东尼奥马刺"}];[...M,...C];const G={class:"d-flex align-items-center"},$={__name:"MenuGroupWithSearch",setup(W){const i=c(""),u=c(""),A=S(()=>i.value?M.filter(m=>m.name.includes(i.value)):M),e=S(()=>i.value?C.filter(m=>m.name.includes(i.value)):C);function f(m){i.value=m}return(m,r)=>(g(),b("div",G,[r[3]||(r[3]=t("div",{class:"me-4"},"Select your NBA team",-1)),s(a(T),null,{trigger:l(()=>[s(a(N),null,{default:l(()=>[n(p(u.value||"Open"),1)]),_:1})]),default:l(()=>[s(a(L),null,{default:l(()=>[s(a(y),null,{default:l(()=>r[2]||(r[2]=[n("NBA teams")])),_:1}),s(a(D),{onSearch:f}),s(a(h)),s(a(P),{modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=d=>u.value=d)},{default:l(()=>[s(a(E),null,{default:l(()=>[s(a(k),{name:"east",title:"East"},{default:l(()=>[s(a(B),{style:{"max-height":"250px"}},{default:l(()=>[(g(!0),b(x,null,z(A.value,d=>(g(),H(a(o),{key:d.id,value:d.name},{default:l(()=>[n(p(d.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1}),s(a(k),{name:"west",title:"West"},{default:l(()=>[s(a(B),{style:{"max-height":"250px"}},{default:l(()=>[(g(!0),b(x,null,z(e.value,d=>(g(),H(a(o),{key:d.id,value:d.name},{default:l(()=>[n(p(d.name),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t("button",{class:"btn btn-link ms-3",type:"button",onClick:r[1]||(r[1]=d=>u.value="")},"Clear selection")]))}},J={class:"mb-3"},F={class:"mb-3"},q={__name:"MenuMultipleLevelWithSelection",setup(W){const i=c(["Jobs","Video games"]),u=c("English");return(A,e)=>(g(),b(x,null,[t("div",J,[t("div",F,"Interests: "+p(i.value),1),t("div",null,"Language: "+p(u.value),1)]),s(a(T),null,{trigger:l(()=>[s(a(N),null,{default:l(()=>e[2]||(e[2]=[n("User Setting")])),_:1})]),default:l(()=>[s(a(L),null,{default:l(()=>[s(a(y),null,{default:l(()=>e[3]||(e[3]=[n("Account: Terry")])),_:1}),s(a(h)),s(a(v),null,{prepend:l(()=>e[4]||(e[4]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-bell b-svg-icon",viewBox:"0 0 16 16"},[t("path",{d:"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"})],-1)])),default:l(()=>[e[5]||(e[5]=n(" Notifications "))]),_:1}),s(a(V),null,{trigger:l(()=>[s(a(v),null,{prepend:l(()=>e[6]||(e[6]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-translate b-svg-icon",viewBox:"0 0 16 16"},[t("path",{d:"M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"}),t("path",{d:"M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"})],-1)])),default:l(()=>[e[7]||(e[7]=n(" Language "))]),_:1})]),default:l(()=>[s(a(P),{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=f=>u.value=f)},{default:l(()=>[s(a(o),{value:"Simplified Chinese"},{default:l(()=>e[8]||(e[8]=[n("Simplified Chinese")])),_:1}),s(a(o),{value:"English"},{default:l(()=>e[9]||(e[9]=[n("English")])),_:1}),s(a(o),{value:"German - Deutsch"},{default:l(()=>e[10]||(e[10]=[n("German - Deutsch")])),_:1}),s(a(o),{value:"Dutch - Nederlands"},{default:l(()=>e[11]||(e[11]=[n("Dutch - Nederlands")])),_:1}),s(a(o),{value:"Portuguese - Portugal"},{default:l(()=>e[12]||(e[12]=[n("Portuguese - Portugal")])),_:1})]),_:1},8,["modelValue"])]),_:1}),s(a(V),null,{trigger:l(()=>[s(a(v),null,{prepend:l(()=>e[13]||(e[13]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-lightbulb b-svg-icon",viewBox:"0 0 16 16"},[t("path",{d:"M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"})],-1)])),default:l(()=>[e[14]||(e[14]=n(" Interests "))]),_:1})]),default:l(()=>[s(a(U),{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=f=>i.value=f)},{default:l(()=>[s(a(w),{value:"Social News"},{default:l(()=>e[15]||(e[15]=[n("Social News")])),_:1}),s(a(w),{value:"Events"},{default:l(()=>e[16]||(e[16]=[n("Events")])),_:1}),s(a(w),{value:"Video games"},{default:l(()=>e[17]||(e[17]=[n("Video games")])),_:1}),s(a(w),{value:"Jobs"},{default:l(()=>e[18]||(e[18]=[n("Jobs")])),_:1})]),_:1},8,["modelValue"])]),_:1}),s(a(v),null,{prepend:l(()=>e[19]||(e[19]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-question-circle b-svg-icon",viewBox:"0 0 16 16"},[t("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),t("path",{d:"M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"})],-1)])),default:l(()=>[e[20]||(e[20]=n(" Helps "))]),_:1}),s(a(v),null,{prepend:l(()=>e[21]||(e[21]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear b-svg-icon",viewBox:"0 0 16 16"},[t("path",{d:"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"}),t("path",{d:"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"})],-1)])),default:l(()=>[e[22]||(e[22]=n(" More settings "))]),_:1}),s(a(h)),s(a(v),null,{prepend:l(()=>e[23]||(e[23]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-box-arrow-right b-svg-icon",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"}),t("path",{"fill-rule":"evenodd",d:"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"})],-1)])),default:l(()=>[e[24]||(e[24]=n(" Logout "))]),_:1})]),_:1})]),_:1})],64))}};export{$ as _,q as a};