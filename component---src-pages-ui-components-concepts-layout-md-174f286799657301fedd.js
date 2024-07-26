"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[5101],{90701:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return u}});var a=t(58168),m=t(80045),o=(t(88763),t(15680)),i=t(83407);const l=["components"],d={},r={_frontmatter:d},p=i.A;function u(e){let{components:n}=e,t=(0,m.A)(e,l);return(0,o.mdx)(p,(0,a.A)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"uilayout-service-object"},"uiLayout service object"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"uiLayout")," service object is a JavaScript function object used for initializing and configuring UI components.\nThis object is defined in the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/core/renderer/layout.js"},(0,o.mdx)("inlineCode",{parentName:"a"},"layout.js"))," file in the UI module."),(0,o.mdx)("h2",{id:"run-method"},(0,o.mdx)("inlineCode",{parentName:"h2"},"run()")," method"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"run()")," method is the class entry point represented by ",(0,o.mdx)("inlineCode",{parentName:"p"},"uiLayout")," and has the following signature:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"run(nodes, parent, cached, merge)")),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"nodes")),(0,o.mdx)("td",{parentName:"tr",align:null},"Object"),(0,o.mdx)("td",{parentName:"tr",align:null},"Configuration object for a UI component")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"parent")),(0,o.mdx)("td",{parentName:"tr",align:null},"Object"),(0,o.mdx)("td",{parentName:"tr",align:null},"The parent component of the UI component")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"cached")),(0,o.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,o.mdx)("td",{parentName:"tr",align:null},"Determines if ",(0,o.mdx)("inlineCode",{parentName:"td"},"nodes")," should be cached")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"merge")),(0,o.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,o.mdx)("td",{parentName:"tr",align:null},"Determines if ",(0,o.mdx)("inlineCode",{parentName:"td"},"nodes")," should be merged")))),(0,o.mdx)("p",null,"If ",(0,o.mdx)("inlineCode",{parentName:"p"},"cached")," is set to ",(0,o.mdx)("inlineCode",{parentName:"p"},"true"),", the key for the cache is constructed from the object keys in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"node")," parameter.\nUse the ",(0,o.mdx)("inlineCode",{parentName:"p"},"cached")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"merge")," parameters when a UI component needs to be updated during runtime."),(0,o.mdx)("h3",{id:"nodes-configuration-object"},(0,o.mdx)("inlineCode",{parentName:"h3"},"nodes")," configuration object"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"nodes")," parameter is a JavaScript object used by the ",(0,o.mdx)("inlineCode",{parentName:"p"},"run()")," method to determine how a UI component is created."),(0,o.mdx)("p",null,"This object can have the following properties:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Property"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"name")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"Name of the component.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"parent")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"Full name of the component's parent element.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"template")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"Path to the component's ",(0,o.mdx)("inlineCode",{parentName:"td"},".html")," template.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"config")),(0,o.mdx)("td",{parentName:"tr",align:null},"Object"),(0,o.mdx)("td",{parentName:"tr",align:null},"Configuration properties for the UI component.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"children")),(0,o.mdx)("td",{parentName:"tr",align:null},"Object"),(0,o.mdx)("td",{parentName:"tr",align:null},"Configuration nodes for children components.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"isTemplate")),(0,o.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,o.mdx)("td",{parentName:"tr",align:null},"Whether to save the configuration as a template.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"nodeTemplate")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"The full name of a saved configuration template.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"provider")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"The full name of the DataSource UI component. This property is inherited from the parent if skipped.")))),(0,o.mdx)("h4",{id:"naming"},"Naming"),(0,o.mdx)("p",null,"The name of the property is the shortened name of the component.\nIt is used as the ",(0,o.mdx)("inlineCode",{parentName:"p"},"index")," property of the generated instance."),(0,o.mdx)("p",null,"The full name of the created UI component is the concatenation of the parent's ",(0,o.mdx)("inlineCode",{parentName:"p"},"name")," property and the component's ",(0,o.mdx)("inlineCode",{parentName:"p"},"name")," property.\nIf an instance with the same full name already exists, ",(0,o.mdx)("inlineCode",{parentName:"p"},"uiLayout")," will skip initialization."),(0,o.mdx)("h4",{id:"parent-initialization"},"Parent initialization"),(0,o.mdx)("p",null,"If the parent component is not yet initialized, ",(0,o.mdx)("inlineCode",{parentName:"p"},"uiLayout")," waits for it to appear in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"uiRegistry"),"."),(0,o.mdx)("h4",{id:"configuration-template"},"Configuration template"),(0,o.mdx)("p",null,"When ",(0,o.mdx)("inlineCode",{parentName:"p"},"isTemplate")," is set to ",(0,o.mdx)("inlineCode",{parentName:"p"},"true"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"uiLayout")," stores the configuration in a private ",(0,o.mdx)("inlineCode",{parentName:"p"},"templates")," variable instead of initializing the component."),(0,o.mdx)("p",null,"You can use this stored configuration to create dynamic component instances during runtime by specifying the full name of the configuration in ",(0,o.mdx)("inlineCode",{parentName:"p"},"nodeTemplate"),".\nIf the configuration is found, ",(0,o.mdx)("inlineCode",{parentName:"p"},"uiLayout")," uses that configuration instead of the current values."),(0,o.mdx)("h2",{id:"code-samples"},"Code samples"),(0,o.mdx)("p",null,"The example module referenced in the following examples uses ",(0,o.mdx)("inlineCode",{parentName:"p"},"ExampleCorp")," as its company value and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Sample")," as the module name."),(0,o.mdx)("p",null,"It also assumes the existence of the following files:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"app/code/ExampleCorp/Sample/view/base/web/js/my-new-component.js")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"app/code/ExampleCorp/Sample/view/base/web/templates/my-new-component/main-template.html"))),(0,o.mdx)("h3",{id:"create-a-child-component"},"Create a child component"),(0,o.mdx)("p",null,"You can use ",(0,o.mdx)("inlineCode",{parentName:"p"},"uiLayout")," to create a UI component instance that is a child of another UI component."),(0,o.mdx)("p",null,"The following example creates an instance of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"my-new-component")," component that is a child of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"uiCollection")," component."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Example component file:")," ",(0,o.mdx)("inlineCode",{parentName:"p"},"app/code/ExampleCorp/Sample/view/base/web/js/sample.js")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"define([\n    'uiLayout',\n    'uiCollection'\n], function (layout, Collection) {\n    'use strict';\n\n    return Collection.extend({\n        defaults: {\n            myNewComponentConfig: {\n                name: 'myNewComponent',\n                component: 'ExampleCorp_Sample/js/my-new-component',\n                nodeTemplate: 'ExampleCorp_Sample/my-new-component/main-template',\n                parent: '${ $.name }'\n            }\n        },\n        initialize: function () {\n            this._super();\n            layout([this.myNewComponentConfig]);\n\n            return this;\n        }\n    });\n});\n")),(0,o.mdx)("p",null,"The component instance is created when ",(0,o.mdx)("inlineCode",{parentName:"p"},"myNewComponentConfig")," is passed on to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"uiLayout")," service object:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"layout([this.myNewComponentConfig]);")),(0,o.mdx)("p",null,"This instance is stored in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"uiRegistry")," with other components and rendered using the logic for rendering ",(0,o.mdx)("inlineCode",{parentName:"p"},"uiCollection")," children templates."),(0,o.mdx)("h3",{id:"use-a-configuration-template"},"Use a configuration template"),(0,o.mdx)("p",null,"You can use the configuration of one UI component to create another UI component.\nThe ",(0,o.mdx)("inlineCode",{parentName:"p"},"isTemplate")," configuration for the original UI component must be ",(0,o.mdx)("inlineCode",{parentName:"p"},"true")," to save its configuration as a template in ",(0,o.mdx)("inlineCode",{parentName:"p"},"uiLayout"),"."),(0,o.mdx)("p",null,"In the following example, a custom Table UI component is created using an existing configuration template with the name ",(0,o.mdx)("inlineCode",{parentName:"p"},"my_row_template_component_name"),"."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.3/lib/web/mage/utils"},(0,o.mdx)("inlineCode",{parentName:"a"},"mageUtils"))," helper library is also used in this example to create the new component based on ",(0,o.mdx)("inlineCode",{parentName:"p"},"myRowTemplateConfig"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Example component file:")," ",(0,o.mdx)("inlineCode",{parentName:"p"},"app/code/ExampleCorp/Sample/view/base/web/js/table.js")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"define([\n    'uiLayout',\n    'uiCollection',\n    'mageUtils'\n], function (layout, Collection, utils) {\n    'use strict';\n\n    return Collection.extend({\n        defaults: {\n            myRowTemplateConfig: {\n                parent: '${ $.name }',\n                nodeTemplate: 'my_row_template_component_name'\n            }\n        },\n\n        addRow: function (rowIndex) {\n            var objectFromTemplate,\n                myRowTemplateConfig = this.myRowTemplateConfig;\n\n            myRowTemplateConfig.name = rowIndex;\n            objectFromTemplate = utils.template(myRowTemplateConfig);\n            layout([objectFromTemplate]);\n        }\n    });\n});\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-concepts-layout-md-174f286799657301fedd.js.map