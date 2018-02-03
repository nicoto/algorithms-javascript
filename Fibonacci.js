/**
 * Use recursion to find a number in 
 * the fibonacci sequence.
 * @param {*} n 
 */
function fibonacci(n) {
    if (!n) return console.log('Enter required parameters');
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n -2);
}
fibonacci(6);
