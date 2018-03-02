// Given two integers a and b, which can be positive or negative.
// Find the sum of all the numbers between including them too and return it. 
// If the two numbers are equal return a or b.
// Note: a and b are not ordered!

function getSum(a, b) {
    if (a === b) return a;
    else if (a < b) return a + getSum(a + 1, b);
    else return b + getSum(b + 1, a);
}
getSum(0, 10);
