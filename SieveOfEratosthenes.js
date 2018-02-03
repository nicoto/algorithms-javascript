/**
 * Find all possible prime numbers up and equal to n.
 * @param {*} n 
 */
function sieveOfEratosthenes(n) {
    if (!n) return console.log('Enter required parameters');
    var possiblePrimes = [];

    for (var i = 0; i <= n; i++) {
        possiblePrimes[i] = true;
    }

    possiblePrimes[0] = false;
    possiblePrimes[1] = false;

    for (var i = 2; i <= Math.sqrt(n); i++) {
        for (var j = 2; i * j <= n; j++) {
            possiblePrimes[i * j] = false;
        }
    }
    
    var primes = [];
    for (var i = 0; i <= n; i++) {
        if (possiblePrimes[i]) primes.push(i);
    }

    return primes;
}
sieveOfEratosthenes(20);