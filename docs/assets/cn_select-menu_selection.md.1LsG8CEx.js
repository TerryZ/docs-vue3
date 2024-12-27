import{c,a2 as e,G as a,k as i,j as n,a3 as g,a6 as u,a5 as y,o as F}from"./chunks/framework.BQnac4H4.js";import{_ as t}from"./chunks/LogDataPrinter.DyYZbSo_.js";import{M as b,a as C,C as m,b as v,c as B}from"./chunks/selection.BLq4Qs8Q.js";import"./chunks/v-selectmenu.CYobFDkB.js";import"./chunks/base.Cc5tHw0x.js";const A={class:"form-check form-switch d-flex align-items-center"},P=JSON.parse('{"title":"Selection","description":"","frontmatter":{},"headers":[],"relativePath":"cn/select-menu/selection.md","filePath":"cn/select-menu/selection.md","lastUpdated":1733212387000}'),x={name:"cn/select-menu/selection.md"},I=Object.assign(x,{setup(D){const{logs:p,MenuRadioGroupNormal:h}=b(),{logs:k,MenuCheckboxGroupNormal:d}=C(),{hideOnSelection:l,MenuRadioGroupHide:r,MenuCheckboxGroupHide:o}=m();return(S,s)=>(F(),c("div",null,[s[2]||(s[2]=e('<h1 id="selection" tabindex="-1">Selection <a class="header-anchor" href="#selection" aria-label="Permalink to &quot;Selection&quot;">​</a></h1><p>以单选或多项选择形态使用的菜单</p><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><h3 id="radio-单选模式" tabindex="-1">Radio 单选模式 <a class="header-anchor" href="#radio-单选模式" aria-label="Permalink to &quot;Radio 单选模式&quot;">​</a></h3><p>单选按钮组允许用户从互斥的选项列表中选择一个选项</p>',5)),a(i(h)),s[3]||(s[3]=n("p",null,"选项切换事件响应数据",-1)),a(t,{title:"事件响应数据日志",logs:i(p)},null,8,["logs"]),s[4]||(s[4]=e(`<div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-_7bB2" id="tab-__X2ftK" checked><label data-title="template" for="tab-__X2ftK">template</label><input type="radio" name="group-_7bB2" id="tab-i5dSF_D"><label data-title="ts" for="tab-i5dSF_D">ts</label></div><div class="blocks"><div class="language-template vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuBody</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuHeader</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;Radio group&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuHeader</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuRadioGroup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuRadioItem</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      value</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;radio1&quot;</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      disabled</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &gt;radio1&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuRadioItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuRadioItem</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> value</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;radio2&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;radio2&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuRadioItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuRadioItem</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> value</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;radio3&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;radio3&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuRadioItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuRadioGroup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuBody</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuDropdown,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuTrigger,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuBody,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuHeader,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuRadioGroup,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuRadioItem</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">} </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-selectmenu&#39;</span></span></code></pre></div></div></div><h3 id="checkbox-多选模式" tabindex="-1">Checkbox 多选模式 <a class="header-anchor" href="#checkbox-多选模式" aria-label="Permalink to &quot;Checkbox 多选模式&quot;">​</a></h3><p>CheckboxGroup 允许用户从选项列表中选择一个或多个项目</p>`,3)),a(i(d)),s[5]||(s[5]=n("p",null,"选项切换事件响应数据",-1)),a(t,{title:"事件响应数据日志",logs:i(k)},null,8,["logs"]),s[6]||(s[6]=e(`<div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-z2GoT" id="tab-k4NjSxk" checked><label data-title="template" for="tab-k4NjSxk">template</label><input type="radio" name="group-z2GoT" id="tab-Pc99UbJ"><label data-title="ts" for="tab-Pc99UbJ">ts</label></div><div class="blocks"><div class="language-template vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuBody</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuHeader</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;Checkbox group&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuHeader</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuCheckboxGroup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuCheckboxItem</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      value</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;checkbox1&quot;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &gt;checkbox1&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuCheckboxItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuCheckboxItem</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      value</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;checkbox2&quot;</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      disabled</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &gt;checkbox2&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuCheckboxItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuCheckboxItem</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">      value</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;checkbox3&quot;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &gt;checkbox3&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuCheckboxItem</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuCheckboxGroup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuBody</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuDropdown,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuTrigger,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuBody,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuHeader,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuCheckboxGroup,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  SelectMenuCheckboxItem</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">} </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;v-selectmenu&#39;</span></span></code></pre></div></div></div><h3 id="设置默认选中项" tabindex="-1">设置默认选中项 <a class="header-anchor" href="#设置默认选中项" aria-label="Permalink to &quot;设置默认选中项&quot;">​</a></h3><p>设置指定的选项默认选中</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-VoCOG" id="tab-rEL7fP4" checked><label data-title="template" for="tab-rEL7fP4">template</label><input type="radio" name="group-VoCOG" id="tab-E9__-e_"><label data-title="ts" for="tab-E9__-e_">ts</label></div><div class="blocks"><div class="language-template vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">&lt;!-- radio group with default value --&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuRadioGroup</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> v-model</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">radioGroupActive</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">...</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuRadioGroup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">&lt;!-- checkbox group with default value --&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuCheckboxGroup</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> v-model</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">checkboxGroupActive</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">...</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuCheckboxGroup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { ref } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> radioGroupActive</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ref</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;radio2&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> checkboxGroupActive</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ref</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">([</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;checkbox1&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;checkbox3&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">])</span></span></code></pre></div></div></div><p>Radio group</p>`,5)),a(i(v)),s[7]||(s[7]=n("p",null,"Checkbox group",-1)),a(i(B)),s[8]||(s[8]=e(`<h3 id="清除选中项" tabindex="-1">清除选中项 <a class="header-anchor" href="#清除选中项" aria-label="Permalink to &quot;清除选中项&quot;">​</a></h3><p>清除已选中的选项</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// clear radio group selection</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">radioGroupActive.value </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// clear checkbox group selection</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">checkboxGroupActive.value </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> []</span></span></code></pre></div><h3 id="选择后关闭菜单" tabindex="-1">选择后关闭菜单 <a class="header-anchor" href="#选择后关闭菜单" aria-label="Permalink to &quot;选择后关闭菜单&quot;">​</a></h3><p>选项在选择后，立即关闭菜单</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-HfKSu" id="tab-zM7HfBU" checked><label data-title="template" for="tab-zM7HfBU">template</label><input type="radio" name="group-HfKSu" id="tab-GKeqEOM"><label data-title="ts" for="tab-GKeqEOM">ts</label></div><div class="blocks"><div class="language-template vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuRadioGroup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> :</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">hideOnSelection</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">hideOnSelection</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">...</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuRadioGroup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuCheckboxGroup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> :</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">hideOnSelection</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">hideOnSelection</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">...</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SelectMenuCheckboxGroup</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { ref } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> hideOnSelection</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ref</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span></code></pre></div></div></div>`,6)),n("div",A,[g(n("input",{class:"form-check-input me-3",type:"checkbox",role:"switch",id:"switch-hide-on-selection","onUpdate:modelValue":s[0]||(s[0]=E=>y(l)?l.value=E:null)},null,512),[[u,i(l)]]),s[1]||(s[1]=n("label",{class:"form-check-label",for:"switch-hide-on-selection"},"选择后关闭菜单",-1))]),s[9]||(s[9]=n("p",null,"Radio group",-1)),a(i(r)),s[10]||(s[10]=n("p",null,"Checkbox group",-1)),a(i(o)),s[11]||(s[11]=e(`<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><h3 id="group-props" tabindex="-1">Group props <a class="header-anchor" href="#group-props" aria-label="Permalink to &quot;Group props&quot;">​</a></h3><p><code>SelectMenuRadioGroup</code>, <code>SelectMenuCheckboxGroup</code> 的 props</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">type</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SelectionValue</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> RadioGroupProps</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  modelValue</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SelectionValue</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> true</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  hideOnSelection</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> CheckboxGroupProps</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  modelValue</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SelectionValue</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">[]</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> false</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  hideOnSelection</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><h3 id="item-props" tabindex="-1">Item props <a class="header-anchor" href="#item-props" aria-label="Permalink to &quot;Item props&quot;">​</a></h3><p><code>SelectMenuRadioItem</code>, <code>SelectMenuCheckboxItem</code> 的 props</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SelectionItemProps</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  value</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SelectionValue</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@default</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> false</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  disabled</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><p><code>SelectMenuRadioGroup</code>, <code>SelectMenuCheckboxGroup</code> 的响应事件</p><h3 id="update-modelvalue" tabindex="-1">update:modelValue <a class="header-anchor" href="#update-modelvalue" aria-label="Permalink to &quot;update:modelValue&quot;">​</a></h3><p>响应选择项变化</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// radio group</span></span>
<span class="line"><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">\`update:modelValue\`</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">value</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SelectionValue</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> void</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// checkbox group</span></span>
<span class="line"><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">\`update:modelValue\`</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">value</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SelectionValue</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">[]) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> void</span></span></code></pre></div><h3 id="change" tabindex="-1">change <a class="header-anchor" href="#change" aria-label="Permalink to &quot;change&quot;">​</a></h3><p>响应选择项变化</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// radio group</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">change</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">data</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SelectionValue</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> void</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// checkbox group</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">change</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">data</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SelectionValue</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">[]) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> void</span></span></code></pre></div><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><h3 id="group-slots" tabindex="-1">Group slots <a class="header-anchor" href="#group-slots" aria-label="Permalink to &quot;Group slots&quot;">​</a></h3><p><code>SelectMenuRadioGroup</code>, <code>SelectMenuCheckboxGroup</code> 的插槽</p><ul><li><code>default</code> 默认插槽</li></ul><h3 id="item-slots" tabindex="-1">Item slots <a class="header-anchor" href="#item-slots" aria-label="Permalink to &quot;Item slots&quot;">​</a></h3><p><code>SelectMenuRadioItem</code>, <code>SelectMenuCheckboxItem</code> 的插槽</p><ul><li><code>prepend</code> 前置插槽</li><li><code>default</code> 默认插槽</li><li><code>append</code> 尾部插槽，向右对齐</li></ul>`,22))]))}});export{P as __pageData,I as default};