import { uniqueNamesGenerator, names } from "unique-names-generator";
const config = {
	dictionaries: [names],
};

function getRandomName() {
	return uniqueNamesGenerator(config);
}

function randomBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getQuantityOfCards() {
	const screenWidth = window.innerWidth;
	switch (screenWidth) {
		case screenWidth < 666:
			return 12;
		case screenWidth < 1019:
			return 10;
		default:
			return 30;
	}
}

export { randomBetween, getRandomName };
