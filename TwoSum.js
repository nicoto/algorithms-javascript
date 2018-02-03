/**
 * From the given numbers find pairs that make the sum.
 * @param {*} numbers Possible numbers to create pairs from.
 * @param {*} sum The sum to be created from the pairs.
 */
function twoSum(numbers, sum) {
    if (!numbers || !sum) return console.log('Enter required parameters');
    var hash = [];
    var pairs = [];
    numbers.forEach(num => {
        var difference = sum - num;
        if (hash.indexOf(difference) > -1) {
            pairs.push([difference, num]);
        }
        hash.push(num);
    });
    return pairs;
}
twoSum([3, 5, 4, 2, 6, 1, 7], 7);