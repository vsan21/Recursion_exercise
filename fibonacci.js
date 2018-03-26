//Fibonacci:
//first Fibonacci number: 1
//second Fibonacci number: 1
//every other Fibonacci number is the sum of the previous two

//0  1  2  3  4  5   6   7
//1, 1, 2, 3, 5, 8, 13, 21, ...

function fib(n) {
  //Termination condition
  if(n < 0) {
    return 'Negatives are not allowed';
  }
  //Base Case
  if(n === 1 || n === 0) {
    return 1;
  }
  //Recursive
  return fib(n-1) + fib(n-2);
}

fib(5);   //8
fib(-3);  //Negatives are not allowed
