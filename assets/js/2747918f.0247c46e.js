"use strict";(self.webpackChunk_spmsolutions_website=self.webpackChunk_spmsolutions_website||[]).push([[38993],{46282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var o=n(74848),i=n(28453);const s={title:"Initial setup and first steps",description:"This blog post describes how to set up Eightshift Boilerplate theme, and covers some of the most common issues that may occur",slug:"initial-setup",authors:"obradovic",tags:["eightshift","boilerplate","setup"],hide_table_of_contents:!1},r=void 0,l={permalink:"/spm-landing-page-fe/blog/initial-setup",source:"@site/blog/2022-01-20-initial-setup.md",title:"Initial setup and first steps",description:"This blog post describes how to set up Eightshift Boilerplate theme, and covers some of the most common issues that may occur",date:"2022-01-20T00:00:00.000Z",tags:[{inline:!0,label:"eightshift",permalink:"/spm-landing-page-fe/blog/tags/eightshift"},{inline:!0,label:"boilerplate",permalink:"/spm-landing-page-fe/blog/tags/boilerplate"},{inline:!0,label:"setup",permalink:"/spm-landing-page-fe/blog/tags/setup"}],readingTime:2.595,hasTruncateMarker:!0,authors:[{name:"Igor Obradovi\u0107",title:"WordPress Engineer",url:"https://github.com/iobrado",imageURL:"https://avatars.githubusercontent.com/u/23059501?v=4",key:"obradovic"}],frontMatter:{title:"Initial setup and first steps",description:"This blog post describes how to set up Eightshift Boilerplate theme, and covers some of the most common issues that may occur",slug:"initial-setup",authors:"obradovic",tags:["eightshift","boilerplate","setup"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Components and blocks",permalink:"/spm-landing-page-fe/blog/components-and-blocks"}},a={authorsImageUrls:[void 0]},h=[{value:"Setup",id:"setup",level:2},{value:"Getting to know Eightshift dev tools",id:"getting-to-know-eightshift-dev-tools",level:2},{value:"What&#39;s next in store?",id:"whats-next-in-store",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"As is often the case when trying out something new, you might encounter some hiccups. You're trying out our Eightshift Boilerplate, but can't get it to work? Worry not, we'll go through the setup and the most common issues that may occur."}),"\n",(0,o.jsx)(t.admonition,{title:"Last update",type:"info",children:(0,o.jsx)(t.p,{children:"August 23, 2022"})}),"\n",(0,o.jsxs)(t.p,{children:["If you haven't already, be sure to read our official ",(0,o.jsx)(t.a,{href:"/docs/welcome",children:"Eightshift Docs"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(t.p,{children:["To create Eightshift theme, navigate to ",(0,o.jsx)(t.code,{children:"wp-content/themes"})," in your project and type the following in the terminal:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npx create-wp-project\n"})}),"\n",(0,o.jsx)(t.p,{children:"Just follow the instructions and wait for the theme to download."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Setup - initial prompt",src:n(25577).A+"",width:"770",height:"674"})}),"\n",(0,o.jsxs)(t.p,{children:["OK, you went through the process, filled out all required information, but the theme still isn't working. There are a few more instructions in the terminal on what to do next, but you may have skipped them. While the principle ",(0,o.jsx)(t.strong,{children:'"6 hours of debugging can save you 5 minutes of reading documentation"'})," is fun, sometimes it's just not worth it. Here's what you should do:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["run ",(0,o.jsx)(t.code,{children:"wp theme activate your-theme-name"})," to activate your new theme"]}),"\n",(0,o.jsxs)(t.li,{children:["navigate to ",(0,o.jsx)(t.code,{children:"wp-content/themes/your-theme-name"})]}),"\n",(0,o.jsxs)(t.li,{children:["try running ",(0,o.jsx)(t.code,{children:"wp boilerplate --help"})," to check if our WP CLI boilerplate commands work"]}),"\n",(0,o.jsxs)(t.li,{children:["for easiest initial setup, run ",(0,o.jsx)(t.code,{children:"wp boilerplate init theme"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"npm start"})," should trigger automatically with the previous command. If it doesn't, you can run it manually to finish the theme build process"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Setup - instructions",src:n(57612).A+"",width:"1046",height:"352"})}),"\n",(0,o.jsx)(t.p,{children:"Congratulations, you've set up your Eightshift theme!"}),"\n",(0,o.jsx)(t.h2,{id:"getting-to-know-eightshift-dev-tools",children:"Getting to know Eightshift dev tools"}),"\n",(0,o.jsx)(t.p,{children:'After successfully setting up the theme and going through files, you\'ll notice this file structure is quite different from traditional WordPress themes and you may think to yourself: "Oh wow, what did I get myself into?"'}),"\n",(0,o.jsx)(t.p,{children:"While it may look scary and confusing at first, once you get used to the structure, you'll see the benefits. More about that will be covered in future posts, where we'll walk you through some basics of developing with Eightshift Boilerplate."}),"\n",(0,o.jsxs)(t.p,{children:["You may want to try a few of our WP CLI commands to add another component, block, or service class. Running ",(0,o.jsx)(t.code,{children:"wp boilerplate --help"})," will give you a list of commands and their short description. If you need even more details about a specific command, you can type, e.g. ",(0,o.jsx)(t.code,{children:"wp boilerplate create post-type --help"})]}),"\n",(0,o.jsxs)(t.p,{children:["The final tip in this post is related to troubleshooting. Maybe you tried to add a new class or a new feature to one of the existing blocks. And now the site has crashed. In tech support, the number 1 question is ",(0,o.jsx)(t.strong,{children:'"Have you tried turning it off and on again?"'}),". In our case, the number 1 question is:"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["Have you tried ",(0,o.jsx)(t.code,{children:"composer dump-autoload"})," and re-running ",(0,o.jsx)(t.code,{children:"npm start"}),"?"]})}),"\n",(0,o.jsx)(t.h2,{id:"whats-next-in-store",children:"What's next in store?"}),"\n",(0,o.jsx)(t.p,{children:"That's all for this post. In future posts we'll go through some more how-to examples like:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"the difference between components and blocks"}),"\n",(0,o.jsx)(t.li,{children:"downloading components and blocks from our Storybook with WP-CLI"}),"\n",(0,o.jsx)(t.li,{children:"adding new features to components and blocks"}),"\n",(0,o.jsx)(t.li,{children:"adding custom fonts to your project"}),"\n",(0,o.jsx)(t.li,{children:"adding custom queries which we'll use in one of our blocks"}),"\n",(0,o.jsx)(t.li,{children:"and many more..."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"So stay tuned."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},25577:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/setup-1-ec493b6656446eff46afec93938c9c13.webp"},57612:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/setup-2-b4b504dcdd78f667a70c63579d5dec6f.webp"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);