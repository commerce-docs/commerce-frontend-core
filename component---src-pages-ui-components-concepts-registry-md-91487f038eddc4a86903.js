"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[4552],{81932:function(e,n,o){o.r(n),o.d(n,{_frontmatter:function(){return i},default:function(){return c}});var t=o(58168),r=o(80045),a=(o(88763),o(15680)),m=o(83407);const l=["components"],i={},s=(d="InlineAlert",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)});var d;const p={_frontmatter:i},u=m.A;function c(e){let{components:n}=e,o=(0,r.A)(e,l);return(0,a.mdx)(u,(0,t.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"uiregistry-library"},"uiRegistry library"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"uiRegistry")," is in-memory, plain storage of entities by keys. Implements the ",(0,a.mdx)("inlineCode",{parentName:"p"},"get()"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"set()"),", and ",(0,a.mdx)("inlineCode",{parentName:"p"},"has()")," methods."),(0,a.mdx)("h2",{id:"javascript-debugging"},"JavaScript debugging"),(0,a.mdx)("p",null,"To debug the UI component JS, we first need to get a ",(0,a.mdx)("inlineCode",{parentName:"p"},"uiRegistry")," instance from the browser console. To do so, use the ",(0,a.mdx)("a",{parentName:"p",href:"../../javascript/resources.md"},"RequireJs ID")," ",(0,a.mdx)("inlineCode",{parentName:"p"},"uiRegistry"),"."),(0,a.mdx)("p",null,"In the browser console enter the following:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"var registry = require('uiRegistry');\n")),(0,a.mdx)("p",null,"Now we have ",(0,a.mdx)("inlineCode",{parentName:"p"},"uiRegistry")," instance in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"registry")," variable. We can use it to get an instance of any component."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"var component = registry.get('componentName');\n")),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"uiRegistry")," instance allows you to search for components using property values.\nIf you know a unique property value of a component that you need to find, you can use the following code to get the component:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"var component = registry.get('property = propertyValue');\n")),(0,a.mdx)("p",null,"To get a list of all components used on the current page, you can use this code:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"require('uiRegistry').get(function(component){console.log(component.name)});\n")),(0,a.mdx)("h3",{id:"asynchronously-retrieve-components-from-the-registry"},"Asynchronously retrieve components from the registry"),(0,a.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"This is the ",(0,a.mdx)("strong",{parentName:"p"},"recommended")," method for best performance."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"module('trigger', true);\nvar component = () => registry.get('componentName', function (component) {\n    component.trigger(true);\n});\n")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Examples:")),(0,a.mdx)("p",null,"The following code shows how to get a component by a full component name:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"// Admin > Products > Catalog > Add Product\nvar fieldName = registry.get('product_form.product_form.product-details.container_name.name');\n")),(0,a.mdx)("p",null,"The following code shows how to get a component by a property value:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"// Admin > Products > Catalog > Add Product\nvar fieldName = registry.get('index = name');\n// or\nfieldName = registry.get('inputName = product[name]');\n")),(0,a.mdx)("p",null,"The previous example gets the same JS component as using the full component name."),(0,a.mdx)("p",null,"Lets look what we have in component variable. It keeps component context with all properties, we can see component file, component name and so on."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"console.log(fieldName.name); // product_form.product_form.product-details.container_name.name\n\nfieldName.trigger('validate'); // will invoke validation\nfieldName.visible(false); // will hide field from page\nfieldName.visible(true);  // will show field again\nfieldName.value(); // will show current field value\nfieldName.value('New string value'); // will change field value to string 'New string value'\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-concepts-registry-md-91487f038eddc4a86903.js.map