function solve() {
    const inputText = document.getElementById('input').innerText;
    const outputDiv = document.getElementById('output');
    const sentences = inputText
        .split('.')
        .filter(sentence => sentence.trim().length > 0)
        .map(sentence => sentence.trim() + '.');
}