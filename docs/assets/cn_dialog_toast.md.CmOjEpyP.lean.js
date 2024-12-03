import{u as d,o as g,c,a2 as r,j as i,a3 as e,a4 as p,k as n,a5 as h,a as y}from"./chunks/framework.CVLWRb36.js";import{u as F}from"./chunks/toast.Db_xHESL.js";import"./chunks/v-dialogs.BBlIn8it.js";const u={class:"my-3"},E={class:"form-check form-check-inline"},A={class:"form-check form-check-inline"},D={class:"form-check form-check-inline"},m={class:"form-check form-check-inline"},f={class:"my-3"},b={class:"form-check form-check-inline"},C={class:"form-check form-check-inline"},B={class:"form-check form-check-inline"},v={class:"form-check form-check-inline"},T={class:"my-3"},O=JSON.parse('{"title":"Toast","description":"","frontmatter":{},"headers":[],"relativePath":"cn/dialog/toast.md","filePath":"cn/dialog/toast.md","lastUpdated":1720407686000}'),x={name:"cn/dialog/toast.md"},w=Object.assign(x,{setup(V){const{lang:o}=d(),{placement:l,messageType:t,openToast:k}=F(o.value);return(q,s)=>(g(),c("div",null,[s[21]||(s[21]=r('<h1 id="toast" tabindex="-1">Toast <a class="header-anchor" href="#toast" aria-label="Permalink to &quot;Toast&quot;">​</a></h1><p>静默式消息通知对话框，与 <a href="./message.html">Message</a> 不同的是 Toast 仅显示于屏幕的边角区域</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><h3 id="消息类型" tabindex="-1">消息类型 <a class="header-anchor" href="#消息类型" aria-label="Permalink to &quot;消息类型&quot;">​</a></h3>',4)),i("div",u,[i("div",E,[e(i("input",{class:"form-check-input",type:"radio",id:"toast-info",value:"info","onUpdate:modelValue":s[0]||(s[0]=a=>h(t)?t.value=a:null)},null,512),[[p,n(t)]]),s[13]||(s[13]=i("label",{class:"form-check-label",for:"toast-info"},"Information",-1))]),i("div",A,[e(i("input",{class:"form-check-input",type:"radio",id:"toast-warning",value:"warning","onUpdate:modelValue":s[1]||(s[1]=a=>h(t)?t.value=a:null)},null,512),[[p,n(t)]]),s[14]||(s[14]=i("label",{class:"form-check-label",for:"toast-warning"},"Warning",-1))]),i("div",D,[e(i("input",{class:"form-check-input",type:"radio",id:"toast-error",value:"error","onUpdate:modelValue":s[2]||(s[2]=a=>h(t)?t.value=a:null)},null,512),[[p,n(t)]]),s[15]||(s[15]=i("label",{class:"form-check-label",for:"toast-error"},"Error",-1))]),i("div",m,[e(i("input",{class:"form-check-input",type:"radio",id:"toast-success",value:"success","onUpdate:modelValue":s[3]||(s[3]=a=>h(t)?t.value=a:null)},null,512),[[p,n(t)]]),s[16]||(s[16]=i("label",{class:"form-check-label",for:"toast-success"},"Success",-1))])]),s[22]||(s[22]=i("h3",{id:"显示位置",tabindex:"-1"},[y("显示位置 "),i("a",{class:"header-anchor",href:"#显示位置","aria-label":'Permalink to "显示位置"'},"​")],-1)),i("div",f,[i("div",b,[e(i("input",{class:"form-check-input",type:"radio",id:"placement-top-left",value:"top-left","onUpdate:modelValue":s[4]||(s[4]=a=>h(l)?l.value=a:null)},null,512),[[p,n(l)]]),s[17]||(s[17]=i("label",{class:"form-check-label",for:"placement-top-left"},"Top left",-1))]),i("div",C,[e(i("input",{class:"form-check-input",type:"radio",id:"placement-top-right",value:"top-right","onUpdate:modelValue":s[5]||(s[5]=a=>h(l)?l.value=a:null)},null,512),[[p,n(l)]]),s[18]||(s[18]=i("label",{class:"form-check-label",for:"placement-top-right"},"Top right",-1))]),i("div",B,[e(i("input",{class:"form-check-input",type:"radio",id:"placement-bottom-left",value:"bottom-left","onUpdate:modelValue":s[6]||(s[6]=a=>h(l)?l.value=a:null)},null,512),[[p,n(l)]]),s[19]||(s[19]=i("label",{class:"form-check-label",for:"placement-bottom-left"},"Bottom left",-1))]),i("div",v,[e(i("input",{class:"form-check-input",type:"radio",id:"placement-bottom-right",value:"bottom-right","onUpdate:modelValue":s[7]||(s[7]=a=>h(l)?l.value=a:null)},null,512),[[p,n(l)]]),s[20]||(s[20]=i("label",{class:"form-check-label",for:"placement-bottom-right"},"Bottom right",-1))])]),i("div",null,[i("button",{type:"button",class:"btn btn-dark",onClick:s[8]||(s[8]=a=>n(k)({placement:n(l),messageType:n(t)}))},"Open toast")]),s[23]||(s[23]=r(`<h3 id="界面定制化" tabindex="-1">界面定制化 <a class="header-anchor" href="#界面定制化" aria-label="Permalink to &quot;界面定制化&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">DialogToast</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Hello&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, { icon: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> })</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">DialogToast</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Hello&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, { closeButton: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> })</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">DialogToast</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Hello&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, { duration: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">0</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> })</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">DialogToast</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Hello&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, { offset: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">100</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> })</span></span></code></pre></div>`,2)),i("div",T,[i("button",{type:"button",class:"btn btn-dark me-2",onClick:s[9]||(s[9]=a=>n(k)({icon:!1}))},"No message type icon"),i("button",{type:"button",class:"btn btn-dark me-2",onClick:s[10]||(s[10]=a=>n(k)({closeButton:!1}))},"No close icon"),i("button",{type:"button",class:"btn btn-dark me-2",onClick:s[11]||(s[11]=a=>n(k)({duration:0}))},"No auto close"),i("button",{type:"button",class:"btn btn-dark",onClick:s[12]||(s[12]=a=>n(k)({offset:100}))},"Distance from the edge")]),s[24]||(s[24]=r(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">type</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> MessageContent</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> VNode</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">function</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> DialogToast</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  message</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> MessageContent</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  callback</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Function</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  options</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ToastOptions</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Function</span></span></code></pre></div><p>配置选项 <code>ToastOptions</code> 的类型</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ToastOptions</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 语言</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> \`en\`</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  language</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 自定义样式类名</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  customClass</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 消息类型</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> \`info\`</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  messageType</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;info&#39;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;warning&#39;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;error&#39;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;success&#39;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 消息类型图标</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> true</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  icon</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 关闭按钮</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> false</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  closeButton</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 自动关闭对话框的时间（单位：毫秒）</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   *</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 设置为 0 则取消自动关闭</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   *</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> 3000</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  duration</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 距离屏幕边缘的值</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> 16</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  offset</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 显示位置</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> \`top-right\`</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  placement</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;top-left&#39;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;top-right&#39;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;bottom-left&#39;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;bottom-right&#39;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div>`,4))]))}});export{O as __pageData,w as default};