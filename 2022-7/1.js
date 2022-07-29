// getpath
let obj = {
  key1: 'str1',
  key2: {
    key3: 'str3'
  },
  key4: {
    key5: {
      key6: 'str6',
      key7: 'str7',
      key11: {
        key12: 'str12',
        key16: {
          key161: 'str7'
        }
      }
    },
    key8: 'str8'
  },
  key9: 'str9'
};
let result = []
const scan = (prefix, obj) => {
  for (let i in obj) {
    if (typeof (obj[i]) == "object") {
      scan(prefix + '-' + i, obj[i])
    } else {
      if (obj[i] === 'str7') {
        result.push(prefix + '-' + i)
      }
    }
  }

}

scan('obj', obj)
console.log(result)

