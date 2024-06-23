function solve() {
	const links = document.querySelectorAll('.link-1 a');
	
	links.forEach(link => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			
		});
	});
}
