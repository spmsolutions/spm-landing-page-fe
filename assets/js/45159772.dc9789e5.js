"use strict";(self.webpackChunk_spmsolutions_website=self.webpackChunk_spmsolutions_website||[]).push([[9423],{87123:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(74848),o=n(28453);const r={id:"countries",title:"Countries"},s=void 0,a={id:"php/filters/geolocation/countries",title:"Countries",description:"This filter provides you with the ability to add/remove/edit countries list and countries groups used to filter forms.",source:"@site/forms/php/filters/geolocation/countries.md",sourceDirName:"php/filters/geolocation",slug:"/php/filters/geolocation/countries",permalink:"/spm-landing-page-fe/forms/php/filters/geolocation/countries",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"countries",title:"Countries"},sidebar:"forms",previous:{title:"Phar location",permalink:"/spm-landing-page-fe/forms/php/filters/geolocation/phar-location"},next:{title:"ActiveCampaign",permalink:"/spm-landing-page-fe/forms/php/filters/integrations/active-campaign"}},l={},c=[];function u(t){const e={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"This filter provides you with the ability to add/remove/edit countries list and countries groups used to filter forms."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-php",children:"\\add_filter('es_forms_geolocation_countries_list', [$this, 'getGeolocationCountriesList']);\n\n/**\n * Change default countries list.\n *\n * This filter provides you with the ability to add/remove/edit countries list and countries groups.\n *\n * @param array<mixed> $countries Countries list from internal db.\n *\n * @return array<mixed>\n */\npublic function getGeolocationCountriesList(array $countries): array\n{\n\treturn \\array_merge(\n\t\t$countries,\n\t\t[\n\t\t\t[\n\t\t\t\t'label' => \\__('<country-name>', 'text-domain'),\n\t\t\t\t'value' => '<country-value>',\n\t\t\t\t'group' => [\n\t\t\t\t\t'<country-value>',\n\t\t\t\t],\n\t\t\t],\n\t\t],\n\t);\n}\n"})}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.p,{children:"This list can also be found in the rest route:"}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"/wp-json/eightshift-forms/v1/geolocation-countries"}),"."]}),"\n"]})]})]})}function p(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>a});var i=n(96540);const o={},r=i.createContext(o);function s(t){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);