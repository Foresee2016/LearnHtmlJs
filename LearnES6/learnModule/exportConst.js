export const NAME='foresee';
export const PI=3.14;
export const PREFIX='as123';
//另一种写法，优先考虑使用这种写法。因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。
var key1='val1';
let key2='val2';
//export命令除了输出变量，还可以输出函数或类（class）。
export function func2() {
    return 'func2 str';
}
function func1() {
    return 'func1 str';
}
function func3(){
    return 'func3 str';
}
export {key1, key2, func1, func3 as renameFunc, func3 as another }; //使用as重命名，重命名后可以出现多次
//export命令只要在顶层，位置任意，不能再块内部或方法内部，因为不能静态优化。import也是，必须在顶层。

