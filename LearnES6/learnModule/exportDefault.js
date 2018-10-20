function add(x, y) {
    return x+y;
}
export {add};
//export default指定默认输出，这样用户再import时无需读文档去知道它们要导入哪些函数名
//一个模块只能有一个默认
export default function () {//这个函数可以有名称，但import时依然按匿名函数，即名称只内部使用。
    console.log('default func');
}
//本质上，该语句只是输出一个名字是default的变量或方法，所以可自己任意定
// export {add as default}