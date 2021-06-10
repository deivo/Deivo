(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{690:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"堆栈内存释放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆栈内存释放"}},[t._v("#")]),t._v(" 堆栈内存释放")]),t._v(" "),a("h3",{attrs:{id:"堆内存释放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆内存释放"}},[t._v("#")]),t._v(" 堆内存释放")]),t._v(" "),a("ul",[a("li",[t._v("js 中堆内存，通常指的是"),a("code",[t._v("引用数据类型")]),t._v("，如对象的和方法、函数体的代码字符串")]),t._v(" "),a("li",[t._v("如果当前创建堆内存不被其他东西所占用（浏览器会在空闲的时候，查找每一个内存对的引用状况，不被占用的都会自己给回收掉），则释放；也可以说引用地址为 null 来释放")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deivo'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" opp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时obj和opp都占用着对象的堆内存，想要释放堆内存，需要")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 手动解除变量和值的关联（null：空对象指针）")]),t._v("\nobj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\nopp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])])]),a("h3",{attrs:{id:"栈内存释放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栈内存释放"}},[t._v("#")]),t._v(" 栈内存释放")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("js 中栈内存，通常指的是执行代码的环境、存储在变量对象中基本类型值、基于 ES6 的 let/const 形成块级作用域的栈内存")])]),t._v(" "),a("li",[a("p",[t._v("全局上下问，例如关闭浏览器就会释放全局执行环境栈")])]),t._v(" "),a("li",[a("p",[t._v("函数执行完成，如果函数形成私有上下文中的变量没有被以外上下所有占用时，当前私有上下也会进行销毁，闭包、死递归、死循环除外")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...;")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 函数执行形成栈内存，执行完成栈内存销毁")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> f占用了Fo执行形成的栈内存中的一个东西（返回小函数的对应的堆），")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 则Fo执行形成的栈内存不能被释放了")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[t._v("如果全局占用，可以通过将全局占用的变量赋值为"),a("code",[t._v("null")]),t._v("来释放内存")])])])}),[],!1,null,null,null);s.default=e.exports}}]);