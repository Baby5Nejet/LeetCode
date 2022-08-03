var str = 'zsZszSweWewE'
console.log(str.match(/Zs/))

let arr=[
  'https://blog.csdn.net/orangleliu/article/details/8822987',
  'http://platform.baidu.com:8080/sss/kk/ll.action',
  'http://platform.ishangzu.com:8080/zz/dd/visit?id=1&cc=N'
]
arr0=arr.map(item=>item.replace(/^https?:\/\/(.*?)(:\d+)?\/.*$/,'$1'));
console.log(arr0);

reg = /^https?:\/\/platform.(.*?)(:\d+)?\/.*$/
arr1=arr.map(item=>reg.test(item));
console.log(arr1)