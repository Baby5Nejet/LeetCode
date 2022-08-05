function curry (fn){
  return function curried(...args){
    if(args.length >= fn.length){
      return fn.apply(this,args)
    }else{
      return function(...argss){
        return curried.apply(this,[...args,...argss])
      }
    }
  }
}

function fn(a,b,c,d,e) {
  return a+b+c+d+e
}
let _fn = curry(fn);
// console.log(curry(add)) // 6;
console.log(_fn(1,2,3,4,5))
// console.log(_fn(1)(2)(3,4)(5))