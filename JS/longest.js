function find_longest_word_in(s) {
// s is a string
// find the longest word within s, words
// consist of a string of alphabetical characters = 'a..z', or dashes = '-'
// alphabetical + dashes, no numbers
// suppose s = "The quick brown fox jumped over the lazy dog"
// then words = ["the", "quick", "brown", ,"fox", "jumped", "over", "the", "lazy", "dog"]
// words is an arrray of sub-strings, with spaces removed.
// for every word in words, find the length, and
// keep track of the longest word found so fav
// if the current word is longer than the longest,
// it becomes teh new longest, and its length becomes the new longest_length
};


var length_of_longest_word_in = function (s) {
    var words = [],
    // /[a-z]/ means a,b,c.........,z
    //  /[a]/ means -,a,z
    //  /[-a-z]/ means
        word_regex = /[\W+-]/g,
        longest_word = "",
        current_word = "";
    words = s.split(word_regex);
    // return (words);
    // for current_word in words
    for (var i = 0; i < words.length; i += 1) {
        // but now we wanna toss out only-number words
        if (current_word.match(/\d+/) /* toss out digit-only words */
        && (current_word.length > longest_word.length)) {

        }

        // compare length of current_word to longest word
        current_word = words[i];
        if (current_word.length > longest_word.length) {
            longest_word = current_word;
        }
    }
    return (longest_word, longest_word.length);

};

testfunction("The quick brown fox jumped over the lazy dog");

function testfunction(t) {
    //  t is a string
    console.log("Finding the longest sub string in:",t);
    console.log("Results",length_of_longest_word_in(t));
}
testfunction("The quick brown fox jumped over the lazy dog");
testfunction("My favorite word is alphabetical. Second favorite is numerical.");
testfunction("Skip's favorite word is 3338888883833. Second favorite is numerical.");
testfunction("Ed's fourth favorite word is gr8. Third favorite is alphanumerical.");
testfunction("Carolyn sixth favorite word is alpha-betical. Fifth favorite is cat-wearing-a-hat.");
// alphanumerical
