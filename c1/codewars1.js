// Implement a function that adds two numbers together and returns their sum in binary.
// The conversion can be done before, or after the addition.
// //
// The binary number returned should be a string.

function addBinary(a,b) {
  console.log(a,b);
  let sum = a + b
  let answer = [];
  let array = [128, 64, 32, 16, 8, 4, 2, 1]
  for (let binarySum = 0 ; binarySum <= sum; ){

    if (binarySum == 0 ){
    binarySum++

  }else {
    if(sum % binarySum == 0){
    answer.unshift(1);
    sum -= binarySum;
    binarySum *= 2
    } else{
      answer.unshift(1);
       binarySum *= 2;
    }
  }
  }
  answer = answer.join("")
  console.log(answer);
  return answer;
}

//
// Time: 702ms Passed: 2 Failed: 0
// Test Results:
//  addBinary(1,2)
//  Log
// 1 2
// 11
//  Should return something that isn't falsy
// Test Passed
//  Should return "11"
// Test Passed: Value == '11'
// Completed in 1ms
// Completed in 5ms
