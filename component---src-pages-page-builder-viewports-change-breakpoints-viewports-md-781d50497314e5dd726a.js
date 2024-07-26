"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[34],{26750:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return h}});var i=a(58168),t=a(80045),m=(a(88763),a(15680)),r=a(83407);const d=["components"],o={},l=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)});var p;const s={_frontmatter:o},x=r.A;function h(e){let{components:n}=e,a=(0,t.A)(e,d);return(0,m.mdx)(x,(0,i.A)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"change-breakpoints-and-viewports"},"Change breakpoints and viewports"),(0,m.mdx)("p",null,"Changing breakpoints and viewports is about changing Page Builder's default ",(0,m.mdx)("inlineCode",{parentName:"p"},"min-width")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"max-width")," values to match your responsive design needs."),(0,m.mdx)("p",null,"The following list shows Page Builder's default ",(0,m.mdx)("inlineCode",{parentName:"p"},"min-width")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"max-width")," values for breakpoints and viewports:"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"desktop")),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},'<var name="min-width">1024px</var>'))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"tablet")),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},'<var name="max-width">1024px</var>'))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},'<var name="min-width">768px</var>')))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"mobile")),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},'<var name="max-width">768px</var>'))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},'<var name="min-width">640px</var>'))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},(0,m.mdx)("inlineCode",{parentName:"p"},'<var name="media">only screen and (max-width: 768px)</var>')))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"mobile-small")),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},'<var name="max-width">640px</var>'))),(0,m.mdx)("p",null,"By default, Page Builder defines only one viewport ",(0,m.mdx)("inlineCode",{parentName:"p"},"media")," query for the ",(0,m.mdx)("inlineCode",{parentName:"p"},"mobile")," breakpoint. But you may find that your instance of Page Builder has a viewport ",(0,m.mdx)("inlineCode",{parentName:"p"},"media")," query defined for each breakpoint."),(0,m.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"Like the ",(0,m.mdx)("inlineCode",{parentName:"p"},"mobile")," breakpoint, the ",(0,m.mdx)("inlineCode",{parentName:"p"},"desktop")," breakpoint also defines viewport configurations, but it does not define a ",(0,m.mdx)("inlineCode",{parentName:"p"},"media")," query. The ",(0,m.mdx)("inlineCode",{parentName:"p"},"desktop")," breakpoint serves as the default viewport (or fallback) used to store form field properties that are not defined with a specific breakpoint like ",(0,m.mdx)("inlineCode",{parentName:"p"},"mobile"),"."),(0,m.mdx)("h2",{id:"steps-for-changing-breakpoints"},"Steps for changing breakpoints"),(0,m.mdx)("p",null,"You can change Page Builder's existing breakpoints using an Admin theme or module. The following steps apply to both."),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Add an overriding view.xml file")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Change the min-width and max-width")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Change the viewport media queries (as needed)")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Change your frontend media queries (as needed)")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Change the viewport stage CSS (as needed)"))),(0,m.mdx)("p",null,"You can skip steps 3-5 if you are changing or adding new breakpoints without viewport configurations. These include the ",(0,m.mdx)("inlineCode",{parentName:"p"},"tablet")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"mobile-small")," breakpoints. Otherwise, you need to complete all these steps to ensure that the breakpoint and viewport widths are the same."),(0,m.mdx)("h3",{id:"step-1-create-an-overriding-viewxml-file"},"Step 1: Create an overriding view.xml file"),(0,m.mdx)("p",null,"Start by copying Page Builder's ",(0,m.mdx)("inlineCode",{parentName:"p"},"view.xml")," file to your module or Admin theme's ",(0,m.mdx)("inlineCode",{parentName:"p"},"etc")," directory: ",(0,m.mdx)("inlineCode",{parentName:"p"},"Vendor/Module/etc/view.xml"),". Technically, in your ",(0,m.mdx)("inlineCode",{parentName:"p"},"view.xml")," file, you can remove the nodes you don't change and rely on Magento's XML merging to include Page Builder's ",(0,m.mdx)("inlineCode",{parentName:"p"},"view.xml"),". However, during development, it's helpful to keep Page Builder's nodes in place as a reminder of the configuration data Page Builder uses from the nodes you don't change."),(0,m.mdx)("h3",{id:"step-2-change-the-min-width-and-max-width"},"Step 2: Change the min-width and max-width"),(0,m.mdx)("p",null,"Page Builder uses the ",(0,m.mdx)("inlineCode",{parentName:"p"},"min-width")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"max-width")," values to generate media queries that control the breakpoint settings for JavaScript widgets (like the products widget). Here's an example that changes the ",(0,m.mdx)("inlineCode",{parentName:"p"},"mobile-small")," ",(0,m.mdx)("inlineCode",{parentName:"p"},"max-width")," to ",(0,m.mdx)("inlineCode",{parentName:"p"},"480px")," and adjusts the ",(0,m.mdx)("inlineCode",{parentName:"p"},"min-width")," on the mobile breakpoint to match:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<var name="mobile">\n    <var name="label">Mobile</var>\n    <var name="stage">true</var>\n    <var name="class">mobile-switcher</var>\n    <var name="icon">Magento_PageBuilder::css/images/switcher/switcher-mobile.svg</var>\n    <var name="media">only screen and (max-width: 768px)</var>\n    <var name="conditions">\n        <var name="max-width">768px</var>\n        <var name="min-width">480px</var>\n    </var>\n</var>\n<var name="mobile-small">\n    <var name="conditions">\n        <var name="max-width">480px</var>\n    </var>\n</var>\n')),(0,m.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Other CSS units"),". The default ",(0,m.mdx)("inlineCode",{parentName:"p"},"min-width")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"max-width")," values are in pixels (",(0,m.mdx)("inlineCode",{parentName:"p"},"px"),"). But you can use ",(0,m.mdx)("inlineCode",{parentName:"p"},"em")," units or any other CSS unit suitable to media queries."),(0,m.mdx)("h3",{id:"step-3-change-the-viewport-media-queries"},"Step 3: Change the viewport media queries"),(0,m.mdx)("p",null,"If you are changing a breakpoint that doesn't define a ",(0,m.mdx)("inlineCode",{parentName:"p"},"media")," query for a viewport, you can skip this step."),(0,m.mdx)("p",null,"Page Builder uses the ",(0,m.mdx)("inlineCode",{parentName:"p"},"media")," query node for form field properties set up to use them. So the ",(0,m.mdx)("inlineCode",{parentName:"p"},"max-width")," for these queries must match the ",(0,m.mdx)("inlineCode",{parentName:"p"},"max-width")," defined for JavaScript widgets. Otherwise, the content elements on the page will be responding to different breakpoints. The result could lead to surprising behavior on the frontend."),(0,m.mdx)("p",null,"For example, if you changed the ",(0,m.mdx)("inlineCode",{parentName:"p"},"max-width")," of the ",(0,m.mdx)("inlineCode",{parentName:"p"},"mobile")," breakpoint to ",(0,m.mdx)("inlineCode",{parentName:"p"},"640px"),", you must also change the ",(0,m.mdx)("inlineCode",{parentName:"p"},"media")," query ",(0,m.mdx)("inlineCode",{parentName:"p"},"max-width")," to match, as shown here:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<var name="mobile">\n    <var name="label">Mobile</var>\n    <var name="stage">true</var>\n    <var name="class">mobile-switcher</var>\n    <var name="icon">Magento_PageBuilder::css/images/switcher/switcher-mobile.svg</var>\n    <var name="media">only screen and (max-width: 640px)</var>\n    <var name="conditions">\n        <var name="max-width">640px</var>\n        <var name="min-width">480px</var>\n    </var>\n</var>\n<var name="mobile-small">\n    <var name="conditions">\n        <var name="max-width">480px</var>\n    </var>\n</var>\n')),(0,m.mdx)("h3",{id:"step-4-change-your-frontend-media-queries"},"Step 4: Change your frontend media queries"),(0,m.mdx)("p",null,"You must also change any corresponding breakpoints within your frontend media queries in your modules or frontend themes. In this example, we changed our frontend queries to match the new ",(0,m.mdx)("inlineCode",{parentName:"p"},"max-width")," we set for the ",(0,m.mdx)("inlineCode",{parentName:"p"},"mobile-small")," breakpoint:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-scss"},"//  Standard media queries\n//  ________________________________________________________\n\n@media only screen and (max-width: 480px){}\n\n//  Magento media queries: @screen__xs = 480px\n//  ________________________________________________________\n\n.media-width(@extremum, @break) when (@extremum = 'max') and (@break = @screen__xs){}\n")),(0,m.mdx)("h3",{id:"step-5-change-the-viewport-stage-css"},"Step 5: Change the viewport stage CSS"),(0,m.mdx)("p",null,"When changing breakpoints that have viewport configurations, you must also change the viewport styles set for the stage width. By default, the ",(0,m.mdx)("inlineCode",{parentName:"p"},"mobile")," viewport is the only viewport that defines a CSS style for the stage width."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"To change the ",(0,m.mdx)("inlineCode",{parentName:"strong"},"mobile")," viewport stage width:")),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Add a ",(0,m.mdx)("inlineCode",{parentName:"p"},".less")," file to the ",(0,m.mdx)("inlineCode",{parentName:"p"},"adminhtml/web/css/source/")," directory of your Admin theme or module.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Copy and paste in the ",(0,m.mdx)("inlineCode",{parentName:"p"},".mobile-viewport")," style from ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento/PageBuilder/view/adminhtml/web/css/source/_mobile-viewport.less"),", as shown below.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Change the ",(0,m.mdx)("inlineCode",{parentName:"p"},"width")," of the ",(0,m.mdx)("inlineCode",{parentName:"p"},".pagebuilder-canvas")," to match the ",(0,m.mdx)("inlineCode",{parentName:"p"},"max-width")," you set for the breakpoint and viewport ",(0,m.mdx)("inlineCode",{parentName:"p"},"media")," query. They should all match."))),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-css"},".mobile-viewport {\n    &.pagebuilder-stage-wrapper {\n        &.stage-content-snapshot,\n        &.stage-full-screen {\n            .pagebuilder-stage {\n                .pagebuilder-canvas {\n                    left: 50%;\n                    margin: 0;\n                    transform: translateX(-50%);\n                    width: 640px;\n                }\n            }\n        }\n    }\n}\n")),(0,m.mdx)("h2",{id:"summary"},"Summary"),(0,m.mdx)("p",null,"Changing breakpoint and viewport widths in Page Builder is pretty simple. You just need to match all your breakpoint width changes to their viewport ",(0,m.mdx)("inlineCode",{parentName:"p"},"media")," queries, frontend media queries, and the viewport stage widths."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-page-builder-viewports-change-breakpoints-viewports-md-781d50497314e5dd726a.js.map