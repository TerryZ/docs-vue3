import{u as d,K as h,b as k}from"./chunks/data.D1JOsFM5.js";import{c as o,o as g,ag as r,j as t,G as n,k as a,aj as l}from"./chunks/framework.DvaPEpzT.js";const E={class:"border rounded-3 shadow-sm p-3 mb-3"},u={class:"border rounded-3 shadow-sm p-3 mb-3"},b=JSON.parse('{"title":"Text","description":"","frontmatter":{},"headers":[],"relativePath":"region/text.md","filePath":"en/region/text.md","lastUpdated":1741262813000}'),y={name:"region/text.md"},C=Object.assign(y,{setup(F){const{values:i,change:p}=d();return(c,s)=>(g(),o("div",null,[s[5]||(s[5]=r(`<h1 id="text" tabindex="-1">Text <a class="header-anchor" href="#text" aria-label="Permalink to &quot;Text&quot;">​</a></h1><p>Plain text mode, administrative area information is displayed in plain text</p><h2 id="component-reference" tabindex="-1">Component reference <a class="header-anchor" href="#component-reference" aria-label="Permalink to &quot;Component reference&quot;">​</a></h2><p>Referencing components in your project</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { RegionText, RegionFullText } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-region&#39;</span></span></code></pre></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>Quick use</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group--KiKg" id="tab-zMaHe2B" checked><label data-title="template" for="tab-zMaHe2B">template</label><input type="radio" name="group--KiKg" id="tab-YVBS6qW"><label data-title="ts" for="tab-YVBS6qW">ts</label></div><div class="blocks"><div class="language-template vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">&lt;!-- Three-level administrative division --&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">RegionText</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> v-model</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">region</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">&lt;!-- Four-level administrative division --&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">RegionFullText</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> v-model</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">region</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> /&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { ref } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { RegionText, RegionFullText } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-region&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> type</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { RegionValues } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-region&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> region</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ref</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">RegionValues</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;({</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  province: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;350000&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  city: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;350100&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  area: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;350104&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  town: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;350104008&#39;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">})</span></span></code></pre></div></div></div>`,8)),t("div",E,[t("div",null,[n(a(h),{modelValue:a(i),"onUpdate:modelValue":s[0]||(s[0]=e=>l(i)?i.value=e:null)},null,8,["modelValue"])]),t("div",null,[n(a(k),{modelValue:a(i),"onUpdate:modelValue":s[1]||(s[1]=e=>l(i)?i.value=e:null)},null,8,["modelValue"])])]),s[6]||(s[6]=r(`<h3 id="separator" tabindex="-1">Separator <a class="header-anchor" href="#separator" aria-label="Permalink to &quot;Separator&quot;">​</a></h3><p>Apply specified separators between administrative region names at all levels to increase information readability</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">RegionText</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  v-model</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">region</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  separator</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;-&quot;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">/&gt;</span></span></code></pre></div>`,3)),t("div",u,[t("div",null,[n(a(h),{modelValue:a(i),"onUpdate:modelValue":s[2]||(s[2]=e=>l(i)?i.value=e:null),separator:"-"},null,8,["modelValue"])]),t("div",null,[n(a(k),{modelValue:a(i),"onUpdate:modelValue":s[3]||(s[3]=e=>l(i)?i.value=e:null),separator:"-"},null,8,["modelValue"])])]),t("div",null,[t("button",{type:"button",class:"btn btn-dark",onClick:s[4]||(s[4]=(...e)=>a(p)&&a(p)(...e))},"Change a region")])]))}});export{b as __pageData,C as default};
