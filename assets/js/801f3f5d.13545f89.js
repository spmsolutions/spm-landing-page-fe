"use strict";(self.webpackChunk_spmsolutions_website=self.webpackChunk_spmsolutions_website||[]).push([[15782],{91267:(e,a,t)=>{t.r(a),t.d(a,{default:()=>g});var r=t(96540),i=t(44586),n=t(86025),s=t(49641),o=t(23271);const p='\x3c!-- wp:eightshift-boilerplate/paragraph {"wrapperSpacingTopLarge":40,"paragraphParagraphContent":"This playground allows you to try all the default blocks that come with DevKit."} /--\x3e\n\n\x3c!-- wp:eightshift-boilerplate/paragraph {"paragraphParagraphContent":"The WordPress instance you\'re looking at is \\u003cstrong\\u003erunning in your browser \\u003c/strong\\u003eand will get reset after you navigate away from the Playground."} /--\x3e\n\n\x3c!-- wp:eightshift-boilerplate/paragraph {"paragraphParagraphContent":"Almost all of WordPress functionalities are available, including managing posts, installing plugins, changing settings, and previewing the site."} /--\x3e\n\n\x3c!-- wp:eightshift-boilerplate/group {"wrapperWidthLarge":6,"wrapperOffsetLarge":4,"wrapperSpacingBottomLarge":0} --\x3e\n\x3c!-- wp:eightshift-boilerplate/card {"wrapperUseShowControl":false,"wrapperSimpleShowControl":false,"wrapperSimple":true,"wrapperBgColorType":"gradient","wrapperBgColorGradient":"linear-gradient(135deg, rgb(255, 253, 241) 0.00%,rgb(249, 244, 215) 100.00%)","wrapperWidthLarge":6,"wrapperOffsetLarge":4,"wrapperSpacingBottomLarge":0,"wrapperSpacingLeftInLarge":20,"wrapperSpacingRightInLarge":20,"wrapperSpacingTopInLarge":20,"wrapperSpacingBottomInLarge":20,"wrapperRoundedCornersLarge":20,"cardCardImageUse":false,"cardCardIntroContent":"\ud83d\udea7\\u003cbr\\u003eWork in progress!","cardCardIntroSize":"h5:bold","cardCardHeadingContent":"","cardCardHeadingSize":"h4:medium","cardCardHeadingUse":false,"cardCardParagraphContent":"We are working on improving the DevKit playground start page.\\u003cbr\\u003eA different layout and more demo pages are coming soon!.","cardCardParagraphSize":"caption:regular","cardCardButtonUse":false,"cardCardAlign":"center"} /--\x3e\n\x3c!-- /wp:eightshift-boilerplate/group --\x3e\n';var l=t(74848);function g(){const e=(0,i.A)(),{siteConfig:a={}}=e,[t,g]=(0,r.useState)(""),[d,c]=(0,r.useState)(!0),[u,w]=(0,r.useState)("Initializing"),[h,m]=(0,r.useState)(null);(0,r.useEffect)((()=>{(async()=>{const e=await(0,o.QH)({iframe:f.current,remoteUrl:"https://playground.wordpress.net/remote.html",blueprint:{preferredVersions:{php:"8.3",wp:"6.5"},phpExtensionBundles:["kitchen-sink"],features:{networking:!0},landingPage:"/wp-admin",steps:[{step:"login",username:"admin",password:"password"}]},sapiName:"cli",onClientConnected:e=>{window.playground=e}});e.onNavigation((e=>{g(e)})),w("Loading theme"),m(25);const a="devkittest.zip",t=await fetch(`/${a}`,{headers:{"Content-Type":"application/octet-stream"},credentials:"include"});m(33),w("Unpacking theme");const r=await t.blob(),i=new File([r],a);m(50),w("Installing theme"),await(0,o.XT)(e,{themeZipFile:i,options:{activate:!0}}),m(60),w("Setting up WP-CLI");const n="/wordpress/wp-cli.phar",s=await fetch("https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar"),l=await s.arrayBuffer();await e.writeFile(n,new Uint8Array(l)),m(75),w("Adding demo posts");const d=p.split("\n").map((e=>e.trim())).join("");await e.writeFile("/wordpress/initial-post.txt",d);const{text:u}=await(0,o.gT)(e,{command:"wp post create /wordpress/initial-post.txt --post_title='Welcome to Eightshift DevKit!' --post_type='page' --post_status='publish'",wpCliPath:n}),h=u.substring(u.indexOf("Created post ")+13,u.lastIndexOf(".")).trim();m(95),w("Finalizing"),await e.goTo(`/wp-admin/post.php?post=${h}&action=edit`),m(100),await(0,o.gT)(e,{command:"wp post generate --count=10 --post_status=publish",wpCliPath:n}),c(!1)})()}),[]);const f=(0,r.useRef)(null);return(0,l.jsxs)(s.A,{title:"Playground",description:a.tagline,keywords:a.customFields.keywords,metaImage:(0,n.Ay)(`img/${a.customFields.image}`),wrapperClassName:"es-single-full-screen-child es-has-t-border",children:[(0,l.jsxs)("div",{className:"es-full-size",style:{visibility:d?"hidden":"visible"},children:[(0,l.jsx)("div",{className:"flex flex-col desktop:flex-row items-center gap-8 desktop:justify-between bg-grey-100",style:{borderBottom:"1px solid rgb(228 235 245)",padding:"0.5rem"},children:(0,l.jsx)("form",{className:"w-full",onSubmit:e=>{e.preventDefault(),window?.playground?.goTo(t)},children:(0,l.jsx)("input",{className:"w-full border text-12",value:t,onChange:e=>{let{target:a}=e;return g(a?.value)},type:"text",style:{fontFamily:"var(--ifm-font-family-monospace)",borderColor:"rgb(228 235 245)",borderRadius:"0.5rem",padding:"0.5rem"}})})}),(0,l.jsx)("iframe",{className:"es-full-size border-t border-t-grey-200",allow:"clipboard-read; clipboard-write",ref:f})]}),d&&(0,l.jsxs)("div",{className:"es-full-size flex flex-col items-center justify-center gap-1.5 esd-full-fixed",children:[(0,l.jsx)("progress",{value:h,max:100}),(0,l.jsx)("h3",{children:"Preparing playground"}),(0,l.jsx)("span",{className:"text-12",children:u})]})]})}}}]);