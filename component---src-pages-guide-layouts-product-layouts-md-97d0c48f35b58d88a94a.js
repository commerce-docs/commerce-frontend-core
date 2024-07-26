"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[7333],{94717:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return u}});var n=a(58168),d=a(80045),l=(a(88763),a(15680)),i=a(83407);const m=["components"],r={},o={_frontmatter:r},p=i.A;function u(e){let{components:t}=e,a=(0,d.A)(e,m);return(0,l.mdx)(p,(0,n.A)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"product-layouts"},"Product layouts"),(0,l.mdx)("p",null,"This topic provides information about product layouts files. The application allows you to customize view pages for all product types in the common layout files. It is also possible to perform the customization for a particular product type or even for a concrete product page by Product Entity ID or SKU."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Layout file"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"catalog_product_view.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Common layout. Affects all product types")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"catalog_product_view_type_bundle.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to ",(0,l.mdx)("inlineCode",{parentName:"td"},"bundle")," product only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"catalog_product_view_type_configurable.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to ",(0,l.mdx)("inlineCode",{parentName:"td"},"configurable")," product only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"catalog_product_view_type_downloadable.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to ",(0,l.mdx)("inlineCode",{parentName:"td"},"downloadable")," product only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"catalog_product_view_type_grouped.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to ",(0,l.mdx)("inlineCode",{parentName:"td"},"grouped")," product only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"catalog_product_view_type_simple.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to ",(0,l.mdx)("inlineCode",{parentName:"td"},"simple")," product only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"catalog_product_view_type_virtual.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to ",(0,l.mdx)("inlineCode",{parentName:"td"},"virtual")," product only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"catalog_product_view_id_{id}.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to the specific product by ",(0,l.mdx)("inlineCode",{parentName:"td"},"Entity ID")," value. E.g. ",(0,l.mdx)("inlineCode",{parentName:"td"},"catalog_product_view_id_45.xml"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"catalog_product_view_sku_{sku}.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to the specific product by ",(0,l.mdx)("inlineCode",{parentName:"td"},"SKU")," value. E.g. ",(0,l.mdx)("inlineCode",{parentName:"td"},"catalog_product_view_sku_24-WG080.xml"))))),(0,l.mdx)("h2",{id:"customize-product-view-pages"},"Customize product view pages"),(0,l.mdx)("p",null,"Use containers on the product page to structure content in the layout. You can reference the container and add blocks to it."),(0,l.mdx)("p",null,"Containers assign content structure to a page using container tags within a layout XML file. A container has no additional content except the content of included elements. Examples of containers include:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"product.info.main")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"product.info.price")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"product.info.stock.sku")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"product.info.form.content")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"product.info.extrahint")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"product.info.social")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"product.info.media"))),(0,l.mdx)("h3",{id:"example"},"Example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<move element="product.info.social" destination="product.info.main" before="product.info.price"/>\n')),(0,l.mdx)("h2",{id:"checkout-cart-configure-page"},"Checkout cart configure page"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Layout file"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"checkout_cart_configure.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Common layout. Affects all product types")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"checkout_cart_configure_type_bundle.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to ",(0,l.mdx)("inlineCode",{parentName:"td"},"bundle")," product only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"checkout_cart_configure_type_configurable.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to ",(0,l.mdx)("inlineCode",{parentName:"td"},"configurable")," product only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"checkout_cart_configure_type_downloadable.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to ",(0,l.mdx)("inlineCode",{parentName:"td"},"downloadable")," product only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"checkout_cart_configure_type_simple.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to ",(0,l.mdx)("inlineCode",{parentName:"td"},"simple")," product only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"checkout_cart_configure_id_{id}.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to the specific product by ",(0,l.mdx)("inlineCode",{parentName:"td"},"Entity ID")," value. E.g. ",(0,l.mdx)("inlineCode",{parentName:"td"},"checkout_cart_configure_id_45.xml"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"checkout_cart_configure_sku_{sku}.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to the specific product by ",(0,l.mdx)("inlineCode",{parentName:"td"},"SKU")," value. E.g. ",(0,l.mdx)("inlineCode",{parentName:"td"},"checkout_cart_configure_sku_24-WG080.xml"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"checkout_cart_item_renderers.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to renderer's cart page items")))),(0,l.mdx)("h2",{id:"wishlist-item-configure-page"},"Wishlist item configure page"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Layout file"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"wishlist_index_configure.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Common layout. Affects all product types")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"wishlist_index_configure_type_bundle.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to ",(0,l.mdx)("inlineCode",{parentName:"td"},"bundle")," product only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"wishlist_index_configure_type_configurable.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to ",(0,l.mdx)("inlineCode",{parentName:"td"},"configurable")," product only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"wishlist_index_configure_type_downloadable.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to ",(0,l.mdx)("inlineCode",{parentName:"td"},"downloadable")," product only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"wishlist_index_configure_type_grouped.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to ",(0,l.mdx)("inlineCode",{parentName:"td"},"grouped")," product only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"wishlist_index_configure_type_simple.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to ",(0,l.mdx)("inlineCode",{parentName:"td"},"simple")," product only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"wishlist_index_configure_id_{id}.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to the specific product by ",(0,l.mdx)("inlineCode",{parentName:"td"},"Entity ID")," value. E.g. ",(0,l.mdx)("inlineCode",{parentName:"td"},"wishlist_index_configure_id_45.xml"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"wishlist_index_configure_sku_{sku}.xml")),(0,l.mdx)("td",{parentName:"tr",align:null},"Layout from this file is applied to the specific product by ",(0,l.mdx)("inlineCode",{parentName:"td"},"SKU")," value. E.g. ",(0,l.mdx)("inlineCode",{parentName:"td"},"wishlist_index_configure_sku_24-WG080.xml"))))),(0,l.mdx)("p",null,"For setting a custom layout on specific category, product, and CMS pages, see ",(0,l.mdx)("a",{parentName:"p",href:"xml-manage.md"},"Common layout customization tasks"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-layouts-product-layouts-md-97d0c48f35b58d88a94a.js.map