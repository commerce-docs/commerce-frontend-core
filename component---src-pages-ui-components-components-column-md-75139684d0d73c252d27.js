"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[2894],{11366:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return s}});var a=n(58168),m=n(80045),l=(n(88763),n(15680)),d=n(83407);const i=["components"],r={},o={_frontmatter:r},p=d.A;function s(e){let{components:t}=e,n=(0,m.A)(e,i);return(0,l.mdx)(p,(0,a.A)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"column-component"},"Column component"),(0,l.mdx)("p",null,"The Column component implements a basic column in ",(0,l.mdx)("a",{parentName:"p",href:"listing-grid.md"},"Listing"),"."),(0,l.mdx)("h2",{id:"options"},"Options"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Option"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Default"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"bodyTmpl")),(0,l.mdx)("td",{parentName:"tr",align:null},"Path to the template used for rendering column's fields in the table's body."),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"ui/grid/cells/text"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"class")),(0,l.mdx)("td",{parentName:"tr",align:null},"The path to the component class."),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"Magento\\Ui\\Component\\Listing\\Columns\\Column"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"component")),(0,l.mdx)("td",{parentName:"tr",align:null},"The path to the component's ",(0,l.mdx)("inlineCode",{parentName:"td"},".js")," file in terms of RequireJS."),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"Magento_Ui/js/grid/columns/column"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"controlVisibility")),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether a user can control column's visibility handled by the ",(0,l.mdx)("a",{parentName:"td",href:"columns-controls.md"},"ColumnsControls component"),"."),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"true"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"disableAction")),(0,l.mdx)("td",{parentName:"tr",align:null},"Disables the action set in the ",(0,l.mdx)("inlineCode",{parentName:"td"},"templates.fieldAction")," property."),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"false"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"draggable")),(0,l.mdx)("td",{parentName:"tr",align:null},"Defines if a user can change column's position in the table by grabbing column's header and dragging it across the table."),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"true"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"editor")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"String ","|"," Object"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"fieldClass")),(0,l.mdx)("td",{parentName:"tr",align:null},"Additional CSS classes added to the column's field elements."),(0,l.mdx)("td",{parentName:"tr",align:null},"{","[name: String]",": Boolean}"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"''"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"filter")),(0,l.mdx)("td",{parentName:"tr",align:null},"Reference to one of the available filter types defined in the ",(0,l.mdx)("a",{parentName:"td",href:"filters.md"},"Filters component"),". If the value represents an object containing the ",(0,l.mdx)("inlineCode",{parentName:"td"},"filterType")," field, this object is considered as an extension of the referenced filter element. If there's no such field in the value object, it is considered as a definition of a custom filter element."),(0,l.mdx)("td",{parentName:"tr",align:null},"String ","|"," Object"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"-"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"headerTmpl")),(0,l.mdx)("td",{parentName:"tr",align:null},"Path to the ",(0,l.mdx)("inlineCode",{parentName:"td"},".html")," template for the column's header."),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"ui/grid/columns/text"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"label")),(0,l.mdx)("td",{parentName:"tr",align:null},"The column label displayed in the header."),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"''"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"sortable")),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether column's fields can be used to sort records in a table."),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"true"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"sorting")),(0,l.mdx)("td",{parentName:"tr",align:null},"Column's sorting order. Can be ascending (",(0,l.mdx)("inlineCode",{parentName:"td"},"asc"),"), descending (",(0,l.mdx)("inlineCode",{parentName:"td"},"desc"),") or none (",(0,l.mdx)("inlineCode",{parentName:"td"},"false"),"). Setting ",(0,l.mdx)("inlineCode",{parentName:"td"},"sorting")," to ",(0,l.mdx)("inlineCode",{parentName:"td"},"false")," does not disable sorting, which is defined by the ",(0,l.mdx)("inlineCode",{parentName:"td"},"sortable")," option."),(0,l.mdx)("td",{parentName:"tr",align:null},"String ","|"," Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"false"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"statefull")),(0,l.mdx)("td",{parentName:"tr",align:null},"Defined in the parent ",(0,l.mdx)("a",{parentName:"td",href:"../concepts/element.md"},"uiElement class"),"."),(0,l.mdx)("td",{parentName:"tr",align:null},"Object"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"{visible: true, sorting: true}"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"templates.fieldAction")),(0,l.mdx)("td",{parentName:"tr",align:null},"The action performed on the column's field click."),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#columnaction-interface"},"ColumnAction")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"-"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"visible")),(0,l.mdx)("td",{parentName:"tr",align:null},"Initial component's visibility. When set to ",(0,l.mdx)("inlineCode",{parentName:"td"},"false"),", the ",(0,l.mdx)("inlineCode",{parentName:"td"},"display: none")," CSS style is added to the component's DOM block."),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"true"))))),(0,l.mdx)("h3",{id:"columnaction-interface"},"ColumnAction interface"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Option"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Required"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"params")),(0,l.mdx)("td",{parentName:"tr",align:null},"A list of arguments that will be passed to the method."),(0,l.mdx)("td",{parentName:"tr",align:null},"Array"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"provider")),(0,l.mdx)("td",{parentName:"tr",align:null},"Reference to component."),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"Required")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"target")),(0,l.mdx)("td",{parentName:"tr",align:null},"Name of the component's method to be invoked."),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"Required")))),(0,l.mdx)("h2",{id:"source-files"},"Source files"),(0,l.mdx)("p",null,"Extends ",(0,l.mdx)("a",{parentName:"p",href:"../concepts/element.md"},(0,l.mdx)("inlineCode",{parentName:"a"},"UiElement")),":"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/Component/Listing/Columns/Column.php"},(0,l.mdx)("inlineCode",{parentName:"a"},"Magento/Ui/Component/Listing/Columns/Column.php"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/grid/columns/column.js"},(0,l.mdx)("inlineCode",{parentName:"a"},"Magento/Ui/view/base/web/js/grid/columns/column.js"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/grid/cells/text.html"},(0,l.mdx)("inlineCode",{parentName:"a"},"Magento/Ui/view/base/web/templates/grid/cells/text.html"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/grid/columns/text.html"},(0,l.mdx)("inlineCode",{parentName:"a"},"Magento/Ui/view/base/web/templates/grid/columns/text.html")))),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)("h3",{id:"integration"},"Integration"),(0,l.mdx)("p",null,"This is an example of how the Column component integrates with the ",(0,l.mdx)("a",{parentName:"p",href:"listing-grid.md"},"Listing")," component:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<listing>\n    ...\n    <columns>\n        ...\n        <column name="column" sortOrder="10">\n            <settings>\n                <filter>text</filter>\n                <dataType>text</dataType>\n                <label translate="true">Column</label>\n            </settings>\n        </column>\n        ...\n    </columns>\n    ...\n</listing>\n')),(0,l.mdx)("h4",{id:"result"},"Result"),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"250px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"106.4%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/c030fa709dee7c94149381e2332435ae/23cfa/ui-column-result.webp 250w"],sizes:"(max-width: 250px) 100vw, 250px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/c030fa709dee7c94149381e2332435ae/86700/ui-column-result.png 250w"],sizes:"(max-width: 250px) 100vw, 250px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/c030fa709dee7c94149381e2332435ae/86700/ui-column-result.png",alt:"Column Component Example",title:"Column Component Example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,l.mdx)("h3",{id:"configure-field-action-for-column-component"},"Configure Field Action for Column component"),(0,l.mdx)("p",null,"This is an example of how the ",(0,l.mdx)("inlineCode",{parentName:"p"},"fieldAction")," option can be configured for the Column component."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<column name="column_with_action">\n    <argument name="data" xsi:type="array">\n        <item name="config" xsi:type="array">\n            <item name="fieldAction" xsi:type="array">\n                <item name="provider" xsi:type="string">TARGET_NAME</item>\n                <item name="target" xsi:type="string">ACTION_NAME</item>\n                <item name="params" xsi:type="array">\n                    \x3c!-- provide record index as a parameter for target method --\x3e\n                    <item name="0" xsi:type="string">${ $.$data.rowIndex }</item>\n                </item>\n            </item>\n        </item>\n    </argument>\n    <settings>\n        <filter>text</filter>\n        <dataType>text</dataType>\n        <label translate="true">Column</label>\n    </settings>\n</column>\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-column-md-75139684d0d73c252d27.js.map