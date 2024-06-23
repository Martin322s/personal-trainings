function solve() {
	const links = document.querySelectorAll('.link-1 a');
	
	links.forEach(link => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			
			const paragraph = link.nextElementSibling;
			let countText = paragraph.innerText;
			let count = Number(countText.match(/\d+/)[0]);
			count++;
			paragraph.innerText = `visited ${count} times`;
		});
	});
}
