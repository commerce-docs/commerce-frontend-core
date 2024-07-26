"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[5086],{616:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return p}});var o=n(58168),a=n(80045),i=(n(88763),n(15680)),r=n(83407);const c=["components"],d={},m={_frontmatter:d},s=r.A;function p(e){let{components:t}=e,n=(0,a.A)(e,c);return(0,i.mdx)(s,(0,o.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"apply-product-conditions"},"Apply product conditions"),(0,i.mdx)("p",null,"Out-of-the-box, product conditions can be set on Page Builder's Product content type to define which products you want to display based on a variety of product attributes. For example, if you only want display products in a category with a price greater than $50, you would set up a condition for the product as shown here:"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"846px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/03f33ec8289c4d50c76730bc071898ca/5530d/product-conditions.webp 320w","/commerce-frontend-core/static/03f33ec8289c4d50c76730bc071898ca/0c8fb/product-conditions.webp 640w","/commerce-frontend-core/static/03f33ec8289c4d50c76730bc071898ca/4bab4/product-conditions.webp 846w"],sizes:"(max-width: 846px) 100vw, 846px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/03f33ec8289c4d50c76730bc071898ca/dd4a7/product-conditions.png 320w","/commerce-frontend-core/static/03f33ec8289c4d50c76730bc071898ca/0f09e/product-conditions.png 640w","/commerce-frontend-core/static/03f33ec8289c4d50c76730bc071898ca/4ec94/product-conditions.png 846w"],sizes:"(max-width: 846px) 100vw, 846px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/03f33ec8289c4d50c76730bc071898ca/4ec94/product-conditions.png",alt:"product conditions",title:"Product conditions example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("p",null,"This topic describes how you can apply the conditions mechanism to your own custom content types."),(0,i.mdx)("h2",{id:"add-an-attribute-to-the-content-type"},"Add an attribute to the content type"),(0,i.mdx)("p",null,"To add an attribute within your custom content type:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<attribute source="data-myconditions" name="myconditions"/>\n')),(0,i.mdx)("h2",{id:"add-the-conditions"},"Add the conditions"),(0,i.mdx)("p",null,"To add the conditions ",(0,i.mdx)("inlineCode",{parentName:"p"},"form")," element to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"form")," UI component:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<htmlContent name="myconditions" template="Magento_PageBuilder/form/element/widget-conditions">\n    <settings>\n        <additionalClasses>\n            <class name="admin__field">true</class>\n        </additionalClasses>\n    </settings>\n    <block name="myconditions" class="Magento\\PageBuilder\\Block\\Adminhtml\\Form\\Element\\Conditions">\n        <arguments>\n            <argument name="formNamespace" xsi:type="string">my_form_namespace</argument>\n            <argument name="attribute" xsi:type="string">myconditions</argument>\n            <argument name="label" xsi:type="string" translate="true">My Conditions</argument>\n        </arguments>\n    </block>\n</htmlContent>\n')),(0,i.mdx)("h2",{id:"create-a-custom-form-data-provider"},"Create a custom ",(0,i.mdx)("inlineCode",{parentName:"h2"},"form")," data provider"),(0,i.mdx)("p",null,"To create a custom ",(0,i.mdx)("inlineCode",{parentName:"p"},"form")," data provider for the edit form:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<dataSource name="mycomponent_form_data_source">\n    <argument name="data" xsi:type="array">\n        <item name="js_config" xsi:type="array">\n            <item name="component" xsi:type="string">Magento_PageBuilder/js/content-type/mycomponent/form/provider</item>\n        </item>\n    </argument>\n</dataSource>\n')),(0,i.mdx)("p",null,"The preceding code is an example of how to add a custom ",(0,i.mdx)("inlineCode",{parentName:"p"},"form")," data provider. Replace these values with the values specific to your custom content type and component."),(0,i.mdx)("h2",{id:"include-the-conditionsdataprocessor-and-attribute"},"Include the ",(0,i.mdx)("inlineCode",{parentName:"h2"},"conditionsDataProcessor")," and attribute"),(0,i.mdx)("p",null,"To include the ",(0,i.mdx)("inlineCode",{parentName:"p"},"conditionsDataProcessor")," and accompanying attribute in the data provider file, ",(0,i.mdx)("inlineCode",{parentName:"p"},"view/adminhtml/web/js/content-type/mycomponent/form/provider.js"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"define([\n    'Magento_PageBuilder/js/form/provider',\n    'Magento_PageBuilder/js/form/provider/conditions-data-processor'\n], function (Provider, conditionsDataProcessor) {\n    'use strict';\n\n    return Provider.extend({\n        save: function () {\n            var data = this.get('data');\n\n            conditionsDataProcessor(data, 'myconditions');\n\n            return this._super();\n        }\n    });\n});\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-page-builder-content-types-customize-apply-product-conditions-md-0cb5dbfb9292658e8978.js.map