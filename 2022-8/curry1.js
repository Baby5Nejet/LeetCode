// 实现一个add方法，使计算结果能够满足如下预期：

function add() {
  var total = [...arguments].reduce((a,b)=>a+b)
  function sum(){
    total += [...arguments].reduce((a,b)=>a+b)
    return sum
  }
  sum.toString = function(){
    return total
  }
  return sum
}
console.log(add(1)(2)(3)) // 6;
console.log(add(1, 2, 3)(4)) // 10;
console.log(add(1)(2)(3)(4)(5)) // 15;
