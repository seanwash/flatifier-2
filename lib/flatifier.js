var fs = require('fs'),
	mkdirp = require('mkdirp'),
	rimraf = require('rimraf'),
	opener = require('./opener'),
	fontGenerator = require('./font-generator'),
	dialog = require('dialog'),
	PSD = require('psd');

exports.exportIcons = function(filePath) {
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

		global.setname = 'flaticons-test';
		opener.openPsd(filePath);

		// dialog.prompt('Set Name', function(err, setName) {
		// 	var setName = setName.setName;
		//
		// 	// Set a global var for the setname because I don't know of another way to allow the jsonGenerator to access the setname
		// 	global.setname = setName;
		// 	opener.openPsd(filePath);
		// });
	});
};
