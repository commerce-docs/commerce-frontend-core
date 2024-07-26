"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[7626],{64592:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return h}});var n=a(58168),o=a(80045),r=(a(88763),a(15680)),i=a(83407);const m=["components"],d={},s=(l="InlineAlert",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var l;const p={_frontmatter:d},c=i.A;function h(e){let{components:t}=e,a=(0,o.A)(e,m);return(0,r.mdx)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"install-a-third-party-storefront-theme"},"Install a third-party storefront theme"),(0,r.mdx)("p",null,"This topic describes how to install a third-party theme for a store."),(0,r.mdx)("p",null,"To install a theme, you need to add its code to your instance code base, and then register it in the database. The way a theme is distributed determines how to do this:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"If a theme is just a set of files, for example an archive, add the theme manually."),(0,r.mdx)("li",{parentName:"ul"},"If a theme is a Composer package, install it using Composer.")),(0,r.mdx)("p",null,"The following sections contain more information about each installation flow."),(0,r.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/set-mode.html"},"Set")," your application to the developer or default ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/setup/application-modes.html"},"mode"),"."),(0,r.mdx)("h2",{id:"manual-install"},"Manual install"),(0,r.mdx)("p",null,"To install a theme manually:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Make sure that the directory structure you are copying is ",(0,r.mdx)("inlineCode",{parentName:"p"},"<VendorName>/<theme>"),". And all the ",(0,r.mdx)("a",{parentName:"p",href:"structure.md"},"theme files")," are in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<theme>")," directory.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Copy this directory to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<installation dir>/app/design/frontend")," directory."))),(0,r.mdx)("h2",{id:"composer-install"},"Composer install"),(0,r.mdx)("p",null,"To install the theme as composer package, follow the instructions in the ",(0,r.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/cloud/howtos/install-components.html"},"Install, manage, and upgrade modules")," topic."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Manually installed themes are stored in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/design/")," directory. Themes loaded through Composer are located in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"vendor/")," directory and can be stored anywhere in root.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"When the application starts up, Composer executes each file included in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"autoload.files")," section. ",(0,r.mdx)("inlineCode",{parentName:"p"},"registration.php")," then registers itself as a theme."))),(0,r.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Composer-based themes are loaded from external sources and cannot be modified directly, whereas local themes are part of the project source code and therefore can be edited directly."),(0,r.mdx)("h2",{id:"marketplace-extension-install"},"Marketplace extension install"),(0,r.mdx)("p",null,"If a theme is distributed on ",(0,r.mdx)("a",{parentName:"p",href:"https://marketplace.magento.com/"},"Commerce Marketplace"),", see ",(0,r.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/extensions/install/"},"Install the Extension"),"."),(0,r.mdx)("h2",{id:"register-a-theme"},"Register a theme"),(0,r.mdx)("p",null,"After you create or install a theme, open the Admin or reload any Admin page. This way the theme gets registered and added to the database."),(0,r.mdx)("p",null,"To make sure the theme is registered, in the Admin navigate to ",(0,r.mdx)("strong",{parentName:"p"},"Content")," > ",(0,r.mdx)("strong",{parentName:"p"},"Design")," > ",(0,r.mdx)("strong",{parentName:"p"},"Themes"),". If a theme is registered, it is displayed in the list of available themes."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"16.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/56cd4fc2384eaf86183f824cd85b50ea/5530d/theme.webp 320w","/commerce-frontend-core/static/56cd4fc2384eaf86183f824cd85b50ea/0c8fb/theme.webp 640w","/commerce-frontend-core/static/56cd4fc2384eaf86183f824cd85b50ea/94b1e/theme.webp 1280w","/commerce-frontend-core/static/56cd4fc2384eaf86183f824cd85b50ea/42a71/theme.webp 1735w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/56cd4fc2384eaf86183f824cd85b50ea/dd4a7/theme.png 320w","/commerce-frontend-core/static/56cd4fc2384eaf86183f824cd85b50ea/0f09e/theme.png 640w","/commerce-frontend-core/static/56cd4fc2384eaf86183f824cd85b50ea/bbbf7/theme.png 1280w","/commerce-frontend-core/static/56cd4fc2384eaf86183f824cd85b50ea/1b532/theme.png 1735w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/56cd4fc2384eaf86183f824cd85b50ea/bbbf7/theme.png",alt:"The registered theme in Admin",title:"The registered theme in Admin",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-themes-install-md-bee46f277532f5173242.js.map