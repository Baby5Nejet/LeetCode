function Fibonacci(n, ac1 = 1, ac2 = 1, arr = [0]) {
  if (n <= ac2) {
    return arr;
  }
  arr.push(ac2);
  return Fibonacci(n, ac2, ac1 + ac2, arr);
}