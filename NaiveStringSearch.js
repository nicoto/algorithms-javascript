function naiveStringSearch(text, pattern) {
    if (!text.length || !pattern.length) return false;
    var index = false;
    for (var i = 0; i <= text.length - pattern.length; i++) {
        var matchCount = 0;
        while (text[matchCount] === pattern[i + matchCount]) {
            matchCount += 1;
            if (pattern.length === matchCount) {
                index = true;
                break;
            }
        }
        if (index) {
            i = matchCount - 1;
            break;
        }
    }
    return i;
}
naiveStringSearch('hello john', 'john');