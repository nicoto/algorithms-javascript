/**
 * Search for a number in a sorted array by 
 * checking the middle index. If the number is not found 
 * recursively continue the check and pass the left or right 
 * side of the array appropriately.
 * @param {*} sortedNumbers 
 * @param {*} search 
 */
function binarySearch(sortedNumbers, search) {
    if (!sortedNumbers || !search) return console.log('Enter required parameters');
    var middle = Math.floor(sortedNumbers.length / 2);
    if (sortedNumbers[middle] === search) {
        return true;
    } else if (sortedNumbers[middle] > search && sortedNumbers.length > 1) {
        return binarySearch(sortedNumbers.splice(0, middle), search);
    } else if (sortedNumbers[middle] < search && sortedNumbers.length > 1) {
        return binarySearch(sortedNumbers.splice(middle), search);
    } else {
        return false;
    }
}
binarySearch([1, 2, 3, 4, 5, 6, 7], 10);