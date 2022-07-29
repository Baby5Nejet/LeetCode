// 字符串排列组合
const str = 'abcd'
let result = []
const scan = (prefix, remain) => {
  if (remain.length > 1) {
    for (let i of remain) {
      let sub = remain.indexOf(i)
      let newRemain = remain.slice(0, sub) + remain.slice(sub + 1, str.length)
      scan(prefix + i, newRemain)
    }
  } else {
    result.push(prefix + remain)
  }
}

for (let m of str) {
  let s = str.indexOf(m)
  let newRemain = str.slice(0, s) + str.slice(s + 1, str.length)
  // console.log(m, newRemain)
  scan(m, newRemain)
}

console.log('result', result)