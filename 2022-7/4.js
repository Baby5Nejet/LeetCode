// 超大字符串相减
let a = '9749284'
let b = '9735234'
// 490086149

function sub(a, b) {
  let preLarge = false
  const aArr = a.split('')
  const bArr = b.split('')
  if (a.length !== b.length) {
    preLarge = a.length > b.length
  } else {
    for (m = 0; m < a.length; m++) {
      if (aArr[m] !== bArr[m]) {
        preLarge = aArr[m] > bArr[m]
        break
      }
    }
  }
  const larg = preLarge ? a.split('').reverse() : b.split('').reverse()
  const small = !preLarge ? a.split('').reverse() : b.split('').reverse()
  const largLen = larg.length
  const smallLen = small.length
  const top = larg.slice(smallLen, largLen)
  console.log(top, largLen, smallLen, larg, small)
  let flag = false
  let res = []
  for (i = 0; i < smallLen; i++) {
    let count = 0
    let litem = flag ? larg[i] - 1 : larg[i]
    let sitem = small[i]
    if (litem >= sitem) {
      flag = false
      count = litem - sitem
    } else {
      flag = true
      count = litem - sitem + 10
    }
    res.push(count)
  }
  console.log(res, flag)
  if (top.length > 0) {
    top[0] = flag ? top[0] - 1 : top[0]
    res.push(...top)
  }
  console.log(res.reverse().join('').replace(/\b(0+)/gi, ""))
}
function add(a, b) {

}

sub(a, b)
