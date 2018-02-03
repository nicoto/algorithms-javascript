/**
 * Sort the array of numbers by bubbling the greatest number 
 * to the top and then shrink the area to sort for the next pass 
 * by decrementing the outer loop.
 * @param {*} numbers 
 */
function bubbleSort(numbers) {
    if (!numbers || !Array.isArray(numbers)) return console.log('Enter an array of numbers');
    for (var i = numbers.length; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (numbers[j] > numbers[j + 1]) {
                var temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    return numbers;
}
bubbleSort([5, 4, 3, 2, 1]);