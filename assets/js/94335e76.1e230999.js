"use strict";(self.webpackChunk_spmsolutions_website=self.webpackChunk_spmsolutions_website||[]).push([[84319],{5593:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=t(74848),s=t(28453);const o={id:"8-9",title:"Version 8 to 9"},l=void 0,r={id:"migrations/8-9",title:"Version 8 to 9",description:"This migration guide contains migration instructions for:",source:"@site/docs/migrations/8-9.md",sourceDirName:"migrations",slug:"/migrations/8-9",permalink:"/spm-landing-page-fe/docs/migrations/8-9",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"8-9",title:"Version 8 to 9"},sidebar:"docs",previous:{title:"Version 9 to 10",permalink:"/spm-landing-page-fe/docs/migrations/9-10"},next:{title:"Version 7 to 8",permalink:"/spm-landing-page-fe/docs/migrations/7-8"}},c={},d=[{value:"Required changes",id:"required-changes",level:2},{value:"Component updates and replacements",id:"component-updates-and-replacements",level:3},{value:"Common between components",id:"common-between-components",level:3},{value:"<code>CollapsableComponentUseToggle</code>",id:"collapsablecomponentusetoggle",level:4},{value:"<code>ComponentUseToggle</code>",id:"componentusetoggle",level:4},{value:"<code>ColorPaletteCustom</code>",id:"colorpalettecustom",level:4},{value:"<code>ColorPickerComponent</code>",id:"colorpickercomponent",level:4},{value:"<code>Responsive</code>",id:"responsive",level:4},{value:"<code>CompactResponsive</code>",id:"compactresponsive",level:4},{value:"<code>CustomSelect</code>",id:"customselect",level:4},{value:"<code>LinkEditComponent</code>",id:"linkeditcomponent",level:4},{value:"<code>SimpleVerticalSingleSelect</code>",id:"simpleverticalsingleselect",level:4},{value:"<code>OptionPicker</code>",id:"optionpicker",level:4},{value:"<code>LinkToolbarButton</code>",id:"linktoolbarbutton",level:4},{value:"<code>InlineNotification</code>",id:"inlinenotification",level:4},{value:"<code>SpacingSlider</code>",id:"spacingslider",level:4},{value:"<code>WidthOffsetRangeSlider</code>",id:"widthoffsetrangeslider",level:4},{value:"<code>VisibilityToggleResponsive</code>",id:"visibilitytoggleresponsive",level:4},{value:"<code>SimpleHorizontalSingleSelect</code>",id:"simplehorizontalsingleselect",level:4},{value:"<code>AlignmentToolbar</code>",id:"alignmenttoolbar",level:4},{value:"<code>HeadingLevel</code>",id:"headinglevel",level:4},{value:"<code>CustomSlider</code>",id:"customslider",level:4},{value:"<code>SimpleRepeater</code> / <code>SimpleRepeaterItem</code>",id:"simplerepeater--simplerepeateritem",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This migration guide contains migration instructions for:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/infinum/eightshift-boilerplate/releases/tag/9.0.0",children:"eightshift/boilerplate"})," - ",(0,i.jsx)(n.strong,{children:"8+ --\x3e 9.0.0"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs/releases/tag/8.0.0",children:"eightshift/frontend-libs"})," - ",(0,i.jsx)(n.strong,{children:"7+ --\x3e 8.0.0"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/infinum/eightshift-libs/releases/tag/6.4.0",children:"eightshift/libs"})," - ",(0,i.jsx)(n.strong,{children:"6.4.0"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"required-changes",children:"Required changes"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Migration time: ~45min to a couple of hours, depending on project size and components used."})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Update ",(0,i.jsx)(n.code,{children:"composer"})," packages and check if Eightshift Libs are on version 6.4 (or higher)"]}),"\n",(0,i.jsxs)(n.li,{children:["Update ",(0,i.jsx)(n.code,{children:"@eightshift/frontend-libs"})," in your ",(0,i.jsx)(n.code,{children:"package.json"})," file to the latest version:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"@eightshift/frontend-libs": "^8.0.0",\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Important:"})," Delete your lockfile (",(0,i.jsx)(n.code,{children:"package.lock"}),") and your ",(0,i.jsx)(n.code,{children:"node_modules"})," folder, then run ",(0,i.jsx)(n.code,{children:"npm install"})]}),"\n",(0,i.jsx)(n.li,{children:"Rename updated components, update changed properties and replace deprecated components (see chapter below)"}),"\n",(0,i.jsxs)(n.li,{children:["Do a ",(0,i.jsx)(n.code,{children:"npm start"}),", check that you have no build errors visible"]}),"\n",(0,i.jsx)(n.li,{children:"Smoke test your blocks - to verify everything was migrated properly, go through all the blocks and check if everything looks good visually and that everything is functional"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"component-updates-and-replacements",children:"Component updates and replacements"}),"\n",(0,i.jsx)(n.p,{children:"Below you will find some of the more common components that will need to be modified, and also some possible caveats."}),"\n",(0,i.jsx)(n.p,{children:"Your code editor should mark the components that need replacement with a strikethrough over the component name:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Component deprecation notice in Visual Studio Code",src:t(87708).A+"",width:"556",height:"226"})}),"\n",(0,i.jsx)(n.h3,{id:"common-between-components",children:"Common between components"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["if you have a label with an ",(0,i.jsx)(n.code,{children:"IconLabel"})," inside, you can migrate it to separate ",(0,i.jsx)(n.code,{children:"icon"})," and ",(0,i.jsx)(n.code,{children:"label"})," props:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"label={<IconLabel icon={icons.color} label={__('Background', 'domain')} />}\n"})}),"\n","becomes","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"icon={icons.color}\nlabel={__('Background', 'domain')}\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["if the component is the last in the list of options, you can add ",(0,i.jsx)(n.code,{children:"noBottomSpacing"})," to make everything look a bit nicer"]}),"\n",(0,i.jsxs)(n.li,{children:["if you want to visually group two similar components, e.g. toggles, you can bring them vertically closer together with ",(0,i.jsx)(n.code,{children:"reducedBottomSpacing"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"collapsablecomponentusetoggle",children:(0,i.jsx)(n.code,{children:"CollapsableComponentUseToggle"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["rename the component and imports to ",(0,i.jsx)(n.code,{children:"UseToggle"})]}),"\n",(0,i.jsxs)(n.li,{children:["change ",(0,i.jsx)(n.code,{children:"showUseToggle"})," to ",(0,i.jsx)(n.code,{children:"noUseToggle"})," and flip its logic"]}),"\n",(0,i.jsxs)(n.li,{children:["change ",(0,i.jsx)(n.code,{children:"showLabel"})," to ",(0,i.jsx)(n.code,{children:"noLabel"})," and flip its logic"]}),"\n",(0,i.jsxs)(n.li,{children:["change ",(0,i.jsx)(n.code,{children:"showExpanderButton"})," to ",(0,i.jsx)(n.code,{children:"noExpandButton"})," and flip its logic"]}),"\n",(0,i.jsxs)(n.li,{children:["consider adding ",(0,i.jsx)(n.code,{children:"noExpandButton"})," to your attributes and add it to all your blocks, so the options render nicely"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"componentusetoggle",children:(0,i.jsx)(n.code,{children:"ComponentUseToggle"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["replace the component with ",(0,i.jsx)(n.code,{children:"UseToggle"})]}),"\n",(0,i.jsx)(n.li,{children:"move all of the options inside the useToggle"}),"\n",(0,i.jsxs)(n.li,{children:["change ",(0,i.jsx)(n.code,{children:"showUseToggle"})," to ",(0,i.jsx)(n.code,{children:"noUseToggle"})," and flip its logic"]}),"\n",(0,i.jsxs)(n.li,{children:["change ",(0,i.jsx)(n.code,{children:"showLabel"})," to ",(0,i.jsx)(n.code,{children:"noLabel"})," and flip its logic"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.p,{children:"Before"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<ComponentUseToggle\n\tlabel={label}\n\tchecked={accordionUse}\n\tonChange={(value) => setAttributes({ [getAttrKey('accordionUse', attributes, manifest)]: value })}\n\tshowUseToggle={showAccordionUse}\n\tshowLabel={showLabel}\n/>\n\n{accordionUse &&\n\t// Other options.\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"After:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<UseToggle\n\tlabel={label}\n\tchecked={accordionUse}\n\tonChange={(value) => setAttributes({ [getAttrKey('accordionUse', attributes, manifest)]: value })}\n\tnoUseToggle={!showAccordionUse} // Inverted logic!\n\tnoLabel={!showLabel} // Inverted logic!\n\tnoBottomSpacing // If the component is the only one in the options panel\n>\n\t// Other options.\n</UseToggle>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"colorpalettecustom",children:(0,i.jsx)(n.code,{children:"ColorPaletteCustom"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["rename the component and imports to ",(0,i.jsx)(n.code,{children:"ColorPalette"})]}),"\n",(0,i.jsxs)(n.li,{children:["remove the ",(0,i.jsx)(n.code,{children:"inline"})," prop if you have it added"]}),"\n",(0,i.jsxs)(n.li,{children:["change the ",(0,i.jsx)(n.code,{children:"layout"})," prop to a string instead of a ",(0,i.jsx)(n.code,{children:"ColorPaletteCustomLayout"})," object (hint: use autocomplete to see all the possible values)"]}),"\n",(0,i.jsxs)(n.li,{children:["if you have it set, change ",(0,i.jsx)(n.code,{children:"groupShades={false}"})," to ",(0,i.jsx)(n.code,{children:"noShadeGrouping"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"colorpickercomponent",children:(0,i.jsx)(n.code,{children:"ColorPickerComponent"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["rename the component and imports to ",(0,i.jsx)(n.code,{children:"ColorPicker"})]}),"\n",(0,i.jsxs)(n.li,{children:["change the ",(0,i.jsx)(n.code,{children:"type"})," prop to a string instead of a ",(0,i.jsx)(n.code,{children:"ColorPickerType"})," object (hint: use autocomplete to see all the possible values)"]}),"\n",(0,i.jsxs)(n.li,{children:["if you have it set, change ",(0,i.jsx)(n.code,{children:"groupShades={false}"})," to ",(0,i.jsx)(n.code,{children:"noShadeGrouping"})]}),"\n",(0,i.jsxs)(n.li,{children:["if you have it set, replace ",(0,i.jsx)(n.code,{children:"includeWpBottomSpacing={false}"})," with ",(0,i.jsx)(n.code,{children:"noBottomSpacing"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"responsive",children:(0,i.jsx)(n.code,{children:"Responsive"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"check and remove all breakpoint labels you had set manually, they're now automatically rendered by the component"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"compactresponsive",children:(0,i.jsx)(n.code,{children:"CompactResponsive"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["rename the component and imports to ",(0,i.jsx)(n.code,{children:"Responsive"})]}),"\n",(0,i.jsx)(n.li,{children:"check and remove all breakpoint labels you had set manually, they're now automatically rendered by the component"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"customselect",children:(0,i.jsx)(n.code,{children:"CustomSelect"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["this component has been split up into 4 more specific components","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["if you had a CustomSelect ",(0,i.jsx)(n.strong,{children:"without"})," ",(0,i.jsx)(n.code,{children:"multiple"})," and with ",(0,i.jsx)(n.code,{children:"options"}),", replace it with ",(0,i.jsx)(n.code,{children:"Select"})]}),"\n",(0,i.jsxs)(n.li,{children:["if you had a CustomSelect ",(0,i.jsx)(n.strong,{children:"without"})," ",(0,i.jsx)(n.code,{children:"multiple"})," and with ",(0,i.jsx)(n.code,{children:"loadOptions"}),", replace it with ",(0,i.jsx)(n.code,{children:"MultiSelect"})]}),"\n",(0,i.jsxs)(n.li,{children:["if you had a CustomSelect with ",(0,i.jsx)(n.code,{children:"multiple"})," and with ",(0,i.jsx)(n.code,{children:"options"}),", replace it with ",(0,i.jsx)(n.code,{children:"MultiSelect"})]}),"\n",(0,i.jsxs)(n.li,{children:["if you had a CustomSelect with ",(0,i.jsx)(n.code,{children:"multiple"})," and with ",(0,i.jsx)(n.code,{children:"loadOptions"}),", replace it with ",(0,i.jsx)(n.code,{children:"AsyncMultiSelect"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["replace ",(0,i.jsx)(n.code,{children:"isClearable"})," with ",(0,i.jsx)(n.code,{children:"clearable"})," if you had it set to ",(0,i.jsx)(n.code,{children:"true"})]}),"\n",(0,i.jsxs)(n.li,{children:["replace ",(0,i.jsx)(n.code,{children:"isSearchable"})," with ",(0,i.jsx)(n.code,{children:"noSearch"})," if you had it set to ",(0,i.jsx)(n.code,{children:"false"}),", otherwise remove it"]}),"\n",(0,i.jsxs)(n.li,{children:["remove ",(0,i.jsx)(n.code,{children:"reFetchOnSearch"}),", as it was removed"]}),"\n",(0,i.jsxs)(n.li,{children:["remove ",(0,i.jsx)(n.code,{children:"multiple"})," (make sure you add the proper kind of Select!)"]}),"\n",(0,i.jsxs)(n.li,{children:["if you had an async select (with ",(0,i.jsx)(n.code,{children:"loadOptions"}),"), and had ",(0,i.jsx)(n.code,{children:"simpleValue"})," set, you will need to find a slightly different solution, as this is not supported anymore"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"linkeditcomponent",children:(0,i.jsx)(n.code,{children:"LinkEditComponent"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u26a0\ufe0f props have changed here, it'll leave URL pickers broken if you forget to change them!"})}),"\n",(0,i.jsxs)(n.li,{children:["replace ",(0,i.jsx)(n.code,{children:"setAttributes"}),", ",(0,i.jsx)(n.code,{children:"urlAttrName"}),", ",(0,i.jsx)(n.code,{children:"isNewTabAttrName"})," (if set) with an ",(0,i.jsx)(n.code,{children:"onChange"})," callback (see example below)"]}),"\n",(0,i.jsxs)(n.li,{children:["remove ",(0,i.jsx)(n.code,{children:"title"})," with ",(0,i.jsx)(n.code,{children:"label"})," if you want to keep it customized (you can also just remove it)"]}),"\n",(0,i.jsxs)(n.li,{children:["replace ",(0,i.jsx)(n.code,{children:"showNewTabOption"})," with ",(0,i.jsx)(n.code,{children:"hideOpensInNewTab"})," and invert its logic"]}),"\n",(0,i.jsxs)(n.li,{children:["you can now hide the anchor notice with ",(0,i.jsx)(n.code,{children:"hideAnchorNotice"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.p,{children:"Before"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"url={buttonUrl}\n<LinkEditComponent\n\turl={buttonUrl}\n\topensInNewTab={buttonIsNewTab}\n\tsetAttributes={setAttributes}\n\ttitle={variableLabel}\n\turlAttrName={getAttrKey('buttonUrl', attributes, manifest)}\n\tisNewTabAttrName={getAttrKey('buttonIsNewTab', attributes, manifest)}\n\tshowNewTabOption={showButtonIsNewTab}\n/>\n"})}),"\n",(0,i.jsx)(n.p,{children:"After"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<LinkEditComponent\n\turl={buttonUrl}\n\topensInNewTab={buttonIsNewTab}\n\thideOpensInNewTab={!showButtonIsNewTab} // Inverted logic!\n\tonChange={({ url, newTab, isAnchor }) => setAttributes({\n\t\t[getAttrKey('buttonUrl', attributes, manifest)]: url,\n\t\t[getAttrKey('buttonIsNewTab', attributes, manifest)]: newTab,\n\t\t[getAttrKey('buttonIsAnchor', attributes, manifest)]: isAnchor ?? false, // Optional, can replace a manual toggle (detects setting anchor links automatically).\n\t})}\n/>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"simpleverticalsingleselect",children:(0,i.jsx)(n.code,{children:"SimpleVerticalSingleSelect"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["replace the component with ",(0,i.jsx)(n.code,{children:"OptionSelector"})]}),"\n",(0,i.jsxs)(n.li,{children:["replace the ",(0,i.jsx)(n.code,{children:"options"})," prop (one that returns an object) with ",(0,i.jsx)(n.code,{children:"value"}),", ",(0,i.jsx)(n.code,{children:"onChange"})," callback and available ",(0,i.jsx)(n.code,{children:"options"})," (array)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsxs)(n.p,{children:["Make sure your options have at least a ",(0,i.jsx)(n.code,{children:"label"})," and a ",(0,i.jsx)(n.code,{children:"value"}),"!"]}),"\n",(0,i.jsx)(n.p,{children:"Before"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const sizeOptions = getOption('buttonSize', attributes, manifest).map(({ label, value, icon: iconName }) => {\n\t\treturn {\n\t\t\tonClick: () => setAttributes({\n\t\t\t\t[getAttrKey('buttonSize', attributes, manifest)]: value,\n\t\t\t\t[getAttrKey('buttonIsLink', attributes, manifest)]: false\n\t\t\t}),\n\t\t\tlabel: label,\n\t\t\tisActive: buttonSize === value,\n\t\t\ticon: icons[iconName],\n\t\t};\n\t});\n\n// ...\n\n<SimpleVerticalSingleSelect\n\tlabel={<IconLabel icon={icons.size} label={__('Size', 'domain')} />}\n\toptions={sizeOptions}\n/>\n"})}),"\n",(0,i.jsx)(n.p,{children:"After"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<OptionSelector\n\ticon={icons.size}\n\tlabel={__('Size', 'domain')}\n\toptions={getOption('buttonSize', attributes, manifest)}\n\tvalue={buttonSize}\n\tonChange={(value) => setAttributes({\n\t\t[getAttrKey('buttonSize', attributes, manifest)]: value,\n\t\t[getAttrKey('buttonIsLink', attributes, manifest)]: false\n\t})}\n/>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"optionpicker",children:(0,i.jsx)(n.code,{children:"OptionPicker"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["replace with ",(0,i.jsx)(n.code,{children:"OptionSelector"})]}),"\n",(0,i.jsxs)(n.li,{children:["add ",(0,i.jsx)(n.code,{children:"noBottomSpacing"})," and ",(0,i.jsx)(n.code,{children:"border='none'"})]}),"\n",(0,i.jsxs)(n.li,{children:["add ",(0,i.jsx)(n.code,{children:"additionalContainerClass='es-p-1.25'"})," to align it properly with other controls"]}),"\n",(0,i.jsxs)(n.li,{children:["remove the ",(0,i.jsx)(n.code,{children:"label"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Consider relocating your toolbar option to the options sidebar."}),"\n",(0,i.jsx)(n.h4,{id:"linktoolbarbutton",children:(0,i.jsx)(n.code,{children:"LinkToolbarButton"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["replace with ",(0,i.jsx)(n.code,{children:"LinkEditComponent"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"follow the guide for that component for other prop replacements"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"you might need to place it in a"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.p,{children:"Before"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<LinkToolbarButton\n\turlAttrName={getAttrKey('chevronUrl', attributes, manifest)}\n\tisNewTabAttrName={getAttrKey('chevronIsNewTab', attributes, manifest)}\n\turl={chevronUrl}\n\topensInNewTab={chevronIsNewTab}\n\tsetAttributes={setAttributes}\n\ttitle={__(ucfirst(componentName), 'domain')}\n/>\n"})}),"\n",(0,i.jsx)(n.p,{children:"After"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import { ToolbarButton, ToolbarItem, } from '@wordpress/components';\nimport { PopoverWithTrigger } from '@eightshift/frontend-libs/scripts';\n\n// ...\n\n<ToolbarItem as='div'>\n\t<PopoverWithTrigger\n\t\tposition='top right'\n\t\tcontentClass='es-w-80 es-p-4'\n\t\ttrigger={\n\t\t\t({ ref, setIsOpen, isOpen }) => (\n\t\t\t\t<ToolbarButton\n\t\t\t\t\tref={ref}\n\t\t\t\t\tonClick={() => setIsOpen(!isOpen)}\n\t\t\t\t\tisPressed={chevronUrl?.length > 0}\n\t\t\t\t\ticon={icons.link}\n\t\t\t\t/>\n\t\t\t)\n\t\t}\n\t>\n\t\t<LinkEditComponent\n\t\t\turl={chevronUrl}\n\t\t\topensInNewTab={chevronIsNewTab}\n\t\t\tonChange={({ url, newTab }) => setAttributes({\n\t\t\t\t[getAttrKey('chevronUrl', attributes, manifest)]: url,\n\t\t\t\t[getAttrKey('chevronIsNewTab', attributes, manifest)]: newTab,\n\t\t\t})}\n\t\t\thideOpensInNewTab\n\t\t\tnoBottomSpacing\n\t\t/>\n\t</PopoverWithTrigger>\n</ToolbarItem>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"inlinenotification",children:(0,i.jsx)(n.code,{children:"InlineNotification"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["rename the component and imports to ",(0,i.jsx)(n.code,{children:"Notification"})]}),"\n",(0,i.jsxs)(n.li,{children:["change the ",(0,i.jsx)(n.code,{children:"type"})," prop to a string instead of a ",(0,i.jsx)(n.code,{children:"InlineNotificationType"})," object (hint: use autocomplete to see all the possible values)"]}),"\n",(0,i.jsxs)(n.li,{children:["replace ",(0,i.jsx)(n.code,{children:"removeBottomFieldSpacing"})," with ",(0,i.jsx)(n.code,{children:"noBottomSpacing"}),", if set"]}),"\n",(0,i.jsxs)(n.li,{children:["remove ",(0,i.jsx)(n.code,{children:"showContrastOutline"})," as it's not supported anymore"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"spacingslider",children:(0,i.jsx)(n.code,{children:"SpacingSlider"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["replace with ",(0,i.jsx)(n.code,{children:"ResponsiveSlider"})," with the config generator"]}),"\n",(0,i.jsx)(n.li,{children:"remove deprecated props"}),"\n",(0,i.jsxs)(n.li,{children:["if you had ",(0,i.jsx)(n.code,{children:"compensateForRemBase10"}),", add","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"\tmodifyInput={(v) => v * 10}\n\tmodifyOutput={(v) => v / 10}\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.p,{children:"Before"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<SpacingSlider\n\ticon={icons.order}\n\tlabel={__('Order', 'domain')}\n\tattributeName='columnOrder'\n\tattributes={attributes}\n\tsetAttributes={setAttributes}\n\tmanifest={manifest}\n\tmarkSteps={2}\n\thasInputField={false}\n\thasValueDisplay\n\tvalueDisplayFormat={(v) => !isNaN(v) && v > 0 ? v : '-'}\n\tshowDisableButton\n\tdisableWithUndefined\n\tisNumeric\n/>\n"})}),"\n",(0,i.jsx)(n.p,{children:"After"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<ResponsiveSlider\n\t{...generateResponsiveSliderConfig({\n\t\tattributeName: 'columnOrder',\n\t\tattributes: attributes,\n\t\tmanifest: manifest,\n\t\tsetAttributes: setAttributes,\n\t})}\n\ticon={icons.order}\n\tlabel={__('Order', 'domain')}\n/>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"widthoffsetrangeslider",children:(0,i.jsx)(n.code,{children:"WidthOffsetRangeSlider"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"wrap some of the deprecated options with a config generator"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.p,{children:"Before"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<WidthOffsetRangeSlider\n\toffsetAttributeName='columnOffset'\n\twidthAttributeName='columnWidth'\n\tmanifest={manifest}\n\tattributes={attributes}\n\tsetAttributes={setAttributes}\n\tshowFullWidthToggle={false}\n\tincludeGutters\n\tshowOffsetAutoToggle\n/>\n"})}),"\n",(0,i.jsx)(n.p,{children:"After"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<WidthOffsetRangeSlider\n\t{...generateWidthOffsetRangeSliderConfig({\n\t\toffsetAttributeName: 'columnOffset',\n\t\twidthAttributeName: 'columnWidth',\n\t\tattributes: attributes,\n\t\tmanifest: manifest,\n\t\tsetAttributes: (attr) => {\n\t\t\t// This is only required if you have \"Auto\" offset as an option, and the attributes are numeric, otherwise just pass setAttributes as-is.\n\t\t\tconst newAttr = {};\n\n\t\t\tObject.entries(attr).forEach(([key, value]) => {\n\t\t\t\tif (value !== 'auto' && typeof value !== 'undefined') {\n\t\t\t\t\tnewAttr[key] = parseInt(value);\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tnewAttr[key] = value;\n\t\t\t});\n\n\t\t\tsetAttributes(newAttr);\n\t\t},\n\t\tnumOfColumns: 14,\n\t\tshowOffsetAutoToggle: true,\n\t\tnumericValues: true,\n\t\tshowFullWidth: false,\n\t})}\n/>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"visibilitytoggleresponsive",children:(0,i.jsx)(n.code,{children:"VisibilityToggleResponsive"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["replace with ",(0,i.jsx)(n.code,{children:"ResponsiveToggleButton"})," and use the config generator"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.p,{children:"Before"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<VisibilityToggleResponsive\n\tattributeName='columnHide'\n\tlabel={__('Visibility', 'redesign')}\n\tmanifest={manifest}\n\tattributes={attributes}\n\tsetAttributes={setAttributes}\n/>\n"})}),"\n",(0,i.jsx)(n.p,{children:"After"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<ResponsiveToggleButton\n\t{...generateResponsiveToggleButtonConfig({\n\t\tattributeName: 'columnHide',\n\t\tmanifest: manifest,\n\t\tattributes: attributes,\n\t\tsetAttributes: setAttributes,\n\t})}\n\n\tlabel={__('Hide', 'domain')}\n\ticon={icons.hide}\n/>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"simplehorizontalsingleselect",children:(0,i.jsx)(n.code,{children:"SimpleHorizontalSingleSelect"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["rename the component and imports to ",(0,i.jsx)(n.code,{children:"OptionSelector"})]}),"\n",(0,i.jsxs)(n.li,{children:["remove ",(0,i.jsx)(n.code,{children:"border='offset'"})," if set, that's now the default"]}),"\n",(0,i.jsxs)(n.li,{children:["replace ",(0,i.jsx)(n.code,{children:"includeWpBottomSpacing={false}"})," with ",(0,i.jsx)(n.code,{children:"noBottomSpacing"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"alignmenttoolbar",children:(0,i.jsx)(n.code,{children:"AlignmentToolbar"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["replace with ",(0,i.jsx)(n.code,{children:"OptionSelector"})]}),"\n",(0,i.jsxs)(n.li,{children:["add ",(0,i.jsx)(n.code,{children:"optionLabels"})," to transform just values into ",(0,i.jsx)(n.code,{children:"{label, value}"})," (or ",(0,i.jsx)(n.code,{children:"{label, value, icon}"}),") entries"]}),"\n",(0,i.jsxs)(n.li,{children:["add ",(0,i.jsx)(n.code,{children:"noBottomSpacing"}),", ",(0,i.jsx)(n.code,{children:"additionalContainerClass='es-p-1.25'"}),", and ",(0,i.jsx)(n.code,{children:"border='none'"})," so it fits the toolbar better"]}),"\n",(0,i.jsxs)(n.li,{children:["remove ",(0,i.jsx)(n.code,{children:"label"})," and ",(0,i.jsx)(n.code,{children:"type"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.p,{children:"Before"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<AlignmentToolbar\n\tvalue={cardAlign}\n\toptions={getOption('cardAlign', attributes, manifest)}\n\tlabel={sprintf(__('%s content align', 'domain'), manifestTitle)}\n\tonChange={(value) => setAttributes({ [getAttrKey('cardAlign', attributes, manifest)]: value })}\n\ttype={AlignmentToolbarType.HORIZONTAL}\n/>\n"})}),"\n",(0,i.jsx)(n.p,{children:"After"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<OptionSelector\n\tvalue={cardAlign}\n\toptions={getOption('cardAlign', attributes, manifest)}\n\tonChange={(value) => setAttributes({ [getAttrKey('cardAlign', attributes, manifest)]: value })}\n\toptionLabels={getOption('cardAlign', attributes, manifest).map((v) => ({ label: ucfirst(v), icon: icons[`textAlign${ucfirst(v)}`] }))}\n\tadditionalContainerClass='es-p-1.25'\n\tnoBottomSpacing\n\tborder='none'\n\ticonOnly\n/>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"headinglevel",children:(0,i.jsx)(n.code,{children:"HeadingLevel"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["replace with ",(0,i.jsx)(n.code,{children:"OptionSelector"})]}),"\n",(0,i.jsxs)(n.li,{children:["change ",(0,i.jsx)(n.code,{children:"selectedLevel"})," to ",(0,i.jsx)(n.code,{children:"value"})]}),"\n",(0,i.jsxs)(n.li,{children:["add ",(0,i.jsx)(n.code,{children:"noBottomSpacing"}),", ",(0,i.jsx)(n.code,{children:"additionalContainerClass='es-p-1.25'"}),", and ",(0,i.jsx)(n.code,{children:"border='none'"})," so it fits the toolbar better"]}),"\n",(0,i.jsxs)(n.li,{children:["add ",(0,i.jsx)(n.code,{children:"options"})," with all the available heading level options (see ",(0,i.jsx)(n.em,{children:"After"})," in the example below)"]}),"\n",(0,i.jsxs)(n.li,{children:["if you want the options to look a bit better, you can add ",(0,i.jsx)(n.code,{children:"additionalButtonClass"}),", just like in the ",(0,i.jsx)(n.em,{children:"After"})," example below"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.p,{children:"Before"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<HeadingLevel\n\tselectedLevel={typographyLevel}\n\tonChange={(value) => setAttributes({ [getAttrKey('typographyLevel', attributes, manifest)]: value })}\n/>\n"})}),"\n",(0,i.jsx)(n.p,{children:"After"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<OptionSelector\n\tvalue={typographyLevel}\n\tonChange={(value) => setAttributes({ [getAttrKey('typographyLevel', attributes, manifest)]: value })}\n\tadditionalContainerClass='es-p-1.25'\n\tnoBottomSpacing\n\tborder='none'\n\toptions={[\n\t\t{ label: 'H1', tooltip: __('Heading 1', 'domain'), value: 1 },\n\t\t{ label: 'H2', tooltip: __('Heading 2', 'domain'), value: 2 },\n\t\t{ label: 'H3', tooltip: __('Heading 3', 'domain'), value: 3 },\n\t\t{ label: 'H4', tooltip: __('Heading 4', 'domain'), value: 4 },\n\t\t{ label: 'H5', tooltip: __('Heading 5', 'domain'), value: 5 },\n\t\t{ label: 'H6', tooltip: __('Heading 6', 'domain'), value: 6 },\n\t]}\n\tadditionalButtonClass='es-button-square-36 es-text-4 es-font-weight-300'\n/>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"customslider",children:(0,i.jsx)(n.code,{children:"CustomSlider"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["rename the component and imports to ",(0,i.jsx)(n.code,{children:"OptionSelector"})]}),"\n",(0,i.jsxs)(n.li,{children:["you might want to remove ",(0,i.jsx)(n.code,{children:"marks"})," if not very specific, as an auto-generator for marks is now included"]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"simplerepeater--simplerepeateritem",children:[(0,i.jsx)(n.code,{children:"SimpleRepeater"})," / ",(0,i.jsx)(n.code,{children:"SimpleRepeaterItem"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["rename the component and imports to ",(0,i.jsx)(n.code,{children:"Repeater"})," / ",(0,i.jsx)(n.code,{children:"RepeaterItem"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},87708:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/component-deprecation-notice-2d5aa7a20bdb52d9769388acb9e5a725.webp"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(96540);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);