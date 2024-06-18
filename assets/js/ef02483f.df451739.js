"use strict";(self.webpackChunk_spmsolutions_website=self.webpackChunk_spmsolutions_website||[]).push([[31671],{59849:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=s(74848),r=s(28453);const o={id:"blocks-patterns",title:"Patterns",sidebar_label:"Patterns"},a=void 0,i={id:"legacy/v5/basics/blocks-patterns",title:"Patterns",description:"docs-source",source:"@site/docs/legacy/v5/basics/blocks-patterns.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/blocks-patterns",permalink:"/spm-landing-page-fe/docs/legacy/v5/basics/blocks-patterns",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-patterns",title:"Patterns",sidebar_label:"Patterns"},sidebar:"docs",previous:{title:"Variations",permalink:"/spm-landing-page-fe/docs/legacy/v5/basics/blocks-variations"},next:{title:"Transforms",permalink:"/spm-landing-page-fe/docs/legacy/v5/basics/blocks-transforms"}},c={},l=[{value:"Remove all core patterns",id:"remove-all-core-patterns",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,n.jsx)(t.p,{children:"Block Patterns are predefined block layouts, ready to insert and tweak."}),"\n",(0,n.jsxs)(t.p,{children:["You can check the ",(0,n.jsx)(t.a,{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-patterns/",children:"WordPress documentation"})," on this subject."]}),"\n",(0,n.jsxs)(t.p,{children:["Patterns are (as we understand them) the same thing as block variations. The main difference is that you can provide full layouts with patterns, as described in ",(0,n.jsx)(t.a,{href:"blocks-variations#limitations",children:"this chapter"}),". You can also provide the full page layouts with our variations."]}),"\n",(0,n.jsx)(t.p,{children:"This means that the only differences between our variations and block patterns are:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Variations"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Variations provide data using our manifest.json file (the rest is handled using JavaScript)."}),"\n",(0,n.jsx)(t.li,{children:"Variations appear in the editor next to the static blocks."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Patterns"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Patterns are registered using PHP."}),"\n",(0,n.jsx)(t.li,{children:"Patterns appear in the editor inside the special tab for patterns."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"We will soon provide WP-CLI command to automaticity create block patterns, boilerplate class, for you to use."})}),"\n",(0,n.jsx)(t.h3,{id:"remove-all-core-patterns",children:"Remove all core patterns"}),"\n",(0,n.jsx)(t.p,{children:"If you don't use core blocks, core patterns won't work. Don't confuse your users and remove them (but feel free to add new patterns based on your own custom blocks!)"}),"\n",(0,n.jsxs)(t.p,{children:["To remove all core patterns add this code to you ",(0,n.jsx)(t.code,{children:"src/Blocks/Blocks.php"})," class."]}),"\n",(0,n.jsx)(t.p,{children:"Filter goes in the register method:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"// Remove block patterns.\nadd_action('after_setup_theme', [$this, 'removeCorePatterns']);\n"})}),"\n",(0,n.jsx)(t.p,{children:"Callback method:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"/**\n\t* Remove core block patterns.\n\t*\n\t* @return void\n\t*/\npublic function removeCorePatterns(): void\n{\n\tremove_theme_support('core-block-patterns');\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(96540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);