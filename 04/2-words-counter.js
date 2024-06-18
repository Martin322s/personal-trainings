function solve(input) {
    let wordsCount = {};
    let text = input.shift();
    let pattern = /\b\w+\b/g;
    let words = text.match(pattern);

    words.forEach(word => {
        if (wordsCount[word]) {
            wordsCount[word]++;
        } else {
            wordsCount[word] = 1
        }
    });


    console.log(JSON.stringify(wordsCount));
}