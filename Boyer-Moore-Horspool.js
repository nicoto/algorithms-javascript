/**
 * Search from right to left shifting to the 
 * right as needed based on the bad match table.
 * @param {*} text 
 * @param {*} pattern 
 */
function boyerMooreHorspool(text, pattern) {
    var badMatchTable = {};
    var maxOffset = text.length - pattern.length; //12
    var offset = 0;
    var last = pattern.length - 1; //3

    if (last < 0) return -1;

    for (var i = 0; i < pattern.length - 1; i++) {
        var letter = pattern[i];
        badMatchTable[letter] = last - i;
    }

    console.log(badMatchTable)

    while (offset <= maxOffset) {
        for (var i = last; pattern[i] === text[i + offset]; i--) {
            if (i === 0) return offset;
        }
        offset += badMatchTable[text[offset + last]] || last || 1;
    }

    return -1;
}
boyerMooreHorspool('Have a Nice day!', 'Nice');