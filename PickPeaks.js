// In this kata, you will write a function that returns the positions and the values of the "peaks"(or local maxima) of a numeric array.

// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5(since arr[3] equals 5).

// The output will be returned as an object with two properties: pos and peaks.Both of these properties should be arrays.If there is no peak in the given array, then the output should be { pos: [], peaks: [] }.

// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return { pos: [3, 7], peaks: [6, 3] }(or equivalent in other languages)

// All input arrays will be valid integer arrays(although it could still be empty), so you won't need to validate the input.

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

// Also, beware of plateaus!!![1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] does not.In case of a plateau - peak, please only return the position and value of the beginning of the plateau.For example: pickPeaks([1, 2, 2, 2, 1]) returns { pos: [1], peaks: [2] } (or equivalent in other languages)

function pickPeaks(arr) {
    if (arr.length < 3) return { pos: [], peaks: [] };
    let plateau = false;
    let peakFound = false;
    let pIndex = null;
    let pVal = null;
    let pPos = [];
    let pVals = [];
    let obj = arr.reduce((obj, v, i, arr) => {
        if (v > arr[i - 1] && v > arr[i + 1]) {
            //peak
            obj.pos.push(i);
            obj.peaks.push(v);
            peakFound = true;
        }
        if (!peakFound) {
            if (!plateau && v === arr[i + 1]) {
                //poss plat
                pIndex = i;
                pVal = v;
                plateau = true;
            }
            else if (plateau && v < arr[i + 1]) {
                plateau = false;
            }
            else if (plateau && v > arr[i + 1]) {
                pPos.push(pIndex);
                pVals.push(pVal);
                plateau = false;
            }
        }
        return obj;
    }, { pos: [], peaks: [] });
    if (!peakFound) return { pos: pPos, peaks: pVals }
    else return obj
}
const result = pickPeaks([2, 1, 3, 3, 4, 1]);
console.log(result);