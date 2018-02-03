/**
 * Reverse an array of numbers in place.
 * @param {*} numbers The numbers to reverse.
 */
function reverseArrayInPlace(numbers) {
    if (!numbers) return console.log('Enter required parameters');
    var middle = Math.floor(numbers.length / 2);
    for (var i = 0; i < middle; i++) {
        var temp = numbers[i];
        numbers[i] = numbers[numbers.length - i - 1];
        numbers[numbers.length - i - 1] = temp;
    }
    return numbers;
}
reverseArrayInPlace([5, 4, 3, 2, 1]);