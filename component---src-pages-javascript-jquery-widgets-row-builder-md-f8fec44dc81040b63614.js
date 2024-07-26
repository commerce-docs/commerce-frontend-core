"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[4300],{19620:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return s}});var t=a(58168),d=a(80045),i=(a(88763),a(15680)),r=a(83407);const m=["components"],l={},o={_frontmatter:l},p=r.A;function s(e){let{components:n}=e,a=(0,d.A)(e,m);return(0,i.mdx)(p,(0,t.A)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"rowbuilder-widget"},"RowBuilder widget"),(0,i.mdx)("p",null,"The RowBuilder widget allows you to build a container with rows."),(0,i.mdx)("p",null,"The RowBuilder widget can be used only on the frontend area."),(0,i.mdx)("p",null,"The RowBuilder widget source is ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Theme/view/frontend/web/js/row-builder.js"},"lib/web/mage/row-builder.js"),"."),(0,i.mdx)("h2",{id:"initialize"},"Initialize"),(0,i.mdx)("p",null,"For information about how to initialize a widget in a JS component or ",(0,i.mdx)("inlineCode",{parentName:"p"},".phtml")," template, see the ",(0,i.mdx)("a",{parentName:"p",href:"../init.md"},"Initialize JavaScript")," topic."),(0,i.mdx)("p",null,"The RowBuilder widget is instantiated with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'$("#row-builder").rowBuilder({\n    "rowTemplate":"#row-template",\n    "rowContainer":"#row-container",\n    "rowParentElem":"<div></div>",\n    "remEventSelector":"a",\n    "btnRemoveSelector":".action.remove",\n    "maxRows":"5"\n});``\n')),(0,i.mdx)("p",null,"Where:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"#row-builder")," is the selector of the element which will be the RowBuilder.")),(0,i.mdx)("p",null,"The following example shows a PHTML file using the script:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},'<script>\n    require([\n        \'jquery\',\n        \'rowBuilder\'\n    ], function ($) {\n        \'use strict\';\n\n        $("#row-builder").rowBuilder({\n              "rowTemplate":"#row-template",\n              "rowContainer":"#row-container",\n              "rowParentElem":"<div></div>",\n              "remEventSelector":"a",\n              "btnRemoveSelector":".action.remove",\n              "maxRows":"5"\n        });\n    });\n<\/script>\n')),(0,i.mdx)("p",null,"The following example shows a PHTML file using the script with some data for a couple of fields:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},'<div class="row-builder-example">\n    <div id="max-rows-message" style="display: none;" class="message notice limit" role="alert">\n        <span>Number of rows exceeded.</span>\n    </div>\n    <button type="button" id="add-row-button" class="action add">\n        <span>Add Item</span>\n    </button>\n    <div id="row-container"></div>\n</div>\n\n<script id="row-template" type="text/x-magento-template">\n    <div>\n        <div class="field name required">\n            <label for="field1-name<%- data._index_ %>" class="label"><span>Item <%- data._index_ %> Field</span></label>\n            <div class="control">\n                <input name="field1[name][<%- data._index_ %>]" type="text" title="<?= $block->escapeHtmlAttr(__(\'Name\')) ?>" class="input-text"\n                       id="field1-name<%- data._index_ %>"/>\n            </div>\n        </div>\n        <div class="field name required">\n            <label for="field2-name<%- data._index_ %>" class="label"><span>Item <%- data._index_ %> Field</span></label>\n            <div class="control">\n                <input name="field2[name][<%- data._index_ %>]" type="text" title="<?= $block->escapeHtmlAttr(__(\'Name\')) ?>" class="input-text"\n                       id="field2-name<%- data._index_ %>"/>\n            </div>\n        </div>\n        <div class="field name required">\n            <label for="field3-name<%- data._index_ %>" class="label"><span>Item <%- data._index_ %> Field</span></label>\n            <div class="control">\n                <input name="field3[name][<%- data._index_ %>]" type="text" title="<?= $block->escapeHtmlAttr(__(\'Name\')) ?>" class="input-text"\n                       id="field3-name<%- data._index_ %>"/>\n            </div>\n        </div>\n        <div class="actions-toolbar">\n            <div class="secondary">\n                <a href="#" id="btn-remove<%- data._index_ %>" class="action remove"\n                   title="Remove Item">\n                    <span>Remove Item</span>\n                </a>\n            </div>\n        </div>\n    </div>\n<\/script>\n\n<script>\n    require([\n        \'jquery\',\n        \'rowBuilder\'\n    ], function ($) {\n        \'use strict\';\n\n        var data = {\n            formData: [\n                ["field1-name1", "field2-name1", "field3-name1"],\n                ["field1-name2", "field2-name2", "field3-name2"],\n                ["field1-name3", "field2-name3", "field3-name3"],\n                ["field1-name4", "field2-name4", "field3-name4"],\n            ],\n            templateFields: [\n                "field1-name", "field2-name", "field3-name"\n            ]\n        };\n\n        $(".row-builder-package-manager").rowBuilder({\n            "rowTemplate": "#row-template",\n            "rowContainer": "#row-container",\n            "rowParentElem": "<div></div>",\n            "remEventSelector": "a",\n            "btnRemoveSelector": ".action.remove",\n            "formDataPost": data\n        });\n    });\n<\/script>\n')),(0,i.mdx)("p",null,"This is provided during widget instantiation. For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},'formDataPost : {"formData": ["field1-name1", "field2-name1", "field3-name1"], "templateFields":[\'field1-name\',\'field2-name\',\'field3-name\']]}\n')),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},'"formData"')," is the multi-dimensional array of form field values : [","['a','b']",",","['c','b']","] received from the server and encoded")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},'"templateFields"')," are the input fields in the template with index suffixed after the field name. For example, ",(0,i.mdx)("inlineCode",{parentName:"p"},"field1-name{index}"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"field2-name{index}"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"field3-name{index}")))),(0,i.mdx)("h2",{id:"options"},"Options"),(0,i.mdx)("h3",{id:"rowtemplate"},(0,i.mdx)("inlineCode",{parentName:"h3"},"rowTemplate")),(0,i.mdx)("p",null,"The row template selector."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"'#template-registrant'")),(0,i.mdx)("h3",{id:"rowcontainer"},(0,i.mdx)("inlineCode",{parentName:"h3"},"rowContainer")),(0,i.mdx)("p",null,"The row container selector."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"'#registrant-container'")),(0,i.mdx)("h3",{id:"rowindex"},(0,i.mdx)("inlineCode",{parentName:"h3"},"rowIndex")),(0,i.mdx)("p",null,"Row index used by the template rows."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": Integer"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"0")),(0,i.mdx)("h3",{id:"rowcount"},(0,i.mdx)("inlineCode",{parentName:"h3"},"rowCount")),(0,i.mdx)("p",null,"Row count."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": Integer"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"0")),(0,i.mdx)("h3",{id:"rowparentelem"},(0,i.mdx)("inlineCode",{parentName:"h3"},"rowParentElem")),(0,i.mdx)("p",null,"Row parent element."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"'<li></li>'")),(0,i.mdx)("h3",{id:"rowcontainerclass"},(0,i.mdx)("inlineCode",{parentName:"h3"},"rowContainerClass")),(0,i.mdx)("p",null,"Row container class."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"'fields'")),(0,i.mdx)("h3",{id:"addrowbtn"},(0,i.mdx)("inlineCode",{parentName:"h3"},"addRowBtn")),(0,i.mdx)("p",null,"The add row button selector."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"'#add-registrant-button'")),(0,i.mdx)("h3",{id:"btnremoveidprefix"},(0,i.mdx)("inlineCode",{parentName:"h3"},"btnRemoveIdPrefix")),(0,i.mdx)("p",null,"ID prefix of a remove button."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"'btn-remove'")),(0,i.mdx)("h3",{id:"btnremoveselector"},(0,i.mdx)("inlineCode",{parentName:"h3"},"btnRemoveSelector")),(0,i.mdx)("p",null,"The remove button selector."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"'.btn-remove'")),(0,i.mdx)("h3",{id:"rowidprefix"},(0,i.mdx)("inlineCode",{parentName:"h3"},"rowIdPrefix")),(0,i.mdx)("p",null,"ID prefix of a row element."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"'row'")),(0,i.mdx)("h3",{id:"additionalrowclass"},(0,i.mdx)("inlineCode",{parentName:"h3"},"additionalRowClass")),(0,i.mdx)("p",null,"The additional row class name which is added after the main class name."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"'add-row'")),(0,i.mdx)("h3",{id:"addeventselector"},(0,i.mdx)("inlineCode",{parentName:"h3"},"addEventSelector")),(0,i.mdx)("p",null,"Default selectors for adding elements to a template."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"'button'")),(0,i.mdx)("h3",{id:"remeventselector"},(0,i.mdx)("inlineCode",{parentName:"h3"},"remEventSelector")),(0,i.mdx)("p",null,"Default selectors for removing markup elements from a template."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"'a'")),(0,i.mdx)("h3",{id:"hidefirstrowaddseparator"},(0,i.mdx)("inlineCode",{parentName:"h3"},"hideFirstRowAddSeparator")),(0,i.mdx)("p",null,"This option specifies if the ",(0,i.mdx)("a",{parentName:"p",href:"#btnremoveidprefix"},"remove link")," and ",(0,i.mdx)("a",{parentName:"p",href:"#additionalrowclass"},"additional row class")," are removed for the first row."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"true")),(0,i.mdx)("h3",{id:"maxrows"},(0,i.mdx)("inlineCode",{parentName:"h3"},"maxRows")),(0,i.mdx)("p",null,"Max number of rows."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": Integer"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"1000")),(0,i.mdx)("h3",{id:"maxrowsmsg"},(0,i.mdx)("inlineCode",{parentName:"h3"},"maxRowsMsg")),(0,i.mdx)("p",null,"The message selector of an element which appears when the max number of rows has been exceeded."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"#max-registrant-message")),(0,i.mdx)("h2",{id:"code-sample"},"Code sample"),(0,i.mdx)("p",null,"This example shows the row builder container, which adds a new row when you click the ",(0,i.mdx)("strong",{parentName:"p"},"Add Item")," button and removes a row when you click the ",(0,i.mdx)("strong",{parentName:"p"},"Remove Item")," button."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},'<script id="row-template" type="text/x-magento-template">\n    <div>\n        <div class="field name required">\n            <label for="field-name<%- data._index_ %>" class="label"><span>Item <%- data._index_ %> Field</span></label>\n            <div class="control">\n                <input name="field[name][<%- data._index_ %>]" type="text" title="<?= $block->escapeHtmlAttr(__(\'Name\')) ?>" class="input-text"\n                       id="field-name<%- data._index_ %>"/>\n            </div>\n        </div>\n        <div class="actions-toolbar">\n            <div class="secondary">\n                <a href="#" id="btn-remove<%- data._index_ %>" class="action remove"\n                   title="Remove Item">\n                    <span>Remove Item</span>\n                </a>\n            </div>\n        </div>\n    </div>\n<\/script>\n\n<div class="row-builder-example"\n     data-mage-init=\'{\n        "rowBuilder":{\n            "rowTemplate":"#row-template",\n            "rowContainer":"#row-container",\n            "rowParentElem":"<div></div>",\n            "remEventSelector":"a",\n            "btnRemoveSelector":".action.remove",\n            "maxRows":"5",\n            "maxRowsMsg":"#max-rows-message",\n            "addRowBtn":"#add-row-button",\n            "additionalRowClass":"additional"\n        }\n     }\'>\n    <div id="max-rows-message" style="display: none;" class="message notice limit" role="alert">\n        <span>Number of rows exceeded.</span>\n    </div>\n    <button type="button" id="add-row-button" class="action add">\n        <span>Add Item</span>\n    </button>\n    <div id="row-container"></div>\n</div>\n')),(0,i.mdx)("h2",{id:"result"},"Result"),(0,i.mdx)("p",null,"As a result, we see the RowBuilder widget example with 5 rows as max."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.99999999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/55f7c7261fb9afc108b89af4c5097272/5530d/row-builder-widget-result.webp 320w","/commerce-frontend-core/static/55f7c7261fb9afc108b89af4c5097272/0c8fb/row-builder-widget-result.webp 640w","/commerce-frontend-core/static/55f7c7261fb9afc108b89af4c5097272/94b1e/row-builder-widget-result.webp 1280w","/commerce-frontend-core/static/55f7c7261fb9afc108b89af4c5097272/f590c/row-builder-widget-result.webp 1286w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/55f7c7261fb9afc108b89af4c5097272/dd4a7/row-builder-widget-result.png 320w","/commerce-frontend-core/static/55f7c7261fb9afc108b89af4c5097272/0f09e/row-builder-widget-result.png 640w","/commerce-frontend-core/static/55f7c7261fb9afc108b89af4c5097272/bbbf7/row-builder-widget-result.png 1280w","/commerce-frontend-core/static/55f7c7261fb9afc108b89af4c5097272/908d1/row-builder-widget-result.png 1286w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/55f7c7261fb9afc108b89af4c5097272/bbbf7/row-builder-widget-result.png",alt:"RowBuilder widget Example",title:"RowBuilder widget Example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n",(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/3269fd0152144501348da4454c1e4b6e/5530d/row-builder-widget-warning-message-result.webp 320w","/commerce-frontend-core/static/3269fd0152144501348da4454c1e4b6e/0c8fb/row-builder-widget-warning-message-result.webp 640w","/commerce-frontend-core/static/3269fd0152144501348da4454c1e4b6e/94b1e/row-builder-widget-warning-message-result.webp 1280w","/commerce-frontend-core/static/3269fd0152144501348da4454c1e4b6e/633a6/row-builder-widget-warning-message-result.webp 1302w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/3269fd0152144501348da4454c1e4b6e/dd4a7/row-builder-widget-warning-message-result.png 320w","/commerce-frontend-core/static/3269fd0152144501348da4454c1e4b6e/0f09e/row-builder-widget-warning-message-result.png 640w","/commerce-frontend-core/static/3269fd0152144501348da4454c1e4b6e/bbbf7/row-builder-widget-warning-message-result.png 1280w","/commerce-frontend-core/static/3269fd0152144501348da4454c1e4b6e/3b5a6/row-builder-widget-warning-message-result.png 1302w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/3269fd0152144501348da4454c1e4b6e/bbbf7/row-builder-widget-warning-message-result.png",alt:"RowBuilder widget with warning message Example",title:"RowBuilder widget with warning message Example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-javascript-jquery-widgets-row-builder-md-f8fec44dc81040b63614.js.map