import{o as A,c as F,I as p,w as i,k as a,j as s,a as D,aa as u,a4 as m,a9 as _,a6 as C,a8 as h,ac as v}from"./chunks/framework.DatLbd_V.js";import{u as k}from"./chunks/v-layouts.gTgDVjaw.js";import{u as b}from"./chunks/content.Cflztr7z.js";const B=h('<h1 id="content" tabindex="-1">Content <a class="header-anchor" href="#content" aria-label="Permalink to &quot;Content&quot;">​</a></h1><p>应用于内容发布、呈现的界面布局</p><h2 id="contentpress" tabindex="-1">ContentPress <a class="header-anchor" href="#contentpress" aria-label="Permalink to &quot;ContentPress&quot;">​</a></h2><p>内容发布布局结构，广泛应用于文档、博客、新闻、文章等页面</p><p><img src="'+v+`" alt="content-press"></p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h3><h4 id="快速应用布局" tabindex="-1">快速应用布局 <a class="header-anchor" href="#快速应用布局" aria-label="Permalink to &quot;快速应用布局&quot;">​</a></h4><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">LayoutContentPress</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> #</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">header</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;Header&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> #</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">primaryAside</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;Primary aside&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> #</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">secondaryAside</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;Secondary aside&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> #</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">footer</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;Footer&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    Main content</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">LayoutContentPress</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { LayoutContentPress } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-layouts&#39;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div>`,8),f=s("div",{class:"border-bottom h-100 p-3"},"Header",-1),P=s("div",{class:"border-end h-100 p-3"},"Primary aside",-1),q=s("div",{class:"border-start h-100 p-3"},"Secondary aside",-1),x=s("div",{class:"border-top h-100 p-3"},"Footer",-1),T=s("div",{class:"text-bg-light h-100 p-3"},"Main content",-1),S=h(`<h4 id="收起-展开侧边栏" tabindex="-1">收起/展开侧边栏 <a class="header-anchor" href="#收起-展开侧边栏" aria-label="Permalink to &quot;收起/展开侧边栏&quot;">​</a></h4><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">LayoutContentPress</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    :</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">primary-aside-width</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">primaryAsideWidth</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    :</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">secondary-aside-width</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">secondaryAsideWidth</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> #</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">primaryAside</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;Primary aside&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> #</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">secondaryAside</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;Secondary aside&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      Main content</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">button</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">        @</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">click</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">collapse </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> !</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">collapse</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &gt;collapse&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">button</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">LayoutContentPress</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { ref, computed } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { LayoutContentPress } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-layouts&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> collapse</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ref</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> primaryAsideWidth</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> computed</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(() </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> collapse.value </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;70px&#39;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> :</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;200px&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> secondaryAsideWidth</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> computed</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(() </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> collapse.value </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;70px&#39;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> :</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;200px&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div>`,2),w={class:"my-3 d-flex align-items-center"},V=s("div",{class:"border-end h-100 p-3"},"Primary aside",-1),I=s("div",{class:"border-start h-100 p-3"},"Secondary aside",-1),L=s("div",{class:"text-bg-light h-100 p-3"},"Main content",-1),N=h(`<p>通过设置 <code>primary-aside-width</code> 与 <code>secondary-aside-width</code> 来切换主、次两个侧边栏的宽度，若希望达到将侧边栏完全收起的效果，将宽度设置为 <code>0</code> 即可</p><h4 id="条件渲染区域" tabindex="-1">条件渲染区域 <a class="header-anchor" href="#条件渲染区域" aria-label="Permalink to &quot;条件渲染区域&quot;">​</a></h4><p>通过条件渲染将布局的 <code>header</code>、<code>primaryAside</code>、<code>secondaryAside</code> 与 <code>footer</code> 等区域进行切换打开/关闭状态</p><p>在布局区域关闭后，剩余可见的区域会自动对空间进行填充</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">LayoutContentPress</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> aside-position</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;right&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> #</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">header</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> v-if</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">visible</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;Header&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      Main content</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">button</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">        @</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">click</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">visible </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> !</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">visible</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &gt;change visible&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">button</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">LayoutContentPress</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { ref } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { LayoutContentPress } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-layouts&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> visible</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ref</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">true</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div>`,5),H={class:""},M=s("div",{class:""},"区域条件渲染",-1),W={class:"d-flex align-items-center my-3"},R=s("div",{class:"border-bottom h-100 p-3"},"Header",-1),$=s("div",{class:"border-end h-100 p-3"},"Aside",-1),j=s("div",{class:"border-start h-100 p-3"},"Secondary aside",-1),O=s("div",{class:"border-top h-100 p-3"},"Footer",-1),U=s("div",{class:"text-bg-light h-100 p-3"},"Main content",-1),J=h(`<h4 id="内容区位置" tabindex="-1">内容区位置 <a class="header-anchor" href="#内容区位置" aria-label="Permalink to &quot;内容区位置&quot;">​</a></h4><p>在默认布局中，内容区居中摆放，可通过 <code>main-position</code> 属性设置其布局位置</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">LayoutContentPress</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> main-position</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;right&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> #</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">primaryAside</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;Primary aside&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> #</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">secondaryAside</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;Secondary aside&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;Main content&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">LayoutContentPress</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div>`,3),z={class:"d-flex align-items-center my-3"},G=s("span",{class:"me-3"},"内容区位置",-1),K=s("option",{value:"left"},"left",-1),Q=s("option",{value:"center"},"center",-1),X=s("option",{value:"right"},"right",-1),Y=[K,Q,X],Z=s("div",{class:"border-bottom h-100 p-3"},"Header",-1),ss=s("div",{class:"border-end h-100 p-3"},"Primary aside",-1),is=s("div",{class:"h-100 p-3"},"Secondary aside",-1),as=s("div",{class:"border-top h-100 p-3"},"Footer",-1),ns=s("div",{class:"text-bg-light h-100 p-3"},"Main content",-1),ts=h(`<h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><p>布局的属性</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">type</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> CssValue</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> AdminClassicProps</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 布局容器总宽度</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> \`100vw\`</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  width</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> CssValue</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 布局容器总高度</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> \`100vh\`</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  height</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> CssValue</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 头部栏高度</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> 60</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  headerHeight</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> CssValue</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 底部栏高度</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> 60</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  footerHeight</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> CssValue</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 主内容容器自定义扩展样式</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  mainClass</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> StyleValue</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 主侧边栏宽度</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> 260</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  primaryAsideWidth</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> CssValue</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 次侧边栏宽度</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> 260</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  secondaryAsideWidth</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> CssValue</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * 主内容区位置</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> \`center</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  mainPosition</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;left&#39;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;center&#39;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;right&#39;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><p>在界面布局中，布局区域均使用具名插槽进行内容分发</p><ul><li><code>default</code> 默认插槽对应了主内容区域</li><li><code>header</code> 头部区域，默认情况下独占一行</li><li><code>primaryAside</code> 主侧边栏</li><li><code>secondaryAside</code> 次侧边栏</li><li><code>footer</code> 底部栏</li></ul>`,6),ds=JSON.parse('{"title":"Content","description":"","frontmatter":{},"headers":[],"relativePath":"cn/layout/content.md","filePath":"cn/layout/content.md","lastUpdated":1724577594000}'),hs={name:"cn/layout/content.md"},rs=Object.assign(hs,{setup(ls){const{collapsePrimary:g,collapseSecondary:y,primaryAsideWidth:o,secondaryAsideWidth:c,visibleHeader:e,visiblePrimaryAside:E,visibleSecondaryAside:d,visibleFooter:r,position:l}=b();return(ps,n)=>(A(),F("div",null,[B,p(a(k),{width:"100%",height:350,"primary-aside-width":180,"secondary-aside-width":180,class:"border rounded-3 shadow-sm"},{header:i(()=>[f]),primaryAside:i(()=>[P]),secondaryAside:i(()=>[q]),footer:i(()=>[x]),default:i(()=>[T]),_:1}),S,s("div",w,[D(" 收起 / 展开 "),s("button",{type:"button",class:"btn btn-dark mx-3",onClick:n[0]||(n[0]=t=>g.value=!a(g))},"主侧边栏"),s("button",{type:"button",class:"btn btn-dark",onClick:n[1]||(n[1]=t=>y.value=!a(y))},"次侧边栏")]),p(a(k),{width:"100%",height:350,"primary-aside-width":a(o),"secondary-aside-width":a(c),class:"border rounded-3 shadow-sm"},{primaryAside:i(()=>[V]),secondaryAside:i(()=>[I]),default:i(()=>[L]),_:1},8,["primary-aside-width","secondary-aside-width"]),N,s("div",H,[M,s("div",W,[s("button",{type:"button",class:"btn btn-dark me-3",onClick:n[2]||(n[2]=t=>e.value=!a(e))},"Header"),s("button",{type:"button",class:"btn btn-dark me-3",onClick:n[3]||(n[3]=t=>E.value=!a(E))},"Primary aside"),s("button",{type:"button",class:"btn btn-dark me-3",onClick:n[4]||(n[4]=t=>d.value=!a(d))},"Secondary aside"),s("button",{type:"button",class:"btn btn-dark",onClick:n[5]||(n[5]=t=>r.value=!a(r))},"Footer")])]),p(a(k),{width:"100%",height:350,"primary-aside-width":200,"secondary-aside-width":200,"aside-position":"right",class:"border rounded-3 shadow-sm"},u({default:i(()=>[U]),_:2},[a(e)?{name:"header",fn:i(()=>[R]),key:"0"}:void 0,a(E)?{name:"primaryAside",fn:i(()=>[$]),key:"1"}:void 0,a(d)?{name:"secondaryAside",fn:i(()=>[j]),key:"2"}:void 0,a(r)?{name:"footer",fn:i(()=>[O]),key:"3"}:void 0]),1024),J,s("div",z,[G,m(s("select",{class:"form-select","onUpdate:modelValue":n[6]||(n[6]=t=>C(l)?l.value=t:null),style:{width:"100px"}},Y,512),[[_,a(l)]])]),p(a(k),{width:"100%",height:350,"primary-aside-width":200,"secondary-aside-width":200,"main-position":a(l),class:"border rounded-3 shadow-sm"},{header:i(()=>[Z]),primaryAside:i(()=>[ss]),secondaryAside:i(()=>[is]),footer:i(()=>[as]),default:i(()=>[ns]),_:1},8,["main-position"]),ts]))}});export{ds as __pageData,rs as default};
