import{_ as i,o as a,c as n,a2 as l}from"./chunks/framework.wJYvC2Xn.js";const o=JSON.parse('{"title":"Region","description":"","frontmatter":{},"headers":[],"relativePath":"cn/region/index.md","filePath":"cn/region/index.md","lastUpdated":1727180345000}'),p={name:"cn/region/index.md"};function t(h,s,e,k,r,d){return a(),n("div",null,s[0]||(s[0]=[l(`<h1 id="region" tabindex="-1">Region <a class="header-anchor" href="#region" aria-label="Permalink to &quot;Region&quot;">​</a></h1><p>行政区划选择器组件</p><p><a href="https://github.com/TerryZ/v-region" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/stars/terryz/v-region?style=social" alt="GitHub Repo stars"></a> <a href="https://github.com/TerryZ/v-region" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/forks/terryz/v-region?style=social" alt="GitHub forks"></a></p><p>项目状态</p><p><a href="https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-region/tree/master" target="_blank" rel="noreferrer"><img src="https://dl.circleci.com/status-badge/img/gh/TerryZ/v-region/tree/master.svg?style=svg" alt="CircleCI"></a> <a href="https://codecov.io/gh/TerryZ/v-region" target="_blank" rel="noreferrer"><img src="https://codecov.io/gh/TerryZ/v-region/branch/master/graph/badge.svg?token=FmdV7kVgIp" alt="code coverage"></a> <a href="https://www.npmjs.com/package/v-region" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/v-region.svg" alt="npm version"></a> <a href="https://mit-license.org/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="license"></a> <a href="https://standardjs.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="JavaScript Style Guide"></a></p><p>版本更新内容请访问 <a href="https://github.com/TerryZ/v-region/blob/dev/CHANGELOG-CN.md" target="_blank" rel="noreferrer">Changelog</a></p><p>如果您的项目正在使用 <a href="https://v2.vuejs.org/v2/guide/" target="_blank" rel="noreferrer">vue 2.x</a> 版本生态，请使用 <a href="https://github.com/TerryZ/v-region/tree/dev-vue2" target="_blank" rel="noreferrer">v-region 2.x</a> 版本</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>将 <code>v-region</code> 组件安装到项目中</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-vwvaz" id="tab-IAouSrx" checked><label for="tab-IAouSrx">npm</label><input type="radio" name="group-vwvaz" id="tab-oft9gw0"><label for="tab-oft9gw0">yarn</label><input type="radio" name="group-vwvaz" id="tab-FFl5Pty"><label for="tab-FFl5Pty">pnpm</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">npm</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> i</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> v-region</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">yarn</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> add</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> v-region</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">pnpm</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> add</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> v-region</span></span></code></pre></div></div></div><p>全局注册组件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { createApp } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> App </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;./app.vue&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> Region </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-region&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> app</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> createApp</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(App)</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * Globally register region components</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * v-region-group</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * v-region-selects</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * v-region-columns</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * v-region-city-picker</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * v-region-text</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">app.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">use</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(Region)</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">app.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">mount</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;#app&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span></code></pre></div><p>手动全局注册组件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { RegionSelects } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-region&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> app</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> createApp</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(App)</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">app.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">component</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;v-region-selects&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, RegionSelects)</span></span></code></pre></div><p>局部使用组件，这是更推荐的使用方式，而且这也更有利于项目打包时的代码拆分，达到更好的资源按需引用的效果</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">RegionSelects</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { RegionSelects } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-region&#39;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><h2 id="级别分离" tabindex="-1">级别分离 <a class="header-anchor" href="#级别分离" aria-label="Permalink to &quot;级别分离&quot;">​</a></h2><p>由于乡镇级别数据量较大，为避免项目需求并不需要使用乡镇级别，却打包了该级别的海量数据，造成资源浪费、项目打包体积过大的情况，<code>v-region</code> 从 <code>v3.2.0</code> 版本开始，原有系列组件仅提供 3 级行政区划选择，新增的 <code>Full</code> 系列组件提供完整的 4 级行政区划选择，项目可根据需求选择使用</p><p>新增组件清单</p><ul><li><code>RegionFullSelects</code></li><li><code>RegionFullText</code></li><li><code>RegionFullGroupCore</code></li><li><code>RegionFullGroup</code></li><li><code>RegionFullColumnsCore</code></li><li><code>RegionFullColumns</code></li></ul><p>以下拉列表模式为例</p><h3 id="_3-级行政区划选择" tabindex="-1">3 级行政区划选择 <a class="header-anchor" href="#_3-级行政区划选择" aria-label="Permalink to &quot;3 级行政区划选择&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">RegionSelects</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { RegionSelects } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-region&#39;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>在 3 级行政区域选择组件中，不论设置 <code>town</code> prop 为 <code>true</code> 还是 <code>false</code>，组件均只提供 3 级行政区划选择，如果需要使用 4 级行政区划选择，请使用 <code>RegionFullSelects</code> 组件</p><h3 id="_4-级行政区划选择" tabindex="-1">4 级行政区划选择 <a class="header-anchor" href="#_4-级行政区划选择" aria-label="Permalink to &quot;4 级行政区划选择&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">RegionFullSelects</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { RegionFullSelects } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-region&#39;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><h2 id="功能模块" tabindex="-1">功能模块 <a class="header-anchor" href="#功能模块" aria-label="Permalink to &quot;功能模块&quot;">​</a></h2><ul><li><a href="./select.html">Select</a></li><li><a href="./group.html">Group</a></li><li><a href="./column.html">Column</a></li><li><a href="./city-picker.html">CityPicker</a></li><li><a href="./text.html">Text</a></li></ul><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><p>核心模块组件 props 参数</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RegionBaseProps</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * v-model 输入值，各级别行政区划选择项目绑定值</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  modelValue</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RegionValues</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 启用城市级别</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> true</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  city</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 启用区、县级别</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> true</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  area</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 启用村、镇级别</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> true</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  town</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 语言</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> \`cn\`</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  language</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;cn&#39;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;en&#39;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 未选择时显示 \`请选择\` 的提示文本，仅适用于</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * - \`RegionSelects\`</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * - \`RegionFullSelects\`</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 模式</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> true</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  blank</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 分隔符，仅适用于</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * - \`RegionText\`</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * - \`RegionFullText\`</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 模式</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  separator</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><p>选择器模式组件 props 参数</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RegionSelectorProps</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RegionBaseProps</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 禁用组件</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> false</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  disabled</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 为触发对象添加自定义样式类</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  customTriggerClass</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 为下拉容器添加自定义样式类</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  customContainerClass</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><p>组件各类操作响应事件</p><h3 id="update-modelvalue" tabindex="-1">update:modelValue <a class="header-anchor" href="#update-modelvalue" aria-label="Permalink to &quot;update:modelValue&quot;">​</a></h3><p><code>v-model</code> 的响应行政区域选择变化，响应内容为选择行政区域的编码值</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">update</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">modelValue</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">data</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RegionValues</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> void</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RegionValues</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  province</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  city</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  area</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  town</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><h3 id="change" tabindex="-1">change <a class="header-anchor" href="#change" aria-label="Permalink to &quot;change&quot;">​</a></h3><p>响应行政区划变化</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">change</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">data</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RegionModel</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> void</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RegionItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  key</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  value</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RegionModel</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  province</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RegionItem</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  city</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RegionItem</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  area</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RegionItem</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  town</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RegionItem</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><p>你也可直接使用组件提供的类型定义</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">RegionSelects</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">    v-model</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">region</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    @</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">change</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">change</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> lang</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;ts&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { ref } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { RegionSelects } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-region&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> type</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { RegionValues, RegionModel } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-region&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> region</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ref</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">RegionValues</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;({</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  province: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;350000&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  city: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;350100&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  area: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;350104&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  town: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;350104008&#39;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">function</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> change</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">data</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RegionModel</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> void</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  console.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">log</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(data)</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><h3 id="complete" tabindex="-1">complete <a class="header-anchor" href="#complete" aria-label="Permalink to &quot;complete&quot;">​</a></h3><p>响应所有有效的行政区划选择完成，该事件仅适用于</p><ul><li><code>RegionGroupCore</code></li><li><code>RegionFullGroupCore</code></li><li><code>RegionColumnsCore</code></li><li><code>RegionFullColumnsCore</code></li></ul><p>等核心功能模块</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">complete</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: () </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> void</span></span></code></pre></div><h3 id="visiblechange" tabindex="-1">visibleChange <a class="header-anchor" href="#visiblechange" aria-label="Permalink to &quot;visibleChange&quot;">​</a></h3><p>响应下拉栏打开 / 关闭的状态变化</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">visibleChange</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">visible</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> void</span></span></code></pre></div>`,53)]))}const E=i(p,[["render",t]]);export{o as __pageData,E as default};
