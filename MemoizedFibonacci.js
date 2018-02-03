/**
 * Use recursion to find a number in 
 * the fibonacci sequence. Improve performance 
 * by using memoization.
 * @param {*} n 
 * @param {*} cache 
 */
function memoizedFibonacci(n, cache) {
    if (!n) return console.log('Enter required parameters');
    cache = cache || [];

    if (cache[n]) return cache[n];
    else if (n < 3) return 1;
    else {
        cache[n] = memoizedFibonacci(n - 1, cache) + memoizedFibonacci(n - 2, cache);
        return cache[n];
    }
}
memoizedFibonacci(20);