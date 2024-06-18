"use strict";(self.webpackChunk_spmsolutions_website=self.webpackChunk_spmsolutions_website||[]).push([[5843],{18137:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=s(74848),o=s(28453);const l={id:"blocks-global-manifest",title:"Global Manifest"},a=void 0,r={id:"legacy/v7/basics/blocks-global-manifest",title:"Global Manifest",description:"docs-source",source:"@site/docs/legacy/v7/basics/blocks-global-manifest.md",sourceDirName:"legacy/v7/basics",slug:"/legacy/v7/basics/blocks-global-manifest",permalink:"/spm-landing-page-fe/docs/legacy/v7/basics/blocks-global-manifest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-global-manifest",title:"Global Manifest"},sidebar:"docs",previous:{title:"Structure",permalink:"/spm-landing-page-fe/docs/legacy/v7/basics/blocks-structure"},next:{title:"Block Structure",permalink:"/spm-landing-page-fe/docs/legacy/v7/basics/block-structure"}},i={},c=[{value:"Namespace",id:"namespace",level:3},{value:"Background and foreground",id:"background-and-foreground",level:3},{value:"Global variables",id:"global-variables",level:3},{value:"Attributes",id:"attributes",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/blocks/",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,t.jsx)(n.p,{children:"Global manifest is used to provide all the global configuration to the blocks and components, and much more."}),"\n",(0,t.jsx)(n.p,{children:"Currently, our default global manifest looks like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "namespace": "eightshift-boilerplate",\n  "background": "#FBF9FF",\n  "foreground": "#9973E3",\n  "globalVariables": {\n    "customBlocksName": "eightshift-block",\n    "maxCols": 12,\n    "baseFont": "Inter",\n    "zIndex": {\n      "header": 100,\n      "drawer": 99,\n      "overlay": 98\n    },\n    "breakpoints": {\n      "mobile": 480,\n      "tablet": 960,\n      "desktop": 1920,\n      "large": 1921\n    },\n    "containers": {\n      "default": "66rem"\n    },\n    "gutters": {\n      "none": "0",\n      "default": "1.25rem",\n      "big": "2.5rem"\n    },\n    "sectionSpacing": {\n      "min": -300,\n      "max": 300,\n      "step": 10\n    },\n    "sectionInSpacing": {\n      "min": 0,\n      "max": 300,\n      "step": 10\n    },\n    "colors": [\n      {\n        "name": "Primary",\n        "slug": "primary",\n        "color": "#9973E3"\n      },\n      {\n        "name": "Black",\n        "slug": "black",\n        "color": "#000000"\n      },\n      {\n        "name": "Light",\n        "slug": "light",\n        "color": "#CCCCCC"\n      },\n      {\n        "name": "White",\n        "slug": "white",\n        "color": "#FFFFFF"\n      },\n      {\n        "name": "Eightshift",\n        "slug": "eightshift",\n        "color": "#0D3636"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"As you can see, we have some global configuration for blocks and some SCSS variables. Along with these default keys, here you can define anything you need for the project."}),"\n",(0,t.jsx)(n.h3,{id:"namespace",children:"Namespace"}),"\n",(0,t.jsx)(n.p,{children:"All blocks must have a valid block name to be registered. A valid block consists of namespace and block name, like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"eightshift-boilerplate/heading\n"})}),"\n",(0,t.jsx)(n.p,{children:"To remove the need to write namespace multiple times across multiple blocks, we have defined the namespace in the global manifest, and we use it in the block registration process."}),"\n",(0,t.jsxs)(n.p,{children:["If you want to define multiple namespaces for your blocks in a single folder, please refer to the ",(0,t.jsx)(n.a,{href:"block-structure",children:"block-structure"})," chapter for more details."]}),"\n",(0,t.jsx)(n.h3,{id:"background-and-foreground",children:"Background and foreground"}),"\n",(0,t.jsx)(n.p,{children:"Just like a namespace, we use the same logic for icons background and foreground when selecting a block from the list. Here you define global background and foreground for all your custom blocks."}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to the ",(0,t.jsx)(n.a,{href:"block-structure",children:"block-structure"})," chapter for more details on how to override global background and foreground your blocks icon."]}),"\n",(0,t.jsx)(n.h3,{id:"global-variables",children:"Global variables"}),"\n",(0,t.jsxs)(n.p,{children:["These are all the global settings you can use in JavaScript, SCSS, and PHP files. We have covered this topic in more detail in the ",(0,t.jsx)(n.a,{href:"blocks-styles",children:"block-styles"})," chapter."]}),"\n",(0,t.jsx)(n.h3,{id:"attributes",children:"Attributes"}),"\n",(0,t.jsx)(n.p,{children:"We don't have this key in the example, but you can set the default attributes in this file, and they will be applied to all the blocks."}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to the ",(0,t.jsx)(n.a,{href:"blocks-attributes",children:"blocks attributes"})," chapter for more details."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(96540);const o={},l=t.createContext(o);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);