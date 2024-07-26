"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[3081],{81115:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return u}});var a=t(58168),o=t(80045),i=(t(88763),t(15680)),r=t(83407);const l=["components"],m={},d=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var p;const s={_frontmatter:m},c=r.A;function u(e){let{components:n}=e,t=(0,o.A)(e,l);return(0,i.mdx)(c,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"install-page-builder"},"Install Page Builder"),(0,i.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"These installation instructions are only for contributors to the Page Builder code or documentation."),(0,i.mdx)("p",null,"For everyone else, Page Builder is automatically installed with Adobe Commerce 2.3.1. There is nothing else you need to do."),(0,i.mdx)("h2",{id:"github-installation-for-contributors"},"GitHub installation for Contributors"),(0,i.mdx)("p",null,"Before installing Page Builder for making contributions, you must have the following prerequisites:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"A local development installation of Adobe Commerce 2.3.1+ -- Use the installation instructions from the ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.3/install-gde/bk-install-guide.html"},"DevDocs installation guide"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Access to the private Page Builder repository. You should participate in ",(0,i.mdx)("a",{parentName:"p",href:"https://business.adobe.com/products/magento/partners.html"},"Adobe Partner Program")," to have these permissions.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/get-npm"},"npm package manager")))),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Clone the Page Builder repos into the root directory of your Adobe Commerce 2.3+ installation:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"git clone https://github.com/magento/magento2-page-builder\ngit clone https://github.com/magento/magento2-page-builder-ee\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"From the root directory of your Adobe Commerce installation, use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"dev/tools/build-ee.php")," script to symlink ",(0,i.mdx)("inlineCode",{parentName:"p"},"magento2-page-builder")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"magento2-page-builder-ee")," repos into your Magento Commerce installation:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},'php dev/tools/build-ee.php --command=link --exclude=true --ee-source="magento2-page-builder" --ce-source="."\nphp dev/tools/build-ee.php --command=link --exclude=true --ee-source="magento2-page-builder-ee" --ce-source="."\n')),(0,i.mdx)("p",{parentName:"li"},"The results should look like this:"),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"340px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"82.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/6661de069c190b2489df51d2f3b364a0/5530d/symlinked-pagebuilder.webp 320w","/commerce-frontend-core/static/6661de069c190b2489df51d2f3b364a0/719ab/symlinked-pagebuilder.webp 340w"],sizes:"(max-width: 340px) 100vw, 340px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/6661de069c190b2489df51d2f3b364a0/dd4a7/symlinked-pagebuilder.png 320w","/commerce-frontend-core/static/6661de069c190b2489df51d2f3b364a0/f46e7/symlinked-pagebuilder.png 340w"],sizes:"(max-width: 340px) 100vw, 340px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/6661de069c190b2489df51d2f3b364a0/f46e7/symlinked-pagebuilder.png",alt:"Symlinks to Page Builder",title:"Symlinks to Page Builder",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Enable the Page Builder module using the following command:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"bin/magento setup:upgrade\n")))),(0,i.mdx)("h3",{id:"updating-github-installation"},"Updating GitHub installation"),(0,i.mdx)("p",null,"When a new version of Page Builder is available, pull the latest versions from GitHub at ",(0,i.mdx)("inlineCode",{parentName:"p"},"magento/magento2-page-builder")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"magento/magento2-page-builder-ee"),"."),(0,i.mdx)("h3",{id:"installing-nodejs-dependencies"},"Installing Node.js dependencies"),(0,i.mdx)("p",null,"If you plan to contribute to Page Builder, you need to install Node.js dependencies to compile TypeScript."),(0,i.mdx)("p",null,"Navigate to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"pagebuilder")," directory and install Page Builder dependencies using the following command:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"cd <pagebuilder-git-folder>\nnpm install\n")),(0,i.mdx)("p",null,"After installing the npm packages, you can run:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"npm run start\n")),(0,i.mdx)("p",null,"This command watches for changes to your TypeScript files, compiles, and checks for errors."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-page-builder-contributors-md-16b6ac72f0f1b4780f28.js.map