"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[5115],{66739:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return o}});var n=a(58168),l=a(80045),m=(a(88763),a(15680)),i=a(83407);const d=["components"],p={},r={_frontmatter:p},s=i.A;function o(e){let{components:t}=e,a=(0,l.A)(e,d);return(0,m.mdx)(s,(0,n.A)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"multiselect-widget"},"Multiselect widget"),(0,m.mdx)("p",null,"This widget enables multiple select capability in the search field to help users choose different options."),(0,m.mdx)("p",null,"The Multiselect widget source is the ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/web/mage/multiselect.js"},"lib/web/mage/multiselect.js")," file."),(0,m.mdx)("h2",{id:"initialize"},"Initialize"),(0,m.mdx)("p",null,"For information about how to initialize a widget in a JS component or ",(0,m.mdx)("inlineCode",{parentName:"p"},".phtml")," template, see the ",(0,m.mdx)("a",{parentName:"p",href:"../init.md"},"Initialize JavaScript")," topic."),(0,m.mdx)("p",null,"The following example shows how to instantiate the Multiselect widget:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},'$("#multiselect").multiselect2({});\n')),(0,m.mdx)("p",null,"where ",(0,m.mdx)("inlineCode",{parentName:"p"},"#multiselect")," is the selector of the select element for which Multiselect is initialized."),(0,m.mdx)("p",null,"The following example shows a PHTML file using the script:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-html"},"<script>\n    require([\n        'jquery',\n        'mage/multiselect'\n    ], function ($) {\n        'use strict';\n\n        $(\"#multiselect\").multiselect2({});\n    });\n<\/script>\n")),(0,m.mdx)("h2",{id:"options"},"Options"),(0,m.mdx)("h3",{id:"containerclass"},(0,m.mdx)("inlineCode",{parentName:"h3"},"containerClass")),(0,m.mdx)("p",null,"The class which is attached to the container with ",(0,m.mdx)("a",{parentName:"p",href:"#mselectcontainer"},"multi-select container selector"),"."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,m.mdx)("inlineCode",{parentName:"p"},"'paginated'")),(0,m.mdx)("h3",{id:"currentpage"},(0,m.mdx)("inlineCode",{parentName:"h3"},"currentPage")),(0,m.mdx)("p",null,"Current page of multi-select items."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Type"),": Integer"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,m.mdx)("inlineCode",{parentName:"p"},"1")),(0,m.mdx)("h3",{id:"lastappendvalue"},(0,m.mdx)("inlineCode",{parentName:"h3"},"lastAppendValue")),(0,m.mdx)("p",null,"The value of the last added multi-select item."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Type"),": Integer, String"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,m.mdx)("inlineCode",{parentName:"p"},"0")),(0,m.mdx)("h3",{id:"mselectcheckedclass"},(0,m.mdx)("inlineCode",{parentName:"h3"},"mselectCheckedClass")),(0,m.mdx)("p",null,"The class which is attached to a checked multi-select item."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,m.mdx)("inlineCode",{parentName:"p"},"'mselect-checked'")),(0,m.mdx)("h3",{id:"mselectcontainer"},(0,m.mdx)("inlineCode",{parentName:"h3"},"mselectContainer")),(0,m.mdx)("p",null,"Multiselect container selector."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,m.mdx)("inlineCode",{parentName:"p"},"'section.mselect-list'")),(0,m.mdx)("h3",{id:"mselectitemswrapperclass"},(0,m.mdx)("inlineCode",{parentName:"h3"},"mselectItemsWrapperClass")),(0,m.mdx)("p",null,"Multiselect items wrapper class."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,m.mdx)("inlineCode",{parentName:"p"},"'mselect-items-wrapper'")),(0,m.mdx)("h3",{id:"nextpageurl"},(0,m.mdx)("inlineCode",{parentName:"h3"},"nextPageUrl")),(0,m.mdx)("p",null,"The URL of the controller or API which returns the JSON response."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "errorMessage": "",\n  "result": [\n    {\n      "value": "1",\n      "label": "Multi-select item label #1"\n    },\n    {\n      "value": "2",\n      "label": "Multi-select item label #2"\n    }\n  ]\n}\n')),(0,m.mdx)("p",null,"An example of the controller: ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Tax/Controller/Adminhtml/Rule/AjaxLoadRates.php"},(0,m.mdx)("inlineCode",{parentName:"a"},"<Magento_Tax_module_dir>/Controller/Adminhtml/Rule/AjaxLoadRates.php"))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,m.mdx)("inlineCode",{parentName:"p"},"undefined")),(0,m.mdx)("h3",{id:"searchinputclass"},(0,m.mdx)("inlineCode",{parentName:"h3"},"searchInputClass")),(0,m.mdx)("p",null,"Class of the search input."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,m.mdx)("inlineCode",{parentName:"p"},"'admin__action-multiselect-search'")),(0,m.mdx)("h3",{id:"selecteditemscountclass"},(0,m.mdx)("inlineCode",{parentName:"h3"},"selectedItemsCountClass")),(0,m.mdx)("p",null,"Class of the selected items counter."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,m.mdx)("inlineCode",{parentName:"p"},"'admin__action-multiselect-search'")),(0,m.mdx)("h3",{id:"updatedelay"},(0,m.mdx)("inlineCode",{parentName:"h3"},"updateDelay")),(0,m.mdx)("p",null,"The search field update delay."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Type"),": Integer, String"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,m.mdx)("inlineCode",{parentName:"p"},"0")),(0,m.mdx)("h2",{id:"methods"},"Methods"),(0,m.mdx)("h3",{id:"appendoptions"},(0,m.mdx)("inlineCode",{parentName:"h3"},"appendOptions")),(0,m.mdx)("p",null,"The method appends multi-select items to the multi-select."),(0,m.mdx)("p",null,"Code example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},'$(\'#multiselect\').multiselect2(\'appendOptions\', [{"value": "1", "label": "Label #1"}, {"value": "2", "label": "Label #2"}]);\n')),(0,m.mdx)("h3",{id:"clearmultiselectoptions"},(0,m.mdx)("inlineCode",{parentName:"h3"},"clearMultiselectOptions")),(0,m.mdx)("p",null,"The method removes all multi-select items."),(0,m.mdx)("p",null,"Code example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"$('#multiselect').multiselect2('clearMultiselectOptions');\n")),(0,m.mdx)("h3",{id:"getcurrentpage"},(0,m.mdx)("inlineCode",{parentName:"h3"},"getCurrentPage")),(0,m.mdx)("p",null,"The method returns the number of the current page."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"$('#multiselect').multiselect2('getCurrentPage');\n")),(0,m.mdx)("h3",{id:"getsearchcriteria"},(0,m.mdx)("inlineCode",{parentName:"h3"},"getSearchCriteria")),(0,m.mdx)("p",null,"The method returns the trimmed value of the search input."),(0,m.mdx)("p",null,"Code example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"$('#multiselect').multiselect2('getSearchCriteria');\n")),(0,m.mdx)("h3",{id:"isoptionsloaded"},(0,m.mdx)("inlineCode",{parentName:"h3"},"isOptionsLoaded")),(0,m.mdx)("p",null,"The method checks if all multi-select items are already loaded."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},'$(\'#multiselect\').multiselect2(\'isOptionsLoaded\', [{"value": "2", "label": "Label #2"}]);\n')),(0,m.mdx)("p",null,"This method returns ",(0,m.mdx)("inlineCode",{parentName:"p"},"true")," if multiple selection items are loaded, and it returns ",(0,m.mdx)("inlineCode",{parentName:"p"},"false")," if they are not loaded."),(0,m.mdx)("h3",{id:"loadoptions"},(0,m.mdx)("inlineCode",{parentName:"h3"},"loadOptions")),(0,m.mdx)("p",null,"The method loads the next page with multi-select items from ",(0,m.mdx)("a",{parentName:"p",href:"#nextpageurl"},"nextPageUrl")," according to the ",(0,m.mdx)("a",{parentName:"p",href:"#getsearchcriteria"},"search criteria"),".\nThe multi-select items from the Ajax response are appended to the multi-select."),(0,m.mdx)("p",null,"Code example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"$('#multiselect').multiselect2('loadOptions');\n")),(0,m.mdx)("h3",{id:"setcurrentpage"},(0,m.mdx)("inlineCode",{parentName:"h3"},"setCurrentPage")),(0,m.mdx)("p",null,"The method configures the current page number."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"$('#multiselect').multiselect2('setCurrentPage', 2);\n")),(0,m.mdx)("h2",{id:"code-sample"},"Code sample"),(0,m.mdx)("p",null,"The following example shows the multiselect field with search bar and ",(0,m.mdx)("strong",{parentName:"p"},"Add new value")," button."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-html"},'<div class="select-example">\n    <select id="multiselect" name="multiselect-field" multiple="multiple">\n            <option value="1">Option 1</option>\n            <option value="2">Option 2</option>\n            <option value="3">Option 3</option>\n            <option value="4">Option 4</option>\n            <option value="5">Option 5</option>\n            <option value="6">Option 6</option>\n    </select>\n    <script>\n        require([\'jquery\', \'mage/multiselect\'], function ($) {\n            $(\'#multiselect\').multiselect2({selectedValues: [2, 4]});\n        });\n    <\/script>\n</div>\n')),(0,m.mdx)("h2",{id:"result"},"Result"),(0,m.mdx)("p",null,"As a result, we see the multiselect field with search bar and ",(0,m.mdx)("strong",{parentName:"p"},"Add new value")," button.\nYou can now search for an option in the search bar and the ",(0,m.mdx)("strong",{parentName:"p"},"Add new value")," button allows you to add a new option to the multiselect feature."),(0,m.mdx)("p",null,(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/ed3d1e6d1418fafe5a01ea59224d015d/5530d/multiselect-widget-result.webp 320w","/commerce-frontend-core/static/ed3d1e6d1418fafe5a01ea59224d015d/0c8fb/multiselect-widget-result.webp 640w","/commerce-frontend-core/static/ed3d1e6d1418fafe5a01ea59224d015d/94b1e/multiselect-widget-result.webp 1280w","/commerce-frontend-core/static/ed3d1e6d1418fafe5a01ea59224d015d/1e9e2/multiselect-widget-result.webp 1336w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/ed3d1e6d1418fafe5a01ea59224d015d/dd4a7/multiselect-widget-result.png 320w","/commerce-frontend-core/static/ed3d1e6d1418fafe5a01ea59224d015d/0f09e/multiselect-widget-result.png 640w","/commerce-frontend-core/static/ed3d1e6d1418fafe5a01ea59224d015d/bbbf7/multiselect-widget-result.png 1280w","/commerce-frontend-core/static/ed3d1e6d1418fafe5a01ea59224d015d/fa271/multiselect-widget-result.png 1336w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/ed3d1e6d1418fafe5a01ea59224d015d/bbbf7/multiselect-widget-result.png",alt:"Multiselect Widget Example",title:"Multiselect Widget Example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-javascript-jquery-widgets-multiselect-md-805124054465a4818e02.js.map