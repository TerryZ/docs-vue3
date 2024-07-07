import{o as d,c as r,j as s,a3 as e,a4 as p,k as l,a5 as h,a7 as o,a as c}from"./chunks/framework.BhJCiThr.js";import{u as g}from"./chunks/message.o1vYD4kG.js";import"./chunks/v-dialogs.lIx8ktvn.js";const y=o('<h1 id="message" tabindex="-1">Message <a class="header-anchor" href="#message" aria-label="Permalink to &quot;Message&quot;">​</a></h1><p>静默式消息通知对话框，显示于屏幕的中间位置</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><h3 id="消息类型" tabindex="-1">消息类型 <a class="header-anchor" href="#消息类型" aria-label="Permalink to &quot;消息类型&quot;">​</a></h3>',4),F={class:"my-3"},E={class:"form-check form-check-inline"},u=s("label",{class:"form-check-label",for:"toast-info"},"Information",-1),A={class:"form-check form-check-inline"},D=s("label",{class:"form-check-label",for:"toast-warning"},"Warning",-1),m={class:"form-check form-check-inline"},b=s("label",{class:"form-check-label",for:"toast-error"},"Error",-1),f={class:"form-check form-check-inline"},C=s("label",{class:"form-check-label",for:"toast-success"},"Success",-1),_=s("h3",{id:"显示位置",tabindex:"-1"},[c("显示位置 "),s("a",{class:"header-anchor",href:"#显示位置","aria-label":'Permalink to "显示位置"'},"​")],-1),B={class:"my-3"},v={class:"form-check form-check-inline"},T=s("label",{class:"form-check-label",for:"placement-top"},"Top",-1),M={class:"form-check form-check-inline"},P=s("label",{class:"form-check-label",for:"placement-bottom"},"Bottom",-1),V=o(`<h3 id="界面定制化" tabindex="-1">界面定制化 <a class="header-anchor" href="#界面定制化" aria-label="Permalink to &quot;界面定制化&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">DialogMessage</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Hello&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, { icon: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> })</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">DialogMessage</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Hello&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, { closeButton: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">true</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> })</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">DialogMessage</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Hello&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, { duration: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">0</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> })</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">DialogMessage</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Hello&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, { offset: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">100</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> })</span></span></code></pre></div>`,2),x={class:"my-3"},S=o(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">type</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> MessageContent</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> VNode</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">function</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> DialogMessage</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  message</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> MessageContent</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  callback</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Function</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  options</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> MessageOptions</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Function</span></span></code></pre></div><p>配置选项 <code>MessageOptions</code> 的类型</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> MessageOptions</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * Custom class name</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  customClass</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * Message types</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> \`info\`</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  messageType</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;info&#39;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;warning&#39;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;error&#39;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;success&#39;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * Message type icon</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> true</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  icon</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * Display close button</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> false</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  closeButton</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * The number of milliseconds to automatically close the dialog</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   *</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * set to 0 to disable auto close</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   *</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> 3000</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  duration</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * The distance to the top of viewport</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> 32</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  offset</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * The placement of the message dialog</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> \`top\`</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  placement</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;top&#39;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;bottom&#39;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * Display pill rounded style</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> true</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  pill</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div>`,4),R=JSON.parse('{"title":"Message","description":"","frontmatter":{},"headers":[],"relativePath":"cn/dialog/message.md","filePath":"cn/dialog/message.md","lastUpdated":1720339179000}'),q={name:"cn/dialog/message.md"},$=Object.assign(q,{setup(N){const{placement:t,messageType:n,openMessage:k}=g();return(I,i)=>(d(),r("div",null,[y,s("div",F,[s("div",E,[e(s("input",{class:"form-check-input",type:"radio",id:"toast-info",value:"info","onUpdate:modelValue":i[0]||(i[0]=a=>h(n)?n.value=a:null)},null,512),[[p,l(n)]]),u]),s("div",A,[e(s("input",{class:"form-check-input",type:"radio",id:"toast-warning",value:"warning","onUpdate:modelValue":i[1]||(i[1]=a=>h(n)?n.value=a:null)},null,512),[[p,l(n)]]),D]),s("div",m,[e(s("input",{class:"form-check-input",type:"radio",id:"toast-error",value:"error","onUpdate:modelValue":i[2]||(i[2]=a=>h(n)?n.value=a:null)},null,512),[[p,l(n)]]),b]),s("div",f,[e(s("input",{class:"form-check-input",type:"radio",id:"toast-success",value:"success","onUpdate:modelValue":i[3]||(i[3]=a=>h(n)?n.value=a:null)},null,512),[[p,l(n)]]),C])]),_,s("div",B,[s("div",v,[e(s("input",{class:"form-check-input",type:"radio",id:"placement-top",value:"top","onUpdate:modelValue":i[4]||(i[4]=a=>h(t)?t.value=a:null)},null,512),[[p,l(t)]]),T]),s("div",M,[e(s("input",{class:"form-check-input",type:"radio",id:"placement-bottom",value:"bottom","onUpdate:modelValue":i[5]||(i[5]=a=>h(t)?t.value=a:null)},null,512),[[p,l(t)]]),P])]),s("div",null,[s("button",{type:"button",class:"btn btn-dark",onClick:i[6]||(i[6]=a=>l(k)({placement:l(t),messageType:l(n)}))},"Open message")]),V,s("div",x,[s("button",{type:"button",class:"btn btn-dark me-2",onClick:i[7]||(i[7]=a=>l(k)({icon:!1}))},"No message type icon"),s("button",{type:"button",class:"btn btn-dark me-2",onClick:i[8]||(i[8]=a=>l(k)({closeButton:!0}))},"With close icon"),s("button",{type:"button",class:"btn btn-dark me-2",onClick:i[9]||(i[9]=a=>l(k)({duration:0}))},"No auto close"),s("button",{type:"button",class:"btn btn-dark",onClick:i[10]||(i[10]=a=>l(k)({offset:100}))},"Distance from the edge")]),S]))}});export{R as __pageData,$ as default};
