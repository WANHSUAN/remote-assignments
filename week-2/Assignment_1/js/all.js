function max(numbers) {
  let maxNumber = numbers[0];
  for(let i = 0;i < numbers.length; i++) {
    if(maxNumber < numbers[i]) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
}

console.log(max([1, 2, 4, 5])); // expected output: 5 
console.log(max([5, 2, 7, 1, 6])); // expected output: 7

