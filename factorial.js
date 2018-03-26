//Factorial Recursion

function factorial (num) {
  //Termination Case
  if(num < 0) {
    return 'Negatives are not allowed';
  }
  //Base Case
  if(num === 0) {
    return 1;
  }
  //Recursive Case
  return num * factorial(num - 1);
}

factorial(3);   //6
