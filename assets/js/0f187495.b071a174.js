"use strict";(self.webpackChunk_spmsolutions_website=self.webpackChunk_spmsolutions_website||[]).push([[53685],{99898:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=s(74848),a=s(28453);const i={id:"autowiring",title:"Autowiring",sidebar_label:"Autowiring"},o=void 0,r={id:"legacy/v5/basics/autowiring",title:"Autowiring",description:"docs-source",source:"@site/docs/legacy/v5/basics/autowiring.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/autowiring",permalink:"/spm-landing-page-fe/docs/legacy/v5/basics/autowiring",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"autowiring",title:"Autowiring",sidebar_label:"Autowiring"},sidebar:"docs",previous:{title:"Extending Classes",permalink:"/spm-landing-page-fe/docs/legacy/v5/basics/extending-classes"},next:{title:"Example Class",permalink:"/spm-landing-page-fe/docs/legacy/v5/basics/example-class"}},c={},l=[{value:"How it works",id:"how-it-works",level:2},{value:"What if I have to mock or manually call a class?",id:"what-if-i-have-to-mock-or-manually-call-a-class",level:3},{value:"What if my class doesn&#39;t have anything inside a constructor method? (no dependencies)",id:"what-if-my-class-doesnt-have-anything-inside-a-constructor-method-no-dependencies",level:3},{value:"What if my class has a <strong>primitive parameter</strong> (<code>string</code>, <code>int</code>, etc.) inside a constructor method?",id:"what-if-my-class-has-a-primitive-parameter-string-int-etc-inside-a-constructor-method",level:3},{value:"What if my class does have another class as a parameter inside a constructor method?",id:"what-if-my-class-does-have-another-class-as-a-parameter-inside-a-constructor-method",level:3},{value:"What if my class has an interface parameter inside the constructor method?",id:"what-if-my-class-has-an-interface-parameter-inside-the-constructor-method",level:3},{value:"Example",id:"example",level:4},{value:"To sum it up",id:"to-sum-it-up",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-libs/tree/3.0.0/",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,t.jsx)(n.p,{children:"What is autowiring?"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Autowiring is an exotic word that represents something very simple: the container's ability to create and inject dependencies automatically."})}),"\n",(0,t.jsxs)(n.p,{children:["The quote is taken from the ",(0,t.jsx)(n.a,{href:"https://php-di.org/doc/autowiring.html",children:"PHP-DI"})," library that we use."]}),"\n",(0,t.jsx)(n.p,{children:"In a nutshell, we use a dependency injection (DI) container to load all your service classes. Alongside the DI container, we also use the PSR-4 coding standard for autoloading. That allows us to predict what your file/folder structure will look like in correlation to the namespace. With that in mind, you don't have to worry about requiring your classes. Our autoloading takes care of everything. All you need to do is follow a few coding standards so that you can automatically inject other classes as dependencies."}),"\n",(0,t.jsxs)(n.p,{children:["Autowiring runs inside the ",(0,t.jsx)(n.code,{children:"Main"})," service class as an extended class of our ",(0,t.jsx)(n.code,{children:"AbstractMain"})," class. You can install the main class using this command:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"wp boilerplate create_main"})}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsx)(n.p,{children:"Here is a quick overview of how this works:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You create a new class manually or using the WP-CLI command."}),"\n",(0,t.jsx)(n.li,{children:"PSR-4 should detect your new class if you followed the PSR-4 naming standard."}),"\n",(0,t.jsxs)(n.li,{children:["The new class is added to the ",(0,t.jsx)(n.code,{children:"classmap"})," array inside the ",(0,t.jsx)(n.code,{children:"vendor"})," folder."]}),"\n",(0,t.jsx)(n.li,{children:"Autowiring class reads the new class, checks if your class has any class dependencies, and injects them."}),"\n",(0,t.jsx)(n.li,{children:"It just works."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To put it shortly: just add a new class (that is PSR-4 compliant) with or without some class dependencies and everything will be automatically resolved/injected."}),"\n",(0,t.jsx)(n.h3,{id:"what-if-i-have-to-mock-or-manually-call-a-class",children:"What if I have to mock or manually call a class?"}),"\n",(0,t.jsx)(n.p,{children:"Before we start with the automatization and autowiring, let's see how service classes are called manually."}),"\n",(0,t.jsx)(n.p,{children:"We can think of these scenarios where you want to load a class manually:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You have to write tests and manually provide mocked classes."}),"\n",(0,t.jsx)(n.li,{children:"Your classes have a custom structure and autowiring can't resolve it."}),"\n",(0,t.jsxs)(n.li,{children:["You want to provide a primitive parameter (",(0,t.jsx)(n.code,{children:"string"}),", ",(0,t.jsx)(n.code,{children:"int"}),", etc.) inside a constructor method."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In those cases, you can manually provide your DI container with the implementation using the ",(0,t.jsx)(n.code,{children:"getServiceClasses"})," method inside the ",(0,t.jsx)(n.code,{children:"src>Main>Main"})," class."]}),"\n",(0,t.jsx)(n.p,{children:"Provide the method and add your custom implementation like this:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"src>Main>Main.php"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"  /**\n   * Get the list of services to register.\n   *\n   * A list of classes which contain hooks.\n   *\n   * @return array<class-string, string|string[]> Array of fully qualified service class names.\n   */\n  protected function getServiceClasses(): array\n  {\n    return [\n\n      // If you are using a class as a DI.\n      ProjectNamespace\\Rest\\Routes\\DocumentsRoute::class => [ProjectNamespace\\Query\\Documents\\QueryDocuments::class],\n\n      // If you just want to include a simple class with no DI.\n      ProjectNamespace\\CoolFolder\\CoolClass::class,\n    ];\n  }\n"})}),"\n",(0,t.jsx)(n.h3,{id:"what-if-my-class-doesnt-have-anything-inside-a-constructor-method-no-dependencies",children:"What if my class doesn't have anything inside a constructor method? (no dependencies)"}),"\n",(0,t.jsxs)(n.p,{children:["If your class ",(0,t.jsx)(n.strong,{children:"doesn't have"})," anything defined in the constructor method, autoloading will require your class.\nThis just means that you are not using dependency injection (since you have nothing to inject)."]}),"\n",(0,t.jsxs)(n.h3,{id:"what-if-my-class-has-a-primitive-parameter-string-int-etc-inside-a-constructor-method",children:["What if my class has a ",(0,t.jsx)(n.strong,{children:"primitive parameter"})," (",(0,t.jsx)(n.code,{children:"string"}),", ",(0,t.jsx)(n.code,{children:"int"}),", etc.) inside a constructor method?"]}),"\n",(0,t.jsxs)(n.p,{children:["If your class ",(0,t.jsx)(n.strong,{children:"has"})," a primitive parameter defined in the constructor method, autowiring will ",(0,t.jsx)(n.strong,{children:"not know"})," how to handle this because you manually need to provide the primitive parameters at the point of usage. You can find more information about that ",(0,t.jsx)(n.a,{href:"#what-if-i-have-to-mock-or-manually-call-a-class",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"what-if-my-class-does-have-another-class-as-a-parameter-inside-a-constructor-method",children:"What if my class does have another class as a parameter inside a constructor method?"}),"\n",(0,t.jsx)(n.p,{children:"This works out of the box, but you shouldn't really do this."}),"\n",(0,t.jsx)(n.p,{children:"A good coding practice is that your class should never depend on the concrete class implementation because you have tightly coupled your class to another class. This makes it hard to test and your code becomes hard to modify. Imagine that you have put a concrete implementation as a dependency, only to get feedback from the client that you need to change that implementation for a completely different one. Making the changes means that you'll need to track all the places in your codebase where you have used some functionality from this class, and change it completely."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"You should always code against interfaces and not implementation."})}),"\n",(0,t.jsxs)(n.p,{children:["We can't stress this enough because as your project grows, so will your headaches. Also, when you start testing your code, that is when your hair will begin to fall off. We recommend reading Uncle Bob Martin's ",(0,t.jsx)(n.a,{href:"http://cleancoder.com/products",children:"Clean Code"}),". That will save you a lot of sleepless nights, and you'll learn tons of tips and tricks for writing clean code."]}),"\n",(0,t.jsx)(n.h3,{id:"what-if-my-class-has-an-interface-parameter-inside-the-constructor-method",children:"What if my class has an interface parameter inside the constructor method?"}),"\n",(0,t.jsx)(n.p,{children:"This will automatically be resolved (same as with class parameters) if you follow one simple rule:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Variable name in your constructor method needs to match the class name (which implements the interface) in camelCase."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For example, let's say you have a ",(0,t.jsx)(n.code,{children:"SteeringWheel"})," class:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"class SteeringWheel implements CarPartInterface\n"})}),"\n",(0,t.jsx)(n.p,{children:"and you want to have this as a dependency in Car class. Your Car class has the following constructor:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"public function __construct(CarPartInterface $steeringWheel)\n{\n  $this->steeringWheel = $steeringWheel;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Since the injected variable name ",(0,t.jsx)(n.code,{children:"$steeringWheel"})," is the camelCase version of the class name ",(0,t.jsx)(n.code,{children:"SteeringWheel"})," which implements ",(0,t.jsx)(n.code,{children:"CarPartInterface"}),", autowiring will know to inject the correct class and everything will work fine."]}),"\n",(0,t.jsx)(n.p,{children:"If you understand everything from the upper example, you can just skip the next one. However, we recommend checking out the following example for a more detailed overview."}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Let's set a scene. You have created a ",(0,t.jsx)(n.code,{children:"DocumentsRoute"})," class and it needs some functionality from the ",(0,t.jsx)(n.code,{children:"QueryDocuments"})," class."]}),"\n",(0,t.jsx)(n.p,{children:"Steps you need to follow are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You should create an interface with all the methods you need in the ",(0,t.jsx)(n.code,{children:"DocumentsRoute"})," class. Let's call it ",(0,t.jsx)(n.code,{children:"QueryDocumentsInterface"}),". We'll put it inside the ",(0,t.jsx)(n.code,{children:"src/Query/Documents"})," folder."]}),"\n",(0,t.jsxs)(n.li,{children:["Your ",(0,t.jsx)(n.code,{children:"QueryDocuments"})," class should implement your new ",(0,t.jsx)(n.code,{children:"QueryDocumentsInterface"})," class and have all the methods from the interface implemented."]}),"\n",(0,t.jsxs)(n.li,{children:["In your ",(0,t.jsx)(n.code,{children:"DocumentsRoute"})," class, provide the ",(0,t.jsx)(n.code,{children:"QueryDocumentsInterface"})," interface as a parameter inside the ",(0,t.jsx)(n.code,{children:"__construct"})," method with the name of the argument ",(0,t.jsx)(n.code,{children:"$queryDocuments"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You can now use the methods defined in the ",(0,t.jsx)(n.code,{children:"QueryDocuments"})," class."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Let us provide you with some code examples:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Structure:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["src","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Query","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Documents","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"QueryDocumentsInterface.class"}),"\n",(0,t.jsx)(n.li,{children:"QueryDocuments.class"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Rest","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Routes","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DocumentsRoute.class"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"src/Query/Documents/QueryDocumentsInterface.php"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"/**\n * The file that holds a QueryDocuments interface.\n *\n * @package ProjectNamespace\\Query\\Documents;\n */\n\ndeclare(strict_types=1);\n\nnamespace ProjectNamespace\\Query\\Documents;\n\n/**\n * Interface for querying documents\n */\ninterface QueryDocumentsInterface\n{\n\n  /**\n   * Get structured documents data for documents section.\n   *\n   * @param int $id Id for data.\n   *\n   * @return string\n   */\n  public function getDocumentsData(int $id = 0): string;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"src/Query/Documents/QueryDocuments.php"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"/**\n * The file for querying all the documents\n *\n * @package ProjectNamespace\\Query\\Documents\n */\n\ndeclare(strict_types=1);\n\nnamespace ProjectNamespace\\Query\\Documents;\n\nuse ProjectNamespaceVendor\\EightshiftLibs\\Services\\ServiceInterface;\n\n/**\n * QueryDocuments class.\n */\nclass QueryDocuments implements ServiceInterface, QueryDocumentsInterface\n{\n    /**\n   * Get structured documents data for documents section.\n   *\n   * @param int $id Id for data.\n   *\n   * @return string\n   */\n  public function getDocumentsData(int $id = 0): string\n  {\n    // here goes the implementation of getDocumentsData method.\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"src/Rest/Routes/DocumentsRoute.php"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"/**\n * The class register route for DocumentsRoute endpoint\n *\n * @package ProjectNamespace\\Rest\\Routes\n */\n\ndeclare(strict_types=1);\n\nnamespace ProjectNamespace\\Rest\\Routes;\n\nuse ProjectNamespace\\Query\\Documents\\QueryDocumentsInterface;\nuse ProjectNamespaceVendor\\EightshiftLibs\\Rest\\Routes\\AbstractRoute;\nuse ProjectNamespaceVendor\\EightshiftLibs\\Rest\\CallableRouteInterface;\n\n/**\n * Class DocumentsRoute\n */\nclass DocumentsRoute extends AbstractRoute implements CallableRouteInterface\n{\n\n  /**\n   * Instance variable of documents data.\n   *\n   * @var QueryDocumentsInterface\n   */\n  protected $queryDocuments;\n\n  /**\n   * Create a new instance.\n   *\n   * @param QueryDocumentsInterface $queryDocuments Inject documentsData which holds data for documents.\n   */\n  public function __construct(QueryDocumentsInterface $queryDocuments)\n  {\n    $this->queryDocuments = $queryDocuments;\n  }\n\n  // here goes the rest of the DocumentsRoute implementation.\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"And that's it. Autowiring knows how to resolve the dependencies, you didn't tightly couple the code, and you're all set."}),"\n",(0,t.jsx)(n.h2,{id:"to-sum-it-up",children:"To sum it up"}),"\n",(0,t.jsx)(n.p,{children:"This chapter may be a bit long, but we wanted to make sure you understand our motivation behind it. We often work on large projects with lots of third-party integrations, and having a good project structure and architecture makes the projects more durable. It makes them less prone to bugs (if you write tests) and makes implementing new features and removing obsolete ones a lot easier."}),"\n",(0,t.jsx)(n.p,{children:"Do you need to use it? Not really. Especially on really simple projects. Should you? We think you'll benefit from it in the long run."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(96540);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);