"use strict";(self.webpackChunk_spmsolutions_website=self.webpackChunk_spmsolutions_website||[]).push([[14097],{32959:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var o=s(74848),i=s(28453);const l={id:"hide-global-msg-timeout",title:"Global message timeout"},n=void 0,r={id:"php/filters/block/form/hide-global-msg-timeout",title:"Global message timeout",description:"This filter allows you to change the timeout of all global messages (e.g. after successful form submission), in milliseconds.",source:"@site/forms/php/filters/block/form/hide-global-msg-timeout.md",sourceDirName:"php/filters/block/form",slug:"/php/filters/block/form/hide-global-msg-timeout",permalink:"/spm-landing-page-fe/forms/php/filters/block/form/hide-global-msg-timeout",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hide-global-msg-timeout",title:"Global message timeout"},sidebar:"forms",previous:{title:"Redirect timeout",permalink:"/spm-landing-page-fe/forms/php/filters/block/form/redirect-timeout"},next:{title:"Success redirect URL",permalink:"/spm-landing-page-fe/forms/php/filters/block/form/success-redirect-url"}},m={},a=[];function c(e){const t={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"This filter allows you to change the timeout of all global messages (e.g. after successful form submission), in milliseconds."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",children:"\\add_filter('es_forms_block_form_hide_global_msg_timeout', [$this, 'getBlockFormHideGlobalMsgTimeout']);\n\n/**\n * Changing the default success hide global message wait time.\n *\n * This filter will override our default wait time before the global message is removed. The time is calculated in milliseconds. *Example: 1000ms = 1s*.\n *\n * @return string\n */\npublic function getBlockFormHideGlobalMsgTimeout(): string\n{\n\treturn '10000'; // 10 seconds.\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>r});var o=s(96540);const i={},l=o.createContext(i);function n(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);