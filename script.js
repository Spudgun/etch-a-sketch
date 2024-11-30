const containerDimensions = 480;

function setupGrid(gridSize) {
	const container = document.getElementById('container');
	container.innterHtml = '';
	container.style.width = containerDimensions + 'px';
	let gridDimensions = containerDimensions / gridSize;

	for (i = 0; i < gridSize * gridSize; i++) {
		const childElement = document.createElement('div');
		childElement.className = 'grid-square';
		childElement.style.width = gridDimensions + 'px';
		childElement.style.height = gridDimensions + 'px';
		container.appendChild(childElement);
	}
}

setupGrid(64);
