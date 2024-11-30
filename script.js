const containerDimensions = 480;

function setupGrid(gridSize) {
	const container = document.getElementById('grid-container');
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

// Function for returning a random color.
//Credit: https://stackoverflow.com/questions/1484506/random-color-generator
function generateRandomColor() {
	let maxVal = 0xffffff; // 16777215
	let randomNumber = Math.random() * maxVal;
	randomNumber = Math.floor(randomNumber);
	randomNumber = randomNumber.toString(16);
	let randColor = randomNumber.padStart(6, '0');
	return `#${randColor.toUpperCase()}`;
}

setupGrid(64);
