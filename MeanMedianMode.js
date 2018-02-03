/**
 * Calculate the mean.
 * @param {*} numbers 
 */
function getMean(numbers) {
    var total = 0;
    numbers.forEach(num => {
        total += num;
    });
    return total / numbers.length;
}

/**
 * Calculate the the median.
 * @param {*} numbers 
 */
function getMedian(numbers) {
    numbers.sort((a, b) => a - b);
    if (numbers.length % 2 === 0) {
        var mid1 = Math.floor(numbers.length / 2);
        var mid2 = mid1 - 1;
        return (numbers[mid1] + numbers[mid2]) / 2;
    } else {
        var middleIndex = Math.floor(numbers.length / 2);
        return numbers[middleIndex];
    }
}

/**
 * Calculate the mode.
 * @param {*} numbers 
 */
function getMode(numbers) {
    var hash = {};
    numbers.forEach(num => {
        if (!hash[num]) hash[num] = 0;
        hash[num] += 1;
    });

    var modes = [];
    var maxOccurrence = -1;
    for (var num in hash) {
        if (hash[num] > maxOccurrence) {
            maxOccurrence = hash[num];
            modes = [num];
        } else if (hash[num] === maxOccurrence) {
            modes.push(num);
        }
    }
    if (modes.length === Object.keys(hash).length) modes = [];

    return modes;
}

/**
 * Return an object with the mean, median, and 
 * mode by using the helpers functions above.
 * @param {*} numbers 
 */
function getMeanMedianMode(numbers) {
    if (!numbers || !Array.isArray(numbers)) return console.log('Enter required parameters');
    return {
        Mean: getMean(numbers),
        Median: getMedian(numbers),
        Mode: getMode(numbers)
    }
}
getMeanMedianMode([9,10,23,10,23,9]);