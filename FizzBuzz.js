/**
 * Log out appropriate string for 3, 5, and 15
 * 15 = FizzBuzz
 * 3 = Fizz
 * 5 = Buzz 
 * @param {*} n The number to loop up until
 */
function fizzBuzz(n) {
    if (!n) return console.log('Enter required parameters');
    for (var i = 1; i <= n; i++) {
        if (i % 15 === 0) console.log('FizzBuzz');
        else if (i % 3 === 0) console.log('Fizz');
        else if (i % 5 === 0) console.log('Buzz');
        else console.log(i);
    }
}
fizzBuzz(20);