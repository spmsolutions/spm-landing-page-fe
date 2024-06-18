"use strict";(self.webpackChunk_spmsolutions_website=self.webpackChunk_spmsolutions_website||[]).push([[90988],{84023:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>r});var i=n(74848),t=n(28453);const o={id:"architecture-concepts",title:"Architecture concepts"},a=void 0,c={id:"legacy/v6/basics/architecture-concepts",title:"Architecture concepts",description:"Project structure",source:"@site/docs/legacy/v6/basics/architecture-concepts.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/architecture-concepts",permalink:"/spm-landing-page-fe/docs/legacy/v6/basics/architecture-concepts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"architecture-concepts",title:"Architecture concepts"},sidebar:"docs",previous:{title:"WP-CLI",permalink:"/spm-landing-page-fe/docs/legacy/v6/basics/wp-cli"},next:{title:"General",permalink:"/spm-landing-page-fe/docs/legacy/v6/basics/backend"}},l={},r=[{value:"Project structure",id:"project-structure",level:2},{value:"Object-oriented paradigms",id:"object-oriented-paradigms",level:2},{value:"Blocks and Components",id:"blocks-and-components",level:2},{value:"The Manifest",id:"the-manifest",level:2},{value:"The directory structure in detail",id:"the-directory-structure-in-detail",level:2},{value:"Blocks",id:"blocks",level:4},{value:"Columns",id:"columns",level:4},{value:"Config",id:"config",level:4},{value:"CustomMeta",id:"custommeta",level:4},{value:"CustomPostType",id:"customposttype",level:4},{value:"CustomTaxonomy",id:"customtaxonomy",level:4},{value:"Enqueue",id:"enqueue",level:4},{value:"Exception",id:"exception",level:4},{value:"Helpers",id:"helpers",level:4},{value:"I18n",id:"i18n",level:4},{value:"Main",id:"main",level:4},{value:"Manifest",id:"manifest",level:4},{value:"Media",id:"media",level:4},{value:"Menu",id:"menu",level:4},{value:"ModifyAdminAppearance",id:"modifyadminappearance",level:4},{value:"Plugin",id:"plugin",level:4},{value:"Rest",id:"rest",level:4},{value:"ThemeOptions",id:"themeoptions",level:4},{value:"View",id:"view",level:4},{value:".storybook",id:"storybook",level:4},{value:".gitignore",id:"gitignore",level:4},{value:".eslintignore",id:"eslintignore",level:4},{value:".eslintrc",id:"eslintrc",level:4},{value:".stylelintrc",id:"stylelintrc",level:4},{value:"babel.config.js",id:"babelconfigjs",level:4},{value:"composer.json",id:"composerjson",level:4},{value:"composer.lock",id:"composerlock",level:4},{value:"package-lock.json",id:"package-lockjson",level:4},{value:"package.json",id:"packagejson",level:4},{value:"phpcs.xml.dist",id:"phpcsxmldist",level:4},{value:"postcss.config.js",id:"postcssconfigjs",level:4},{value:"webpack.config.js",id:"webpackconfigjs",level:4}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"project-structure",children:"Project structure"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/infinum/eightshift-libs/tree/4.0.0",children:(0,i.jsx)(s.img,{src:"https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,i.jsxs)(s.p,{children:["Eightshift Development Kit follows a strict project structure to support autoloading, dependency injection and ",(0,i.jsx)(s.code,{children:"wp boilerplate"})," commands, as well as conventions to increase codebase understanding between developers. As an added benefit, following this structure and conventions makes your codebase more consistent and organized."]}),"\n",(0,i.jsxs)(s.p,{children:["While Eightshift Development Kit provides required theme files and common theme files such as ",(0,i.jsx)(s.code,{children:"style.css"})," and ",(0,i.jsx)(s.code,{children:"functions.php"}),", they're used differently to what you might expect if you've worked with WordPress themes previously. For instance, ",(0,i.jsx)(s.code,{children:"style.css"})," is used only to register theme metadata, and doesn't contain any actual styles, as they're built using Webpack and use cache busting. ",(0,i.jsx)(s.code,{children:"functions.php"})," simply bootstraps the execution lifecycle. We also provide very basic template partials, such as ",(0,i.jsx)(s.code,{children:"single.php"}),", which you can acommodate to your needs. An idea to consider is replacing some of them with pages that are editable in Gutenberg."]}),"\n",(0,i.jsxs)(s.p,{children:["While you'll find some additional configuration files such as ",(0,i.jsx)(s.code,{children:"webpack.config.js"})," in the project root, the majority of your projects codebase should live in the ",(0,i.jsx)(s.code,{children:"src"})," directory, which is autoloaded via Composer following PSR-4 conventions. This implies that every directory under ",(0,i.jsx)(s.code,{children:"src"})," is a namespace under your base namespace (which is your project name), and PHP files inside of those directories are classes in that namespace, with exceptions for filenames that aren't in ",(0,i.jsx)(s.code,{children:"StudlyCase"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["An Eightshift Development Kit convention is to structure namespaces around features and functionality, so for instance, all custom post types would be part of the ",(0,i.jsx)(s.code,{children:"ProjectName\\CustomPostType"})," namespace."]}),"\n",(0,i.jsx)(s.h2,{id:"object-oriented-paradigms",children:"Object-oriented paradigms"}),"\n",(0,i.jsx)(s.p,{children:"Eightshift Libs is entirely object-oriented, providing abstract classes for internal library functionality, interfaces you can use to implement certain classes to make use of Eightshift Development Kit features, as well as concrete class implementations for use in projects."}),"\n",(0,i.jsx)(s.p,{children:"Our use of OOP allows you to extend, modify or even replace Eightshift Development Kit functionality safely, without breaking compatibility or harming your project."}),"\n",(0,i.jsxs)(s.p,{children:["One of the most important interfaces in Eightshift Libs is the ",(0,i.jsx)(s.code,{children:"ServiceInterface"}),". Classes that implement it are called service classes. This isn't a common pattern in PHP OOP. In Eightshift Development Kit, a service class represents a part of the project's functionality and has a ",(0,i.jsx)(s.code,{children:"register"})," method that sets up the action and filter hooks for the service. If you need to add an action or a filter, you should do that in a service class. All your service classes are automatically loaded and can have dependencies injected using dependency injection."]}),"\n",(0,i.jsxs)(s.p,{children:["To ensure there are no naming collisions caused by Composer dependencies, we use the ",(0,i.jsx)(s.a,{href:"https://github.com/infinum/imposter-plugin",children:"Imposter Composer plugin"})," to contain them in the ",(0,i.jsx)(s.code,{children:"{ProjectName}Vendor"})," namespace. This comes with a few caveats which you should be aware of, and about which you can read more in the ",(0,i.jsx)(s.a,{href:"namespaces",children:"namespaces chapter"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Read more about ",(0,i.jsx)(s.a,{href:"namespaces",children:"namespaces and Imposter"}),", ",(0,i.jsx)(s.a,{href:"extending-classes",children:"extending classes and service classes"}),", and ",(0,i.jsx)(s.a,{href:"autowiring",children:"dependency injection and autowiring"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"blocks-and-components",children:"Blocks and Components"}),"\n",(0,i.jsxs)(s.p,{children:["While Blocks and Components will be covered in much more detail in the ",(0,i.jsx)(s.a,{href:"blocks",children:"Blocks chapter"}),", it's worth getting acquainted with the concepts from the start."]}),"\n",(0,i.jsxs)(s.p,{children:["In Gutenberg, Blocks are an abstract unit for structuring content. The same applies in Eightshift, with an additional concept of ",(0,i.jsx)(s.em,{children:"Components"}),", which are abstract units for structuring blocks and layouts."]}),"\n",(0,i.jsx)(s.p,{children:"Components are mostly similar to Blocks, with a few key differences:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Components can not be inserted by users in Gutenberg, and are not registered as block types"}),"\n",(0,i.jsxs)(s.li,{children:["Components can be rendered in any context using the ",(0,i.jsx)(s.code,{children:"Components::render"})," method, with arbitrary attribute values passed to them"]}),"\n",(0,i.jsxs)(s.li,{children:["Blocks are usually only rendered using the render callback provided when registering the block","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Note that in the Eightshift Development Kit, the render callback is provided for you by Eightshift Libs. It automatically adds the wrapper if necessary and sets up your block view."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Components don't implement the ",(0,i.jsx)(s.code,{children:"{blockName}-block.js"})," file"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Blocks and Components have the same structure, which makes extracting components from existing blocks trivially easy."}),"\n",(0,i.jsxs)(s.p,{children:["Components can be ",(0,i.jsx)(s.em,{children:"composed"})," into a block. In other words, blocks can consist out of zero or more components. Component composition is handled in the block manifest, allows you to avoid using InnerBlocks to include functionality shared with other blocks, and serializes component attributes to the block using prefixed attributes for each component instance depending on your manifest definitions."]}),"\n",(0,i.jsxs)(s.p,{children:["To learn more about the differences between blocks and components, read ",(0,i.jsx)(s.a,{href:"/blog/components-and-blocks",children:"Igor's blog post on Components and blocks"}),". To learn how to use blocks and components to build your projects, read the ",(0,i.jsx)(s.a,{href:"blocks",children:"Blocks chapter"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"the-manifest",children:"The Manifest"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"manifest.json"})," files contain metadata, configurations and variables."]}),"\n",(0,i.jsxs)(s.p,{children:["Every Eightshift project has one global ",(0,i.jsx)(s.code,{children:"manifest.json"})," file stored in ",(0,i.jsx)(s.code,{children:"src/Blocks/manifest.json"}),", which contains global settings, properties, and variables."]}),"\n",(0,i.jsx)(s.p,{children:"Furthermore, every Eightshift block, component, and variation has its own manifest file which is used to provide data required for block registration, such as a list of attributes, the block name, and the template for the inserter example. These local manifest files allow you to define arrays of options for attribute values that your blocks or components can consume. Manifest files also allow you to define relationships between attribute values and CSS variable values, which allows you a great deal of power when styling your blocks and components, as well as saves time as you don't have to provide conditional CSS classes."}),"\n",(0,i.jsxs)(s.p,{children:["To learn more about the ",(0,i.jsx)(s.a,{href:"/spm-landing-page-fe/docs/legacy/v6/basics/blocks-global-manifest",children:"global manifest"}),", ",(0,i.jsx)(s.a,{href:"/spm-landing-page-fe/docs/legacy/v6/basics/block-manifest",children:"block manifest"}),", ",(0,i.jsx)(s.a,{href:"/spm-landing-page-fe/docs/legacy/v6/basics/blocks-component-manifest",children:"component manifest"})," and using ",(0,i.jsx)(s.a,{href:"/spm-landing-page-fe/docs/legacy/v6/basics/blocks-styles",children:"the manifest to provide CSS variables for use in block styling"}),", read the respective articles in the ",(0,i.jsx)(s.a,{href:"blocks-important",children:"Blocks chapter"}),". For information about manifest structure, refer to the manifest schemas available in Eightshift Frontend Libs and linked to in the manifest files."]}),"\n",(0,i.jsx)(s.h2,{id:"the-directory-structure-in-detail",children:"The directory structure in detail"}),"\n",(0,i.jsxs)(s.p,{children:["Your project might contain a different set of namespaces and classes in the ",(0,i.jsx)(s.code,{children:"src"})," folder, depending on what you've included using wp boilerplate commands.\nBy default, your project will include the ",(0,i.jsx)(s.code,{children:"Blocks"}),", ",(0,i.jsx)(s.code,{children:"Config"}),", ",(0,i.jsx)(s.code,{children:"Enqueue"}),", ",(0,i.jsx)(s.code,{children:"Main"}),", ",(0,i.jsx)(s.code,{children:"Manifest"})," and ",(0,i.jsx)(s.code,{children:"Menu"})," namespaces. You can include classes from Eightshift Libs to provide additional functionality manually or using wp boilerplate."]}),"\n",(0,i.jsx)(s.p,{children:"This chapter also doesn't cover all of the namespaces and classes in Eightshift Libs, or their use. Check out the source code documentation for all available namespaces and classes."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["src","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Blocks"}),"\n",(0,i.jsx)(s.li,{children:"assets"}),"\n",(0,i.jsx)(s.li,{children:"components"}),"\n",(0,i.jsx)(s.li,{children:"custom"}),"\n",(0,i.jsx)(s.li,{children:"variations"}),"\n",(0,i.jsx)(s.li,{children:"wrapper"}),"\n",(0,i.jsx)(s.li,{children:"Columns"}),"\n",(0,i.jsx)(s.li,{children:"Config"}),"\n",(0,i.jsx)(s.li,{children:"CustomMeta"}),"\n",(0,i.jsx)(s.li,{children:"CustomPostType"}),"\n",(0,i.jsx)(s.li,{children:"CustomTaxonomy"}),"\n",(0,i.jsxs)(s.li,{children:["Enqueue","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Admin"}),"\n",(0,i.jsx)(s.li,{children:"Blocks"}),"\n",(0,i.jsx)(s.li,{children:"Theme"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"Exception"}),"\n",(0,i.jsx)(s.li,{children:"Helpers"}),"\n",(0,i.jsx)(s.li,{children:"I18n"}),"\n",(0,i.jsx)(s.li,{children:"Main"}),"\n",(0,i.jsx)(s.li,{children:"Manifest"}),"\n",(0,i.jsx)(s.li,{children:"Media"}),"\n",(0,i.jsx)(s.li,{children:"Menu"}),"\n",(0,i.jsx)(s.li,{children:"ModifyAdminAppearance"}),"\n",(0,i.jsx)(s.li,{children:"Plugin"}),"\n",(0,i.jsx)(s.li,{children:"Rest"}),"\n",(0,i.jsx)(s.li,{children:"ThemeOptions"}),"\n",(0,i.jsx)(s.li,{children:"View"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:".storybook"}),"\n",(0,i.jsx)(s.li,{children:".gitignore"}),"\n",(0,i.jsx)(s.li,{children:".eslintignore"}),"\n",(0,i.jsx)(s.li,{children:".eslintrc"}),"\n",(0,i.jsx)(s.li,{children:".stylelintrc"}),"\n",(0,i.jsx)(s.li,{children:"babel.config.js"}),"\n",(0,i.jsx)(s.li,{children:"composer.json"}),"\n",(0,i.jsx)(s.li,{children:"composer.lock"}),"\n",(0,i.jsx)(s.li,{children:"package-lock.json"}),"\n",(0,i.jsx)(s.li,{children:"package.json"}),"\n",(0,i.jsx)(s.li,{children:"phpcs.xml.dist"}),"\n",(0,i.jsx)(s.li,{children:"postcss.config.js"}),"\n",(0,i.jsx)(s.li,{children:"README.md"}),"\n",(0,i.jsx)(s.li,{children:"webpack.config.js"}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"blocks",children:"Blocks"}),"\n",(0,i.jsx)(s.p,{children:"The Blocks namespace contains the Blocks class used for block registration. This directory also contains shared assets, components, blocks, variations, and the wrapper."}),"\n",(0,i.jsxs)(s.p,{children:["Read about blocks in detail in the ",(0,i.jsx)(s.a,{href:"blocks",children:"Blocks chapter"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"columns",children:"Columns"}),"\n",(0,i.jsxs)(s.p,{children:["This namespace contains all the custom admin listing columns hooks in your project. These include listing column hooks for post types, taxonomy, and user lists, such as ",(0,i.jsx)(s.code,{children:"manage_{$post_type}_posts_columns"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(s.p,{children:["The Config class provides getter methods for your project's configuration, such as ",(0,i.jsx)(s.code,{children:"getProjectName"})," or ",(0,i.jsx)(s.code,{children:"getProjectVersion"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"custommeta",children:"CustomMeta"}),"\n",(0,i.jsx)(s.p,{children:"This class contains all the custom meta hooks for your project."}),"\n",(0,i.jsx)(s.h4,{id:"customposttype",children:"CustomPostType"}),"\n",(0,i.jsxs)(s.p,{children:["This namespace contains classes that register all custom post type hooks for your project. For better code consistency and to save time on boilerplating, Eightshift Development Kit provides an example class implementation you can use with ",(0,i.jsx)(s.code,{children:"wp boilerplate create_post_type"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"customtaxonomy",children:"CustomTaxonomy"}),"\n",(0,i.jsxs)(s.p,{children:["This namespace contains classes that register all custom taxonomy hooks for your project. For better code consistency and to save time on boilerplating, Eightshift Development Kit provides an example class implementation you can use with ",(0,i.jsx)(s.code,{children:"wp boilerplate create_taxonomy"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"enqueue",children:"Enqueue"}),"\n",(0,i.jsx)(s.p,{children:"These Enqueue namespace classes handle loading JavaScript and CSS assets, depending on the location you want to use it:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Admin"})," - Used in the admin (not block editor) panel. You can find the files inside the ",(0,i.jsx)(s.code,{children:"assets"})," folder with the ",(0,i.jsx)(s.code,{children:"-admin"})," suffix."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Blocks"})," - Used in the block editor. You can find the files inside the ",(0,i.jsx)(s.code,{children:"src/Blocks/assets"})," folder. As blocks are complicated, we have files loaded only in the admin-editor part of the project, those files have an ",(0,i.jsx)(s.code,{children:"-editor"})," suffix. The rest of the files with no suffix load on the admin-editor part and the project's front end."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Theme"})," - Used in the theme (frontend) part of your project. You can find the files inside the ",(0,i.jsx)(s.code,{children:"assets"})," folder with no suffix. You would use these files for the assets related to your project that is not associated with components and blocks. These files are rarely used, as styles and JavaScript functionality are usually provided at component, block, or wrapper levels."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Using any of these classes is optional, and you can use only what you need. The ",(0,i.jsx)(s.code,{children:"wp boilerplate setup_theme"})," command will set up all of the three classes already implemented. Keep in mind that Enqueue classes work in combination with the Webpack build of your project."]}),"\n",(0,i.jsxs)(s.p,{children:["All of the asset files mentioned are prefixed with ",(0,i.jsx)(s.code,{children:"application"}),". If you don't like the prefix, you can change it by providing project overrides for constants used in Eightshift Libs. If you change the file names, you must make changes to the Webpack build process as well. For modifying the Webpack configuration, read the ",(0,i.jsx)(s.a,{href:"webpack",children:"Webpack chapter"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"exception",children:"Exception"}),"\n",(0,i.jsx)(s.p,{children:"This namespace contains all exceptions that can be thrown from the project."}),"\n",(0,i.jsx)(s.h4,{id:"helpers",children:"Helpers"}),"\n",(0,i.jsx)(s.p,{children:"All the backend helpers provided by Eightshift Libs are part of the Helpers namespace. Generally, you can use them from Eightshift Libs without extending or modifying them."}),"\n",(0,i.jsx)(s.h4,{id:"i18n",children:"I18n"}),"\n",(0,i.jsxs)(s.p,{children:["Classes in this namespace are used to define all hooks related to internationalization and localization. For more information about i18n and l10n, check out ",(0,i.jsx)(s.a,{href:"tips-tricks",children:"Tips and tricks"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"main",children:"Main"}),"\n",(0,i.jsxs)(s.p,{children:["The Main namespace contains the ",(0,i.jsx)(s.code,{children:"Main"})," class, which sets up the dependency injection container and autowiring using ",(0,i.jsx)(s.code,{children:"AbstractMain"})," and ",(0,i.jsx)(s.code,{children:"Autowiring"})," classes. For most projects, ",(0,i.jsx)(s.code,{children:"Main"})," can be used automagically without any work on your part, but as with all of the Eightshift Development Kit, you can extend it to suit your needs."]}),"\n",(0,i.jsxs)(s.p,{children:["You can provide manual service classes here as well. Learn more in the ",(0,i.jsx)(s.a,{href:"autowiring",children:"autowiring chapter"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"manifest",children:"Manifest"}),"\n",(0,i.jsxs)(s.p,{children:["The Manifest namespace provides the ",(0,i.jsx)(s.code,{children:"manifest.json"})," file location and helpers to return the full path for a specific asset. Learn more about the manifest in the ",(0,i.jsx)(s.a,{href:"manifest",children:"manifest chapter"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"media",children:"Media"}),"\n",(0,i.jsx)(s.p,{children:"The Media namespace is used to add custom implementations for media, such as adding custom image sizes, enabling SVG image support, etc. By default, it registers theme support for title tags, HTML5 and post thumbnails."}),"\n",(0,i.jsx)(s.h4,{id:"menu",children:"Menu"}),"\n",(0,i.jsx)(s.p,{children:"This class is used to register menu positions."}),"\n",(0,i.jsx)(s.h4,{id:"modifyadminappearance",children:"ModifyAdminAppearance"}),"\n",(0,i.jsx)(s.p,{children:"This class is used to change admin appearance. We use it to change the admin color palette depending on the environment."}),"\n",(0,i.jsx)(s.h4,{id:"plugin",children:"Plugin"}),"\n",(0,i.jsx)(s.p,{children:"This namespace is used only in the plugin boilerplate and holds classes required for activation and deactivation of the plugin."}),"\n",(0,i.jsx)(s.h4,{id:"rest",children:"Rest"}),"\n",(0,i.jsxs)(s.p,{children:["The Rest namespace provides classes for handling REST API fields and routes. This is covered in more detail in the ",(0,i.jsx)(s.a,{href:"rest",children:"REST chapter"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"themeoptions",children:"ThemeOptions"}),"\n",(0,i.jsxs)(s.p,{children:["This namespace is used to add admin menu configuration panels such as ",(0,i.jsx)(s.em,{children:"Theme Options"}),", usually using ACF."]}),"\n",(0,i.jsx)(s.h4,{id:"view",children:"View"}),"\n",(0,i.jsxs)(s.p,{children:["This namespace is used to add filters used when escaping unsafe tags using ",(0,i.jsx)(s.code,{children:"wp_kses_post"})," and ",(0,i.jsx)(s.code,{children:"wp_kses"})," functions."]}),"\n",(0,i.jsx)(s.h4,{id:"storybook",children:".storybook"}),"\n",(0,i.jsxs)(s.p,{children:["This folder contains all of the files necessary to run the storybook in your project. Read more ",(0,i.jsx)(s.a,{href:"https://storybook.js.org/",children:"about the Storybook project"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"gitignore",children:".gitignore"}),"\n",(0,i.jsxs)(s.p,{children:["As the name implies, this file is used to define restrictions to which files Git watches. Read more ",(0,i.jsx)(s.a,{href:"https://git-scm.com/",children:"about Git"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"eslintignore",children:".eslintignore"}),"\n",(0,i.jsx)(s.p,{children:"Defines files and folders which ESLint should ignore when linting."}),"\n",(0,i.jsx)(s.h4,{id:"eslintrc",children:".eslintrc"}),"\n",(0,i.jsxs)(s.p,{children:["Provides definitions used for linting JavaScript files. Read more ",(0,i.jsx)(s.a,{href:"https://eslint.org/",children:"about ESLint"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"stylelintrc",children:".stylelintrc"}),"\n",(0,i.jsxs)(s.p,{children:["Provides definitions used for linting SCSS/CSS stylesheets. Read more ",(0,i.jsx)(s.a,{href:"https://stylelint.io/",children:"about Stylelint"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"babelconfigjs",children:"babel.config.js"}),"\n",(0,i.jsxs)(s.p,{children:["Provides Babel configuration, which determines how your JavaScript code will be compiled, what standard you will use, and much more. Read more ",(0,i.jsx)(s.a,{href:"https://babeljs.io/",children:"about Babel"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"composerjson",children:"composer.json"}),"\n",(0,i.jsxs)(s.p,{children:["Contains a list of your project's Composer dependencies, as well as project metadata and configuration. Dependencies can be added and installed using ",(0,i.jsx)(s.code,{children:"composer install"}),". Read more ",(0,i.jsx)(s.a,{href:"https://getcomposer.org/",children:"about Composer"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"composerlock",children:"composer.lock"}),"\n",(0,i.jsx)(s.p,{children:"Lock files are used to set the package version to the exact release. This ensures that everyone has the same package version when installing."}),"\n",(0,i.jsx)(s.h4,{id:"package-lockjson",children:"package-lock.json"}),"\n",(0,i.jsxs)(s.p,{children:["The same as ",(0,i.jsx)(s.code,{children:"composer.lock"}),", but for node_modules."]}),"\n",(0,i.jsx)(s.h4,{id:"packagejson",children:"package.json"}),"\n",(0,i.jsxs)(s.p,{children:["Contains a list of your project's npm dependencies, as well as project metadata and configuration. Dependencies can be added and installed using ",(0,i.jsx)(s.code,{children:"npm install"}),". Read more ",(0,i.jsx)(s.a,{href:"https://nodejs.dev/",children:"about npm"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"phpcsxmldist",children:"phpcs.xml.dist"}),"\n",(0,i.jsxs)(s.p,{children:["Provides definitions used for linting PHP files. Read more ",(0,i.jsx)(s.a,{href:"https://github.com/squizlabs/PHP_CodeSniffer",children:"about PHPCS"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"postcssconfigjs",children:"postcss.config.js"}),"\n",(0,i.jsxs)(s.p,{children:["PostCSS works in collaboration with Webpack and defines what additional plugins you are going to use when building your CSS files. Read more ",(0,i.jsx)(s.a,{href:"https://postcss.org/",children:"about PostCSS"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"webpackconfigjs",children:"webpack.config.js"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"webpack.config.js"})," provides Webpack configuration, used when building your JavaScript and CSS files. This is covered in more detail in the ",(0,i.jsx)(s.a,{href:"webpack",children:"Webpack chapter"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var i=n(96540);const t={},o=i.createContext(t);function a(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);