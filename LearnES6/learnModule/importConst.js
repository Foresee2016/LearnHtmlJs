import * as CONSTS from './exportConst';//加载全部
console.log(CONSTS.NAME);
console.log(CONSTS.PI);
import {key1, func1 as newFuncName} from './exportConst';//import命令会被提升到整个模块头部，首先执行。
console.log(key1, newFuncName());
//如果在一个模块中先输入后输出，import ... from 再export可以省略
export {func1} from './exportConst';//但可读性差，还是写为下面的
import {func1 as funcName} from './exportConst';
export {funcName};
//import语句会执行加载的模块，所以可以导入模块，不赋变量
import './exportRun';

//因为一个模块只能有一个export default所以import的变量名没有使用大括号
import customName from './exportDefault'; //使用export default导出的可以在import时指定任意名称，用户无需知道函数名即可导入使用。
customName();
//本质上是导入了名字是default的变量或方法，所以可以
import {default as customName2} from './exportDefault';
customName2();
//可以导入默认的同时导入其他方法
import customName3, {add} from './exportDefault';
customName3();
add(1,2);

//可以导入导出类（class）

//模块继承
//export * from './exportDefault';//这一句将父模块全部导出，可再导出自己的一些。父模块的default不会导出，即外部使用这一模块就默认导出这一模块的default

//CommonJS模块输出的是一个值的拷贝，而ES6模块输出的是值的引用。CommonJS模块输出的是被输出值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
/*
* ES6模块的运行机制与CommonJS不一样，它遇到模块加载命令import时，不会去执行模块，而是只生成一个动态的只读引用。等到真的需要用到时，再到模块里面去取值，换句话说，ES6的输入有点像Unix系统的”符
 号连接“，原始值变了，输入值也会跟着变。因此，ES6模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。
* */
/*
* “循环加载”（circular dependency）指的是，a脚本的执行依赖b脚本，而b脚本的执行又依赖a脚本。
* ES6与CommonJS相比，因为是引用，所以能处理循环加载。
* */