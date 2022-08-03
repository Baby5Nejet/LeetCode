var reg =  / \bis\b /g; 
let res = 'this is xxx, that is ooo'.replace(reg,'IS')
console.log(res)  //thisISxxx, thatISooo

var reg = new RegExp('\\bis\\b' , 'gi' );
let res2 = 'this is xxx, that IS ooo'.replace(reg,'IS1')
console.log(res2) //this IS1 xxx, that IS1 ooo

// [abc]的含义      "a" or "b" or "c" 有abc中一个即可。
let res3 = 'a1b2c2'.replace(/[abc]/g, 'x')            
console.log(res3)

// eg：[^abc]的含义         不是字符a or b or c的内容。
let res4 = 'a1b1c3d4'.replace(/[^abc]/g, 'X')       
console.log(res4)

// eg：[a-z]的含义是   从a-z的任意字符，且这是闭区间，包含a和z本身。
//        'a1b2d3x4z9'.replace(/[a-z]/g, 'Q')               ---------Q1Q2Q3Q4Q9
// eg：[a-zA-Z]组成类内部连写，表示       大写，或者小写a-z都可以匹配。
// ps：短横线在字符之间，表示的是范围，在最后，表示匹配短横线
//         '2018-09-08'.replace(/[0-9]/g, 'A')        -------AAAA-AA-AA
//         '2018-09-08'.replace(/[0-9-]/g, 'A')        -------AAAAAAAAAA
// eg：'this is a test'.replace(/\Bis\b/g , '0');        ------th0 is a test
//         'this is a test'.replace(/\bis\b/g , '0');        ------this 0 a test
//         '@123@bxd@'replace(/@./g, 'Q');         -------Q123Qbxd@
//          '@123@bxd@'replace(/^@./g, 'Q');        ----------Q123@bxd@
//         '@123@bxd@'replace(/.@$/g, 'Q');        ----------@123@bxdQ
// eg：匹配一个ab + 数字 + 任意字符 的字符串
//    reg     /ab\d./

// '12345678'.replace(/\d{3,6}/g, 'X');                    ---------X78
// 在这种模式下是匹配3-6次。会选择匹配6次，尽可能多的匹配。
// 非贪婪模式：在量词后面加？
// '12345678'.replace(/\d{3,6}?/g, 'X');                    ---------XX78
// 尝试最少可能就匹配成功。

// eg：匹配字符串Byron连续出现三次的场景。
// 使用Byron{3}此处是匹配n循环3次，量词只能作用于紧挨着他的字符。不可以作用于全局。所以需要分组，使用（）可以达到分组的功能，使量词作用于分组。(Byron){3}
// 'a1b2c4'.replace(/([a-z]\d){3}/, 'x');         --------x

// eg：'ByronsperByrCasper'.replace(/Byr(on|Ca)sper/g, 'x');              -----------xx
// 反向引用：
// eg：2015-12-25   =>  12/25/2015
// '2015-12-25'.replace(/(\d{4})-(\d{2})-(\d{2})/g, '$3-$2-$1')
// 首先，需要注意，只有用（）分组后，才能使用$1  $2   $3这种。
// 其次，需要replace替换的时候需要加引号。

// 'a2*34v8'.replace(/\w(?=\d)/g, 'x');           ----------x2*x4X8
// ps：其中(?=\d)部分只是断言，并非正则，他只是条件，不参与过滤。    负向  (?!\d)