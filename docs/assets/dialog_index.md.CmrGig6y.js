import{_ as s,o as a,c as i,a8 as e}from"./chunks/framework.AM8gWj8u.js";const u=JSON.parse('{"title":"Dialogs","description":"","frontmatter":{},"headers":[],"relativePath":"dialog/index.md","filePath":"en/dialog/index.md","lastUpdated":1720434966000}'),t={name:"dialog/index.md"},l=e(`<h1 id="dialogs" tabindex="-1">Dialogs <a class="header-anchor" href="#dialogs" aria-label="Permalink to &quot;Dialogs&quot;">​</a></h1><p>A simple style useful dialog component collection for Vue3</p><p><a href="https://github.com/TerryZ/v-dialogs" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/stars/terryz/v-dialogs?style=social" alt="GitHub Repo stars"></a> <a href="https://github.com/TerryZ/v-dialogs" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/forks/terryz/v-dialogs?style=social" alt="GitHub forks"></a></p><p>Repository status</p><p><a href="https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-dialogs/tree/master" target="_blank" rel="noreferrer"><img src="https://dl.circleci.com/status-badge/img/gh/TerryZ/v-dialogs/tree/master.svg?style=svg" alt="CircleCI"></a> <a href="https://codecov.io/gh/TerryZ/v-dialogs" target="_blank" rel="noreferrer"><img src="https://codecov.io/gh/TerryZ/v-dialogs/branch/master/graph/badge.svg?token=FmdV7kVgIp" alt="code coverage"></a> <a href="https://www.npmjs.com/package/v-dialogs" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/v-dialogs.svg" alt="npm version"></a> <a href="https://mit-license.org/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="license"></a> <a href="https://standardjs.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="JavaScript Style Guide"></a></p><p>Detailed changes for each release are documented in <a href="https://github.com/TerryZ/v-dialogs/blob/dev/CHANGELOG.md" target="_blank" rel="noreferrer">Changelog</a></p><p>If you are using <a href="https://v2.vuejs.org/v2/guide/" target="_blank" rel="noreferrer">vue 2.x</a> version, please use <a href="https://github.com/TerryZ/v-dialogs/tree/dev-vue-2" target="_blank" rel="noreferrer">v-dialogs 2.x</a> version instead</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Install <code>v-dialogs</code> component in to your project</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-UaUuI" id="tab-xFImirb" checked><label for="tab-xFImirb">npm</label><input type="radio" name="group-UaUuI" id="tab-I35CbuX"><label for="tab-I35CbuX">yarn</label><input type="radio" name="group-UaUuI" id="tab-oXstobm"><label for="tab-oXstobm">pnpm</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">npm</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> i</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> v-dialogs</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">yarn</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> add</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> v-dialogs</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">pnpm</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> add</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> v-dialogs</span></span></code></pre></div></div></div><h2 id="application-scenario" tabindex="-1">Application scenario <a class="header-anchor" href="#application-scenario" aria-label="Permalink to &quot;Application scenario&quot;">​</a></h2><ul><li><strong>Alert</strong> Interactive dialog boxes, for notifications that require explicit feedback from the user</li><li><strong>Modal</strong> Modal container dialog, It is displayed at the center of the screen</li><li><strong>Drawer</strong> Another modal container dialog, It is displayed at the edge of the screen, and it is the better choice for quickly viewing details</li><li><strong>Message</strong> Silent message notification, displayed in the vertical center area of ​​the screen</li><li><strong>Toast</strong> Silent message notification, displayed in the corner of the screen</li><li><strong>Mask</strong> A screen mask that blocks user actions</li></ul><h2 id="globally-instance" tabindex="-1">Globally instance <a class="header-anchor" href="#globally-instance" aria-label="Permalink to &quot;Globally instance&quot;">​</a></h2><p><code>v-dialogs</code> also provides a globally instance to open dialogs, you can use it in any component</p><p>The default instance name is <code>$dlg</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { createApp } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> dialogs </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-dialogs&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> App </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;App.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">createApp</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(App).</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">use</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(dialogs).</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">mount</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;#app&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span></code></pre></div><blockquote><p>The global instance are only supported as a feature and are not recommended for use</p></blockquote><h3 id="option-api" tabindex="-1">Option API <a class="header-anchor" href="#option-api" aria-label="Permalink to &quot;Option API&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  mounted</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> () {</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">    this</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">.$dlg.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">message</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Saved successfully!&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><h3 id="composition-api" tabindex="-1">Composition API <a class="header-anchor" href="#composition-api" aria-label="Permalink to &quot;Composition API&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { getCurrentInstance } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// const $dlg = getCurrentInstance().appContext.config.globalProperties.$dlg</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> $dlg</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> getCurrentInstance</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">().proxy.$dlg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">$dlg.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">message</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Saved successfully!&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span></code></pre></div><h2 id="modules" tabindex="-1">Modules <a class="header-anchor" href="#modules" aria-label="Permalink to &quot;Modules&quot;">​</a></h2><ul><li><a href="./alert.html">Alert</a></li><li><a href="./modal.html">Modal</a></li><li><a href="./drawer.html">Drawer</a></li><li><a href="./message.html">Message</a></li><li><a href="./toast.html">Toast</a></li><li><a href="./mask.html">Mask</a></li></ul>`,23),n=[l];function r(h,p,o,d,g,k){return a(),i("div",null,n)}const m=s(t,[["render",r]]);export{u as __pageData,m as default};
