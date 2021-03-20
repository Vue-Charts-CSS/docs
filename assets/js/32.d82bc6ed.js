(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{409:function(t,a,s){"use strict";s.r(a);var e=s(49),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[s("strong",[t._v("Charts.css")]),t._v(" visualize data by applying "),s("strong",[t._v("CSS classes")]),t._v(" on HTML tags. The data is structured using semantic HTML tags and styled using CSS classes which change the visual representation displayed to the end user.")]),t._v(" "),s("p",[s("strong",[t._v("Vue Charts.css")]),t._v(" will handle the classes for you. You can customize your charts with "),s("code",[t._v("props")]),t._v(", or when needed override the wrapper and add CSS classes.")]),t._v(" "),s("h2",{attrs:{id:"basic-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-setup"}},[t._v("#")]),t._v(" Basic Setup")]),t._v(" "),s("div",{staticClass:"language-vue line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("charts-css")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("heading")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Coffee count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":labels")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Mon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Tue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Wed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":datasets")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[ { values: [4, 2, 70,] } ]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("We suggest with all of your charts, you provide values for the  "),s("code",[t._v("heading")]),t._v(", "),s("code",[t._v("labels")]),t._v(", and "),s("code",[t._v("datasets")]),t._v(" props. Using these props doesn't mean you have to render them on the front, but they will improve accessibility of your chart.")]),t._v(" "),s("p",[t._v("Underneath the hood, The data is placed in the document as HTML "),s("code",[t._v("<table>")]),t._v(" tag, making it visible to search engines and screen readers.")]),t._v(" "),s("h3",{attrs:{id:"why-datasets-what-if-i-only-have-one"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-datasets-what-if-i-only-have-one"}},[t._v("#")]),t._v(" Why "),s("code",[t._v("datasets")]),t._v(", what if I only have one?")]),t._v(" "),s("p",[t._v("This wrapper makes it easy to switch between chart types without hassle. When you only have a single dataset (typical of the "),s("code",[t._v("column")]),t._v(" chart) then you only need to specify one entry in your datasets object.")])])}),[],!1,null,null,null);a.default=n.exports}}]);