"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[4280],{99290:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return d},default:function(){return h}});var n=t(58168),l=t(80045),o=(t(88763),t(15680)),i=t(83407);const m=["components"],d={},r=(u="InlineAlert",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var u;const s={_frontmatter:d},p=i.A;function h(e){let{components:a}=e,t=(0,l.A)(e,m);return(0,o.mdx)(p,(0,n.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"override-a-layout"},"Override a layout"),(0,o.mdx)("p",null,"Not all layout customizations can be performed by ",(0,o.mdx)("a",{parentName:"p",href:"extend.md"},"extending layouts"),". If the amount of customizations is large, you can use the overriding function for the needed layout file. This means that the new file that you place in the theme will be used instead of the parent ",(0,o.mdx)("a",{parentName:"p",href:"index.md#module-and-theme-layout-files"},"theme")," layout file or ",(0,o.mdx)("a",{parentName:"p",href:"index.md#module-and-theme-layout-files"},"base")," layout file."),(0,o.mdx)("p",null,"In this article, ",(0,o.mdx)("a",{parentName:"p",href:"types.md#page-layout"},"page layouts"),", ",(0,o.mdx)("a",{parentName:"p",href:"types.md#page-configuration"},"page configurations"),", and ",(0,o.mdx)("a",{parentName:"p",href:"types.md#generic-layout"},"generic layouts")," are referred to as ",(0,o.mdx)("em",{parentName:"p"},"layout files"),", as the mechanism of overriding is similar for all of them."),(0,o.mdx)("p",null,"Layout files with instructions that override the default or parent theme files are referred to as ",(0,o.mdx)("em",{parentName:"p"},"overriding layout files"),"."),(0,o.mdx)("h2",{id:"examples-of-customizations-that-override-layouts"},"Examples of customizations that override layouts"),(0,o.mdx)("p",null,"Examples of customizations that involve overriding layouts:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Suppressing method invocation."),(0,o.mdx)("p",{parentName:"li"},"Overriding is not necessary if a block has a method that cancels the effect of the originally invoked method. In this case, you can customize the layout by adding a layout file where the canceling method is invoked.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Modifying method arguments.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Canceling block/container removal using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"remove")," attribute.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Setting XML attributes of blocks and containers."))),(0,o.mdx)(r,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Certain attributes, like ",(0,o.mdx)("inlineCode",{parentName:"p"},"htmlClass"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"htmlId"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"label")," attributes can be changed in ",(0,o.mdx)("a",{parentName:"p",href:"extend.md"},"extending layouts"),"."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Removing block arguments."),(0,o.mdx)("li",{parentName:"ul"},"Modifying and suppressing ",(0,o.mdx)("a",{parentName:"li",href:"index.md"},"handles")," inclusion."),(0,o.mdx)("li",{parentName:"ul"},"Removing all handle instructions by declaring an overriding layout file with an empty handle.")),(0,o.mdx)("h2",{id:"how-to-override-a-layout"},"How to override a layout"),(0,o.mdx)("p",null,"This section discusses how to override:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"index.md#module-and-theme-layout-files"},"Base layout")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"index.md#module-and-theme-layout-files"},"Theme layout"))),(0,o.mdx)("h3",{id:"override-base-layouts"},"Override base layouts"),(0,o.mdx)("p",null,"To add an overriding base layout file (to override a base layout provided by the module):"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Put a layout file with the same name in the following location:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-tree"}," <theme_dir>\n   |__/<Namespace_Module>\n     |__/layout\n       |__/override\n          |__/base\n            |--<layout1>.xml\n            |--<layout2>.xml\n")))),(0,o.mdx)("p",null,"These files override the following layouts:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"<module_dir>/view/frontend/layout/<layout1>.xml")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"<module_dir>/view/frontend/layout/<layout2>.xml"))),(0,o.mdx)("p",null,"For example, ",(0,o.mdx)("inlineCode",{parentName:"p"},"<theme_dir>/Magento_Checkout/layout/override/base/checkout_cart_index.xml")," will override ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_Checkout/view/frontend/layout/checkout_cart_index.xml"),"."),(0,o.mdx)("h3",{id:"override-theme-layouts"},"Override theme layouts"),(0,o.mdx)("p",null,"To add an overriding theme file (to override a parent theme layout):"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Put a layout file with the same name in the following location:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tree"},"<theme_dir>\n  |__/<Namespace_Module>\n    |__/layout\n      |__/override\n         |__/theme\n            |__/<Parent_Vendor>\n               |__/<parent_theme>\n                  |--<layout1>.xml\n                  |--<layout2>.xml\n")),(0,o.mdx)("p",null,"These files override the following layouts:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"<parent_theme_dir>/<Namespace>_<Module>/layout/<layout1>.xml")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"<parent_theme_dir>/<Namespace>_<Module>/layout/<layout2>.xml"))),(0,o.mdx)("p",null,"For example, ",(0,o.mdx)("inlineCode",{parentName:"p"},"<theme_dir>/Magento_Checkout/layout/override/theme/Magento/luma/checkout_cart_index.xml")," will override ",(0,o.mdx)("inlineCode",{parentName:"p"},"app/design/frontend/Magento/luma/Magento_Checkout/layout/checkout_cart_index.xml"),"."),(0,o.mdx)(r,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"To override page layout files, use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"page_layout")," directory name instead of ",(0,o.mdx)("inlineCode",{parentName:"p"},"layout"),"."),(0,o.mdx)("h2",{id:"customization-mistakes"},"Customization mistakes"),(0,o.mdx)("p",null,"Although the layout overriding mechanism provides great customization flexibility, it's possible to use it to add logically irrelevant changes. We strongly recommend you not make the following changes:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Changing block name or alias. The name of a block should not be changed, and neither should the alias of a block remaining in the same parent element."),(0,o.mdx)("li",{parentName:"ul"},"Changing handle inheritance. For example, you should not change the page type parent handle.")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-layouts-override-md-8ed2dba407f19c99bb79.js.map