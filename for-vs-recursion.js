//Q1: write a function that takes a "num" parameter and return the factorial of it (i.e. if num = 4 --> 4*3*2*1)

//FOR LOOP METHOD
function factorial(num) {
  var sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

describe('factorial', function() {
  it('should return the factorial of the argument num', function() {
    expect(factorial(4)).toBe(24);
  })
})

factorial(4);

//RECURSION METHOD
function factorial(num) {
  //Termination Case
  if (num < 0) {
    return 'Negatives are not allowed';
  }
  //Base Case
  if (num === 0){
    return 1;
  }
  //Recursive Case
    return num * factorial(num - 1);
}

factorial(4);
