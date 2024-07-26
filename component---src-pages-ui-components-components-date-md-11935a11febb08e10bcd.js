"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[5812],{51564:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return s}});var n=a(58168),m=a(80045),d=(a(88763),a(15680)),r=a(83407);const i=["components"],l={},o={_frontmatter:l},p=r.A;function s(e){let{components:t}=e,a=(0,m.A)(e,i);return(0,d.mdx)(p,(0,n.A)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"date-component"},"Date component"),(0,d.mdx)("p",null,"The Date component implements a custom date input field. It uses a date picker implementation provided by the ",(0,d.mdx)("a",{parentName:"p",href:"../../javascript/jquery-widgets/calendar.md"},"calendar widget"),"."),(0,d.mdx)("h2",{id:"options"},"Options"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Option"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Default"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"component")),(0,d.mdx)("td",{parentName:"tr",align:null},"The path to the component’s ",(0,d.mdx)("inlineCode",{parentName:"td"},".js")," file in terms of RequireJS."),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"'Magento_Ui/js/form/element/date'"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"elementTmpl")),(0,d.mdx)("td",{parentName:"tr",align:null},"The path to the ",(0,d.mdx)("inlineCode",{parentName:"td"},".html")," template of the particular field type component (date)."),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"'ui/form/element/date'"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"options")),(0,d.mdx)("td",{parentName:"tr",align:null},"The configuration object that is passed to the calendar widget."),(0,d.mdx)("td",{parentName:"tr",align:null},"Object"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"{}"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"inputDateFormat")),(0,d.mdx)("td",{parentName:"tr",align:null},"Format of the date received from the server (ICU Date Format). Used only in date picker mode (",(0,d.mdx)("inlineCode",{parentName:"td"},"this.options.showsTime == false"),")."),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"'y-MM-dd'"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"outputDateFormat")),(0,d.mdx)("td",{parentName:"tr",align:null},"Format of the date sent to the server (ICU Date Format). Used only in date picker mode (",(0,d.mdx)("inlineCode",{parentName:"td"},"this.options.showsTime == false"),")"),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"'MM/dd/y'"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"pickerDateTimeFormat")),(0,d.mdx)("td",{parentName:"tr",align:null},"Date/time format that is used to display date in the input field."),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"''"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"shiftedValue")),(0,d.mdx)("td",{parentName:"tr",align:null},"Date/time value shifted to corresponding time zone, according to ",(0,d.mdx)("inlineCode",{parentName:"td"},"this.storeTimeZone")," property. This value is sent to the server."),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"''"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"storeTimeZone")),(0,d.mdx)("td",{parentName:"tr",align:null},"The timezone used."),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"'UTC'"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"template")),(0,d.mdx)("td",{parentName:"tr",align:null},"The path to the general field ",(0,d.mdx)("inlineCode",{parentName:"td"},".html")," template."),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"'ui/form/field'"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"timezoneFormat")),(0,d.mdx)("td",{parentName:"tr",align:null},"Timezone format, required for the ",(0,d.mdx)("a",{parentName:"td",href:"https://momentjs.com/"},"moment.js library")," for conversion."),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"YYYY-MM-DD HH:mm"))))),(0,d.mdx)("h2",{id:"source-files"},"Source files"),(0,d.mdx)("p",null,"Extends ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/form/element/abstract.js"},(0,d.mdx)("inlineCode",{parentName:"a"},"Abstract")),":"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/form/element/date.js"},(0,d.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Ui/view/base/web/js/form/element/date.js")))),(0,d.mdx)("h2",{id:"example"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-xml"},'<form>\n    ...\n    <fieldset>\n        ...\n        <field name="date_example" formElement="date">\n            <argument name="data" xsi:type="array">\n                <item name="config" xsi:type="array">\n                    <item name="source" xsi:type="string">some_source</item>\n                </item>\n            </argument>\n            <settings>\n                <validation>\n                    <rule name="validate-date" xsi:type="boolean">true</rule>\n                </validation>\n                <dataType>text</dataType>\n                <label translate="true">Date Example</label>\n                <visible>true</visible>\n                <dataScope>some_scope</dataScope>\n            </settings>\n        </field>\n        ...\n    </fieldset>\n    ...\n</form>\n')),(0,d.mdx)("h2",{id:"validation"},"Validation"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("strong",{parentName:"p"},"validate-date")," initialization rule that describes the required ",(0,d.mdx)("strong",{parentName:"p"},"dateFormat")," parameter should be specified:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"'validate-date': [\n          function (value, params, additionalParams) {\n              var test = moment(value, utils.convertToMomentFormat(additionalParams.dateFormat));\n\n              return $.mage.isEmptyNoTrim(value) || test.isValid();\n          },\n          $.mage.__('Please enter a valid date.')\n\n      ];\n")),(0,d.mdx)("p",null,"The following shows how to add date validation using a calendar widget as an example."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"data-validate=\"{'required-entry': true, 'validate-date': {dateFormat: 'MM/dd/Y'}}\"\n")),(0,d.mdx)("h2",{id:"result"},"Result"),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"295px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.627118644067796%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/7883c0a82b712587675b925f9511e623/66888/ui-date-result.webp 295w"],sizes:"(max-width: 295px) 100vw, 295px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/7883c0a82b712587675b925f9511e623/60cc9/ui-date-result.png 295w"],sizes:"(max-width: 295px) 100vw, 295px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/7883c0a82b712587675b925f9511e623/60cc9/ui-date-result.png",alt:"Date Component Example",title:"Date Component Example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n",(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"455px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"92.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/f59467911fc188027317b736f0f09ae8/5530d/ui-date-expanded-result.webp 320w","/commerce-frontend-core/static/f59467911fc188027317b736f0f09ae8/e2468/ui-date-expanded-result.webp 455w"],sizes:"(max-width: 455px) 100vw, 455px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/f59467911fc188027317b736f0f09ae8/dd4a7/ui-date-expanded-result.png 320w","/commerce-frontend-core/static/f59467911fc188027317b736f0f09ae8/c27a4/ui-date-expanded-result.png 455w"],sizes:"(max-width: 455px) 100vw, 455px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/f59467911fc188027317b736f0f09ae8/c27a4/ui-date-expanded-result.png",alt:"Date Component Expanded Example",title:"Date Component Expanded Example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-date-md-11935a11febb08e10bcd.js.map