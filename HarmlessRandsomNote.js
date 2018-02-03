/**
 * Find out if it's possible to a create note from given text.
 *  @param {*} note Note to create from magazine text.
 * @param {*} magazineText Text to attempt note creation from.
 */
function harmlessRansomNote(note, magazineText) {
    if (!note || !magazineText) return console.log('Enter required parameters');
    var hash = {};
    var magazineWords = magazineText.split(' ');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    magazineWords.forEach(word => {
        if (!hash[word]) hash[word] = 0;
        hash[word] += 1;
    });

    var noteWords = note.split(' ');
    var noteIsPossible = true;
    for (var i = 0; i < noteWords.length; i++) {
        var word = noteWords[i];
        if (hash[word]) {
            hash[word] -= 1;
            if (hash[word] < 0) {
                noteIsPossible = false;
                break;
            }
        } else {
            noteIsPossible = false;
            break;
        }
    }

    return noteIsPossible;
}
harmlessRansomNote('hello john', 'I saw john yesterday and I told him hello');