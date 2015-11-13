var fs = require('fs'),
	spawn = require('child_process').spawn,
	adobeTools = require('./adobe-tools'),
	psExporter = require('./ps-exporter'),
	dialog = require('dialog');

function createPsdOpener(psdPath) {
	fs.writeFileSync(__dirname + '/jsx/psdOpener.jsx', 'var f = new File("' + psdPath + '");app.open(f);alert("opener finished.");');
}

function deletePsdOpener() {
	fs.unlinkSync(__dirname + '/jsx/psdOpener.jsx');
}

exports.openPsd = function (psdPath) {
	if (!fs.existsSync(psdPath)) {
		dialog.showErrorBox('Error', 'Specified PSD does not exist.');
		throw new Error('Specified PSD does not exist.');
	}

	createPsdOpener(psdPath);

	adobeTools.runJsx('photoshop', 'psdOpener', function() {
		deletePsdOpener();
		psExporter.exportify();
	});
};
