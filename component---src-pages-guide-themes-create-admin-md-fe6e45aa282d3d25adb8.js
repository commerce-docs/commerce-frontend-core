"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[7269],{89173:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return h}});var n=a(58168),m=a(80045),o=(a(88763),a(15680)),r=a(83407);const d=["components"],i={},l={_frontmatter:i},p=r.A;function h(e){let{components:t}=e,a=(0,m.A)(e,d);return(0,o.mdx)(p,(0,n.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"create-an-admin-theme"},"Create an Admin theme"),(0,o.mdx)("p",null,"This topic describes how to create your custom theme for Admin, referencing the similar ",(0,o.mdx)("a",{parentName:"p",href:"create-storefront.md"},"flow for creating a custom storefront theme"),"."),(0,o.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/set-mode.html"},"Set")," your application to the developer ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/setup/application-modes.html"},"mode"),". The application mode influences the way static files are cached."),(0,o.mdx)("h2",{id:"overview"},"Overview"),(0,o.mdx)("p",null,"To create a custom Admin theme, take the following steps:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"#create-a-theme-directory"},"Create a theme directory.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"#add-a-declaration-themexml"},"Add a declaration ",(0,o.mdx)("inlineCode",{parentName:"a"},"theme.xml"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"#add-registrationphp"},"Add ",(0,o.mdx)("inlineCode",{parentName:"a"},"registration.php"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"#optionally-add-composerjson"},"Optionally add ",(0,o.mdx)("inlineCode",{parentName:"a"},"composer.json"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"#admin-theme-logo-optional"},"Optionally change theme logo."))),(0,o.mdx)("p",null,"Each step is described further."),(0,o.mdx)("h2",{id:"create-a-theme-directory"},"Create a theme directory"),(0,o.mdx)("p",null,"In the ",(0,o.mdx)("inlineCode",{parentName:"p"},"app/design/adminhtml")," directory create a new ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Vendor>/<admin_theme>")," directory."),(0,o.mdx)("h2",{id:"add-a-declaration-themexml"},"Add a declaration ",(0,o.mdx)("inlineCode",{parentName:"h2"},"theme.xml")),(0,o.mdx)("p",null,"In the theme directory, add ",(0,o.mdx)("inlineCode",{parentName:"p"},"theme.xml")," containing at least the theme name and the parent theme name (if the theme ",(0,o.mdx)("a",{parentName:"p",href:"inheritance.md"},"inherits")," from one). We recommend you to inherit from the default Admin theme: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento/backend"),"."),(0,o.mdx)("p",null,"Add or copy from an existing ",(0,o.mdx)("inlineCode",{parentName:"p"},"theme.xml")," to your theme directory ",(0,o.mdx)("inlineCode",{parentName:"p"},"app/design/adminhtml/<Vendor>/<admin_theme>"),"."),(0,o.mdx)("p",null,"Configure it using the following example (replace placeholders with your theme information):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">\n     <title>%Theme title%</title> \x3c!-- your theme\'s name --\x3e\n     <parent>%vendor_dir%/%parent_theme_dir%</parent> \x3c!-- the parent theme. Example: Magento/backend --\x3e\n</theme>\n')),(0,o.mdx)("p",null,"If you change the theme title or parent theme information in ",(0,o.mdx)("inlineCode",{parentName:"p"},"theme.xml")," after a theme was already ",(0,o.mdx)("a",{parentName:"p",href:"#theme-registration"},"registered"),", you need to open or reload any Admin page for your changes to be saved in the database."),(0,o.mdx)("h2",{id:"add-registrationphp"},"Add ",(0,o.mdx)("inlineCode",{parentName:"h2"},"registration.php")),(0,o.mdx)("p",null,"In your theme directory, create a ",(0,o.mdx)("inlineCode",{parentName:"p"},"registration.php")," file.\nIn this file, add the following code, having replaced placeholders with your theme information:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\nuse \\Magento\\Framework\\Component\\ComponentRegistrar;\nComponentRegistrar::register(ComponentRegistrar::THEME, 'adminhtml/%vendor_dir/your_theme_dir%', __DIR__); // Example: 'adminhtml/Magento/backend'\n")),(0,o.mdx)("h2",{id:"optionally-add-composerjson"},"Optionally add ",(0,o.mdx)("inlineCode",{parentName:"h2"},"composer.json")),(0,o.mdx)("p",null,"See the ",(0,o.mdx)("a",{parentName:"p",href:"create-storefront.md#make-your-theme-a-composer-package"},"Make your theme a Composer package (optional)")),(0,o.mdx)("h2",{id:"admin-theme-logo-optional"},"Admin theme logo (optional)"),(0,o.mdx)("p",null,"In the default ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento/backend")," theme ",(0,o.mdx)("inlineCode",{parentName:"p"},"lib/web/images/magento-logo.svg")," is used as theme logo.\nTo override it, in your theme directory, create a ",(0,o.mdx)("inlineCode",{parentName:"p"},"web/images")," sub-directory, and add your custom file named ",(0,o.mdx)("inlineCode",{parentName:"p"},"magento-logo.svg"),".\nIf you want to use the file with other name and/or format, you need to additionally declare it as described in ",(0,o.mdx)("a",{parentName:"p",href:"create-storefront.md#declaring-theme-logo"},"Declaring theme logo"),"."),(0,o.mdx)("p",null,"To customize the Admin theme logo:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Create a new XML file in the theme named ",(0,o.mdx)("inlineCode",{parentName:"p"},"app/design/adminhtml/<Vendor>/<theme>/Magento_Backend/layout/admin_login.xml"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Add the following sample code to the new file."),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" layout="admin-login" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">\n    <body>\n        <referenceBlock name="logo">\n            <arguments>\n                <argument name="logo_image_src" xsi:type="string">images/custom-logo.svg</argument>\n                <argument name="logo_width" xsi:type="number">150</argument> \x3c!-- Add custom logo width --\x3e\n                <argument name="logo_height" xsi:type="number">80</argument> \x3c!-- Add custom logo height --\x3e\n            </arguments>\n        </referenceBlock>\n    </body>\n </page>\n'))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Add your custom logo to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"app/design/adminhtml/<Vendor>/<theme>/web/images/")," directory."))),(0,o.mdx)("h2",{id:"theme-registration"},"Theme registration"),(0,o.mdx)("p",null,"Once you open the Admin (or reload any  Admin page) having added the theme files to the files system, your theme gets registered and added to the database."),(0,o.mdx)("h2",{id:"apply-the-admin-theme"},"Apply the Admin theme"),(0,o.mdx)("p",null,"See the ",(0,o.mdx)("a",{parentName:"p",href:"apply-admin.md"},"Apply a custom Admin theme topic"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-themes-create-admin-md-fe6e45aa282d3d25adb8.js.map