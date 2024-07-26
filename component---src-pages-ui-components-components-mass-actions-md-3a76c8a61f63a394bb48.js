"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[9266],{56766:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return p}});var a=n(58168),i=n(80045),m=(n(88763),n(15680)),l=n(83407);const d=["components"],r={},o={_frontmatter:r},s=l.A;function p(e){let{components:t}=e,n=(0,i.A)(e,d);return(0,m.mdx)(s,(0,a.A)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"massactions-component"},"MassActions component"),(0,m.mdx)("p",null,"The MassActions component allows performing actions with multiple selected items. Must be a child of the ",(0,m.mdx)("a",{parentName:"p",href:"listing-grid.md"},"Listing component"),"."),(0,m.mdx)("p",null,"See the ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/admin-developer/pattern-library/displaying-data/datatable/#mass-actions"},"Admin Design Pattern Library (MassActions)")," topic for information about the UI design patterns that can be implemented using the MassActions component."),(0,m.mdx)("h2",{id:"dependencies"},"Dependencies"),(0,m.mdx)("p",null,"The MassActions component has dependencies on the following components:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Collapsible: ",(0,m.mdx)("inlineCode",{parentName:"li"},"app\\code\\Magento\\Ui\\view\\base\\web\\js\\lib\\collapsible.js")),(0,m.mdx)("li",{parentName:"ul"},"Modal window with confirmation: ",(0,m.mdx)("inlineCode",{parentName:"li"},"app\\code\\Magento\\Ui\\view\\base\\web\\js\\modal\\confirm.js")),(0,m.mdx)("li",{parentName:"ul"},"Modal window with alert: ",(0,m.mdx)("inlineCode",{parentName:"li"},"app\\code\\Magento\\Ui\\view\\base\\web\\js\\modal\\alert.js"))),(0,m.mdx)("h2",{id:"options"},"Options"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Option"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Default Value"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"actions")),(0,m.mdx)("td",{parentName:"tr",align:null},"A list of available actions."),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"MassAction[]")),(0,m.mdx)("td",{parentName:"tr",align:null},"-")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"noItemsMsg")),(0,m.mdx)("td",{parentName:"tr",align:null},"Message displayed when a user attempts to perform an action without any selected items."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"'You haven't selected any items!'"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"stickyTmpl")),(0,m.mdx)("td",{parentName:"tr",align:null},"Additional component's template that is used when its parent ",(0,m.mdx)("a",{parentName:"td",href:"toolbar.md"},"Toolbar")," component receives a fixed position."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"ui/grid/sticky/actions"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"template"),(0,m.mdx)("td",{parentName:"tr",align:null},"Path to the component’s ",(0,m.mdx)("inlineCode",{parentName:"td"},".html")," template."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"ui/grid/paging/sizes"))))),(0,m.mdx)("h3",{id:"massaction-interface"},"MassAction interface"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Option"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Required"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"callback")),(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"column.md#columnaction-interface"},(0,m.mdx)("inlineCode",{parentName:"a"},"ColumnAction"))),(0,m.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"confirm")),(0,m.mdx)("td",{parentName:"tr",align:null},"Confirmation message displayed before applying the action."),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"{"),(0,m.mdx)("br",null),(0,m.mdx)("inlineCode",{parentName:"td"},"title: string;"),(0,m.mdx)("br",null),(0,m.mdx)("inlineCode",{parentName:"td"},"message: string;"),(0,m.mdx)("br",null),(0,m.mdx)("inlineCode",{parentName:"td"},"}")),(0,m.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"label")),(0,m.mdx)("td",{parentName:"tr",align:null},"Action's label displayed in the list of actions."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"Required")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"type")),(0,m.mdx)("td",{parentName:"tr",align:null},"Action's identifier."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"Required")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"url")),(0,m.mdx)("td",{parentName:"tr",align:null},"Path to the controller responsible for action handling."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"Optional")))),(0,m.mdx)("h2",{id:"examples"},"Examples"),(0,m.mdx)("h3",{id:"redefine-the-link-to-the-template"},"Redefine the link to the template"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<massaction name="listing_massaction">\n    <argument name="data" xsi:type="array">\n        ...\n        <item name="config" xsi:type="array">\n            <item name="template" xsi:type="string">product/grid/columns/massactions</item>\n        </item>\n    </argument>\n</massaction>\n')),(0,m.mdx)("h3",{id:"specify-action-with-confirmation"},"Specify action with confirmation"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<massaction name="listing_massaction">\n    <argument name="data" xsi:type="array">\n        ...\n    </argument>\n    <action name="edit">\n        <argument name="data" xsi:type="array">\n            <item name="config" xsi:type="array">\n                <item name="confirm" xsi:type="array">\n                    <item name="title" xsi:type="string" translate="true">Edit items</item>\n                    <item name="message" xsi:type="string" translate="true">Are you sure you want to edit selected items?</item>\n                </item>\n                <item name="type" xsi:type="string">edit</item>\n                <item name="label" xsi:type="string" translate="true">Edit</item>\n            </item>\n        </argument>\n    </action>\n</massaction>\n')),(0,m.mdx)("h3",{id:"action-with-a-custom-callback"},"Action with a custom callback"),(0,m.mdx)("p",null,"Callback is provided by another component."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<massaction name="listing_massaction">\n    <argument name="data" xsi:type="array">\n        ...\n    </argument>\n    <action name="edit">\n        <argument name="data" xsi:type="array">\n            <item name="config" xsi:type="array">\n                <item name="type" xsi:type="string">edit</item>\n                <item name="label" xsi:type="string" translate="true">Edit</item>\n                <item name="callback" xsi:type="array">\n                    <item name="provider" xsi:type="string">product_listing.inline_editing</item>\n                    <item name="target" xsi:type="string">startEdit</item>\n                </item>\n            </item>\n        </argument>\n    </action>\n</massaction>\n')),(0,m.mdx)("h3",{id:"instance-replacement-one-instance-of-a-component"},"Instance replacement (one instance of a component)"),(0,m.mdx)("p",null,"Redefine link to constructor:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<massaction name="listing_massaction">\n    <argument name="data" xsi:type="array">\n        <item name="js_config" xsi:type="array">\n            <item name="component" xsi:type="string">Magento_Ui/js/grid/massactions</item>\n        </item>\n    </argument>\n</massaction>\n')),(0,m.mdx)("h2",{id:"source-files"},"Source files"),(0,m.mdx)("p",null,"Extends ",(0,m.mdx)("inlineCode",{parentName:"p"},"Collapsible"),":"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/grid/massactions.js"},"app\\code\\Magento\\Ui\\view\\base\\web\\js\\grid\\massactions.js")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/grid/actions.html"},"app\\code\\Magento\\Ui\\view\\base\\web\\templates\\grid\\actions.html"))),(0,m.mdx)("h3",{id:"methods-and-events"},"Methods and events"),(0,m.mdx)("p",null,"The following API methods are available:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"getAction")," - returns the action instance found by the provided identifier"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"addAction")," - adds a new action to the actions"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"applyAction")," - applies the specified action as identifier action"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"getSelections")," - returns the object with current selections")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-mass-actions-md-3a76c8a61f63a394bb48.js.map