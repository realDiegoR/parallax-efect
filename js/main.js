const [...photos] = document.querySelectorAll(".card__photo");
const main = document.querySelector("main");
const header = document.querySelector("header");
const hamburger = document.querySelector("#hamburger");
const PEOPLE = [
	"man",
	"woman",
	"indian man",
	"indian woman",
	"brasilian man",
	"brasilian woman",
	"asian man",
	"asian woman",
	"leader guy",
	"leader girl",
	"british man",
	"british woman",
	"mexican man",
	"mexican woman",
	"new zeland man",
	"new zeland woman",
	"husband",
	"wife",
];
const ASSETS = [
	"airplane",
	"airpods",
	"bike",
	"cat",
	"chat",
	"coffee",
	"happy",
	"socks",
	"wandrays",
];

hamburger.addEventListener(
	"click",
	(ev) => {
		if (ev.currentTarget === hamburger) {
			ev.currentTarget.classList.toggle("hamburger-button--active");
			header.classList.toggle("header--active");
		}
	},
	true
);

photos.forEach((photo) => {
	const context = PEOPLE[randomBetween(0, PEOPLE.length - 1)];
	photo.src = `https://source.unsplash.com/random/200×200/?${context}`;
	photo.alt = `context: ${context}`;
});

///

const totalColumns = Math.floor(main.offsetWidth / 100);
const totalAssets = Math.floor(main.scrollHeight / 480);
// console.log(
// 	`columns: ${totalColumns}, rows: ${totalAssets}, width: ${main.offsetWidth}, height: ${main.scrollHeight}`
// );

function getPrintingPoints(axisLength, assetsAvailable) {
	const printingPoints = [];
	const distanceBetweenElements = axisLength / assetsAvailable;
	while (axisLength > distanceBetweenElements) {
		axisLength -= distanceBetweenElements;
		printingPoints.push(axisLength.toFixed());
	}
	printingPoints.pop();
	return printingPoints;
}

getPrintingPoints(main.scrollHeight, totalAssets).forEach((printingPoint) => {
	const img = new Image();
	const rowsPrintingPoints = getPrintingPoints(main.offsetWidth, totalColumns);
	const asset = ASSETS[randomBetween(0, ASSETS.length - 1)];
	const translateZ = randomBetween(-15, -5);
	const scale = (10 - translateZ) / 10;
	rowsPrintingPoints.push("0");

	img.src = `./../assets/${asset}.svg`;
	img.alt = asset;
	img.width = 200;
	img.height = 200;
	img.style.position = "absolute";
	img.style.top = printingPoint + "px";
	img.style.left =
		rowsPrintingPoints[randomBetween(0, rowsPrintingPoints.length - 1)] + "px";
	img.style.transform = `translateZ(${translateZ}px) scale(${scale})`;
	main.appendChild(img);
});

function randomBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
