function createArticle() {
	const titleInput = document.querySelector('#createTitle');
	const contentInput = document.querySelector('#createContent');
	const articleElement = document.querySelector('#articles');

	if (titleInput.value !== '' && contentInput.value !== '') {
		const article = document.createElement('article');
		const titleElement = document.createElement('h3');
		titleElement.textContent = titleInput.value;
		const contentParagraph = document.createElement('p');
		contentParagraph.textContent = contentInput.value;

		article.appendChild(titleElement);
		article.appendChild(contentParagraph);
		articleElement.appendChild(article);

		titleInput.value = '';
		contentInput.value = '';
	}
}