/**
 * Iterate over the array and remove one element at 
 * a time, find the location it belongs within the 
 * sorted elements to the left and insert it there.
 * @param {*} arr 
 */
function insertionSort(arr) {
    if (!arr) return console.log('Enter required array');
    for (var i = 1; i < arr.length; i++) {
        var temp = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}
insertionSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]);