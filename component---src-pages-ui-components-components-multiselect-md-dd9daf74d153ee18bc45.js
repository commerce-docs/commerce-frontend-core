"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[3949],{20399:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return s}});var a=n(58168),m=n(80045),l=(n(88763),n(15680)),i=n(83407);const r=["components"],p={},d={_frontmatter:p},o=i.A;function s(e){let{components:t}=e,n=(0,m.A)(e,r);return(0,l.mdx)(o,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"multiselect-component"},"Multiselect component"),(0,l.mdx)("p",null,"The Multiselect component provides the interface for a list or a data set. Multiselect allows selecting multiple items."),(0,l.mdx)("h2",{id:"options"},"Options"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Option"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Default"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"component")),(0,l.mdx)("td",{parentName:"tr",align:null},"The path to the component’s ",(0,l.mdx)("inlineCode",{parentName:"td"},".js")," file in terms of RequireJS."),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"'Magento_Ui/js/form/element/multiselect'"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"elementTmpl")),(0,l.mdx)("td",{parentName:"tr",align:null},"The path to the ",(0,l.mdx)("code",null,".html")," template of the particular field type (multiselect)."),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"'ui/form/element/multiselect'"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"size")),(0,l.mdx)("td",{parentName:"tr",align:null},"The number of options that are displayed in the multiselect UI."),(0,l.mdx)("td",{parentName:"tr",align:null},"Number"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"6"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"template")),(0,l.mdx)("td",{parentName:"tr",align:null},"The path to the general field ",(0,l.mdx)("inlineCode",{parentName:"td"},".html")," template."),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"'ui/form/field'"))))),(0,l.mdx)("h2",{id:"source-files"},"Source files"),(0,l.mdx)("p",null,"Extends ",(0,l.mdx)("a",{parentName:"p",href:"select.md"},(0,l.mdx)("inlineCode",{parentName:"a"},"Select"))),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/form/element/multiselect.js"},"app/code/Magento/Ui/view/base/web/js/form/element/multiselect.js")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/form/element/multiselect.html"},"app/code/Magento/Ui/view/base/web/templates/form/element/multiselect.html"))),(0,l.mdx)("h2",{id:"example"},"Example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<form>\n    ...\n    <fieldset>\n        ...\n        <field name="multiselect_example" formElement="multiselect">\n            <settings>\n                <dataType>text</dataType>\n                <label translate="true">Multiselect Example</label>\n                <dataScope>multiselect_example</dataScope>\n            </settings>\n            <formElements>\n                <multiselect>\n                    <settings>\n                        <options>\n                            <option name="1" xsi:type="array">\n                                <item name="value" xsi:type="string">1</item>\n                                <item name="label" xsi:type="string">Option #1</item>\n                            </option>\n                            <option name="2" xsi:type="array">\n                                <item name="value" xsi:type="string">2</item>\n                                <item name="label" xsi:type="string">Option #2</item>\n                            </option>\n                            <option name="3" xsi:type="array">\n                                <item name="value" xsi:type="string">3</item>\n                                <item name="label" xsi:type="string">Option #3</item>\n                            </option>\n                        </options>\n                    </settings>\n                </multiselect>\n            </formElements>\n        </field>\n        ...\n    </fieldset>\n    ...\n</form>\n')),(0,l.mdx)("h2",{id:"result"},"Result"),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"341px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.00000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/5b1831b8a2b4ed944d5a3140403f5f92/5530d/ui-multiselect-result.webp 320w","/commerce-frontend-core/static/5b1831b8a2b4ed944d5a3140403f5f92/ad80c/ui-multiselect-result.webp 341w"],sizes:"(max-width: 341px) 100vw, 341px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/5b1831b8a2b4ed944d5a3140403f5f92/dd4a7/ui-multiselect-result.png 320w","/commerce-frontend-core/static/5b1831b8a2b4ed944d5a3140403f5f92/9195f/ui-multiselect-result.png 341w"],sizes:"(max-width: 341px) 100vw, 341px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/5b1831b8a2b4ed944d5a3140403f5f92/9195f/ui-multiselect-result.png",alt:"Multiselect Component Example",title:"Multiselect Component Example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-multiselect-md-dd9daf74d153ee18bc45.js.map