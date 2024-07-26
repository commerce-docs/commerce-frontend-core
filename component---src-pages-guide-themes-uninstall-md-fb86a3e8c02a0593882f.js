"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[8591],{8129:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return u}});var n=a(58168),l=a(80045),o=(a(88763),a(15680)),i=a(83407);const m=["components"],s={},d=(r="InlineAlert",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var r;const p={_frontmatter:s},h=i.A;function u(e){let{components:t}=e,a=(0,l.A)(e,m);return(0,o.mdx)(h,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"uninstall-a-storefront-theme"},"Uninstall a storefront theme"),(0,o.mdx)("p",null,"This topic describes how to uninstall a storefront theme."),(0,o.mdx)("p",null,"The way a theme should be uninstalled is defined by two factors:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The way the theme was added: manually added (installed or created), installed as composer package or as an extension."),(0,o.mdx)("li",{parentName:"ul"},"The way the application was installed: ",(0,o.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-sample-data-clone.html"},"using the source files from GitHub")," or ",(0,o.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-sample-data-composer.html"},"using Composer"),".")),(0,o.mdx)("p",null,"The following sections describe the flow for uninstalling themes in each case."),(0,o.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/set-mode.html"},"Set your application to the developer or default mode"),"."),(0,o.mdx)("li",{parentName:"ol"},"Make sure that the theme is not applied on the storefront. To do this, in the Admin panel navigate to ",(0,o.mdx)("strong",{parentName:"li"},"Content")," > Design > ",(0,o.mdx)("strong",{parentName:"li"},"Configuration")," and make sure that your custom theme is not applied for any store view."),(0,o.mdx)("li",{parentName:"ol"},"Make sure that the theme is not defined as a parent for any registered theme. To do this, in the Admin panel, navigate to ",(0,o.mdx)("strong",{parentName:"li"},"Content")," > Design > ",(0,o.mdx)("strong",{parentName:"li"},"Themes"),". Make sure that your theme is not mentioned in the ",(0,o.mdx)("strong",{parentName:"li"},"Parent Theme")," column. If it is mentioned, you need to uninstall the child theme first.")),(0,o.mdx)("h2",{id:"uninstall-a-manually-added-theme"},"Uninstall a manually added theme"),(0,o.mdx)("p",null,"In case if your theme was created or installed manually, the uninstall procedure is the same, regardless of the way that the application was installed."),(0,o.mdx)("p",null,"To uninstall a manually added theme:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Navigate to the vendor directory where the theme was installed. This directory should be: ",(0,o.mdx)("inlineCode",{parentName:"li"},"<installation dir>/app/design/frontend/<VendorName>"),"."),(0,o.mdx)("li",{parentName:"ol"},"Remove the theme directory."),(0,o.mdx)("li",{parentName:"ol"},"Remove the theme record from database. If you are using MySQL, run the following command to do this:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"mysql -u <user> -p -e \"delete from <dbname>.theme where theme_path ='<Vendor>/<theme>' AND area ='frontend' limit 1\"\n")),(0,o.mdx)("p",null,"Where:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"<user>"),": your database username"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"<dbname>"),": your database name"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"<Vendor>/<theme>"),": relative path to the theme directory")),(0,o.mdx)("h2",{id:"uninstall-a-theme-package"},"Uninstall a theme package"),(0,o.mdx)("p",null,"The flow for uninstalling a theme that is Composer package is different, depending on the way your instance was installed."),(0,o.mdx)("h3",{id:"composer-based-installations"},"Composer-based installations"),(0,o.mdx)("p",null,"If both the theme and the instance were installed using Composer, you can use a special CLI command. Follow the instructions from the ",(0,o.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-theme-uninstall.html"},"Uninstall themes Composer package")," topic."),(0,o.mdx)("h3",{id:"git-based-installations"},"Git-based installations"),(0,o.mdx)("p",null,"To uninstall a theme Composer package if your instance was installed by cloning the Git repository, you can also uninstall it using a CLI command. However, you must first remove it from the list of dependencies."),(0,o.mdx)("p",null,"Take the following steps:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Open the ",(0,o.mdx)("inlineCode",{parentName:"p"},"<installation dir>/composer.json")," file.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Find a line with a reference to theme package and delete it. The reference would look like following:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'"require": {\n ...\n    "<vendor>/<theme-name>": "<version>"\n},\n'))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"To update the project dependencies, run:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"composer update\n"))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"magento theme:uninstall")," CLI command as described in the ",(0,o.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-theme-uninstall.html"},"Uninstall themes Composer package")," topic."))),(0,o.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"You can use the Composer remove command to remove the dependency, but in that case, you must delete the theme record from the database manually."),(0,o.mdx)("h2",{id:"uninstall-a-theme-extension"},"Uninstall a theme extension"),(0,o.mdx)("p",null,"If the theme was installed as an extension, you can uninstall it the same way that theme Composer packages are uninstalled, see the ",(0,o.mdx)("a",{parentName:"p",href:"#composer-based-installations"},"Uninstall a theme package")," section for details."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-themes-uninstall-md-fb86a3e8c02a0593882f.js.map