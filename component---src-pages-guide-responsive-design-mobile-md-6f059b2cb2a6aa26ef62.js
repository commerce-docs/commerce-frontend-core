"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[5646],{75716:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return c}});var m=a(58168),t=a(80045),s=(a(88763),a(15680)),r=a(83407);const o=["components"],l={},i={_frontmatter:l},d=r.A;function c(e){let{components:n}=e,a=(0,t.A)(e,o);return(0,s.mdx)(d,(0,m.A)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"create-a-responsive-mobile-theme"},"Create a responsive mobile theme"),(0,s.mdx)("p",null,"The topic describes how to create a responsive mobile-specific theme using the default approaches."),(0,s.mdx)("p",null,"To use all the responsive approaches implemented in the out-of-the-box Blank and Luma themes, your theme should declare one of them as a ",(0,s.mdx)("a",{parentName:"p",href:"../themes/inheritance.md"},"parent"),"."),(0,s.mdx)("p",null,"To create a mobile-specific theme:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Create a theme as described in ",(0,s.mdx)("a",{parentName:"li",href:"../themes/create-storefront.md"},"Create a theme"),", having specified Blank or Luma as a parent theme."),(0,s.mdx)("li",{parentName:"ol"},"Add a ",(0,s.mdx)("inlineCode",{parentName:"li"},"<theme_dir>/Magento_Theme/layout/default_head_blocks.xml")," layout file with the following content:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-xml"},'<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">\n    <head>\n        <remove src="css/styles-l.css" />\n    </head>\n</page>\n')),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"<remove>")," instruction removes the desktop-specific files from your theme."),(0,s.mdx)("h2",{id:"apply-mobile-specific-styles"},"Apply mobile-specific styles"),(0,s.mdx)("p",null,"Use ",(0,s.mdx)("inlineCode",{parentName:"p"},"styles-m.less")," to generate mobile-specific styles."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-xml"},'<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">\n <head>\n   <remove src="css/styles-l.css" />\n   <css src="css/styles-m.css" />\n </head>\n</page>\n')),(0,s.mdx)("p",null,"Media queries ",(0,s.mdx)("inlineCode",{parentName:"p"},"@media-common"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"max screen__m"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"max screen__s"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"max @screen__xs")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"max @screen__xxs")," will be added to ",(0,s.mdx)("inlineCode",{parentName:"p"},"styles-m.css"),"."),(0,s.mdx)("p",null,"Example of a LESS mixin to target screen width less than 480px:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-less"},".media-width(@extremum, @break) when (@extremum = 'max') and (@break = @screen__xs) {\n    // your code\n}\n")),(0,s.mdx)("p",null,"Example of a LESS mixin to target screen width less than 768px:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-less"},".media-width(@extremum, @break) when (@extremum = 'max') and (@break = @screen__m) {\n    // your code\n}\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-responsive-design-mobile-md-6f059b2cb2a6aa26ef62.js.map