//Theese functions returns true or false if a string is Palindrome or not


//First method

var word = "aaaccc";

function checkIfAWordIsPalindrome(wordToBeChecked) {

    if (wordToBeChecked == wordToBeChecked.split("").reverse().join("")) {
        return true;
    }
    return false;

}

console.log(checkIfAWordIsPalindrome(word));


//Second method

var word2 = "12111";

checkIfAWordIsPalindrome2 = (wordToBeChecked2) => {

    for (let i = 0; i < wordToBeChecked2.length / 2; i++) {
        if (wordToBeChecked2.charAt(i) != wordToBeChecked2.charAt(wordToBeChecked2.length - 1 - i)) {
            console.log("The word " + wordToBeChecked2 + " isn't Palindrome");
            return;
        }
    } console.log("This word is Palindrome");
}

checkIfAWordIsPalindrome2(word2);
