var fs = require('fs'),
	mkdirp = require('mkdirp'),
	rimraf = require('rimraf'),
	opener = require('./opener'),
	fontGenerator = require('./font-generator'),
	dialog = require('dialog'),
	parameterize = require('parameterize'),
	PSD = require('psd');

exports.exportIcons = function(filePath, setName) {
	var homeDir = process.env.HOME;

	rimraf(homeDir + '/Desktop/flatified', function() {
		mkdirp(homeDir + '/Desktop/flatified');
		mkdirp(homeDir + '/Desktop/flatified/psd');
		mkdirp(homeDir + '/Desktop/flatified/ai');
		mkdirp(homeDir + '/Desktop/flatified/svg');
		mkdirp(homeDir + '/Desktop/flatified/png');
		mkdirp(homeDir + '/Desktop/flatified/png/1x');
		mkdirp(homeDir + '/Desktop/flatified/png/2x');
		mkdirp(homeDir + '/Desktop/flatified/png/3x');
		mkdirp(homeDir + '/Desktop/flatified/png/4x');
		mkdirp(homeDir + '/Desktop/flatified/font');

		global.setname = parameterize(setName);
		opener.openPsd(filePath);
	});
};
