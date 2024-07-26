"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[3540],{10904:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return m}});var a=n(58168),s=n(80045),r=(n(88763),n(15680)),i=n(83407);const o=["components"],l={},d={_frontmatter:l},p=i.A;function m(e){let{components:t}=e,n=(0,s.A)(e,o);return(0,r.mdx)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"how-page-builder-styles-content"},"How Page Builder styles content"),(0,r.mdx)("p",null,"Page Builder applies CSS styles to both native and custom content types by generating attribute-based CSS rulesets that are unique to each content type on a page. Page Builder generates and applies styles to content types in four stages:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"#content-type-attributes"},"Add content-type attributes"),". Page Builder adds a ",(0,r.mdx)("inlineCode",{parentName:"p"},"data-pb-style")," attribute and a dynamically generated value to the content type so that it can be uniquely targeted by a CSS selector.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"#dynamic-css-selectors"},"Generate dynamic CSS selectors"),". Page Builder generates a CSS selector for the content type by combining the page's ",(0,r.mdx)("inlineCode",{parentName:"p"},"html-body")," ID and the ",(0,r.mdx)("inlineCode",{parentName:"p"},"data-pb-style")," attribute with the content type's unique value.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"#css-rulesets"},"Create CSS rulesets"),". Page Builder creates the CSS ruleset (property: values) for the selector by pulling values from the content type's form editor.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"#internal-stylesheets"},"Create internal stylesheets"),". Page Builder creates an internal stylesheet for each page by adding a ",(0,r.mdx)("inlineCode",{parentName:"p"},"<style>")," block before the content types on the page."))),(0,r.mdx)("p",null,"This topic details each stage in the process."),(0,r.mdx)("h2",{id:"content-type-attributes"},"Content-type attributes"),(0,r.mdx)("p",null,"For every content type (both native and custom), Page Builder adds an attribute called ",(0,r.mdx)("inlineCode",{parentName:"p"},"data-pb-style")," with a unique and dynamically generated value. The following example shows a Heading content type with the style attribute:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-html"},'<h2 data-content-type="heading"\n    data-appearance="default"\n    data-element="main"\n    data-pb-style="XDFNGK9">\n    My Heading\n</h2>\n')),(0,r.mdx)("h2",{id:"dynamic-css-selectors"},"Dynamic CSS selectors"),(0,r.mdx)("p",null,"Page Builder generates its CSS selectors using one ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," selector and one ",(0,r.mdx)("inlineCode",{parentName:"p"},"attribute")," selector. This pattern is always the same, which gives all Page Builder CSS selectors a specificity of ",(0,r.mdx)("strong",{parentName:"p"},"110"),". The anatomy of a Page Builder CSS selector is shown here:"),(0,r.mdx)("p",null,(0,r.mdx)("img",{parentName:"p",src:"/commerce-frontend-core/assets/066e7a78c568e541bf48e73846a6314d/pagebuilder-style-selector.svg",alt:"Page Builder style selector"})),(0,r.mdx)("p",null,"As noted, the CSS specificity of 110 is relatively low, which makes it possible to override these styles with your own custom CSS. For more information on CSS specificity and how it works, see ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"},"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"),"."),(0,r.mdx)("h2",{id:"css-rulesets"},"CSS rulesets"),(0,r.mdx)("p",null,"To create the CSS rulesets for the selectors, Page Builder pulls the properties and values from the content type's form editor. The following example lists the CSS rules created from a Row content type (with minor changes made to the margins and paddings in the editor):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-css"},"#html-body [data-pb-style=WMWMCFQ] {\n    justify-content: flex-start;\n    display: flex;\n    flex-direction: column;\n    background-position: left top;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: scroll;\n    border-style: none;\n    border-width: 1px;\n    border-radius: 0;\n    margin: 0 0 10px;\n    padding: 10px;\n}\n")),(0,r.mdx)("p",null,"As end users change and save settings within a content type's editor, Page Builder updates the CSS ruleset to reflect those changes (and creates a new unique value for ",(0,r.mdx)("inlineCode",{parentName:"p"},"data-pb-style"),")."),(0,r.mdx)("p",null,(0,r.mdx)("img",{parentName:"p",src:"/commerce-frontend-core/assets/be24903f12a7aa232d1b1b4cd70fd963/how-pagebuilder-styles-content.svg",alt:"Page Builder content styling"})),(0,r.mdx)("h2",{id:"internal-stylesheets"},"Internal stylesheets"),(0,r.mdx)("p",null,"If you inspect a page on your storefront built with Page Builder, you can see how Page Builder applies styles to its content types. For example, the following HTML is from a simple page with three content types: a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Row"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"Heading"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"Text"),". The highlighted parts show how Page Builder defines and applies the styles to content types on a page."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"951px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/019e3a1eec065fbfc127b45b91228129/5530d/pagebuilder-inspect-styling.webp 320w","/commerce-frontend-core/static/019e3a1eec065fbfc127b45b91228129/0c8fb/pagebuilder-inspect-styling.webp 640w","/commerce-frontend-core/static/019e3a1eec065fbfc127b45b91228129/2bbcb/pagebuilder-inspect-styling.webp 951w"],sizes:"(max-width: 951px) 100vw, 951px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/019e3a1eec065fbfc127b45b91228129/dd4a7/pagebuilder-inspect-styling.png 320w","/commerce-frontend-core/static/019e3a1eec065fbfc127b45b91228129/0f09e/pagebuilder-inspect-styling.png 640w","/commerce-frontend-core/static/019e3a1eec065fbfc127b45b91228129/79e31/pagebuilder-inspect-styling.png 951w"],sizes:"(max-width: 951px) 100vw, 951px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/019e3a1eec065fbfc127b45b91228129/79e31/pagebuilder-inspect-styling.png",alt:"Page Builder style selector",title:"Page Builder style selector",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},"Html-body ID"),". The first thing to notice is the CSS ",(0,r.mdx)("inlineCode",{parentName:"p"},"id=html-body")," assigned to Adobe Commerce storefront pages. Page Builder uses this ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," to construct all the CSS selectors it applies to its content types.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},"Internal style block"),". Page Builder adds all the unique ",(0,r.mdx)("inlineCode",{parentName:"p"},"data-pb-style")," attribute styles for the page's content types to a single ",(0,r.mdx)("inlineCode",{parentName:"p"},"<style>")," block. This creates what's called an internal stylesheet for the page. In this example, the page contains three content types that required three CSS rulesets for the page's ",(0,r.mdx)("inlineCode",{parentName:"p"},"<style>")," block."),(0,r.mdx)("p",{parentName:"li"},"Note that not every content type on the page needs its own unique ruleset. In many cases, CSS rulesets can be shared among the content types on the page. Page Builder determines the most efficient application of CSS to the content types on the page, then creates the rulesets necessary for accurate styling.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},"Applied styles"),". The dynamic ",(0,r.mdx)("inlineCode",{parentName:"p"},"data-pb-style")," attributes on the content types match their respective CSS styles in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<style>")," block, and the browser does the rest. For both custom and native content types, Page Builder applies the ",(0,r.mdx)("inlineCode",{parentName:"p"},"data-pb-style")," attribute to content type elements that contain ",(0,r.mdx)("inlineCode",{parentName:"p"},"style")," nodes."),(0,r.mdx)("p",{parentName:"li"},"For example, notice how Page Builder adds the ",(0,r.mdx)("inlineCode",{parentName:"p"},"data-pb-style")," attribute to the Row's ",(0,r.mdx)("inlineCode",{parentName:"p"},"inner")," element, and not the ",(0,r.mdx)("inlineCode",{parentName:"p"},"main")," element, as was done for the Heading and Text content types. The reason becomes clear when you look at the Row's element structure within its config file (",(0,r.mdx)("inlineCode",{parentName:"p"},"row.xml"),"):"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<elements>\n    <element name="main">\n        <style name="display" source="display" converter="Magento_PageBuilder/js/converter/style/display" preview_converter="Magento_PageBuilder/js/converter/style/preview/display"/>\n        <attribute name="name" source="data-content-type"/>\n        <attribute name="appearance" source="data-appearance"/>\n    </element>\n    <element name="inner">\n        <style name="background_color" source="background_color"/>\n        <style name="background_image" source="background_image" converter="Magento_PageBuilder/js/converter/style/background-image" preview_converter="Magento_PageBuilder/js/converter/style/preview/background-image" persistence_mode="write"/>\n        <style name="background_position" source="background_position"/>\n        <style name="background_size" source="background_size"/>\n        <style name="background_repeat" source="background_repeat"/>\n        <style name="background_attachment" source="background_attachment"/>\n        <style name="text_align" source="text_align"/>\n        ...\n')),(0,r.mdx)("p",{parentName:"li"},"As shown, the Row's ",(0,r.mdx)("inlineCode",{parentName:"p"},"inner")," element contains all the ",(0,r.mdx)("inlineCode",{parentName:"p"},"style")," nodes applied to the Row, not the ",(0,r.mdx)("inlineCode",{parentName:"p"},"main")," element. So Page Builder applies the ",(0,r.mdx)("inlineCode",{parentName:"p"},"data-pb-style")," attribute to the Row's ",(0,r.mdx)("inlineCode",{parentName:"p"},"inner")," element to ensure the proper application of CSS styles. For the Heading and Text content types, all the ",(0,r.mdx)("inlineCode",{parentName:"p"},"style")," nodes are in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"main")," element, so Page Builder applies the ",(0,r.mdx)("inlineCode",{parentName:"p"},"data-pb-style")," attribute to those elements in the DOM."))),(0,r.mdx)("h2",{id:"summary"},"Summary"),(0,r.mdx)("p",null,"Page Builder applies styles to native and custom content types by creating dynamic, attribute-based styles, using a CSS selector pattern that results in a specificity of 110 for each content type style. Page Builder adds these styles to a single internal stylesheet for each page and can be easily overridden with custom CSS classes."),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"override-pagebuilder-styles.md"},"Override Page Builder styles")," to start customizing Page Builder's styles to meet your needs."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-page-builder-styles-index-md-cab7c21dabee42ccb1e1.js.map