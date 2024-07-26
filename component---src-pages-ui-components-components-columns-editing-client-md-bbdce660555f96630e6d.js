"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[8814],{33938:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return s}});var a=t(58168),i=t(80045),l=(t(88763),t(15680)),m=t(83407);const r=["components"],d={},o={_frontmatter:d},p=m.A;function s(e){let{components:n}=e,t=(0,i.A)(e,r);return(0,l.mdx)(p,(0,a.A)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"columnseditingclient-component"},"ColumnsEditingClient component"),(0,l.mdx)("p",null,"The ColumnsEditingClient UI component is an extension for the ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/grid/editing/editor.js"},"ColumnsEditor")," component. It provides functionality for saving edited data."),(0,l.mdx)("h2",{id:"options"},"Options"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Option"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"component")),(0,l.mdx)("td",{parentName:"tr",align:null},"The path to the component's ",(0,l.mdx)("inlineCode",{parentName:"td"},".js")," file, relative to RequireJS."),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"Magento_Ui/js/grid/editing/client"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"requestConfig")),(0,l.mdx)("td",{parentName:"tr",align:null},"The request configuration for AJAX."),(0,l.mdx)("td",{parentName:"tr",align:null},"Object"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"{dataType: 'json',type: 'POST'}"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"saveUrl")),(0,l.mdx)("td",{parentName:"tr",align:null},"Path to a controller that will process the data saving request."),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"-"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"validateBeforeSave")),(0,l.mdx)("td",{parentName:"tr",align:null},"Defines whether validation executes before data saving."),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"true"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"validateUrl")),(0,l.mdx)("td",{parentName:"tr",align:null},"Path to a controller that will process the data validation request."),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"-"))))),(0,l.mdx)("h2",{id:"sources-files"},"Sources files"),(0,l.mdx)("p",null,"Extends ",(0,l.mdx)("a",{parentName:"p",href:"../concepts/class.md"},(0,l.mdx)("inlineCode",{parentName:"a"},"uiClass")),":"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/grid/editing/client.js"},"app/code/Magento/Ui/view/base/web/js/grid/editing/client.js"))),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)("h3",{id:"integration"},"Integration"),(0,l.mdx)("p",null,"This is an example of how the ColumnsEditingClient component integrates with the ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/grid/editing/editor.js"},"ColumnsEditor")," component:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<listing>\n    ...\n    <columns name="columns">\n        <settings>\n            <editorConfig>\n                <param name="clientConfig" xsi:type="array">\n                    <item name="saveUrl" xsi:type="url" path="path/to/saveController"/>\n                    <item name="validateUrl" xsi:type="url" path="path/to/validateController"/>\n                    <item name="validateBeforeSave" xsi:type="boolean">true</item>\n                </param>\n                <param name="enabled" xsi:type="boolean">true</param>\n            </editorConfig>\n        </settings>\n        ...\n    </columns>\n</listing>\n')),(0,l.mdx)("h3",{id:"disable-validation"},"Disable validation"),(0,l.mdx)("p",null,"This is an example of how to disable validation before saving data:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<listing>\n    ...\n    <columns name="columns">\n        <settings>\n            <editorConfig>\n                <param name="clientConfig" xsi:type="array">\n                    <item name="saveUrl" xsi:type="url" path="path/to/saveController"/>\n                    <item name="validateBeforeSave" xsi:type="boolean">false</item>\n                </param>\n                <param name="enabled" xsi:type="boolean">true</param>\n            </editorConfig>\n        </settings>\n        ...\n    </columns>\n</listing>\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-columns-editing-client-md-bbdce660555f96630e6d.js.map