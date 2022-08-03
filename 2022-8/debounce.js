function debounce(fn, wait) {
  timer = null;
  return function () {
      var context = this
      var args = arguments
      if (timer) {
          clearTimeout(timer);
          timer = null;
      }
      timer = setTimeout(function () {
          fn.apply(context, args)   //节流fn函数
      }, wait)
  }
}
var fn = function () {
  console.log('boom')   //do something
}
var run = setInterval(debounce(fn,2000),1000)
setTimeout(() =>{
  clearInterval(run)
},5000)