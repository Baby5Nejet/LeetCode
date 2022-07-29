// func1 = x => x
// func2 = x => { x }
// func3 = x => ({ x })
// console.log(func1(1))
// console.log(func2(1))
// console.log(func3(1))

// 实现 function print(arr){}，输出字符串的全部排列组合

// 3<=arr.length<10  0<arr[i].length<10

// 测试用例：const arr = ['ab', 'mn', '01']

// 打印： am0 am1 an0 an1 bm0 bm1 bn0 bn1
// perm function
const print = (arr) => {
  let result = []
  let len = arr.length - 1
  let head = arr[0]

  const scan = (prefix, index) => {
    let cur = arr[index]
    for (let i of cur) {
      if (index < len) {
        scan(prefix + i, index + 1)
      } else {
        result.push(prefix + i)
      }
    }
  }

  for (let i of head) {
    scan(i, 1)
  }
  console.log(result)
}
const arr = ['ab', 'mn', '01']
print(arr)
