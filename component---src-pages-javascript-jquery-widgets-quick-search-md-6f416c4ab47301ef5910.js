"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[1800],{62710:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return p}});var t=a(58168),r=a(80045),i=(a(88763),a(15680)),s=a(83407);const l=["components"],d={},m={_frontmatter:d},o=s.A;function p(e){let{components:n}=e,a=(0,r.A)(e,l);return(0,i.mdx)(o,(0,t.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"quicksearch-widget"},"QuickSearch widget"),(0,i.mdx)("p",null,"The quickSearch widget is an autocomplete widget that populates a list of suggested search terms for a given field."),(0,i.mdx)("p",null,"The suggest widget source is ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Search/view/frontend/web/js/form-mini.js"},(0,i.mdx)("inlineCode",{parentName:"a"},"<Magento_Search_module_dir>/view/frontend/web/js/form-mini.js")),"."),(0,i.mdx)("h2",{id:"initialize"},"Initialize"),(0,i.mdx)("p",null,"For information about how to initialize a widget in a JS component or ",(0,i.mdx)("inlineCode",{parentName:"p"},".phtml")," template, see the ",(0,i.mdx)("a",{parentName:"p",href:"../init.md"},"Initialize JavaScript")," topic."),(0,i.mdx)("h2",{id:"options"},"Options"),(0,i.mdx)("h3",{id:"autocomplete"},(0,i.mdx)("inlineCode",{parentName:"h3"},"autocomplete")),(0,i.mdx)("p",null,"Attaches the ",(0,i.mdx)("inlineCode",{parentName:"p"},"autocomplete")," attribute to the search field."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"off")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Accepted values"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"off"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"on")),(0,i.mdx)("h3",{id:"destinationselector"},(0,i.mdx)("inlineCode",{parentName:"h3"},"destinationSelector")),(0,i.mdx)("p",null,"The element's selector where the results will be added."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"null")),(0,i.mdx)("h3",{id:"isexpandable"},(0,i.mdx)("inlineCode",{parentName:"h3"},"isExpandable")),(0,i.mdx)("p",null,"The isExpandable option is used to show and hide search input field on devices with max width 768px."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"null")),(0,i.mdx)("h3",{id:"formselector"},(0,i.mdx)("inlineCode",{parentName:"h3"},"formSelector")),(0,i.mdx)("p",null,"The form selector containing the search input field."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": No form by default."),(0,i.mdx)("h3",{id:"minsearchlength"},(0,i.mdx)("inlineCode",{parentName:"h3"},"minSearchLength")),(0,i.mdx)("p",null,"Minimum number of characters required before the auto suggest triggers."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": Integer"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"2")),(0,i.mdx)("h3",{id:"responsefieldelements"},(0,i.mdx)("inlineCode",{parentName:"h3"},"responseFieldElements")),(0,i.mdx)("p",null,"Selector for the response elements."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default Value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"ul li")),(0,i.mdx)("h3",{id:"searchlabel"},(0,i.mdx)("inlineCode",{parentName:"h3"},"searchLabel")),(0,i.mdx)("p",null,"Selector of a search input label."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"[data-role=minisearch-label]")),(0,i.mdx)("h3",{id:"selectclass"},(0,i.mdx)("inlineCode",{parentName:"h3"},"selectClass")),(0,i.mdx)("p",null,"Class assigned to the selected suggested term."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"selected")),(0,i.mdx)("h3",{id:"submitbtn"},(0,i.mdx)("inlineCode",{parentName:"h3"},"submitBtn")),(0,i.mdx)("p",null,"Disable the submit button."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},'button[type="submit"]')),(0,i.mdx)("h3",{id:"suggestiondelay"},(0,i.mdx)("inlineCode",{parentName:"h3"},"suggestionDelay")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"suggestionDelay")," option prevents overloading the server with requests by waiting until the user has stopped typing for the specified period of time."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": Integer"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"300")),(0,i.mdx)("h3",{id:"template"},(0,i.mdx)("inlineCode",{parentName:"h3"},"template")),(0,i.mdx)("p",null,"Template responsible for rendering returned data (suggested terms)."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},'<li class="<%- data.row_class %>" id="qs-option-<%- data.index %>" role="option">\n    <span class="qs-option-name">\n       <%- data.title %>\n    </span>\n    <span aria-hidden="true" class="amount">\n       <%- data.num_results %>\n    </span>\n</li>\n')),(0,i.mdx)("h3",{id:"url"},(0,i.mdx)("inlineCode",{parentName:"h3"},"url")),(0,i.mdx)("p",null,"The endpoint URL for processing the search query."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"null")),(0,i.mdx)("h2",{id:"code-sample"},"Code sample"),(0,i.mdx)("p",null,"This example shows how to initialize the quickSearch widget and pass options during the initialization."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},'<form class="" id="new_search_form" action="/catalogsearch/result/" method="get">\n   <div class="field search">\n      <div class="control">\n          <input id="new-search"\n              data-mage-init=\'{"quickSearch":{\n                     "formSelector":"#new_search_form",\n                     "minSearchLength": 1,\n                     "url":"/search/ajax/suggest",\n                     "destinationSelector":"#search_results"}\n                    }\'\n              type="text"\n              name="q"\n              placeholder="<?= $block->escapeHtmlAttr(__(\'Search entire store here...\')) ?>"\n              class="input-text"/>\n         <div id="search_results" class="search-autocomplete"></div>\n      </div>\n  </div>\n  <div class="actions">\n    <button type="submit"\n            title="<?= $block->escapeHtml(__(\'Search\')) ?>"\n            class="action search"\n            aria-label="Search">\n      <span><?= $block->escapeHtml(__(\'Search\')) ?></span>\n    </button>\n  </div>\n</form>\n')),(0,i.mdx)("h3",{id:"result"},"Result"),(0,i.mdx)("p",null,"The result is an input with autocomplete results, where the results will be returned by the ",(0,i.mdx)("inlineCode",{parentName:"p"},"url")," option that was provided on initialization, as shown here:"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"414px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/f1da103587946f4d2443941669fe7ada/5530d/quick-search-result.webp 320w","/commerce-frontend-core/static/f1da103587946f4d2443941669fe7ada/d3277/quick-search-result.webp 414w"],sizes:"(max-width: 414px) 100vw, 414px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/f1da103587946f4d2443941669fe7ada/dd4a7/quick-search-result.png 320w","/commerce-frontend-core/static/f1da103587946f4d2443941669fe7ada/c6ea4/quick-search-result.png 414w"],sizes:"(max-width: 414px) 100vw, 414px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/f1da103587946f4d2443941669fe7ada/c6ea4/quick-search-result.png",alt:"Quick Search Widget",title:"Quick Search Widget",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"how-quicksearch-uses-opensearch"},"How QuickSearch uses OpenSearch"),(0,i.mdx)("p",null,"When a user performs a search query using QuickSearch, the input is processed by OpenSearch using its default Standard Built-in analyzers. These analyzers follow a specific set of rules:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Parses strings into tokens at word boundaries"),(0,i.mdx)("li",{parentName:"ul"},"Removes most punctuation"),(0,i.mdx)("li",{parentName:"ul"},"Converts tokens to lowercase")),(0,i.mdx)("h2",{id:"hyphens-in-product-names"},"Hyphens in product names"),(0,i.mdx)("p",null,"If a product is named “abcd-efg”, a search for “abc” will return “abcd” as a suggestion. However, a search for “abcd” will return no suggestions because the word boundary is broken by the subsequent hyphen (",(0,i.mdx)("inlineCode",{parentName:"p"},"-"),"). This behavior also impacts OpenSearch ",(0,i.mdx)("a",{parentName:"p",href:"https://opensearch.org/docs/latest/search-plugins/searching-data/did-you-mean/#candidate-generators"},"candidate generators"),"."),(0,i.mdx)("h2",{id:"customization-and-configuration"},"Customization and configuration"),(0,i.mdx)("p",null,"While the default behavior of QuickSearch is to use standard analyzer, there may be cases where custom adjustments are necessary. In such cases, you might need to consider configuring custom analyzers in OpenSearch."),(0,i.mdx)("p",null,"For more information on customizing OpenSearch text analysis, see the OpenSearch ",(0,i.mdx)("a",{parentName:"p",href:"https://opensearch.org/docs/latest/analyzers/#built-in-analyzers"},"analyzers")," documentation."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-javascript-jquery-widgets-quick-search-md-6f416c4ab47301ef5910.js.map