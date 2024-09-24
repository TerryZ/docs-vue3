import{u as e}from"./chunks/mask.CAJNn182.js";import{u as d,o as E,c as r,a2 as t,j as i,k as a}from"./chunks/framework.wJYvC2Xn.js";import"./chunks/v-dialogs.CfuAfQM2.js";const u=JSON.parse('{"title":"Mask","description":"","frontmatter":{},"headers":[],"relativePath":"dialog/mask.md","filePath":"en/dialog/mask.md","lastUpdated":1720434966000}'),g={name:"dialog/mask.md"},A=Object.assign(g,{setup(y){const{lang:h}=d(),{loadDataList:p,coverTargetArea:k,openMask:l}=e(h.value);return(o,s)=>(E(),r("div",null,[s[6]||(s[6]=t(`<h1 id="mask" tabindex="-1">Mask <a class="header-anchor" href="#mask" aria-label="Permalink to &quot;Mask&quot;">​</a></h1><p>A screen mask that blocks user actions</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="fetch-data" tabindex="-1">Fetch data <a class="header-anchor" href="#fetch-data" aria-label="Permalink to &quot;Fetch data&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  DialogMask,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  DialogAlertError,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  DialogMessageSuccess</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">} </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-dialogs&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">function</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> loadDataList</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> () {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  // Open a mask before fetching data</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">  const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> destroy</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> DialogMask</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  fetchData</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">()</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    .</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">then</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">data</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      list.value </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> data.list</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">      // Dismiss mask overlay when data loading complete</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      destroy</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">()</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      DialogMessageSuccess</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Data loaded successfully&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    })</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    .</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">catch</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(() </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      DialogAlertError</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Data Load Failure&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    })</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div>`,5)),i("div",null,[i("button",{type:"button",class:"btn btn-dark",onClick:s[0]||(s[0]=(...n)=>a(p)&&a(p)(...n))},"Fetch data")]),s[7]||(s[7]=t(`<h3 id="covering-the-specified-area" tabindex="-1">Covering the specified area <a class="header-anchor" href="#covering-the-specified-area" aria-label="Permalink to &quot;Covering the specified area&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> id</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;user-content-area&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;content&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    ...</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { DialogMask } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-dialogs&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">DialogMask</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Loading...&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, { appendTo: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;#user-content-area&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> })</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><div style="height:300px;" class="bg-light rounded-3 mb-3 overflow-hidden d-flex flex-column justify-content-center align-items-center" id="user-content-area"><div>content</div><div>content</div><div>content</div><div>content</div><div>content</div><div>content</div></div>`,3)),i("div",null,[i("button",{type:"button",class:"btn btn-dark",onClick:s[1]||(s[1]=n=>a(k)("#user-content-area"))},"Cover target area")]),s[8]||(s[8]=t(`<h3 id="ui-customization" tabindex="-1">UI customization <a class="header-anchor" href="#ui-customization" aria-label="Permalink to &quot;UI customization&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">DialogMask</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Loading&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, { icon: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> })</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">DialogMask</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Loading&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, { pill: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> })</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">DialogMask</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Loading&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, { panel: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> })</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">DialogMask</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Loading&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, { panel: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, customClass:</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;my-custom-class&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> })</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">style</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> lang</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;sass&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">.my-custom-class</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  .v-dialog-body</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">    color</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">white</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">style</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div>`,3)),i("div",null,[i("button",{type:"button",class:"btn btn-dark me-3",onClick:s[2]||(s[2]=n=>a(l)({icon:!1}))},"No spinner icon"),i("button",{type:"button",class:"btn btn-dark me-3",onClick:s[3]||(s[3]=n=>a(l)({pill:!1}))},"No pill style border"),i("button",{type:"button",class:"btn btn-dark me-3",onClick:s[4]||(s[4]=n=>a(l)({panel:!1}))},"No content panel"),i("button",{type:"button",class:"btn btn-dark me-3",onClick:s[5]||(s[5]=n=>a(l)({panel:!1,customClass:"my-custom-class"}))},"Custom class")]),s[9]||(s[9]=t(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">function</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> DialogMask</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * Message content(string|VNode)</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  message</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> MessageContent</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * Callback after Mask dialog closed</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  callback</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Function</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  options</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> MaskOptions</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Function</span></span></code></pre></div><p>The setting options <code>MaskOptions</code> details</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> MaskOptions</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * Plugin language</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> \`en\`</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  language</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * Custom class name</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  customClass</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * The element that mask append to</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> \`body\`</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  appendTo</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * Pill style border</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> true</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  pill</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * Display spinner icon</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> true</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  icon</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * Display the content panel</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> true</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  panel</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div>`,4))]))}});export{u as __pageData,A as default};
