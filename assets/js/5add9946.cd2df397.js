"use strict";(self.webpackChunk_spmsolutions_website=self.webpackChunk_spmsolutions_website||[]).push([[63405],{43787:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=r(74848),i=r(28453);const o={id:"success-redirect-variation",title:"Success redirect variation"},n=void 0,c={id:"php/filters/block/form/success-redirect-variation",title:"Success redirect variation",description:"Success variations is an option that will add additional GET parameter to the success redirect URL. With this parameter you can customize the success page for each form type. First you need to create variations list in the forms global settings and then you can select the variation for each form.",source:"@site/forms/php/filters/block/form/success-redirect-variation.md",sourceDirName:"php/filters/block/form",slug:"/php/filters/block/form/success-redirect-variation",permalink:"/spm-landing-page-fe/forms/php/filters/block/form/success-redirect-variation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"success-redirect-variation",title:"Success redirect variation"},sidebar:"forms",previous:{title:"Success redirect URL",permalink:"/spm-landing-page-fe/forms/php/filters/block/form/success-redirect-url"},next:{title:"Success redirect variation options",permalink:"/spm-landing-page-fe/forms/php/filters/block/form/success-redirect-variation-options"}},a={},l=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Success variations is an option that will add additional GET parameter to the success redirect URL. With this parameter you can customize the success page for each form type. First you need to create variations list in the forms global settings and then you can select the variation for each form."}),"\n",(0,s.jsxs)(t.p,{children:["This filter allows you to override the success redirect variation and have it set fixed for all or some of your forms. With the ",(0,s.jsx)(t.code,{children:"$formType"})," parameter you can customize the variation for each form type."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"\\add_filter('es_forms_block_form_success_redirect_variation', [$this, 'getBlockFormSuccessRedirectVariation'], 10, 2);\n\n/**\n * Set success redirect variation value.\n *\n * This filter will override settings for success redirect variation.\n *\n * @param string $formType Type of form used like greenhouse, hubspot, etc.\n * @param string $formId Form ID.\n *\n * @return string\n */\npublic function getBlockFormSuccessRedirectVariation(string $formType, string $formId): string\n{\n\treturn '<variation>';\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>c});var s=r(96540);const i={},o=s.createContext(i);function n(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);