// 思路：
// 1、函数要返回一个函数(我是否可以先声明一个函数，然后返回)
// 2、如果add没有参数了，那我就直接返回累加即可
// 3、我怎么知道add没有参数了呢？先要收集参数吧(多次收集)
// 4、还要在函数fn内部返回fn(这里可能会想这个会不会死循环，答案是不会，因为返回的是fn而不是让fn()执行)
// 5、这个时候打印的是字符串的函数fn，其实是fn.toString 的结果，所以可以 写return _args.reduce((acc, cur) => acc + cur)
function add() {
  const _args = [...arguments] // 3、我怎么知道add没有参数了呢？先要收集参数吧,收集第一次的参数
  function fn() { // 1、函数要返回一个函数(我是否可以先声明一个函数，然后返回)
    _args.push(...arguments) // 3、收集第二次的参数
    return fn // 4、还要在函数fn内部返回fn(这里可能会想这个会不会死循环，答案是不会，因为返回的是fn而不是让fn()执行)
  }
  fn.toString = function() {
    return _args.reduce((acc, cur) => acc + cur)
  }
  return fn // 1、函数要返回一个函数(我是否可以先声明一个函数，然后返回)
}
console.log(add(1)(2)(3)(4).toString())
console.log(add(1)(1, 2, 3)(2).toString())
