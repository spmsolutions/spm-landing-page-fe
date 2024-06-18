"use strict";(self.webpackChunk_spmsolutions_website=self.webpackChunk_spmsolutions_website||[]).push([[28767],{98964:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var n=t(74848),i=t(28453);const o={id:"manifest",title:"Assets Manifest"},a=void 0,l={id:"legacy/v7/basics/manifest",title:"Assets Manifest",description:"docs-source",source:"@site/docs/legacy/v7/basics/manifest.md",sourceDirName:"legacy/v7/basics",slug:"/legacy/v7/basics/manifest",permalink:"/spm-landing-page-fe/docs/legacy/v7/basics/manifest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"manifest",title:"Assets Manifest"},sidebar:"docs",previous:{title:"Example Class",permalink:"/spm-landing-page-fe/docs/legacy/v7/basics/example-class"},next:{title:"REST Intro",permalink:"/spm-landing-page-fe/docs/legacy/v7/basics/rest"}},c={},r=[{value:"How to use it",id:"how-to-use-it",level:2},{value:"Why not just fetch the asset the old-fashioned way?",id:"why-not-just-fetch-the-asset-the-old-fashioned-way",level:2}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/infinum/eightshift-libs/tree/5.0.0",children:(0,n.jsx)(s.img,{src:"https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["This ",(0,n.jsx)(s.code,{children:"manifest.json"})," file is generated by Webpack, and is different from the rest of Eightshift manifests described elsewhere in the documentation."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["In the build process, Webpack creates all the static files from your assets folder and a ",(0,n.jsx)(s.code,{children:"manifest.json"})," file inside the public folder. The manifest file contains a list of key/value pairs that we use to set the location of the assets dynamically."]}),"\n",(0,n.jsxs)(s.p,{children:["This class provides the location of the ",(0,n.jsx)(s.code,{children:"manifest.json"})," file and helpers to return the full path for a specific asset."]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-use-it",children:"How to use it"}),"\n",(0,n.jsx)(s.p,{children:"First, install the manifest class using this command:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"wp boilerplate create_manifest"})}),"\n",(0,n.jsx)(s.p,{children:"You will see a custom filter you can use to fetch an item from the public folder in your class. This is the custom filter:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:"/**\n * Manifest item filter name constant.\n *\n * @var string\n */\npublic const MANIFEST_ITEM = 'manifest-item';\n\n/**\n * Register all hooks. Changed filter name to manifest.\n *\n * @return void\n */\npublic function register(): void\n{\n\t\\add_filter(static::MANIFEST_ITEM, [ $this, 'getAssetsManifestItem' ]);\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:"To use this filter to fetch asset URLs, add the following code and provide the correct name of your asset:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:"use CoolProject\\Manifest\\Manifest;\n\n$logo = \\apply_filters(Manifest::MANIFEST_ITEM, 'logo.svg');\n"})}),"\n",(0,n.jsxs)(s.p,{children:["And that's it. This filter will check the public folder for the ",(0,n.jsx)(s.code,{children:"manifest.json"})," file, parse it, and return the value of the provided key."]}),"\n",(0,n.jsxs)(s.p,{children:["If there is no ",(0,n.jsx)(s.code,{children:"manifest.json"})," file or you provided the wrong asset name, there will be a descriptive message for you."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["If you are using multiple boilerplates in one project don't forget to change the filter name defined in the ",(0,n.jsx)(s.code,{children:"MANIFEST_ITEM"})," constant."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"why-not-just-fetch-the-asset-the-old-fashioned-way",children:"Why not just fetch the asset the old-fashioned way?"}),"\n",(0,n.jsx)(s.p,{children:"By the old-fashioned way, we mean doing something like this:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:"$logo = get_template_directory_uri() . 'public/logo.svg';\n"})}),"\n",(0,n.jsx)(s.p,{children:"You can definitely do this. However, using the manifest approach, if you want to change the public folder location or public folder name for some reason, you can change it in one place and you're done."}),"\n",(0,n.jsx)(s.p,{children:"If you are using the old-fashioned way, you would need to search and replace the whole project and implement the change. There is always a chance you will miss something and somehow break the project."})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>l});var n=t(96540);const i={},o=n.createContext(i);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);