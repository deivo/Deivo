(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{705:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"js-中数据类型检测中的四种方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-中数据类型检测中的四种方案"}},[t._v("#")]),t._v(" JS 中数据类型检测中的四种方案")]),t._v(" "),a("h3",{attrs:{id:"_1-typeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-typeof"}},[t._v("#")]),t._v(" 1. typeof")]),t._v(" "),a("ul",[a("li",[t._v("返回结果都是字符串")]),t._v(" "),a("li",[t._v('字符串包含了对应的数据类型："number"/"string"/"boolean"/"object"/"undefined"/"function"')]),t._v(" "),a("li",[t._v("【局限性】\n"),a("ul",[a("li",[t._v('typeof null => "object" null 不是对象，它是空对象指针')]),t._v(" "),a("li",[t._v('检测数据或者正则等特殊的对象，返回结果都是"object"，所以无法基于 typeof 判断是数据还是正则')])])])]),t._v(" "),a("h3",{attrs:{id:"_2-instanceof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-instanceof"}},[t._v("#")]),t._v(" 2. instanceof")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("语法：实例 instanceof 类")])]),t._v(" "),a("li",[t._v("检测某个实例是否属于这个类")]),t._v(" "),a("li",[t._v('它检测的底层机制：所有出现在其原型链上的类，检测结果都是"true"')]),t._v(" "),a("li",[a("strong",[t._v("【局限性】")]),t._v(" "),a("ul",[a("li",[t._v("由于可以基于"),a("code",[t._v("__proto__")]),t._v("或者 "),a("code",[t._v("prototype")]),t._v(" 改动原型链的动向，所以基于 instanceof 检测出来的结果不一定是准确的")]),t._v(" "),a("li",[t._v("基本数据类型的值，连对象都不是，更没有"),a("code",[t._v("proto")]),t._v("，虽说也是所属类的实例，在 JS 中业可以调取所属类原型上的放，但是 instanceof 是不认的")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> false")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> true")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-constructor"}},[t._v("#")]),t._v(" 3. constructor")]),t._v(" "),a("ul",[a("li",[t._v("和 instanceof 类似，也是非专业检测数据类型的，但是可以这样处理一下")]),t._v(" "),a("li",[a("strong",[t._v("语法：[val].constructor === 类")])]),t._v(" "),a("li",[t._v("相对于 instanceof 来讲基本类型也可以处理，而且因为获取实例的 constructor 实际上获取的是直接所属的类，所以在检测准性上比 instanceof 好一点")]),t._v(" "),a("li",[a("strong",[t._v("缺点：constructor 是可以随意被改动的")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Array'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-object-prototype-tostring-call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-object-prototype-tostring-call"}},[t._v("#")]),t._v(" 4. Object.prototype.toString.call")]),t._v(" "),a("ul",[a("li",[t._v("其它数据类型的内置原型上有"),a("code",[t._v("toString")]),t._v("方法，但是此方法用来转换字符串的，只有"),a("code",[t._v("Object")]),t._v("基类原型上的"),a("code",[t._v("toString")]),t._v("是用来检测数据类型的")]),t._v(" "),a("li",[a("code",[t._v("对象.toString()")]),t._v(": "),a("code",[t._v("对象")]),t._v(" 这个实例调用 "),a("code",[t._v("Object.prototype.toString")]),t._v(" 执行，方法执行里面的 "),a("code",[t._v("this")]),t._v(" 是当前操作的实例 "),a("code",[t._v("对象")]),t._v("，此方法就是检测实例"),a("code",[t._v("this")]),t._v(" 的数据类型，返回结果："),a("code",[t._v("[object 所属的类]")])]),t._v(" "),a("li",[a("code",[t._v("Object.prototype.toString.call(val)")]),t._v(": 基于"),a("code",[t._v("call")]),t._v("强制改变方法中的"),a("code",[t._v("this")]),t._v("指向"),a("code",[t._v("val")]),t._v("，就相当于检测"),a("code",[t._v("val")]),t._v("的数据类型")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在jq源码中就利用此方法来检测数据")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Deivo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [object Object]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ary "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Deivo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [object Array]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("ul",[a("li",[a("strong",[t._v("返回值格式：")]),t._v(" "),a("code",[t._v("[object Object/Array/RegExp/Date/Function/Null/Undefined/Number/String/Boolean/Symbol...]")])])]),t._v(" "),a("h3",{attrs:{id:"其它内置类-tostring-和-valueof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它内置类-tostring-和-valueof"}},[t._v("#")]),t._v(" 其它内置类 "),a("code",[t._v("toString")]),t._v(" 和 "),a("code",[t._v("valueof")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Number/String/Boolean/Symbol")]),t._v(" 他们的原型上都有："),a("code",[t._v("toString/valueOf")]),t._v("方法\n"),a("ul",[a("li",[a("code",[t._v("toString:")]),t._v(" 转化为字符串")]),t._v(" "),a("li",[a("code",[t._v("valueOf :")]),t._v(" 返回原始值")])])]),t._v(" "),a("li",[a("code",[t._v("Array/RegExp/Function")]),t._v(" 等内置累的原型上都有：\n"),a("ul",[a("li",[a("code",[t._v("toString：")]),t._v("转化为字符串")])])]),t._v(" "),a("li",[t._v("Object 的原型上\n"),a("ul",[a("li",[a("code",[t._v("toString:")]),t._v(" 返回当前实例所属类")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);