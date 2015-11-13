var adobeTools = require('./adobe-tools.js'),
	jsonGenerator = require('./json-generator.js');

exports.exportify = function () {
	adobeTools.runJsx('photoshop', 'ps-exporter', function() {
		exportifyAi();
	});
};

function exportifyAi() {
	adobeTools.runJsx('illustrator', 'ai-exporter', function() {
		jsonGenerator.exportJson();
	});
}
