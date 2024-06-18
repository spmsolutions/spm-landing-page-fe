"use strict";(self.webpackChunk_spmsolutions_website=self.webpackChunk_spmsolutions_website||[]).push([[65223],{24842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(74848),r=t(28453);const i={id:"dependency-theme",title:"Dependency theme"},o=void 0,c={id:"php/filters/scripts/dependency-theme",title:"Dependency theme",description:"Allows changing the order in which the theme area scripts are loaded. Useful when creating a Forms add-on plugin, and your script needs to be loaded before the Forms scripts (e.g. for adding custom event listeners).",source:"@site/forms/php/filters/scripts/dependency-theme.md",sourceDirName:"php/filters/scripts",slug:"/php/filters/scripts/dependency-theme",permalink:"/spm-landing-page-fe/forms/php/filters/scripts/dependency-theme",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"dependency-theme",title:"Dependency theme"},sidebar:"forms",previous:{title:"Dependency admin",permalink:"/spm-landing-page-fe/forms/php/filters/scripts/dependency-admin"},next:{title:"Dependency blocks editor",permalink:"/spm-landing-page-fe/forms/php/filters/scripts/dependency-blocks-editor"}},p={},d=[];function a(e){const n={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Allows changing the order in which the theme area scripts are loaded. Useful when creating a Forms add-on plugin, and your script needs to be loaded before the Forms scripts (e.g. for adding custom event listeners)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"\\add_filter('es_forms_scripts_dependency_theme', [$this, 'getScriptsDependency']);\n\n/**\n * Load add-on scripts before Forms scripts.\n *\n * @return array<int, string>\n */\npublic function getScriptsDependency(): array\n{\n\treturn [\n\t\t'<script-handle-name>',\n\t];\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);