function most_used_word (s) {
    var words;
    // word_count ["word"] = 3 occurances of 'word' in s
    var word_count = {};
    words = s.split();
    for (w in words) {
        if (word_count[w] > 0) {
        word_count[w] )
        }
    }
}




function testfunction(t) {
    //  t is a string
    var wc = 0; // word count
    console.log("Finding the ,most used words in a string:", t);
    var muw = most_used_word(t);
    console.log("Results from the most used word:" (muw);
    if (muw === v) {
        console.log("SUCCESS");

    }else {
        console.log(" FAILED");
    }
}
testfunction("The quick brown fox jumped over the lazy dog");
testfunction("My favorite word is alphabetical. Second favorite is numerical.");
testfunction("Skip's favorite word is 3338888883833. Second favorite is numerical.");
testfunction("Ed's fourth favorite word is gr8. Third favorite is alphanumerical.");
testfunction("Carolyn sixth favorite word is alpha-betical. Fifth favorite is cat-wearing-a-hat.");
