function growingWord() {
    const paragraph = document.getElementById('growingWord');

    if (!paragraph.style.fontSize) {
        paragraph.style.fontSize = '2px';
    }

    let currentFontSize = parseInt(paragraph.style.fontSize);
    paragraph.style.fontSize = (currentFontSize * 2) + 'px';
}