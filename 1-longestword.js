function findLongestWord(str) {
    let words = str.split(" ")
    let longestWord = " "
    words.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    })
    let h1Element = document.createElement("h1");
    h1Element.textContent = longestWord
    document.body.appendChild(h1Element)
    return longestWord
}
console.log(findLongestWord("Buddy i have to go to the theathre"))