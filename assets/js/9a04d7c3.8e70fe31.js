"use strict";(self.webpackChunk_spmsolutions_website=self.webpackChunk_spmsolutions_website||[]).push([[11188],{67131:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>a});var s=i(74848),l=i(28453);const n={id:"helpers-javascript",title:"JavaScript"},r="Editor helpers",o={id:"legacy/v8/basics/helpers-javascript",title:"JavaScript",description:"docs-source",source:"@site/docs/legacy/v8/basics/helpers-javascript.md",sourceDirName:"legacy/v8/basics",slug:"/legacy/v8/basics/helpers-javascript",permalink:"/spm-landing-page-fe/docs/legacy/v8/basics/helpers-javascript",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"helpers-javascript",title:"JavaScript"},sidebar:"docs",previous:{title:"Helpers",permalink:"/spm-landing-page-fe/docs/legacy/v8/basics/helpers"},next:{title:"Scss",permalink:"/spm-landing-page-fe/docs/legacy/v8/basics/helpers-scss"}},c={},a=[{value:"icons",id:"icons",level:3},{value:"illustrations",id:"illustrations",level:3},{value:"blockIcons",id:"blockicons",level:3},{value:"getActions",id:"getactions",level:3},{value:"getOption",id:"getoption",level:3},{value:"getOptionColors",id:"getoptioncolors",level:3},{value:"getOptions",id:"getoptions",level:3},{value:"getPaletteColors",id:"getpalettecolors",level:3},{value:"inserter",id:"inserter",level:3},{value:"outputCssVariablesGlobal",id:"outputcssvariablesglobal",level:3},{value:"outputCssVariables",id:"outputcssvariables",level:3},{value:"getUnique",id:"getunique",level:3},{value:"overrideInnerBlockAttributes",id:"overrideinnerblockattributes",level:3},{value:"overrideInnerBlockSimpleWrapperAttributes",id:"overrideinnerblocksimplewrapperattributes",level:3},{value:"pasteInto",id:"pasteinto",level:3},{value:"props",id:"props",level:3},{value:"getAttributes",id:"getattributes",level:3},{value:"getExample",id:"getexample",level:3},{value:"registerBlocks",id:"registerblocks",level:3},{value:"registerVariations",id:"registervariations",level:3},{value:"ucfirst",id:"ucfirst",level:3},{value:"camelize",id:"camelize",level:3},{value:"checkAttr",id:"checkattr",level:3},{value:"checkAttrResponsive",id:"checkattrresponsive",level:3},{value:"cookies",id:"cookies",level:3},{value:"debounce",id:"debounce",level:3},{value:"devices",id:"devices",level:3},{value:"dynamicImport",id:"dynamicimport",level:3},{value:"elementChildrenHeight",id:"elementchildrenheight",level:3},{value:"escape-string",id:"escape-string",level:3},{value:"navigator",id:"navigator",level:3},{value:"responsiveSelectors",id:"responsiveselectors",level:3},{value:"selector",id:"selector",level:3},{value:"truncateMiddle",id:"truncatemiddle",level:3},{value:"yoastSeo",id:"yoastseo",level:3},{value:"blockDetails",id:"blockdetails",level:3},{value:"Gutenberg",id:"gutenberg",level:3},{value:"storybookDefaultMocksCategories",id:"storybookdefaultmockscategories",level:3},{value:"storybookDefaultMocksColorPalette",id:"storybookdefaultmockscolorpalette",level:3},{value:"storybookWindowObjects,",id:"storybookwindowobjects",level:3},{value:"storybookWpStyles",id:"storybookwpstyles",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/Blocks/",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,s.jsxs)(t.p,{children:["All JavaScript helpers can be imported from the ",(0,s.jsx)(t.code,{children:"@eightshift/frontend-libs/scripts"})," folder, so you don't need to think about the internal folder structure of Eightshift Frontend Libs. If you want multiple functions imported just concatenate them in the import like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import {\n\tcamelize,\n\tcheckAttr,\n\tprops,\n\t...\n} from '@eightshift/frontend-libs/scripts';\n"})}),"\n",(0,s.jsx)(t.h1,{id:"editor-helpers",children:(0,s.jsx)(t.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/scripts/editor",children:"Editor helpers"})}),"\n",(0,s.jsx)(t.p,{children:"All of these helpers are generally only used in the Block Editor."}),"\n",(0,s.jsx)(t.h3,{id:"icons",children:"icons"}),"\n",(0,s.jsx)(t.p,{children:"All UI icons."}),"\n",(0,s.jsx)(t.h3,{id:"illustrations",children:"illustrations"}),"\n",(0,s.jsx)(t.p,{children:"Illustrations for helper modals."}),"\n",(0,s.jsx)(t.h3,{id:"blockicons",children:"blockIcons"}),"\n",(0,s.jsx)(t.p,{children:"Block icons, primarily used in block manifests."}),"\n",(0,s.jsx)(t.h3,{id:"getactions",children:"getActions"}),"\n",(0,s.jsx)(t.p,{children:"Create attributes actions from blocks manifest.json.\nThis helper is deprecated and should not be used anymore."}),"\n",(0,s.jsx)(t.h3,{id:"getoption",children:"getOption"}),"\n",(0,s.jsx)(t.p,{children:"Provides ability to override component options from the parent block/component."}),"\n",(0,s.jsx)(t.h3,{id:"getoptioncolors",children:"getOptionColors"}),"\n",(0,s.jsx)(t.p,{children:"Use this hook to filter the global colors out of the component or block manifest.\nThis function is deprecated and getOption should be used."}),"\n",(0,s.jsx)(t.h3,{id:"getoptions",children:"getOptions"}),"\n",(0,s.jsx)(t.p,{children:"Combines two objects of options, one from current component and the other from the parent component."}),"\n",(0,s.jsx)(t.h3,{id:"getpalettecolors",children:"getPaletteColors"}),"\n",(0,s.jsx)(t.p,{children:"Use this hook to read editor-color-palette colors directly from WP built in store."}),"\n",(0,s.jsx)(t.h3,{id:"inserter",children:"inserter"}),"\n",(0,s.jsx)(t.p,{children:"Development inserter made to insert one or multiple blocks in the dom using console."}),"\n",(0,s.jsx)(t.h3,{id:"outputcssvariablesglobal",children:"outputCssVariablesGlobal"}),"\n",(0,s.jsx)(t.p,{children:"Get Global manifest.json and return global variables as CSS variables."}),"\n",(0,s.jsx)(t.h3,{id:"outputcssvariables",children:"outputCssVariables"}),"\n",(0,s.jsx)(t.p,{children:"Get component/block options and process them in CSS variables."}),"\n",(0,s.jsx)(t.h3,{id:"getunique",children:"getUnique"}),"\n",(0,s.jsx)(t.p,{children:"Returns a unique ID generally used for css variables."}),"\n",(0,s.jsx)(t.h3,{id:"overrideinnerblockattributes",children:"overrideInnerBlockAttributes"}),"\n",(0,s.jsx)(t.p,{children:"Used to set attributes on all innerBlocks. This value will be stored in the block editor store and set to a block."}),"\n",(0,s.jsx)(t.h3,{id:"overrideinnerblocksimplewrapperattributes",children:"overrideInnerBlockSimpleWrapperAttributes"}),"\n",(0,s.jsx)(t.p,{children:"Used to set attributes on all innerBlocks preset only for simple wrapper setup. This value will be stored in the block editor store and set to a block."}),"\n",(0,s.jsx)(t.h3,{id:"pasteinto",children:"pasteInto"}),"\n",(0,s.jsx)(t.p,{children:"Paste event handler."}),"\n",(0,s.jsx)(t.h3,{id:"props",children:"props"}),"\n",(0,s.jsx)(t.p,{children:"Output only attributes that are used in the component and remove everything else."}),"\n",(0,s.jsx)(t.h3,{id:"getattributes",children:"getAttributes"}),"\n",(0,s.jsx)(t.p,{children:'Get Block attributes combined in one: "shared, global, wrapper, components, block".'}),"\n",(0,s.jsx)(t.h3,{id:"getexample",children:"getExample"}),"\n",(0,s.jsx)(t.p,{children:'Get Block example attributes combined in one: "components and block".'}),"\n",(0,s.jsx)(t.h3,{id:"registerblocks",children:"registerBlocks"}),"\n",(0,s.jsxs)(t.p,{children:["Register all Block Editor blocks using WP ",(0,s.jsx)(t.code,{children:"registerBlockType"})," method."]}),"\n",(0,s.jsx)(t.h3,{id:"registervariations",children:"registerVariations"}),"\n",(0,s.jsxs)(t.p,{children:["Register all Variations Editor blocks using WP ",(0,s.jsx)(t.code,{children:"registerBlockVariation"})," method."]}),"\n",(0,s.jsx)(t.h3,{id:"ucfirst",children:"ucfirst"}),"\n",(0,s.jsx)(t.p,{children:"Convert the first letter of a string to uppercase."}),"\n",(0,s.jsx)(t.h1,{id:"general-helpers",children:(0,s.jsx)(t.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/scripts/helpers",children:"General helpers"})}),"\n",(0,s.jsx)(t.p,{children:"These are all helpers generally used anywhere."}),"\n",(0,s.jsx)(t.h3,{id:"camelize",children:"camelize"}),"\n",(0,s.jsx)(t.p,{children:"Returns a camelCase-formatted string."}),"\n",(0,s.jsx)(t.h3,{id:"checkattr",children:"checkAttr"}),"\n",(0,s.jsx)(t.p,{children:"Check if attribute exist in attributes list and add default value if not."}),"\n",(0,s.jsx)(t.h3,{id:"checkattrresponsive",children:"checkAttrResponsive"}),"\n",(0,s.jsx)(t.p,{children:"Map and check attributes for responsive object."}),"\n",(0,s.jsx)(t.h3,{id:"cookies",children:"cookies"}),"\n",(0,s.jsx)(t.p,{children:"Helper to set and unset cookies."}),"\n",(0,s.jsx)(t.h3,{id:"debounce",children:"debounce"}),"\n",(0,s.jsx)(t.p,{children:"Debounces the provided function."}),"\n",(0,s.jsx)(t.h3,{id:"devices",children:"devices"}),"\n",(0,s.jsx)(t.p,{children:"Detect a certain device, so specific functionality can be implemented for it."}),"\n",(0,s.jsx)(t.h3,{id:"dynamicimport",children:"dynamicImport"}),"\n",(0,s.jsx)(t.p,{children:"Loop all paths required using require.context method."}),"\n",(0,s.jsx)(t.h3,{id:"elementchildrenheight",children:"elementChildrenHeight"}),"\n",(0,s.jsx)(t.p,{children:"Returns height of the element measured by height of its children."}),"\n",(0,s.jsx)(t.h3,{id:"escape-string",children:"escape-string"}),"\n",(0,s.jsx)(t.p,{children:"Takes the provided string and removes special characters"}),"\n",(0,s.jsx)(t.h3,{id:"navigator",children:"navigator"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Navigator.vibrate()"})," method pulses the vibration hardware on the device, if such hardware exists."]}),"\n",(0,s.jsx)(t.h3,{id:"responsiveselectors",children:"responsiveSelectors"}),"\n",(0,s.jsx)(t.p,{children:"Create responsive selectors used for responsive attributes."}),"\n",(0,s.jsx)(t.h3,{id:"selector",children:"selector"}),"\n",(0,s.jsx)(t.p,{children:"Returns BEM selector for HTML class and checks if the condition part is set."}),"\n",(0,s.jsx)(t.h3,{id:"truncatemiddle",children:"truncateMiddle"}),"\n",(0,s.jsx)(t.p,{children:"Slices the string and inputs the provided separator after the specified characters."}),"\n",(0,s.jsx)(t.h1,{id:"plugins-helpers",children:(0,s.jsx)(t.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/scripts/plugins",children:"Plugins helpers"})}),"\n",(0,s.jsx)(t.p,{children:"These are all helpers generally only in specific plugins."}),"\n",(0,s.jsx)(t.h3,{id:"yoastseo",children:"yoastSeo"}),"\n",(0,s.jsx)(t.p,{children:'This helper will search all blocks and components manifests and find attributes that have "seo": "true" key.\nThis key will be added in to the content and proceed by the YoastSeo Analysis plugin.'}),"\n",(0,s.jsx)(t.h1,{id:"storybook-helpers",children:(0,s.jsx)(t.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/scripts/storybook",children:"Storybook helpers"})}),"\n",(0,s.jsx)(t.p,{children:"These are all helpers generally only in Storybook."}),"\n",(0,s.jsx)(t.h3,{id:"blockdetails",children:"blockDetails"}),"\n",(0,s.jsx)(t.p,{children:"Combine block details in one object."}),"\n",(0,s.jsx)(t.h3,{id:"gutenberg",children:"Gutenberg"}),"\n",(0,s.jsx)(t.p,{children:"Load actual Block Editor and all the magic."}),"\n",(0,s.jsx)(t.h3,{id:"storybookdefaultmockscategories",children:"storybookDefaultMocksCategories"}),"\n",(0,s.jsx)(t.p,{children:"Manually populate categories for blocks. This is generated in the PHP part of the real project."}),"\n",(0,s.jsx)(t.h3,{id:"storybookdefaultmockscolorpalette",children:"storybookDefaultMocksColorPalette"}),"\n",(0,s.jsx)(t.p,{children:"Manually populate blocks color palette. This is generated in the PHP part of the real project."}),"\n",(0,s.jsx)(t.h3,{id:"storybookwindowobjects",children:"storybookWindowObjects,"}),"\n",(0,s.jsx)(t.p,{children:"Loading WP build files."}),"\n",(0,s.jsx)(t.h3,{id:"storybookwpstyles",children:"storybookWpStyles"}),"\n",(0,s.jsx)(t.p,{children:"Loading styles for block editor."})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var s=i(96540);const l={},n=s.createContext(l);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);