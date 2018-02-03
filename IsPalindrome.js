/**
 * Check to see if the given text is a palindrome.
 * @param {*} text
 */
function isPalindrome(text) {
    if (!text) return console.log('Enter required parameters');
    var alpha = 'abcdefghijklmnopqrstuvqxyz'.split('');
    var textCharacters = text.toLowerCase().split('');

    var validCharacters = [];
    textCharacters.forEach(char => {
        if (alpha.indexOf(char) > -1) validCharacters.push(char);
    });

    return validCharacters.join('') === validCharacters.reverse().join('');
}
isPalindrome("Madam I'm Adam");