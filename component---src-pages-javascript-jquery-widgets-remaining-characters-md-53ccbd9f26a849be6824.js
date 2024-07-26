"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[2393],{21035:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return c},default:function(){return l}});var a=n(58168),r=n(80045),i=(n(88763),n(15680)),d=n(83407);const m=["components"],c={},o={_frontmatter:c},p=d.A;function l(e){let{components:t}=e,n=(0,r.A)(e,m);return(0,i.mdx)(p,(0,a.A)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"remainingcharacters-widget"},"RemainingCharacters widget"),(0,i.mdx)("p",null,"The RemainingCharacters widget allows you to display the remaining characters count for a text field."),(0,i.mdx)("p",null,"The RemainingCharacters widget can be used only in the frontend area."),(0,i.mdx)("p",null,"The RemainingCharacters widget source is ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/view/frontend/web/js/product/remaining-characters.js"},(0,i.mdx)("inlineCode",{parentName:"a"},"<Magento_Catalog_module_dir>/view/frontend/web/js/product/remaining-characters.js")),"."),(0,i.mdx)("h2",{id:"initialize"},"Initialize"),(0,i.mdx)("p",null,"For information about how to initialize a widget in a JS component or ",(0,i.mdx)("inlineCode",{parentName:"p"},".phtml")," template, see the ",(0,i.mdx)("a",{parentName:"p",href:"../init.md"},"Initialize JavaScript")," topic."),(0,i.mdx)("p",null,"The RemainingCharacters widget is instantiated with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"$(\"#remaining-characters\").remainingCharacters({\n    maxLength: 5,\n    noteSelector: '.note',\n    counterSelector: '.note .character-counter'\n});``\n")),(0,i.mdx)("p",null,"Where:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"#remaining-characters")," is the selector of the element which will display RemainingCharacters.")),(0,i.mdx)("p",null,"The following example shows a PHTML file using the script:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},"<script>\n    require([\n        'jquery',\n        'Magento_Catalog/js/product/remaining-characters'\n    ], function ($) {\n        'use strict';\n\n        $(\"#remaining-characters\").remainingCharacters({\n            maxLength: 5,\n            noteSelector: '.note',\n            counterSelector: '.note .character-counter'\n        });\n    });\n<\/script>\n")),(0,i.mdx)("h2",{id:"options"},"Options"),(0,i.mdx)("h3",{id:"counterselector"},(0,i.mdx)("inlineCode",{parentName:"h3"},"counterSelector")),(0,i.mdx)("p",null,"The selector of counter element."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"undefined")),(0,i.mdx)("h3",{id:"errorclass"},(0,i.mdx)("inlineCode",{parentName:"h3"},"errorClass")),(0,i.mdx)("p",null,"The error class that appends to the ",(0,i.mdx)("a",{parentName:"p",href:"#noteselector"},"note element")," if the ",(0,i.mdx)("a",{parentName:"p",href:"#maxlength"},"maxLength")," is exceeded."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"'mage-error'")),(0,i.mdx)("h3",{id:"maxlength"},(0,i.mdx)("inlineCode",{parentName:"h3"},"maxLength")),(0,i.mdx)("p",null,"The maximum length of the text for the field."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": Integer"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"undefined")),(0,i.mdx)("h3",{id:"nodisplayclass"},(0,i.mdx)("inlineCode",{parentName:"h3"},"noDisplayClass")),(0,i.mdx)("p",null,"The class that appends to the ",(0,i.mdx)("a",{parentName:"p",href:"#counterselector"},"counter element")," if the field value is empty."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"'no-display'")),(0,i.mdx)("h3",{id:"noteselector"},(0,i.mdx)("inlineCode",{parentName:"h3"},"noteSelector")),(0,i.mdx)("p",null,"The selector of note element. The note element contains the ",(0,i.mdx)("a",{parentName:"p",href:"#counterselector"},"counter element")," and the ",(0,i.mdx)("a",{parentName:"p",href:"#errorclass"},"error class")," is added to the note element when the ",(0,i.mdx)("a",{parentName:"p",href:"#maxlength"},"maxLength")," is exceeded."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"undefined")),(0,i.mdx)("h3",{id:"remainingtext"},(0,i.mdx)("inlineCode",{parentName:"h3"},"remainingText")),(0,i.mdx)("p",null,"The text that shows in the ",(0,i.mdx)("a",{parentName:"p",href:"#counterselector"},"counter element")," if the ",(0,i.mdx)("a",{parentName:"p",href:"#maxlength"},"maxLength")," is not exceeded."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"$t('remaining')")),(0,i.mdx)("h3",{id:"toomanytext"},(0,i.mdx)("inlineCode",{parentName:"h3"},"tooManyText")),(0,i.mdx)("p",null,"The text that shows in the ",(0,i.mdx)("a",{parentName:"p",href:"#counterselector"},"counter element")," if the ",(0,i.mdx)("a",{parentName:"p",href:"#maxlength"},"maxLength")," is exceeded."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"$t('too many')")),(0,i.mdx)("h2",{id:"code-sample"},"Code sample"),(0,i.mdx)("p",null,"This example shows the text field with the note that shows you a message about the remaining characters."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},'<input id="remaining-characters" type="text"/>\n<p class="note">\n    <span class="character-counter"></span>\n</p>\n<script>\n    require([\n        "jquery",\n        "Magento_Catalog/js/product/remaining-characters"\n    ], function ($) {\n        \'use strict\';\n\n        $(\'#remaining-characters\').remainingCharacters({\n            maxLength: 5,\n            noteSelector: \'.note\',\n            counterSelector: \'.note .character-counter\'\n        });\n    });\n<\/script>\n')),(0,i.mdx)("h3",{id:"result"},"Result"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"16.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/afbeff69db6842d6b5e51498cd994a7e/5530d/remaining-characters-widget-with-not-exceeded-text-length.webp 320w","/commerce-frontend-core/static/afbeff69db6842d6b5e51498cd994a7e/0c8fb/remaining-characters-widget-with-not-exceeded-text-length.webp 640w","/commerce-frontend-core/static/afbeff69db6842d6b5e51498cd994a7e/94b1e/remaining-characters-widget-with-not-exceeded-text-length.webp 1280w","/commerce-frontend-core/static/afbeff69db6842d6b5e51498cd994a7e/b78e0/remaining-characters-widget-with-not-exceeded-text-length.webp 1312w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/afbeff69db6842d6b5e51498cd994a7e/dd4a7/remaining-characters-widget-with-not-exceeded-text-length.png 320w","/commerce-frontend-core/static/afbeff69db6842d6b5e51498cd994a7e/0f09e/remaining-characters-widget-with-not-exceeded-text-length.png 640w","/commerce-frontend-core/static/afbeff69db6842d6b5e51498cd994a7e/bbbf7/remaining-characters-widget-with-not-exceeded-text-length.png 1280w","/commerce-frontend-core/static/afbeff69db6842d6b5e51498cd994a7e/e4ca2/remaining-characters-widget-with-not-exceeded-text-length.png 1312w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/afbeff69db6842d6b5e51498cd994a7e/bbbf7/remaining-characters-widget-with-not-exceeded-text-length.png",alt:"RemainingCharacters widget example with not exceeded text length",title:"RemainingCharacters widget example with not exceeded text length",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n",(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/3b45e088e6aaf1d4efd733bbbe42ba8b/5530d/remaining-characters-widget-with-exceeded-text-length.webp 320w","/commerce-frontend-core/static/3b45e088e6aaf1d4efd733bbbe42ba8b/0c8fb/remaining-characters-widget-with-exceeded-text-length.webp 640w","/commerce-frontend-core/static/3b45e088e6aaf1d4efd733bbbe42ba8b/94b1e/remaining-characters-widget-with-exceeded-text-length.webp 1280w","/commerce-frontend-core/static/3b45e088e6aaf1d4efd733bbbe42ba8b/b78e0/remaining-characters-widget-with-exceeded-text-length.webp 1312w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/3b45e088e6aaf1d4efd733bbbe42ba8b/dd4a7/remaining-characters-widget-with-exceeded-text-length.png 320w","/commerce-frontend-core/static/3b45e088e6aaf1d4efd733bbbe42ba8b/0f09e/remaining-characters-widget-with-exceeded-text-length.png 640w","/commerce-frontend-core/static/3b45e088e6aaf1d4efd733bbbe42ba8b/bbbf7/remaining-characters-widget-with-exceeded-text-length.png 1280w","/commerce-frontend-core/static/3b45e088e6aaf1d4efd733bbbe42ba8b/e4ca2/remaining-characters-widget-with-exceeded-text-length.png 1312w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/3b45e088e6aaf1d4efd733bbbe42ba8b/bbbf7/remaining-characters-widget-with-exceeded-text-length.png",alt:"RemainingCharacters widget example with exceeded text length",title:"RemainingCharacters widget example with exceeded text length",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-javascript-jquery-widgets-remaining-characters-md-53ccbd9f26a849be6824.js.map