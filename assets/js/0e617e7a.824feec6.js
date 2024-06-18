"use strict";(self.webpackChunk_spmsolutions_website=self.webpackChunk_spmsolutions_website||[]).push([[32277],{23910:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var o=t(74848),n=t(28453);const r={id:"blocks-structure",title:"Structure"},l=void 0,i={id:"legacy/v8/basics/blocks-structure",title:"Structure",description:"docs-source",source:"@site/docs/legacy/v8/basics/blocks-structure.md",sourceDirName:"legacy/v8/basics",slug:"/legacy/v8/basics/blocks-structure",permalink:"/spm-landing-page-fe/docs/legacy/v8/basics/blocks-structure",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-structure",title:"Structure"},sidebar:"docs",previous:{title:"Registration",permalink:"/spm-landing-page-fe/docs/legacy/v8/basics/blocks-registration"},next:{title:"Global Manifest",permalink:"/spm-landing-page-fe/docs/legacy/v8/basics/blocks-global-manifest"}},c={},a=[{value:"Blocks folder",id:"blocks-folder",level:3},{value:"Assets",id:"assets",level:3},{value:"Components",id:"components",level:3},{value:"Custom",id:"custom",level:3},{value:"Variations",id:"variations",level:3},{value:"Wrapper",id:"wrapper",level:3},{value:"manifest.json",id:"manifestjson",level:3},{value:"Blocks.php",id:"blocksphp",level:3}];function d(e){const s={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/Blocks/",children:(0,o.jsx)(s.img,{src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,o.jsx)(s.p,{children:"For the library to work and register blocks dynamically, a specific folder structure and naming must be followed."}),"\n",(0,o.jsx)(s.p,{children:"Your folder structure should be like this:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["src","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Blocks","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"assets"}),"\n",(0,o.jsx)(s.li,{children:"components"}),"\n",(0,o.jsx)(s.li,{children:"custom"}),"\n",(0,o.jsx)(s.li,{children:"variations"}),"\n",(0,o.jsx)(s.li,{children:"wrapper"}),"\n",(0,o.jsx)(s.li,{children:"Blocks.php"}),"\n",(0,o.jsx)(s.li,{children:"manifest.json"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Don't be confused with the upper and lower case folder names, those are like that on purpose. Everything under the ",(0,o.jsx)(s.code,{children:"Block"})," folder is considered a view so they are written in lower caps, and the Blocks.php file is still a part of the PHP PSR-4 standard so it must be written like every other ",(0,o.jsx)(s.strong,{children:"service class"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"blocks-folder",children:"Blocks folder"}),"\n",(0,o.jsxs)(s.p,{children:["This folder contains all the blocks defined in your project. Every block is located in the ",(0,o.jsx)(s.code,{children:"custom"})," folder, and every component is located in the ",(0,o.jsx)(s.code,{children:"components"})," folder. Blocks can be created from multiple block editor components or your project components."]}),"\n",(0,o.jsx)(s.h3,{id:"assets",children:"Assets"}),"\n",(0,o.jsx)(s.p,{children:"This folder contains all the additional files for the blocks you only need to use on the front end. Everything that is not a block or a component goes here, such as defining global style, global JavaScript helpers, project images, fonts, etc. Also, we register all blocks, styles, and scripts in the assets folder so that nothing works without this folder."}),"\n",(0,o.jsx)(s.h3,{id:"components",children:"Components"}),"\n",(0,o.jsxs)(s.p,{children:["This folder contains all the components that are shared across blocks and project template files. Components are not registered as blocks because they are small chunks of code you can reuse everywhere. For instance, you can create a menu component to be used in the footer but also reused in a separate menu block. Please refer to the ",(0,o.jsx)(s.a,{href:"blocks-component-structure",children:"component structure"})," chapter for more details."]}),"\n",(0,o.jsx)(s.h3,{id:"custom",children:"Custom"}),"\n",(0,o.jsxs)(s.p,{children:["This folder contains all the custom blocks defined and used in your project. Please refer to the ",(0,o.jsx)(s.a,{href:"block-structure",children:"block structure"})," chapter for more details."]}),"\n",(0,o.jsx)(s.h3,{id:"variations",children:"Variations"}),"\n",(0,o.jsxs)(s.p,{children:["This folder contains all the variations blocks defined and used in your project. Please refer to the ",(0,o.jsx)(s.a,{href:"blocks-variations",children:"variations"})," chapter for more details."]}),"\n",(0,o.jsx)(s.h3,{id:"wrapper",children:"Wrapper"}),"\n",(0,o.jsxs)(s.p,{children:["This folder contains a wrapper component that wraps all blocks with shared variables and gives blocks the ability to behave as a layout section. Please refer to the ",(0,o.jsx)(s.a,{href:"blocks-wrapper",children:"wrapper"})," chapter for more details."]}),"\n",(0,o.jsx)(s.h3,{id:"manifestjson",children:"manifest.json"}),"\n",(0,o.jsxs)(s.p,{children:["This file contains global settings for your project. It must contain ",(0,o.jsx)(s.code,{children:"namespace"})," and ",(0,o.jsx)(s.code,{children:"background"})," keys. Everything else is optional. Here you can store data you intend to share across toolbars, components, and blocks. Please refer to the ",(0,o.jsx)(s.a,{href:"block-manifest",children:"block manifest"})," chapter for more details."]}),"\n",(0,o.jsx)(s.h3,{id:"blocksphp",children:"Blocks.php"}),"\n",(0,o.jsx)(s.p,{children:"This is the main service class responsible for registering all the PHP parts of the blocks like:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"dynamic blocks view"}),"\n",(0,o.jsx)(s.li,{children:"custom category for your blocks"}),"\n",(0,o.jsx)(s.li,{children:"default color palette"}),"\n",(0,o.jsx)(s.li,{children:"what blocks you are going to use"}),"\n",(0,o.jsx)(s.li,{children:"all the custom functionality that you will write for the project"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>i});var o=t(96540);const n={},r=o.createContext(n);function l(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);