import { main } from "./domNodes";

const totalColumns = Math.floor(main.offsetWidth / 100);
const totalAssets = Math.floor(main.scrollHeight / 480);

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

export { totalColumns, totalAssets, getPrintingPoints };
