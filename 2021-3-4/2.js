// https://leetcode-cn.com/problems/minimum-path-sum/comments/
// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

// 
//  * @param {number[][]} grid
//  * @return {number}
var grid  = [[1,1,1],[1,5,1],[2,2,1],[5,9,5]]

var Sum = function(grid) {
    let n=grid[0].length  //横
   let m=grid.length   //纵
    var sum = Array.from(new Array(m),() => new Array(n));
    console.log(sum)
    for(let i = 0;i<m;i++){
        for(let j = 0;j<n;j++){
            if(i === 0 && j==0){
                sum[i][j] =  grid[i][j]
            }
            if(i === 0 && j>=1){
                sum[i][j] = sum[i][j-1] + grid[i][j]
            }
            if(j === 0 && i>=1){
                sum[i][j] = sum[i-1][j] + grid[i][j]
            }
            if(i!==0 && j!==0 && i>=1 && j>=1){
                sum[i][j] = Math.min(sum[i-1][j],sum[i][j-1]) + grid[i][j]
            }
        }
    }
    return sum[m-1][n-1]
};
   console.log(Sum(grid))