"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[8757],{67995:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return c}});var a=t(58168),i=t(80045),d=(t(88763),t(15680)),m=t(83407);const l=["components"],o={},p=(r="InlineAlert",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)});var r;const s={_frontmatter:o},u=m.A;function c(e){let{components:n}=e,t=(0,i.A)(e,l);return(0,d.mdx)(u,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"menu-widget"},"Menu widget"),(0,d.mdx)("p",null,"The menu widget is a customized ",(0,d.mdx)("a",{parentName:"p",href:"http://api.jqueryui.com/menu/"},"jQuery UI Menu widget"),". Menu extends the default functionality with the following:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"expanding all layers of the menu tree past the second layer"),(0,d.mdx)("li",{parentName:"ul"},"declaring a responsive menu"),(0,d.mdx)("li",{parentName:"ul"},"setting hover delay")),(0,d.mdx)("p",null,"The menu widget source is ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/web/mage/menu.js"},"lib/web/mage/menu.js"),"."),(0,d.mdx)("h2",{id:"initialize"},"Initialize"),(0,d.mdx)("p",null,"For information about how to initialize a widget in a JS component or ",(0,d.mdx)("inlineCode",{parentName:"p"},".phtml")," template, see the ",(0,d.mdx)("a",{parentName:"p",href:"../init.md"},"Initialize JavaScript")," topic."),(0,d.mdx)("h2",{id:"options"},"Options"),(0,d.mdx)("p",null,"Menu widget options mostly coincide with the options of the jQuery UI Menu widget, with addition of some custom options."),(0,d.mdx)("h3",{id:"delay"},(0,d.mdx)("inlineCode",{parentName:"h3"},"delay")),(0,d.mdx)("p",null,"Set the delay length of opening submenu."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": Number"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"300")),(0,d.mdx)("h3",{id:"showdelay"},(0,d.mdx)("inlineCode",{parentName:"h3"},"showDelay")),(0,d.mdx)("p",null,"Set the delay length of showing menu. Used in ",(0,d.mdx)("inlineCode",{parentName:"p"},"toggle")," method of the widget."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": Number"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"42")),(0,d.mdx)("h3",{id:"hidedelay"},(0,d.mdx)("inlineCode",{parentName:"h3"},"hideDelay")),(0,d.mdx)("p",null,"Set the delay length of closing menu. Used in ",(0,d.mdx)("inlineCode",{parentName:"p"},"toggle")," method of the widget."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": Number"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"300")),(0,d.mdx)("h3",{id:"responsive"},(0,d.mdx)("inlineCode",{parentName:"h3"},"responsive")),(0,d.mdx)("p",null,"Setting the default responsive handler for the navigation widget."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": Boolean."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"false")),(0,d.mdx)("h3",{id:"mediabreakpoint"},(0,d.mdx)("inlineCode",{parentName:"h3"},"mediaBreakpoint")),(0,d.mdx)("p",null,"Sets the width of user’s window in pixels for which the menu switches between mobile view and desktop view."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"(max-width: 768px)")),(0,d.mdx)("h3",{id:"expanded"},(0,d.mdx)("inlineCode",{parentName:"h3"},"expanded")),(0,d.mdx)("p",null,"Display top level navigational items in mobile menu or all items."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": Boolean."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"false")),(0,d.mdx)("h2",{id:"methods-and-events"},"Methods and Events"),(0,d.mdx)("p",null,"The menu widget has all default ",(0,d.mdx)("a",{parentName:"p",href:"http://api.jqueryui.com/menu/"},"jQuery UI menu widget")," methods and events,\nplus a couple more."),(0,d.mdx)("h3",{id:"additional-available-methods"},"Additional available methods"),(0,d.mdx)("h3",{id:"toggle"},(0,d.mdx)("inlineCode",{parentName:"h3"},"toggle()")),(0,d.mdx)("p",null,"Toggles website's menu opened state."),(0,d.mdx)("h3",{id:"isexpanded"},(0,d.mdx)("inlineCode",{parentName:"h3"},"isExpanded()")),(0,d.mdx)("p",null,"Add class for expanded option."),(0,d.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"The following methods from ",(0,d.mdx)("a",{parentName:"p",href:"http://api.jqueryui.com/menu/"},"jQuery UI menu widget")," were adjusted in scope of the widget: ",(0,d.mdx)("inlineCode",{parentName:"p"},"expand(event)")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"select(event)"),"."),(0,d.mdx)("h2",{id:"code-sample"},"Code Sample"),(0,d.mdx)("p",null,"The following example shows how to initialize the widget and pass options during\nthe initialization (",(0,d.mdx)("a",{parentName:"p",href:"../init.md#use-the-data-mage-init-attribute"},"declarative notation")," using the ",(0,d.mdx)("inlineCode",{parentName:"p"},"data-mage-init")," attribute)."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-html"},'<nav class="navigation" data-action="navigation">\n    <ul id="menu" data-mage-init=\'{"menu":{"responsive":true, "expanded":true, "delay": 200, "position":{"my":"left top","at":"left+10 top+30"}}}\'>\n        <li class="level0 level-top ui-menu-item">Toys</li>\n        <li class="level0 level-top parent ui-menu-item">Electronics\n            <ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all">\n                <li class="ui-menu-item"><a href="#">Home Entertainment</a></li>\n                <li class="ui-menu-item"><a href="#">Routers</a></li>\n            </ul>\n        </li>\n        <li class="level0 level-top ui-menu-item">Music\n            <ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all">\n                <li class="ui-menu-item">\n                    <a href="#">Alternative</a>\n                </li>\n                <li class="ui-menu-item">\n                    <a href="#">Classic</a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</nav>\n')),(0,d.mdx)("h3",{id:"result"},"Result"),(0,d.mdx)("p",null,"The result is a menu with the child items, as shown here:"),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"948px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/dc345fbdb06210f01a811e4eafbf104c/5530d/menu-widget-result.webp 320w","/commerce-frontend-core/static/dc345fbdb06210f01a811e4eafbf104c/0c8fb/menu-widget-result.webp 640w","/commerce-frontend-core/static/dc345fbdb06210f01a811e4eafbf104c/1dd27/menu-widget-result.webp 948w"],sizes:"(max-width: 948px) 100vw, 948px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/dc345fbdb06210f01a811e4eafbf104c/dd4a7/menu-widget-result.png 320w","/commerce-frontend-core/static/dc345fbdb06210f01a811e4eafbf104c/0f09e/menu-widget-result.png 640w","/commerce-frontend-core/static/dc345fbdb06210f01a811e4eafbf104c/6648e/menu-widget-result.png 948w"],sizes:"(max-width: 948px) 100vw, 948px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/dc345fbdb06210f01a811e4eafbf104c/6648e/menu-widget-result.png",alt:"Menu Widget",title:"Menu Widget",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-javascript-jquery-widgets-menu-md-d5dfddc50b02a8ff3ce0.js.map