function growingWord() {
    const paragraph = document.getElementById('growingWord');

    if (!paragraph.style.fontSize) {
        paragraph.style.fontSize = '2px';
    }

    let currentFontSize = parseInt(paragraph.style.fontSize);
    paragraph.style.fontSize = (currentFontSize * 2) + 'px';

    const colors = ['blue', 'green', 'red'];
    let currentColorIndex = colors.indexOf(paragraph.style.color);
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}