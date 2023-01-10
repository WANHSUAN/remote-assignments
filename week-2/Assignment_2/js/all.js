function calculate(args) {
  
}


console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5 
console.log(calculate({ n1: 5, n2: 2, op: '-' })); // expected output: 3 
console.log(calculate({ n1: 1, n2: 6, op: 'x' })); // expected output: 'Not supported'


// 只接受 + 和 -
// n1 + op + n2

// 完成函數來計算傳遞物件的結果。