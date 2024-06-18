function solve() {
    const inputText = document.getElementById('input').innerText;
    const outputDiv = document.getElementById('output');
    const sentences = inputText
        .split('.')
        .filter(sentence => sentence.trim().length > 0)
        .map(sentence => sentence.trim() + '.');

    for (let i = 0; i < sentences.length; i += 3) {
        const paragraph = document.createElement('p');
        const textChunk = sentences.slice(i, i + 3).join(' ');
        
        paragraph.innerText = textChunk;
        outputDiv.appendChild(paragraph);
    }
}