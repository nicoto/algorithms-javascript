/**
 * Takes a sentence and reverses the characters of each word.
 * @param {*} sentence 
 */
function reverseWords(sentence) {
    if (!sentence) return console.log('Enter required parameters');
    var words = sentence.split(' ');

    var newWords = [];
    words.forEach(word => {
        var reversedWord = '';
        for (var i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        newWords.push(reversedWord);
    });

    return newWords.join(' ');
}
reverseWords('I can reverse your words');