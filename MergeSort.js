/**
 * Divide arrays until reaching a length of one
 * then repeatedly merge subarrays in a new sorted array 
 * until one subarray remains.
 * @param {*} arr 
 */
function mergeSort(arr) {
    if (!arr) return console.log('Enter required parameter');
    if (arr.length < 2) return arr;
    var middleIndex = Math.floor(arr.length / 2);
    var firstHalf = arr.slice(0, middleIndex);
    var secondHalf = arr.slice(middleIndex);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2) {
    var result = [];
    while (array1.length && array2.length) {
        var minElem;
        if (array1[0] < array2[0]) minElem = array1.shift();
        else minElem = array2.shift();
        result.push(minElem);
    }

    if (array1.length) result = result.concat(array1);
    else result = result.concat(array2);
    return result;
}
mergeSort([5, 4, 3, 2, 1]);