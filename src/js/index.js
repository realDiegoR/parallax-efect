import { photos, names, main, header, hamburger } from "./domNodes";
import { PEOPLE, ASSETS } from "./dictionaries";
import {
	totalColumns,
	totalAssets,
	getPrintingPoints,
} from "./getPrintingPoints";
import { randomBetween, getRandomName } from "./utilities";

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

names.forEach((name) => {
	name.textContent = `${getRandomName()} ${getRandomName()}`;
});

photos.forEach((photo) => {
	const context = PEOPLE[randomBetween(0, PEOPLE.length - 1)];
	photo.src = `https://source.unsplash.com/random/200×200/?${context}`;
	photo.alt = `context: ${context}`;
});

getPrintingPoints(main.scrollHeight, totalAssets).forEach((printingPoint) => {
	const img = new Image();
	const rowsPrintingPoints = getPrintingPoints(main.offsetWidth, totalColumns);
	const asset = ASSETS[randomBetween(0, ASSETS.length - 1)];
	const translateZ = randomBetween(-15, -5);
	const scale = (10 - translateZ) / 10;
	rowsPrintingPoints.push("0");

	img.src = `./assets/${asset}.svg`;
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
