import{_ as l}from"./chunks/LogDataPrinter.CwrtYg4L.js";import{m as p,M as h}from"./chunks/group.SyPL5h_b.js";import{o as k,c as r,a2 as i,G as a,k as t,j as d}from"./chunks/framework.CVLWRb36.js";import"./chunks/v-selectmenu.BmzpQXtl.js";import"./chunks/base.BxqXqYEz.js";const C=JSON.parse('{"title":"Group","description":"","frontmatter":{},"headers":[],"relativePath":"select-menu/group.md","filePath":"en/select-menu/group.md","lastUpdated":1733157283000}'),E={name:"select-menu/group.md"},b=Object.assign(E,{setup(g){const{logs:n,NormalMenuGroup:e}=p();return(o,s)=>(k(),r("div",null,[s[0]||(s[0]=i('<h1 id="group" tabindex="-1">Group <a class="header-anchor" href="#group" aria-label="Permalink to &quot;Group&quot;">​</a></h1><p>Organizing menu items in groups</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic usage&quot;">​</a></h3><p>Setup group and items</p>',5)),a(t(e)),s[1]||(s[1]=d("p",null,"Response data for grouped menu switch events",-1)),a(l,{logs:t(n)},null,8,["logs"]),s[2]||(s[2]=i(`<div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-kPEkf" id="tab-a8slaV1" checked><label data-title="template" for="tab-a8slaV1">template</label><input type="radio" name="group-kPEkf" id="tab-xlxQFwP"><label data-title="ts" for="tab-xlxQFwP">ts</label></div><div class="blocks"><div class="language-template vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuBody</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuHeader</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;Menu group&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuHeader</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuGroup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> @</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">change</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">handleGroupChange</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuGroupItem</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      name</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;group1&quot;</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      title</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;Group1&quot;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;group item 1-1&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuGroupItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuGroupItem</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      name</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;group2&quot;</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      title</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;Group2&quot;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;group item 2-1&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;group item 2-2&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuGroupItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuGroupItem</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      name</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;group3&quot;</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      title</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;Group3&quot;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;group item 3-1&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;group item 3-2&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;group item 3-3&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuGroupItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuGroup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuBody</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuDropdown,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuTrigger,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuBody,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuHeader,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuGroup,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuGroupItem,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuItem</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">} </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-selectmenu&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> type</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { GroupItemData } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-selectmenu&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">function</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> handleGroupChange</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">data</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> GroupItemData</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  console.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">log</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(data)</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div></div></div><h3 id="specifying-a-default-group" tabindex="-1">Specifying a default group <a class="header-anchor" href="#specifying-a-default-group" aria-label="Permalink to &quot;Specifying a default group&quot;">​</a></h3><p>Bind the group name through <code>v-model</code> to specify the default group</p>`,3)),a(t(h)),s[3]||(s[3]=i(`<div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-qoXAf" id="tab-6tHWMaW" checked><label data-title="template" for="tab-6tHWMaW">template</label><input type="radio" name="group-qoXAf" id="tab-nZEE4rM"><label data-title="ts" for="tab-nZEE4rM">ts</label></div><div class="blocks"><div class="language-template vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuGroup</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> v-model</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">active</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  ...</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuGroup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { ref } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> active</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ref</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;group2&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span></code></pre></div></div></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><h3 id="group-props" tabindex="-1">Group props <a class="header-anchor" href="#group-props" aria-label="Permalink to &quot;Group props&quot;">​</a></h3><p><code>SelectMenuGroup</code> props</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> GroupProps</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  modelValue</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><h3 id="item-props" tabindex="-1">Item props <a class="header-anchor" href="#item-props" aria-label="Permalink to &quot;Item props&quot;">​</a></h3><p><code>SelectMenuGroupItem</code> props</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> GroupItemProps</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  name</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  title</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><h3 id="update-modelvalue" tabindex="-1">update:modelValue <a class="header-anchor" href="#update-modelvalue" aria-label="Permalink to &quot;update:modelValue&quot;">​</a></h3><p>Responds to changes in the menu group value</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">\`update:modelValue\`</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">value</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> void</span></span></code></pre></div><h3 id="change" tabindex="-1">change <a class="header-anchor" href="#change" aria-label="Permalink to &quot;change&quot;">​</a></h3><p>Responds to changes in the menu group data</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">change</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">data</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> GroupItemData</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> void</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> GroupItemData</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  name</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  title</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// import type from package</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> type</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { GroupItemData } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-selectmenu&#39;</span></span></code></pre></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><h3 id="group-slots" tabindex="-1">Group slots <a class="header-anchor" href="#group-slots" aria-label="Permalink to &quot;Group slots&quot;">​</a></h3><p><code>SelectMenuGroup</code> slots</p><ul><li><code>default</code> default slot</li></ul><h3 id="item-slots" tabindex="-1">Item slots <a class="header-anchor" href="#item-slots" aria-label="Permalink to &quot;Item slots&quot;">​</a></h3><p><code>SelectMenuGroupItem</code> slots</p><ul><li><code>default</code> default slot</li></ul>`,23))]))}});export{C as __pageData,b as default};
