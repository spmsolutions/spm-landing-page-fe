"use strict";(self.webpackChunk_spmsolutions_website=self.webpackChunk_spmsolutions_website||[]).push([[54286],{45804:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var t=o(74848),i=o(28453);const s={title:"Components and blocks",description:"Explanation of the difference between components and blocks on a practical example",slug:"components-and-blocks",authors:"obradovic",tags:["eightshift","boilerplate","components","blocks"],hide_table_of_contents:!1},a=void 0,l={permalink:"/spm-landing-page-fe/blog/components-and-blocks",source:"@site/blog/2022-01-21-components-and-blocks.md",title:"Components and blocks",description:"Explanation of the difference between components and blocks on a practical example",date:"2022-01-21T00:00:00.000Z",tags:[{inline:!0,label:"eightshift",permalink:"/spm-landing-page-fe/blog/tags/eightshift"},{inline:!0,label:"boilerplate",permalink:"/spm-landing-page-fe/blog/tags/boilerplate"},{inline:!0,label:"components",permalink:"/spm-landing-page-fe/blog/tags/components"},{inline:!0,label:"blocks",permalink:"/spm-landing-page-fe/blog/tags/blocks"}],readingTime:3.75,hasTruncateMarker:!0,authors:[{name:"Igor Obradovi\u0107",title:"WordPress Engineer",url:"https://github.com/iobrado",imageURL:"https://avatars.githubusercontent.com/u/23059501?v=4",key:"obradovic"}],frontMatter:{title:"Components and blocks",description:"Explanation of the difference between components and blocks on a practical example",slug:"components-and-blocks",authors:"obradovic",tags:["eightshift","boilerplate","components","blocks"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Adding components and blocks with WP-CLI",permalink:"/spm-landing-page-fe/blog/adding-blocks-wpcli"},nextItem:{title:"Initial setup and first steps",permalink:"/spm-landing-page-fe/blog/initial-setup"}},c={authorsImageUrls:[void 0]},r=[{value:"Component",id:"component",level:2},{value:"Block",id:"block",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In this blog post, we'll give you a practical explanation about the difference between components and blocks. For a truly in-depth explanation about components and blocks, you can refer to ",(0,t.jsx)(n.a,{href:"/docs/basics/blocks",children:"our documentation"}),". A more specific explanation about using components in a block can be found in the ",(0,t.jsx)(n.a,{href:"/docs/basics/blocks-component-in-block/",children:"Component in a Block"})," section."]}),"\n",(0,t.jsx)(n.p,{children:"One of the things that is really confusing to newcomers is the difference between components and blocks. Let's break it all down."}),"\n",(0,t.jsx)(n.h2,{id:"component",children:"Component"}),"\n",(0,t.jsx)(n.admonition,{title:":es-hide-title:",type:"note",children:(0,t.jsx)(n.p,{children:"A component is like a blank slate, a template without context."})}),"\n",(0,t.jsx)(n.p,{children:"It doesn't know or even care for what it will be used. Can you combine multiple simple components into one complex component? Absolutely! That's exactly what we'll do in the following example."}),"\n",(0,t.jsx)(n.p,{children:"Let's say we have a component that consists of an image and a heading. Image and heading are two simple components that come with the theme out-of-the-box."}),"\n",(0,t.jsx)(n.p,{children:"Here are a few examples of how this new component can be used:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"displaying a post"}),"\n",(0,t.jsx)(n.li,{children:"displaying a user or an author"}),"\n",(0,t.jsx)(n.li,{children:"displaying a photo with the photographer's name"}),"\n",(0,t.jsx)(n.li,{children:"and many more..."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["As you can already see, there are many ways you can use this component. What helps expand the usability of this component even more are ",(0,t.jsx)(n.code,{children:"attributes"}),". Let's say we have the following attributes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"imagePosition"})," - left, right, top, bottom"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"imageShape"})," - rectangular, circular"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"imageWidth"})," - 25%, 50%, 75%"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"headingColor"})," - black, blue, red"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"headingSize"})," - small, medium, large"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These attributes give you the option to modify the look of the component, so this specific component can be used for the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"related posts"})," - rectangular image on the left side, 25% image width, heading takes up the remaining 75%, medium heading colored in blue"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"user avatar"})," - circular image on the left side, 25% image width, small heading colored in black"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"photo of the day"})," - rectangular image on the right side which takes 75% width and photographer's name is written in medium blue text"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"featured posts"})," - rectangular image on top, large heading in red color"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Component with different attributes",src:o(12282).A+"",width:"1086",height:"813"})}),"\n",(0,t.jsxs)(n.p,{children:["You can even add conditional logic to your options, e.g. to have the option for ",(0,t.jsx)(n.code,{children:"imageWidth"})," visible only when ",(0,t.jsx)(n.code,{children:"imagePosition"})," is set to left or right. And when ",(0,t.jsx)(n.code,{children:"imagePosition"})," is set to top or bottom, it defaults to 100% width."]}),"\n",(0,t.jsx)(n.h2,{id:"block",children:"Block"}),"\n",(0,t.jsx)(n.p,{children:"So, what about blocks? Blocks can consist of one or more components and, most importantly, allow you to use them in the editor. Technically, blocks can consist of zero components, but we encourage you to build blocks from components because that increases the reusability."}),"\n",(0,t.jsx)(n.admonition,{title:":es-hide-title:",type:"note",children:(0,t.jsx)(n.p,{children:"Blocks give context to the components."})}),"\n",(0,t.jsxs)(n.p,{children:["Now that we have our component - let's call it ",(0,t.jsx)(n.code,{children:"card-simple"})," - we can use it in a ",(0,t.jsx)(n.code,{children:"Featured Posts"})," block. In ",(0,t.jsx)(n.strong,{children:"component's"})," ",(0,t.jsx)(n.code,{children:"manifest.json"}),", we've already defined how we want it to look by setting some defaults. When using this component in our block, we can override some attributes in ",(0,t.jsx)(n.strong,{children:"block's"})," ",(0,t.jsx)(n.code,{children:"manifest.json"}),". Since it will be used for displaying featured posts, we can define that ",(0,t.jsx)(n.code,{children:"imagePosition"})," should be set to ",(0,t.jsx)(n.strong,{children:"top"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"After defining how we want our component to look while displaying featured posts, we need another attribute which will allow us to choose which posts to display in our block."}),"\n",(0,t.jsxs)(n.p,{children:["To do that, we'll add a new attribute called ",(0,t.jsx)(n.code,{children:"featuredPosts"})," which will define which posts will be displayed in our block. For each selected post, another ",(0,t.jsx)(n.code,{children:"card-simple"})," component is added, and featured image and post title are dynamically added to its image and heading components. More about the query logic and adding new options in a block will be covered in a future post."]}),"\n",(0,t.jsxs)(n.p,{children:["You may be wondering, can you have a block that allows you to use all options of the ",(0,t.jsx)(n.code,{children:"card-simple"})," component? Of course! You can create a block that allows you to set all available options in the editor and manually add content to the image and heading. There are also block variations, which allow you to set up predefined attributes for a block. More about setting up block variations may be covered in one of the future posts."]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"Hopefully, these examples helped you get a better understanding of the difference between components and blocks. It may take a bit more time or practical use to understand the difference and reasoning behind it. Our next post will walk you through downloading one of our components and blocks with WP CLI and modifying it."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},12282:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/components-257a09f77e42c302781faf91fc8de6a6.webp"},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>l});var t=o(96540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);