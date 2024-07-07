import{_ as s,o as a,c as i,a7 as e}from"./chunks/framework.BhJCiThr.js";const u=JSON.parse('{"title":"Dialogs","description":"","frontmatter":{},"headers":[],"relativePath":"cn/dialog/index.md","filePath":"cn/dialog/index.md","lastUpdated":1720339179000}'),t={name:"cn/dialog/index.md"},l=e(`<h1 id="dialogs" tabindex="-1">Dialogs <a class="header-anchor" href="#dialogs" aria-label="Permalink to &quot;Dialogs&quot;">​</a></h1><p>一款适用于 Vue3 的简洁实用的对话框组件集合，</p><p><a href="https://github.com/TerryZ/v-dialogs" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/stars/terryz/v-dialogs?style=social" alt="GitHub Repo stars"></a> <a href="https://github.com/TerryZ/v-dialogs" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/forks/terryz/v-dialogs?style=social" alt="GitHub forks"></a></p><p>项目状态</p><p><a href="https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-dialogs/tree/master" target="_blank" rel="noreferrer"><img src="https://dl.circleci.com/status-badge/img/gh/TerryZ/v-dialogs/tree/master.svg?style=svg" alt="CircleCI"></a> <a href="https://codecov.io/gh/TerryZ/v-dialogs" target="_blank" rel="noreferrer"><img src="https://codecov.io/gh/TerryZ/v-dialogs/branch/master/graph/badge.svg?token=FmdV7kVgIp" alt="code coverage"></a> <a href="https://www.npmjs.com/package/v-dialogs" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/v-dialogs.svg" alt="npm version"></a> <a href="https://mit-license.org/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="license"></a> <a href="https://standardjs.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="JavaScript Style Guide"></a></p><p>版本更新内容请访问 <a href="https://github.com/TerryZ/v-dialogs/blob/dev/CHANGELOG-CN.md" target="_blank" rel="noreferrer">Changelog</a></p><p>如果您的项目正在使用 <a href="https://v2.vuejs.org/v2/guide/" target="_blank" rel="noreferrer">vue 2.x</a> 版本生态，请使用 <a href="https://github.com/TerryZ/v-dialogs/tree/dev-vue-2" target="_blank" rel="noreferrer">v-dialogs 2.x</a> 版本</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>将 <code>v-dialogs</code> 组件安装到项目中</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-uYu3D" id="tab-njQO6G2" checked><label for="tab-njQO6G2">npm</label><input type="radio" name="group-uYu3D" id="tab-HrMqCT0"><label for="tab-HrMqCT0">yarn</label><input type="radio" name="group-uYu3D" id="tab-ZUCCPFg"><label for="tab-ZUCCPFg">pnpm</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">npm</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> i</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> v-dialogs</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">yarn</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> add</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> v-dialogs</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">pnpm</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> add</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> v-dialogs</span></span></code></pre></div></div></div><h2 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h2><ul><li><strong>Alert</strong> 交互式对话框，用于需要用户明确反馈的通知</li><li><strong>Modal</strong> 模态容器对话框，显示在屏幕中央</li><li><strong>Drawer</strong> 另一种模态容器对话框，它显示在屏幕边缘，是快速查看详细信息的更好选择</li><li><strong>Message</strong> 静默消息通知，显示在屏幕垂直中心区域</li><li><strong>Toast</strong> 静默消息通知，显示在屏幕角落</li><li><strong>Mask</strong> 阻止用户操作的屏幕遮罩</li></ul><h2 id="全局对象" tabindex="-1">全局对象 <a class="header-anchor" href="#全局对象" aria-label="Permalink to &quot;全局对象&quot;">​</a></h2><p><code>v-dialogs</code> 也提供了注册全局对象的方式来打开对话框，可以在任何组件中使用它</p><p>默认的实例名为 <code>$dlg</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { createApp } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> dialogs </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-dialogs&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> App </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;App.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">createApp</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(App).</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">use</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(dialogs).</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">mount</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;#app&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span></code></pre></div><blockquote><p>全局对象仅作为功能提供支持，并不建议使用</p></blockquote><h3 id="option-api" tabindex="-1">Option API <a class="header-anchor" href="#option-api" aria-label="Permalink to &quot;Option API&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  mounted</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> () {</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">    this</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">.$dlg.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">message</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Saved successfully!&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><h3 id="composition-api" tabindex="-1">Composition API <a class="header-anchor" href="#composition-api" aria-label="Permalink to &quot;Composition API&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { getCurrentInstance } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// const $dlg = getCurrentInstance().appContext.config.globalProperties.$dlg</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> $dlg</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> getCurrentInstance</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">().proxy.$dlg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">$dlg.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">message</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;Saved successfully!&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span></code></pre></div><h2 id="功能模块" tabindex="-1">功能模块 <a class="header-anchor" href="#功能模块" aria-label="Permalink to &quot;功能模块&quot;">​</a></h2><ul><li><a href="./alert.html">Alert</a></li><li><a href="./modal.html">Modal</a></li><li><a href="./drawer.html">Drawer</a></li><li><a href="./message.html">Message</a></li><li><a href="./toast.html">Toast</a></li><li><a href="./mask.html">Mask</a></li></ul>`,23),n=[l];function h(p,r,o,d,k,g){return a(),i("div",null,n)}const y=s(t,[["render",h]]);export{u as __pageData,y as default};
