function deepClone(o) {
  if (typeof o === 'string' || typeof o === 'number' || 
  typeof o === 'boolean' || typeof o === 'undefined') {
      return o
  } else if (Array.isArray(o)) {
      var _arr = []
      o.forEach((item)=>{
        _arr.push(deepClone(item)) 
      })
      return _arr
  } else if (Object.prototype.toString.call(o) === '[object Object]') {
      var _o = {}
      for (let key in o) {
          _o[key] = deepClone(o[key])
      }
      return _o
  }
}


const obj = {
  a:'1',
  b:[1,2,3],
  c:{
    aa:'11',
    bb:['22',{bbb:'222'},[1,2,3]],
    cc:{ccc:'33'}
  }
}

const clone = deepClone(obj)
console.log(clone.c)
console.log(obj.c)