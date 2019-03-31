let mix = function (color1, color2, weight) {
	// convert a decimal value to hex
	let d2h = function (d) {
		return d.toString(16);
	}
	// convert a hex value to decimal
	let h2d = function (h) {
		return parseInt(h, 16);
	}

	let result = "#";
	for (let i = 1; i < 7; i += 2) {
		let color1Part = h2d(color1.substr(i, 2));
		let color2Part = h2d(color2.substr(i, 2));
		let resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
		result += ('0' + resultPart).slice(-2);
	}
	return result;
};

let IMAGES_ROOT = 'assets/img/';

const layoutSizes = {
	resWidthCollapseSidebar: 1200,
	resWidthHideSidebar: 500,
};

const layoutPaths = {
	images: {
		root: IMAGES_ROOT,
		profile: IMAGES_ROOT + 'app/profile/',
		amMap: 'assets/img/theme/vendor/ammap//dist/ammap/images/',
		amChart: 'assets/img/theme/vendor/amcharts/dist/amcharts/images/',
	},
};

const colorHelper = {
	tint: function (color, weight) {
		return mix('#ffffff', color, weight);
	},
	shade: function (color, weight) {
		return mix('#000000', color, weight);
	},
};

export default {
	layoutSizes,
	layoutPaths,
	colorHelper,
};
