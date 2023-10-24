const rangoliUp = document.getElementById("rangoli-up");
const rangoliDown = document.getElementById("rangoli-down");
const lord = document.getElementById("lord");
const circle = document.getElementById("circle");
const container = document.getElementById("container");
const sona1 = document.getElementById("sona1");
const sona2 = document.getElementById("sona2");
const sona3 = document.getElementById("sona3");
const wish = document.getElementById("wish");
const quote = document.getElementById("quote");

function quoteUp() {
	fetch('quotes.json')
		.then(response => response.json())
		.then(data => {
			const quotes = Object.values(data);

			const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
			quote.innerHTML = randomQuote;

			quote.style.animationPlayState = 'running';
		})
		.catch(error => console.error('Error fetching data:', error));
}

function containerUp() {
	container.style.display = 'block';
	container.style.animationPlayState = 'running';
	circle.style.display = 'block';
	rangoliDown.style.display = 'block';
	rangoliUp.style.display = 'block';
	lord.style.animationPlayState = `running`;
	wish.style.animationPlayState = 'running';
	quoteUp();
}

sona1.addEventListener('click', () => {
	containerUp();
	sona1.style.display = 'none';
})

sona2.addEventListener('click', () => {
	containerUp();
	sona2.style.display = 'none';
})

sona3.addEventListener('click', () => {
	containerUp();
	sona3.style.display = 'none';
})