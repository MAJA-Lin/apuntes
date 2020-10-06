(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{370:function(s,a,t){"use strict";t.r(a);var n=t(25),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"比較-pass-by-value-reference-name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#比較-pass-by-value-reference-name"}},[s._v("#")]),s._v(" 比較 Pass by Value / Reference / Name")]),s._v(" "),t("h5",{attrs:{id:"date-2019-march-28"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#date-2019-march-28"}},[s._v("#")]),s._v(" Date: 2019/March/28")]),s._v(" "),t("br"),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"_60-seconds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_60-seconds"}},[s._v("#")]),s._v(" 60 seconds")]),s._v(" "),t("p",[s._v("似乎有點難...")]),s._v(" "),t("br"),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"_60-minutes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_60-minutes"}},[s._v("#")]),s._v(" 60 minutes")]),s._v(" "),t("p",[s._v("首先引用一段螞蟻書裡關於"),t("strong",[s._v("pass by value")]),s._v(" 及 "),t("strong",[s._v("pass by reference")]),s._v("的內容")]),s._v(" "),t("h4",{attrs:{id:"_5-9-passing-arguments-by-value-and-by-reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-9-passing-arguments-by-value-and-by-reference"}},[s._v("#")]),s._v(" 5.9 Passing Arguments By Value and By Reference")]),s._v(" "),t("blockquote",[t("p",[s._v("When arguments are "),t("em",[s._v("passed by value")]),s._v(", a "),t("em",[s._v("copy")]),s._v(" of the argument’s value"),t("br"),s._v("\nis made and passed to the called function.")]),s._v(" "),t("p",[s._v("Changes to the copy do "),t("em",[s._v("not")]),s._v(" affect an original"),t("br"),s._v("\nvariable’s value in the caller.")]),s._v(" "),t("p",[s._v("When an argument is passed by reference, the caller allows the"),t("br"),s._v("\ncalled function to "),t("em",[s._v("modify")]),s._v(" the original variable’s value.")]),s._v(" "),t("p",[s._v("Pass-by-value should be used whenever the called function does not need to modify"),t("br"),s._v("\nthe value of the caller’s original variable.")]),s._v(" "),t("p",[s._v("This prevents the accidental "),t("strong",[s._v("side effects")]),s._v(" (variable"),t("br"),s._v("\nmodifications) that so greatly hinder the development of correct and reliable software systems.")]),s._v(" "),t("p",[s._v("Pass-by-reference should be used only with "),t("em",[s._v("trusted")]),s._v(" called functions that need to"),t("br"),s._v("\nmodify the original variable.")]),s._v(" "),t("p",[s._v("In C, all arguments are passed by value.")]),s._v(" "),t("p",[s._v("As we’ll see in Chapter 7, it’s possible to "),t("strong",[s._v("simulate")]),s._v(" pass-by-reference by using the "),t("em",[s._v("address operator")]),s._v(" and the "),t("em",[s._v("indirection operator")]),s._v(".")])]),s._v(" "),t("h4",{attrs:{id:"傳值-pass-by-value"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#傳值-pass-by-value"}},[s._v("#")]),s._v(" 傳值(pass by value)")]),s._v(" "),t("p",[s._v("將變數傳送至函式上對應的參數時,"),t("br"),s._v("\n會將值複製再傳進去.")]),s._v(" "),t("p",[s._v("此時對這些變數的修改並不會影響原本變數的值."),t("br"),s._v("\n最有名的例子應該就是swap了:")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("swap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" temp "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x\n    x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" y\n    y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" temp\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" y "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("swap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// output: x = 5;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// y = 10;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("不管在swap()裡如何對x, y兩個變數做運算, 都"),t("strong",[s._v("不會")]),s._v("變更到main()裡面x與y的實際值.")]),s._v(" "),t("br"),s._v(" "),t("h4",{attrs:{id:"傳參考-pass-by-reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#傳參考-pass-by-reference"}},[s._v("#")]),s._v(" 傳參考(pass by reference)")]),s._v(" "),t("p",[s._v("若是以傳參考的方式傳遞變數, 則會允許被呼叫的函式去修改變數的原始值.")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("swap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    temp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("x\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("y\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" temp\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" y "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("swap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// output: x = 10;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// y = 5;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("br"),s._v(" "),t("h4",{attrs:{id:"傳名-pass-by-name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#傳名-pass-by-name"}},[s._v("#")]),s._v(" 傳名(pass by name)")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.scala-lang.org/tour/by-name-parameters.html",title:"Scala Documentation - BY-NAME PARAMETERS",target:"_blank",rel:"noopener noreferrer"}},[s._v("Scala的文件"),t("OutboundLink")],1),s._v("裡對傳名參數是這麼介紹的:")]),s._v(" "),t("blockquote",[t("p",[s._v("By-name parameters are only evaluated when used. They are in contrast to by-value parameters.")])]),s._v(" "),t("p",[s._v("這裡透過"),t("a",{attrs:{href:"http://metanest.jp/knuths_gps/",title:"Knuth's GPS に関すること",target:"_blank",rel:"noopener noreferrer"}},[s._v("Knuth's GPS に関すること - 名前呼びと Jensen's Device"),t("OutboundLink")],1),s._v("的程式碼來說明會比較易懂一些."),t("br"),s._v("\n(程式碼部份為了上色功能稍做更改)")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("by_name x "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" by_name cond "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    while "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cond"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"---"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 執行結果:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("h5",{attrs:{id:"runnable-sample-in-scala"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runnable-sample-in-scala"}},[s._v("#")]),s._v(" Runnable sample in Scala")]),s._v(" "),t("div",{staticClass:"language-scala line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scala"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("input"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cond"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Boolean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cond"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    println"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\nfoo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("以傳值呼叫來說, "),t("strong",[s._v("a < 10")]),s._v("在被傳送進foo()之前就先算出了值(true), 這段程式碼便會無窮迴圈, 無止盡的執行下去.")]),s._v(" "),t("p",[s._v("而傳名呼叫, 這段條件式foo裡面, 直到開始執行while的時候才去計算 "),t("strong",[s._v("a < 10")]),s._v("這段條件式, 因此結果會如同上面的輸出結果.")]),s._v(" "),t("p",[s._v("更詳細的中文解說可以看看"),t("a",{attrs:{href:"http://www.programmer-club.com.tw/showSameTitleN/c/20923.html",title:"Programmer Club - call-by-name by sunny_gong(simula)",target:"_blank",rel:"noopener noreferrer"}},[s._v("sunny_gong(simula)的回答"),t("OutboundLink")],1),s._v(":")]),s._v(" "),t("blockquote",[t("p",[s._v("call-by-name 源自於 Algol60 這個"),t("br"),s._v("\n古早的程式語言，它定義了兩種參數傳遞方式，"),t("br"),s._v("\ncall-by-value 與 call-by-name，")]),s._v(" "),t("p",[s._v("其中call-by-name 被定義為 Name Replacement：「參數列中的每個參數，如果未指定以"),t("br"),s._v("\n傳值的方式來傳遞，就必須以實際傳入的參數來取代。」")]),s._v(" "),t("p",[s._v("在 Compilers - Principles, Techniques, and Tools 這本書的 7.5 節中，它被解釋為 "),t("strong",[s._v("inline-expansion")]),s._v("。")]),s._v(" "),t("p",[s._v("其原因是，以 call-by-name 的方式呼叫函式時，如果在某個參數位置上指定了一個運算式"),t("br"),s._v("\n(expression) 當作參數，那麼這個 expression 會被直接傳入函式裡面進行展開，")]),s._v(" "),t("p",[s._v("所以，這個 expression 是在函式裡面才進行運算的，而不是在參數列中預先計算好它的值再傳"),t("br"),s._v("\n進去。")]),s._v(" "),t("p",[s._v("這就產生了 delayed evaluation (延遲計算) 的效果。")]),s._v(" "),t("p",[s._v("delayed evaluation 的好處是，只有當函式需要某個 expression 參數的值，該 expression 才會被計算，否則就不用了。")])]),s._v(" "),t("p",[s._v("至於英文的介紹可以參考Simon Fraser University的教授Robert D. Cameron所寫的這篇"),t("a",{attrs:{href:"http://www.cs.sfu.ca/~cameron/Teaching/383/PassByName.html",title:"Pass-By-Name Parameter Passing by Robert D. Cameron",target:"_blank",rel:"noopener noreferrer"}},[s._v("文章"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("br"),s._v(" "),t("p",[s._v("值得注意的是, 在螞蟻書裡有提到這麼一段:")]),s._v(" "),t("p",[s._v("C "),t("strong",[s._v("只有")]),s._v(" 傳值; 傳參考是靠著"),t("em",[s._v("address operator")]),s._v(" 與 "),t("em",[s._v("indirection operator")]),s._v(" 來達成的.")]),s._v(" "),t("h4",{attrs:{id:"_7-4-passing-arguments-to-functions-by-reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-passing-arguments-to-functions-by-reference"}},[s._v("#")]),s._v(" 7.4 Passing Arguments to Functions by Reference")]),s._v(" "),t("blockquote",[t("p",[s._v("All arguments in C are passed by value."),t("br"),s._v("\nIn C, you use "),t("em",[s._v("pointers")]),s._v(" and the "),t("em",[s._v("indirection operator")]),s._v(" to "),t("strong",[s._v("simulate")]),s._v(" pass-by-reference.")]),s._v(" "),t("p",[s._v("When calling a function with arguments that should be modified, the addresses of the arguments are passed. This is normally accomplished by applying the address operator ("),t("strong",[s._v("&")]),s._v(") to"),t("br"),s._v("\nthe variable (in the caller) whose value will be modified.")]),s._v(" "),t("p",[s._v("As we saw in Chapter 6, arrays are"),t("br"),s._v("\nnot passed using operator "),t("strong",[s._v("&")]),s._v(" because C "),t("em",[s._v("automatically")]),s._v(" passes the starting location in memory"),t("br"),s._v("\nof the array (the name of an array is equivalent to "),t("strong",[s._v("&arrayName")]),s._v("[0]).")]),s._v(" "),t("p",[s._v("When the address of"),t("br"),s._v("\na variable is passed to a function, the indirection operator (*) may be used in the function"),t("br"),s._v("\nto modify the value at that location in the caller’s memory.")])]),s._v(" "),t("br"),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"php裡的pass-by-reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php裡的pass-by-reference"}},[s._v("#")]),s._v(" PHP裡的pass by reference")]),s._v(" "),t("p",[s._v("了解了這幾種傳遞參數方式的不同以後, 就可以回來看PHP實踐pass-by-reference的部分啦.")]),s._v(" "),t("p",[s._v("程式碼參考自StackOverflow的"),t("a",{attrs:{href:"https://stackoverflow.com/questions/40480/is-java-pass-by-reference-or-pass-by-value",title:"Is Java “pass-by-reference” or “pass-by-value”?",target:"_blank",rel:"noopener noreferrer"}},[s._v("問答(Is Java “pass-by-reference” or “pass-by-value”?)"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("p",[s._v("同時也可以參考這一篇"),t("a",{attrs:{href:"http://schlueters.de/blog/archives/125-Do-not-use-PHP-references.html",title:"Do not use PHP references",target:"_blank",rel:"noopener noreferrer"}},[s._v("部落格文章"),t("OutboundLink")],1),s._v(" (或是"),t("a",{attrs:{href:"https://learnku.com/laravel/t/9184/php-reference-is-a-pit-please-use-it-carefully",title:"PHP 引用是个坑，请慎用",target:"_blank",rel:"noopener noreferrer"}},[s._v("簡中翻譯版"),t("OutboundLink")],1),s._v(")")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Simple sample\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sample")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("__construct")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("value")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("value")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PHP_EOL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Sample "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sample")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sample")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"111"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// AAA")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 111")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sample")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sample")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"222"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// BBB")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 222")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sample")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"333"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// CCC")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 333")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$prova")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sample")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"000"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 000")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$prova")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 111")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 222")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 333")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$prova")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 111")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br")])]),t("p",[s._v("首先創造了一個新的Sample, 設定它的值是000, 並指派給 "),t("em",[s._v("prova")]),s._v(".")]),s._v(" "),t("p",[s._v("接著執行test()這個函式, 裡面會把剛剛傳進去的 "),t("em",[s._v("prova")]),s._v(" 指派給 "),t("em",[s._v("sample")]),s._v("這個變數, 在AAA行會把"),t("em",[s._v("sample")]),s._v("的值改寫成111.")]),s._v(" "),t("p",[s._v("可是, 當執行到BBB行的時候, 再度創建了一個新的Sample物件, 這時候因為產生了新的記憶體位址, "),t("em",[s._v("sample")]),s._v(" 會去紀錄這個新的位址, 而不會是原來的 "),t("em",[s._v("prova")]),s._v("的位址, 於是test()函式執行完返回至"),t("strong",[s._v("main()")]),t("br"),s._v("\n後, "),t("em",[s._v("prova")]),s._v("的最終結果會是111.")]),s._v(" "),t("br"),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[s._v("#")]),s._v(" References")]),s._v(" "),t("br"),s._v(" "),t("h4",{attrs:{id:"其他參考資料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他參考資料"}},[s._v("#")]),s._v(" 其他參考資料")]),s._v(" "),t("p",[s._v("Deitel, P & Deitel, H (2013). "),t("a",{attrs:{href:"http://www.deitel.com/Books/C/CHowtoProgram7e/tabid/3635/Default.aspx",target:"_blank",rel:"noopener noreferrer"}},[s._v("C How to Program 7th Edition"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("p",[s._v("GJLMoTea. (2018). "),t("a",{attrs:{href:"https://home.gamer.com.tw/creationDetail.php?sn=4051523",target:"_blank",rel:"noopener noreferrer"}},[s._v("Call by value, Call by reference (address), Call by name, Call by value and copy restore"),t("OutboundLink")],1),s._v(". 巴哈姆特.")]),s._v(" "),t("p",[s._v("huli. (2018). "),t("a",{attrs:{href:"https://blog.techbridge.cc/2018/06/23/javascript-call-by-value-or-reference/",target:"_blank",rel:"noopener noreferrer"}},[s._v("深入探討 JavaScript 中的參數傳遞：call by value 還是 reference？"),t("OutboundLink")],1),s._v(". TechBridge 技術共筆部落格.")]),s._v(" "),t("p",[s._v("阮一峰. (2015). "),t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/04/tail-call.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("尾调用优化"),t("OutboundLink")],1),s._v(". 阮一峰的网络日志.")]),s._v(" "),t("p",[s._v("Wikipedia. (2019). "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Evaluation_strategy",target:"_blank",rel:"noopener noreferrer"}},[s._v("Evaluation strategy"),t("OutboundLink")],1),s._v(". Wikipedia.")]),s._v(" "),t("p",[s._v("[Title](href link)")])])}),[],!1,null,null,null);a.default=e.exports}}]);