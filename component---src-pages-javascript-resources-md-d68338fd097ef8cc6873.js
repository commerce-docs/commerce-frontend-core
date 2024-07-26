"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[5914],{31118:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return o},default:function(){return u}});var t=n(58168),i=n(80045),l=(n(88763),n(15680)),r=n(83407);const m=["components"],o={},d=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)});var p;const s={_frontmatter:o},c=r.A;function u(e){let{components:a}=e,n=(0,i.A)(e,m);return(0,l.mdx)(c,(0,t.A)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"javascript-resources-in-commerce"},"JavaScript Resources in Commerce"),(0,l.mdx)("p",null,"This topic describes general concepts of how JavaScript (JS) components are organized."),(0,l.mdx)("p",null,"To address the problem of slow page loads, we exclude JavaScript from the page headers and we added the ability to use the ",(0,l.mdx)("a",{parentName:"p",href:"http://requirejs.org"},"RequireJS library"),"."),(0,l.mdx)("p",null,"RequireJS improves the perceived page load time because it allows JavaScript to load in the background; in particular, it enables asynchronous JavaScript loading."),(0,l.mdx)("h2",{id:"explore-resources"},"Explore resources"),(0,l.mdx)("h3",{id:"location"},"Location"),(0,l.mdx)("p",null,"You can find Javascript components on the following levels:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Library level (",(0,l.mdx)("inlineCode",{parentName:"li"},"lib/web"),"). Resources located here are available in any place within the application."),(0,l.mdx)("li",{parentName:"ul"},"Module level (",(0,l.mdx)("inlineCode",{parentName:"li"},"<module_dir>/view/<areaname>/web"),"). If the module is enabled, resources added here are available in other modules and themes."),(0,l.mdx)("li",{parentName:"ul"},"Theme level, for a particular module (",(0,l.mdx)("inlineCode",{parentName:"li"},"<theme_dir>/<VendorName>_<ModuleName>/web"),"). Resources added here are available for ","[inheriting]"," themes."),(0,l.mdx)("li",{parentName:"ul"},"Theme level  (",(0,l.mdx)("inlineCode",{parentName:"li"},"<theme_dir>/web"),"). Resources added here are available for ",(0,l.mdx)("a",{parentName:"li",href:"../guide/themes/inheritance.md"},"inheriting")," themes.")),(0,l.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"The library level can only contain core application resources. Do not put custom JS files in the ","`","lib/web","`"," directory."),(0,l.mdx)("h3",{id:"specifying-js"},"Specifying JS"),(0,l.mdx)("p",null,"We recommend specifying JavaScript resources in the templates rather than in the layout updates, to ensure that the resources are available for body of a page."),(0,l.mdx)("h2",{id:"accessing-resources"},"Accessing resources"),(0,l.mdx)("p",null,"JS resources are accessed using relative paths."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example 1:")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"File actual location: ",(0,l.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/ConfigurableProduct/view/frontend/web/js/configurable.js"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"File published to ",(0,l.mdx)("inlineCode",{parentName:"p"},"pub/static"),": ",(0,l.mdx)("inlineCode",{parentName:"p"},"pub/static/frontend/<Vendor>/<theme>/<locale>/Magento_ConfigurableProduct/js/configurable.js"),". Here ",(0,l.mdx)("inlineCode",{parentName:"p"},"<theme>")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"<locale>")," are the currently applied in your instance theme and locale.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Called in script:"),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'require(["Magento_ConfigurableProduct/js/configurable"], function(Configurable){\n});\n')))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example 2:")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"File actual location: ",(0,l.mdx)("inlineCode",{parentName:"p"},"app/design/frontend/Magento/blank/Magento_Theme/web/js/theme.js"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"File published to ",(0,l.mdx)("inlineCode",{parentName:"p"},"pub/static"),": ",(0,l.mdx)("inlineCode",{parentName:"p"},"pub/static/frontend/Magento/blank/<locale>/Magento_Theme/js/theme.js"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Called in script:"),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'require(["Magento_Theme/js/theme"], function(){\n});\n')))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example 3:")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"File actual location: ",(0,l.mdx)("inlineCode",{parentName:"p"},"lib/web/jquery.js"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"File published to ",(0,l.mdx)("inlineCode",{parentName:"p"},"pub/static"),": ",(0,l.mdx)("inlineCode",{parentName:"p"},"pub/static/<area>/<Vendor>/<theme>/<locale>/jquery.js"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Called in script:"),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'require(["jquery"], function($){\n});\n')))),(0,l.mdx)("p",null,"Relative paths are also used in for ",(0,l.mdx)("a",{parentName:"p",href:"resources.md"},"mapping and setting ",(0,l.mdx)("inlineCode",{parentName:"a"},"paths")," in requirejs-config.js configuration files"),"."),(0,l.mdx)("h2",{id:"dependencies"},"Dependencies"),(0,l.mdx)("p",null,"To build a dependency on the third-party plugin, specify a ",(0,l.mdx)("a",{parentName:"p",href:"http://requirejs.org/docs/api.html#config-shim"},"shim")," in the following configuration files:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"requirejs-config.js")),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'var config = {\n    shim: {\n       "3-rd-party-plugin": ["jquery"]\n    }\n};\n'))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"<third-party-plugin>.js")),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"!(function($){\n    // plugin code\n    // where $ == jQuery\n})(jQuery);\n")))),(0,l.mdx)("h2",{id:"requirejs-library"},"RequireJS library"),(0,l.mdx)("h3",{id:"including-requirejs"},"Including RequireJS"),(0,l.mdx)("p",null,"To be available for the entire application instance, RequireJS library is included in the following layout files:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"For the ",(0,l.mdx)("inlineCode",{parentName:"p"},"adminhtml")," ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/architecture/modules/areas/"},"area"),":"),(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Backend/view/adminhtml/layout/default.xml"},"app/code/Magento/Backend/view/adminhtml/layout/default.xml")),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},' <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" layout="admin-1column" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">\n     <head>\n         <title>Admin</title>\n         <meta name="viewport" content="width=1024"/>\n         <meta name="format-detection" content="telephone=no"/>\n         \x3c!-- Here\'s the library included --\x3e\n         <link src="requirejs/require.js"/>\n         <css src="extjs/resources/css/ext-all.css"/>\n         <css src="extjs/resources/css/ytheme-magento.css"/>\n     </head>\n     <body>\n         <attribute name="id" value="html-body"/>\n         \x3c!-- Here\'s the basic configuration file require_js.phtml specified --\x3e\n         <block name="require.js" class="Magento\\Backend\\Block\\Page\\RequireJs" template="Magento_Backend::page/js/require_js.phtml"/>\n         <referenceContainer name="global.notices">\n             <block class="Magento\\Backend\\Block\\Page\\Notices" name="global_notices" as="global_notices" template="Magento_Backend::page/notices.phtml"/>\n         </referenceContainer>\n         <referenceContainer name="header">\n             ...\n         </referenceContainer>\n         <referenceContainer name="after.body.start">\n             \x3c!-- Here\'s the main configuration file requirejs-config.js specified --\x3e\n             <block class="Magento\\RequireJs\\Block\\Html\\Head\\Config" name="requirejs-config"/>\n             <block class="Magento\\Translation\\Block\\Html\\Head\\Config" name="translate-config"/>\n             <block class="Magento\\Translation\\Block\\Js" name="translate" template="Magento_Translation::translate.phtml"/>\n             <block class="Magento\\Framework\\View\\Element\\Js\\Components" name="head.components" as="components" template="Magento_Backend::page/js/components.phtml"/>\n             <block class="Magento\\Framework\\View\\Element\\Html\\Calendar" name="head.calendar" as="calendar" template="Magento_Backend::page/js/calendar.phtml"/>\n         </referenceContainer>\n     </body>\n </page>\n'))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"For the ",(0,l.mdx)("inlineCode",{parentName:"p"},"frontend")," area, the equivalent configuration is located in ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Theme/view/frontend/layout/default.xml"},(0,l.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Theme/view/frontend/layout/default.xml")),"."))),(0,l.mdx)("h3",{id:"including-third-party-libraries"},"Including third-party libraries"),(0,l.mdx)("p",null,"To include a 3rd party library and use it within the entire website (using the ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/kenwheeler/slick/"},"Slick JS Library")," as an example):"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Download the library and copy ",(0,l.mdx)("inlineCode",{parentName:"p"},"slick.min.js")," to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"<theme_path>/web/js")," folder.")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Copy ",(0,l.mdx)("inlineCode",{parentName:"p"},"slick.less")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"slick-theme.less")," to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"<theme_path>/web/css/source")," folder. Also add both files to ",(0,l.mdx)("inlineCode",{parentName:"p"},"<theme_path>/web/css/source/_extend.less"),"."),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-scss"},'@import "slick.less";\n@import "slick-theme.less";\n'))),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Create or update the theme's ",(0,l.mdx)("inlineCode",{parentName:"p"},"requirejs-config.js")," file."),(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"<theme_path>/requirejs-config.js")),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"var config = {\n paths: {\n     slick: 'js/slick.min'\n },\n shim: {\n     slick: {\n         deps: ['jquery']\n     }\n   }\n};\n")))),(0,l.mdx)("p",null,"After these steps, clear the cache and perform a static content deployment."),(0,l.mdx)("h4",{id:"result"},"Result"),(0,l.mdx)("p",null,"We should now be able to use the Slick library, for example, on any list that we want to convert into a slider."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},"<ul class=\"my-list\">\n    <li>1st Element</li>\n    <li>2nd Element</li>\n    <li>3rd Element</li>\n    <li>4th Element</li>\n    <li>5th Element</li>\n    <li>6th Element</li>\n    <li>7th Element</li>\n    <li>8th Element</li>\n</ul>\n\n<script>\n   require([\n      'jquery',\n      'slick',\n      'domReady!'\n   ], function ($) {\n      $(\".my-list\").slick({\n         dots: true,\n         infinite: true,\n         speed: 300,\n         slidesToShow: 4,\n         slidesToScroll: 1\n      });\n   });\n<\/script>\n")),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"636px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.8125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/d1487c13410134951d208bffdf7c11ce/5530d/slick-slider-result.webp 320w","/commerce-frontend-core/static/d1487c13410134951d208bffdf7c11ce/12ea8/slick-slider-result.webp 636w"],sizes:"(max-width: 636px) 100vw, 636px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/d1487c13410134951d208bffdf7c11ce/dd4a7/slick-slider-result.png 320w","/commerce-frontend-core/static/d1487c13410134951d208bffdf7c11ce/44bb2/slick-slider-result.png 636w"],sizes:"(max-width: 636px) 100vw, 636px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/d1487c13410134951d208bffdf7c11ce/44bb2/slick-slider-result.png",alt:"Slick Slider",title:"Slick Slider",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,l.mdx)("h3",{id:"mapping-resources"},"Mapping resources"),(0,l.mdx)("p",null,"To make configurations more precise and specific to different modules and themes, ",(0,l.mdx)("inlineCode",{parentName:"p"},"requirejs-config.js")," files can be placed in different ",(0,l.mdx)("a",{parentName:"p",href:"#location"},"locations")," depending on your needs."),(0,l.mdx)("p",null,"All configurations are collected and executed in the following order:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Library configurations."),(0,l.mdx)("li",{parentName:"ol"},"Configurations at the module level."),(0,l.mdx)("li",{parentName:"ol"},"Configurations at the theme module level for the ancestor themes."),(0,l.mdx)("li",{parentName:"ol"},"Configurations at the theme module level for a current theme."),(0,l.mdx)("li",{parentName:"ol"},"Configurations at the theme level for the ancestor themes."),(0,l.mdx)("li",{parentName:"ol"},"Configurations at the theme level for the current theme.")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"baseUrl")," parameter for RequireJS is specified in the following files:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"For the ",(0,l.mdx)("inlineCode",{parentName:"li"},"frontend")," area: ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Theme/view/frontend/templates/page/js/require_js.phtml"},"app/code/Magento/Theme/view/frontend/templates/page/js/require_js.phtml")),(0,l.mdx)("li",{parentName:"ul"},"For the ",(0,l.mdx)("inlineCode",{parentName:"li"},"adminhtml")," area: ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Backend/view/adminhtml/templates/page/js/require_js.phtml"},"app/code/Magento/Backend/view/adminhtml/templates/page/js/require_js.phtml"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-javascript-resources-md-d68338fd097ef8cc6873.js.map