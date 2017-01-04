document.addEventListener('DOMContentLoaded',function() {
	const links = document.querySelectorAll('a');
	const highlight = document.createElement('span');
	highlight.classList.add('highlight');
	document.body.appendChild(highlight);

	function highlightLink() {
		const linkCoords = this.getBoundingClientRect();

		const coords = {
	      width: linkCoords.width + 15,
	      height: linkCoords.height + 15,
	      top: linkCoords.top + window.scrollY,
	      left: linkCoords.left + window.scrollX
	    };

		highlight.style.width = `${coords.width}px`;
		highlight.style.height = `${coords.height}px`;
		highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;
		if(this.parentElement.classList.value.includes('links'))
			highlight.style.zIndex = 0;
		else highlight.style.zIndex = -1;
	}

	links.forEach(a => a.addEventListener('mouseenter', highlightLink));
});
