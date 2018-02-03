/**
 * Take a given set of text and shift any alpha characters.
 * Modified the tutorial version since it only took into account space
 * and not special characters.
 * @param {*} text The text to shift.
 * @param {*} shift The amount to shift the text.
 */
function caesarCipher(text, shift) {
    if (!text || !shift) return console.log('Enter required parameters');
    shift = shift % 26;
    var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var textCharacters = text.split('');

    var shiftedText = [];
    textCharacters.forEach(char => {
        if (alpha.indexOf(char.toLowerCase()) === -1) shiftedText.push(char);
        else {
            var oldIndex = alpha.indexOf(char.toLowerCase());
            var newIndex = oldIndex + shift;
            if (newIndex > 26) newIndex -= 26;
            else if (newIndex < 0) newIndex += 26;
            char === char.toLowerCase() ? shiftedText.push(alpha[newIndex]) : shiftedText.push(alpha[newIndex].toUpperCase());
        }
    });
    console.log(shiftedText.join(''));
}
caesarCipher('a a-A', 1);