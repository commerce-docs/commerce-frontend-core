"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[2340],{33529:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return s}});var n=a(58168),r=a(80045),m=(a(88763),a(15680)),i=a(83407);const d=["components"],l={},o={_frontmatter:l},p=i.A;function s(e){let{components:t}=e,a=(0,r.A)(e,d);return(0,m.mdx)(p,(0,n.A)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"masonry-grid-component"},"Masonry (grid) component"),(0,m.mdx)("p",null,"The Masonry component is a collection of columns. It renders the masonry grid layout in the Ui component."),(0,m.mdx)("h2",{id:"dependencies"},"Dependencies"),(0,m.mdx)("p",null,"The Masonry component has dependencies on the following components:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Listing: ",(0,m.mdx)("inlineCode",{parentName:"li"},"app/code/Magento/Ui/view/base/web/js/grid/listing.js")),(0,m.mdx)("li",{parentName:"ul"},"Request Animation Frame: ",(0,m.mdx)("inlineCode",{parentName:"li"},"app/code/Magento/Ui/view/base/web/js/lib/view/utils/raf.js"))),(0,m.mdx)("h2",{id:"options"},"Options"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Option"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Default Value"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"containerId"),(0,m.mdx)("td",{parentName:"tr",align:null},"Images container id."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"-")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"minRatio"),(0,m.mdx)("td",{parentName:"tr",align:null},"Minimum aspect ratio for each image."),(0,m.mdx)("td",{parentName:"tr",align:null},"Int"),(0,m.mdx)("td",{parentName:"tr",align:null},"-")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"containerWidth"),(0,m.mdx)("td",{parentName:"tr",align:null},"Width of the container."),(0,m.mdx)("td",{parentName:"tr",align:null},"Int"),(0,m.mdx)("td",{parentName:"tr",align:null},"window.innerWidth")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"imageMargin"),(0,m.mdx)("td",{parentName:"tr",align:null},"Margin between images."),(0,m.mdx)("td",{parentName:"tr",align:null},"Int"),(0,m.mdx)("td",{parentName:"tr",align:null},"20")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"maxImageHeight"),(0,m.mdx)("td",{parentName:"tr",align:null},"Maximum height of the image."),(0,m.mdx)("td",{parentName:"tr",align:null},"Int"),(0,m.mdx)("td",{parentName:"tr",align:null},"240")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"containerWidthToMinRatio"),(0,m.mdx)("td",{parentName:"tr",align:null},"Minimum width and height ratio when the container width is less than default key."),(0,m.mdx)("td",{parentName:"tr",align:null},"Object"),(0,m.mdx)("td",{parentName:"tr",align:null},"{640: 3, 1280: 5, 1920: 8}")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"defaultMinRatio"),(0,m.mdx)("td",{parentName:"tr",align:null},"Default minimal image width to height ratio."),(0,m.mdx)("td",{parentName:"tr",align:null},"Int"),(0,m.mdx)("td",{parentName:"tr",align:null},"10")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"refreshFPS"),(0,m.mdx)("td",{parentName:"tr",align:null},"Layout update FPS during window resizing."),(0,m.mdx)("td",{parentName:"tr",align:null},"Int"),(0,m.mdx)("td",{parentName:"tr",align:null},"60")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"template"),(0,m.mdx)("td",{parentName:"tr",align:null},"Path to the component’s ",(0,m.mdx)("code",null,".html")," template."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"ui/grid/masonry")))),(0,m.mdx)("h2",{id:"examples"},"Examples"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<columns name="masonry_images_columns" component="Magento_Ui/js/grid/masonry">\n        <argument name="data" xsi:type="array">\n            <item name="config" xsi:type="array">\n                <item name="containerId" xsi:type="string">masonry-grid-example</item>\n            </item>\n        </argument>\n        ...\n</columns>\n')),(0,m.mdx)("h2",{id:"source-files"},"Source files"),(0,m.mdx)("p",null,"Extends ",(0,m.mdx)("inlineCode",{parentName:"p"},"Listing"),":"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/grid/masonry.js"},"app\\code\\Magento\\Ui\\view\\base\\web\\js\\grid\\masonry.js")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/grid/masonry.html"},"app\\code\\Magento\\Ui\\view\\base\\web\\templates\\grid\\masonry.html"))),(0,m.mdx)("h2",{id:"result"},"Result"),(0,m.mdx)("p",null,(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/f81d7a2a5ed7f2218e3f4b85a4cb0982/5530d/masonry-grid-result.webp 320w","/commerce-frontend-core/static/f81d7a2a5ed7f2218e3f4b85a4cb0982/0c8fb/masonry-grid-result.webp 640w","/commerce-frontend-core/static/f81d7a2a5ed7f2218e3f4b85a4cb0982/94b1e/masonry-grid-result.webp 1280w","/commerce-frontend-core/static/f81d7a2a5ed7f2218e3f4b85a4cb0982/96cd0/masonry-grid-result.webp 1619w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/f81d7a2a5ed7f2218e3f4b85a4cb0982/dd4a7/masonry-grid-result.png 320w","/commerce-frontend-core/static/f81d7a2a5ed7f2218e3f4b85a4cb0982/0f09e/masonry-grid-result.png 640w","/commerce-frontend-core/static/f81d7a2a5ed7f2218e3f4b85a4cb0982/bbbf7/masonry-grid-result.png 1280w","/commerce-frontend-core/static/f81d7a2a5ed7f2218e3f4b85a4cb0982/7b3de/masonry-grid-result.png 1619w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/f81d7a2a5ed7f2218e3f4b85a4cb0982/bbbf7/masonry-grid-result.png",alt:"Masonry Grid",title:"Masonry Grid",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-masonry-md-065cdf93f9ce223712d0.js.map