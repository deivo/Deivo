(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{688:function(t,a,v){"use strict";v.r(a);var _=v(7),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"执行上下文-ec"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文-ec"}},[t._v("#")]),t._v(" 执行上下文（EC）")]),t._v(" "),v("h3",{attrs:{id:"引言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[t._v("#")]),t._v(" 引言：")]),t._v(" "),v("ul",[v("li",[t._v("在 JS 引擎中对变量的存储主要有两种位置，"),v("code",[t._v("栈内存")]),t._v("和"),v("code",[t._v("堆内存")])]),t._v(" "),v("li",[t._v("浏览器中，无论是栈内存还是堆内存，都是在计算机内存中分配的一块空间。")])]),t._v(" "),v("h4",{attrs:{id:"栈内存-stack"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#栈内存-stack"}},[t._v("#")]),t._v(" 栈内存（Stack）")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("作用：")]),t._v(" 主要用于存储各种基本数据类型的变量，如 Boolean、Boolean、Number、String、Undefined、Null，以及对象变量的指针。通常栈内存中的变量在使用完毕就会被垃圾回收，"),v("code",[t._v("闭包除外")])])]),t._v(" "),v("h4",{attrs:{id:"堆内存-heap"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#堆内存-heap"}},[t._v("#")]),t._v(" 堆内存（Heap）")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("作用：")]),t._v(" 主要用来存储我们需要使用的引用数据类型的属性和方法，堆内存的释放是通过空对象指针 null 来释放空间。")]),t._v(" "),v("li",[v("strong",[t._v("特点：")]),t._v(" 任何堆内存都是一个十六进制的地址，后期都是通过地址来访问属性和方法")])]),t._v(" "),v("h3",{attrs:{id:"概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念：")]),t._v(" "),v("ul",[v("li",[t._v("执行上下文（简称“上下文”），通俗点讲就是运行 Javascript 代码时，当代码进去一个环境时，会为其代码创建一个执行环境，主要的目的是确定代码执行作用域，同时创建"),v("code",[t._v("局部变量对象")]),t._v("（VO）等等")])]),t._v(" "),v("h3",{attrs:{id:"分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[t._v("#")]),t._v(" 分类：")]),t._v(" "),v("h4",{attrs:{id:"全局上下文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#全局上下文"}},[t._v("#")]),t._v(" 全局上下文")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("全局上下文")]),t._v(" 也就是最外层的代码执行的上下文，在浏览器中，全局上下文通常说的是 window 对象")])]),t._v(" "),v("ul",[v("li",[t._v("JS 代码执行形成的全局执行上下文，进入到栈内存执行， 叫"),v("code",[t._v("进栈")]),t._v("。")]),t._v(" "),v("li",[t._v("执行完代码，可能会把形成的上下文释放出栈，叫"),v("code",[t._v("出栈")]),t._v("。")])]),t._v(" "),v("h4",{attrs:{id:"局部上下文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#局部上下文"}},[t._v("#")]),t._v(" 局部上下文")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("局部上下文")]),t._v(" 通常来说就是函数执行，因为函数代码执行，浏览器会为其创建一个全新的执行上下文")])]),t._v(" "),v("h3",{attrs:{id:"全局对象-go"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#全局对象-go"}},[t._v("#")]),t._v(" 全局对象 （GO）")]),t._v(" "),v("ul",[v("li",[t._v("全称：Global Object")]),t._v(" "),v("li",[t._v("在浏览器中，全局对象表示浏览器中提供的内置属性和方法，"),v("code",[t._v("window")]),t._v("指向这个全局对象（GO）")])]),t._v(" "),v("h3",{attrs:{id:"变量对象-vo"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#变量对象-vo"}},[t._v("#")]),t._v(" 变量对象 （VO）")]),t._v(" "),v("ul",[v("li",[t._v("全称：Variable Object")]),t._v(" "),v("li",[t._v("每一个上下文都有一个关联的"),v("code",[t._v("变量对象")]),t._v("，这个上下文中的所有定义的变量和函数都存在于这个对象上。")])]),t._v(" "),v("h4",{attrs:{id:"全局变量对象-vo-g"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#全局变量对象-vo-g"}},[t._v("#")]),t._v(" 全局变量对象 VO(G)")]),t._v(" "),v("ul",[v("li",[t._v("用来存储全局上下问定义的变量和函数的空间")])]),t._v(" "),v("h4",{attrs:{id:"活动对象-ao"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#活动对象-ao"}},[t._v("#")]),t._v(" 活动对象 （AO）")]),t._v(" "),v("ul",[v("li",[t._v("如果当前上下文是函数，则其"),v("code",[t._v("活动对象")]),t._v("会被用作"),v("code",[t._v("变量对象")]),t._v("。")])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"title"}),v("p",[v("strong",[t._v("VO 和 AO 的区别：")]),t._v("\nVO 和 AO 都是变量对象，代码执行形成的上下文中，用来存储创建的变量和值的地方；每一个执行上下文中都会有一个自己的变量对象，函数执行上下文中叫 AO， AO 是活动对象，是 VO 的一个分支。")])]),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"title"}),v("p",[v("strong",[t._v("VO 和 GO 的区别：")]),t._v("\nGO 是全局对象，是浏览器提供的内置的属性和方法，都存在一个单独的内存中，也就是堆内存；VO 是变量对象，是当前上下文中用来存储创建的变量和值的一个空间，但它不是存储在堆内存中；全局代码执行所形成的全局上下文中，基于 "),v("code",[t._v("var")]),t._v(" 和 "),v("code",[t._v("function")]),t._v(" 声明的全局变量给 GO 映射一份，但是在 ES6 中基于 let 和 const 声明的全局变量和 GO 没有任何关系。")])]),v("h2",{attrs:{id:"作用域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),v("h3",{attrs:{id:"分类-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分类-2"}},[t._v("#")]),t._v(" 分类：")]),t._v(" "),v("ol",[v("li",[t._v("全局作用域")]),t._v(" "),v("li",[t._v("函数作用域")]),t._v(" "),v("li",[t._v("块级作用域")])]),t._v(" "),v("h2",{attrs:{id:"函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),v("h3",{attrs:{id:"函数作用域-scope"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域-scope"}},[t._v("#")]),t._v(" 函数作用域 scope")]),t._v(" "),v("ul",[v("li",[t._v("即函数创建的时候，就定义来函数的作用域，即当前创建函数所在的上下文")]),t._v(" "),v("li",[t._v("如果在全局下创建的函数，函数执行的作用域就是创建函数时所在的执行上下文。")])]),t._v(" "),v("h3",{attrs:{id:"函数执行的目的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#函数执行的目的"}},[t._v("#")]),t._v(" 函数执行的目的：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("把创建函数存储在对内存中代码字符串执行，代码执行就要有自己的执行环境")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("1. 形成一个全新的私有上下文，供代码执行（进栈执行）")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("2. 全新的上下文进栈执行")])]),t._v(" "),v("ul",[v("li",[t._v("把全局上下文放到栈的底部。（压缩栈）")]),t._v(" "),v("li",[t._v("新进来的上下文放到栈的顶部。")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("3. 私有的上下文进栈执行，就会形成一个空间用来存储私有的变量对象，函数的私有变量对象就是"),v("code",[t._v("AO")]),t._v("，然后在代码执行之前，还要做一些事情：")])]),t._v(" "),v("ul",[v("li",[v("ol",[v("li",[t._v("初始化作用域链（scopeChina）：<[[EC(FN)]], [[EC(G)]]>; 作用域链的组成规则：<函数创建所在的上下文，函数的作用域（[[创建函数的时所处的执行上下文]]）>")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"2"}},[v("li",[t._v("初始化 this 指向：")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"3"}},[v("li",[t._v("初始化实参集合：arguments")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"4"}},[v("li",[t._v("形参赋值: [[形参变量也是存放到自己上下文中的私有变量对象中]]")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"5"}},[v("li",[t._v("变量提升：")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"6"}},[v("li",[t._v("代码执行：")])])])])])])])]),t._v(" "),v("h3",{attrs:{id:"小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结：")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"}),v("p",[t._v("函数执行都会形成一个全新私有的执行上下文，供函数体中的代码执行，而上下文是执行环境，都要把形成的私有上下文进栈执行，如果此时执行环境栈中有一个没有被释放的上下文，需要这个上下文压缩到栈的底部，在把全新的私有上下放到栈的顶端来执行，执行之前需要有一个私有变量对象(AO)，用来存储代码执行时创建的变量和值的空间，在代码执行之前还需要做一些其他事情，如初始化作用域链（scopeChina），初始化作用域链由两部分组成，链的起始端是当前所在的上下文，链的末端是看函数创建时所在的执行上下文，作用域就是创建时的上下文；初始化作用域链的目的是后期代码执行的时候，遇到操作一个变量，先看是否在当前上下文中的变量对象中存在，如果存在，以后操作都用当前上下文中，如果不存在，则向上级上下文中的变量对象中查找，如果不存在，再次查找直到找到全局为止；初始化作用域链之后，还要做一些事情，初始化 this 指向，初始化实参集合，形参赋值，变量提升这个几个阶段，最后才会代码执行，代码执行完成，看当前上下文的变量对象中是否有被出当前上下文以外的东西所占用的，如果没有，则当前上下文执行完，就会被出栈（释放）,在把全局上下文放到栈顶端执行。")])])])}),[],!1,null,null,null);a.default=s.exports}}]);