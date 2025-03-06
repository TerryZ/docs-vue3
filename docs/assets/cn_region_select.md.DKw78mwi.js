import{u as E,c as r,o as g,ag as i,G as a,k as t}from"./chunks/framework.EgVEMnwr.js";import{u as o}from"./chunks/selects.IXsUWeKH.js";import"./chunks/data.CRHUDsyF.js";import"./chunks/data.DU2x68Y8.js";import"./chunks/DataChangeResult.BE28ETeN.js";const m=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[],"relativePath":"cn/region/select.md","filePath":"cn/region/select.md","lastUpdated":1741262813000}'),c={name:"cn/region/select.md"},S=Object.assign(c,{setup(y){const{lang:e}=E(),{RegionSelectsProvince:n,RegionSelectsCity:l,RegionSelectsArea:p,RegionSelectsTown:h,RegionSelectsInit:k,RegionSelectsDisabled:d}=o(e);return(F,s)=>(g(),r("div",null,[s[0]||(s[0]=i('<h1 id="select" tabindex="-1">Select <a class="header-anchor" href="#select" aria-label="Permalink to &quot;Select&quot;">​</a></h1><p>下拉列表模式，最传统，经典的应用形式</p><h2 id="组件引用" tabindex="-1">组件引用 <a class="header-anchor" href="#组件引用" aria-label="Permalink to &quot;组件引用&quot;">​</a></h2><p>在项目中引入组件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { RegionSelects, RegionFullSelects } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-region&#39;</span></span></code></pre></div><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><p>关闭城市级别，仅选择省份</p>',7)),a(t(n)),s[1]||(s[1]=i('<div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">RegionSelects</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> :</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">city</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> /&gt;</span></span></code></pre></div><p>关闭区县级别</p>',2)),a(t(l)),s[2]||(s[2]=i('<div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">RegionSelects</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> :</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">area</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> /&gt;</span></span></code></pre></div><p>3 级行政区划</p>',2)),a(t(p)),s[3]||(s[3]=i('<div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">RegionSelects</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> /&gt;</span></span></code></pre></div><p>使用完整的 4 级行政区划</p>',2)),a(t(h)),s[4]||(s[4]=i('<div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">RegionFullSelects</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> /&gt;</span></span></code></pre></div><h3 id="初始值绑定" tabindex="-1">初始值绑定 <a class="header-anchor" href="#初始值绑定" aria-label="Permalink to &quot;初始值绑定&quot;">​</a></h3><p>指定一套地区编码值，使组件默认显示该地区</p>',3)),a(t(k)),s[5]||(s[5]=i(`<div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hAEXS" id="tab-cNNZ01L" checked><label data-title="template" for="tab-cNNZ01L">template</label><input type="radio" name="group-hAEXS" id="tab-OPtkX6W"><label data-title="ts" for="tab-OPtkX6W">ts</label></div><div class="blocks"><div class="language-template vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">RegionFullSelects</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> v-model</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">region</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> /&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { ref } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { RegionFullSelects } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-region&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> type</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { RegionValues } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-region&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> region</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ref</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">RegionValues</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;({</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  province: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;350000&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  city: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;350100&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  area: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;350104&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  town: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;350104008&#39;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">})</span></span></code></pre></div></div></div><h3 id="清空-重置" tabindex="-1">清空/重置 <a class="header-anchor" href="#清空-重置" aria-label="Permalink to &quot;清空/重置&quot;">​</a></h3><p>指定一个各级别的值为 <code>undefined</code> 的对象，即可清空</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">region.value </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  province: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">undefined</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  city: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">undefined</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  area: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">undefined</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  town: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">undefined</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>传递 <code>undefined</code> 值或是一个空对象 <code>{}</code>，无法清空</p></div><h3 id="禁用状态" tabindex="-1">禁用状态 <a class="header-anchor" href="#禁用状态" aria-label="Permalink to &quot;禁用状态&quot;">​</a></h3><p>禁用组件，使其无法进行交互</p>`,7)),a(t(d)),s[6]||(s[6]=i(`<div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">RegionFullSelects</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  v-model</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">values</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  :</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">disabled</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">true</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">/&gt;</span></span></code></pre></div>`,1))]))}});export{m as __pageData,S as default};
