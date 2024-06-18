"use strict";(self.webpackChunk_spmsolutions_website=self.webpackChunk_spmsolutions_website||[]).push([[41009],{48466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(74848),o=n(28453);const r={id:"browser-sync",title:"Browsersync"},c=void 0,i={id:"legacy/v6/basics/browser-sync",title:"Browsersync",description:"docs-source",source:"@site/docs/legacy/v6/basics/browser-sync.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/browser-sync",permalink:"/spm-landing-page-fe/docs/legacy/v6/basics/browser-sync",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"browser-sync",title:"Browsersync"},sidebar:"docs",previous:{title:"Fonts",permalink:"/spm-landing-page-fe/docs/legacy/v6/basics/fonts"},next:{title:"Dynamic Import",permalink:"/spm-landing-page-fe/docs/legacy/v6/basics/dynamic-import"}},a={},l=[{value:"Using SSL for local development",id:"using-ssl-for-local-development",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://browsersync.io/docs",children:"Browsersync"})," is a Node module that enables you to develop sites faster. It will react to any code change and 'refresh' the site without you needing to refresh it. In the background, it runs a small local server. When configured, it will inject a script on your web page to react to any code change."]}),"\n",(0,s.jsx)(t.p,{children:"Besides that, you can test your site on various devices on the same network."}),"\n",(0,s.jsx)(t.p,{children:"It's part of the Eightshift Development Kit by default. When you run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,s.jsxs)(t.p,{children:["it will proxy the page you've specified in the ",(0,s.jsx)(t.code,{children:"projectUrl"})," to your local server."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"[Browsersync] Proxying: https://local-url.test\n[Browsersync] Access URLs:\n--------------------------------------\nLocal: https://localhost:3000\nExternal: https://192.168.0.25:3000\n--------------------------------------\nUI: http://localhost:3001\nUI External: http://localhost:3001\n--------------------------------------\n"})}),"\n",(0,s.jsx)(t.p,{children:"Using the IP address, you can open it on any device (mobile phone or tablet) that is connected to the same network, and see how your site looks on that device."}),"\n",(0,s.jsx)(t.h2,{id:"using-ssl-for-local-development",children:"Using SSL for local development"}),"\n",(0,s.jsx)(t.p,{children:"By default, BrowserSync does not work with HTTPS URLs. If you use HTTPS in your local environment you can simply provide an additional key in the Webpack config to make it work."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"module.exports = (env, argv) => {\n\tconst projectConfig = {\n\t\tconfig: {\n\t\t\tprojectDir: __dirname, // Current project directory absolute path.\n\t\t\tprojectUrl: 'local-url.test', // Used for providing browsersync functionality.\n\t\t\tprojectPath: 'wp-content/themes/your-theme-name', // Project path relative to project root.\n\t\t\tuseSsl: true,\n\t\t},\n\t};\n\n\t// Generate webpack config for this project using options object.\n\treturn require('./node_modules/@eightshift/frontend-libs/webpack')(argv.mode, projectConfig);\n};\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var s=n(96540);const o={},r=s.createContext(o);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);