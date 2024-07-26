"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[1711],{85663:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return c},default:function(){return d}});var a=n(58168),o=n(80045),i=(n(88763),n(15680)),m=n(83407);const r=["components"],c={},l={_frontmatter:c},p=m.A;function d(e){let{components:t}=e,n=(0,o.A)(e,r);return(0,i.mdx)(p,(0,a.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"checkboxtogglenotice-component"},"CheckboxToggleNotice component"),(0,i.mdx)("p",null,"The CheckboxToggleNotice component implements the ",(0,i.mdx)("a",{parentName:"p",href:"checkbox.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"Checkbox"))," component with the ability to switch notice according to the selected option."),(0,i.mdx)("h2",{id:"options"},"Options"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Option"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Default"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"component")),(0,i.mdx)("td",{parentName:"tr",align:null},"The path to the component's JS constructor in terms of RequireJS."),(0,i.mdx)("td",{parentName:"tr",align:null},"String"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"Magento_Ui/js/form/element/single-checkbox-toggle-notice"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"notices")),(0,i.mdx)("td",{parentName:"tr",align:null},"The array of notices that should be associated by key with selected option value."),(0,i.mdx)("td",{parentName:"tr",align:null},"Array"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"[]"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"tracks"),".",(0,i.mdx)("inlineCode",{parentName:"td"},"notice")),(0,i.mdx)("td",{parentName:"tr",align:null},"Flags that enable tracking for the ",(0,i.mdx)("inlineCode",{parentName:"td"},"notice")," option. By default, the ",(0,i.mdx)("inlineCode",{parentName:"td"},"notice")," option is tracked to allow updating the notice message in the template."),(0,i.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"true"))))),(0,i.mdx)("h2",{id:"source-files"},"Source files"),(0,i.mdx)("p",null,"Extends the ",(0,i.mdx)("a",{parentName:"p",href:"checkbox.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"Checkbox"))," component:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/form/element/single-checkbox-toggle-notice.js"},"app/code/Magento/Ui/view/base/web/js/form/element/single-checkbox-toggle-notice.js"))),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)("h3",{id:"integration"},"Integration"),(0,i.mdx)("p",null,"This is an example of how to integrate the CheckboxToggleNotice component with the ",(0,i.mdx)("a",{parentName:"p",href:"form.md"},"Form")," component:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<form>\n    ...\n    <fieldset>\n        ...\n        <field name="checkbox_toggle_notice_example" component="Magento_Ui/js/form/element/single-checkbox-toggle-notice" formElement="checkbox">\n            <argument name="data" xsi:type="array">\n                <item name="config" xsi:type="array">\n                    <item name="default" xsi:type="number">0</item>\n                    <item name="notices" xsi:type="array">\n                        <item name="0" xsi:type="string" translate="true">Notice #1</item>\n                        <item name="1" xsi:type="string" translate="true">Notice #2</item>\n                    </item>\n                </item>\n            </argument>\n            <settings>\n                <dataType>boolean</dataType>\n                <label translate="true">Checkbox Toggle Notice</label>\n            </settings>\n            <formElements>\n                <checkbox>\n                    <settings>\n                        <valueMap>\n                            <map name="false" xsi:type="number">0</map>\n                            <map name="true" xsi:type="number">1</map>\n                        </valueMap>\n                        <prefer>toggle</prefer>\n                    </settings>\n                </checkbox>\n            </formElements>\n        </field>\n    </fieldset>\n</form>\n')),(0,i.mdx)("h4",{id:"result"},"Result"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"616px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"24.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/bb84c818138884f71f3f64ea0e205325/5530d/checkbox-toggle-notice-1-result.webp 320w","/commerce-frontend-core/static/bb84c818138884f71f3f64ea0e205325/cec2c/checkbox-toggle-notice-1-result.webp 616w"],sizes:"(max-width: 616px) 100vw, 616px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/bb84c818138884f71f3f64ea0e205325/dd4a7/checkbox-toggle-notice-1-result.png 320w","/commerce-frontend-core/static/bb84c818138884f71f3f64ea0e205325/274fb/checkbox-toggle-notice-1-result.png 616w"],sizes:"(max-width: 616px) 100vw, 616px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/bb84c818138884f71f3f64ea0e205325/274fb/checkbox-toggle-notice-1-result.png",alt:"CheckboxToggleNotice with Selected Option #1 Component Example",title:"CheckboxToggleNotice with Selected Option #1 Component Example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n",(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"590px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.874999999999996%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/e8655ab043592ecad8db1617d596f50c/5530d/checkbox-toggle-notice-2-result.webp 320w","/commerce-frontend-core/static/e8655ab043592ecad8db1617d596f50c/bc8a3/checkbox-toggle-notice-2-result.webp 590w"],sizes:"(max-width: 590px) 100vw, 590px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/e8655ab043592ecad8db1617d596f50c/dd4a7/checkbox-toggle-notice-2-result.png 320w","/commerce-frontend-core/static/e8655ab043592ecad8db1617d596f50c/6d370/checkbox-toggle-notice-2-result.png 590w"],sizes:"(max-width: 590px) 100vw, 590px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/e8655ab043592ecad8db1617d596f50c/6d370/checkbox-toggle-notice-2-result.png",alt:"CheckboxToggleNotice with Selected Option #2 Component Example",title:"CheckboxToggleNotice with Selected Option #2 Component Example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-checkbox-toggle-notice-md-755c8dc8b0e92a7f31b7.js.map