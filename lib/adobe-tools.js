var spawn = require('child_process').spawn,
	photoshopPath = '/Applications/Adobe\ Photoshop\ CC\ 2015/Adobe\ Photoshop\ CC\ 2015.app',
	illustratorPath = '/Applications/Adobe\ Illustrator\ CC\ 2015/Adobe\ Illustrator.app',
	dialog = require('dialog');

exports.runJsx = function (app, jsxFile, cb) {
	if (app == 'photoshop') {
		appPath = photoshopPath;
	} else if (app == 'illustrator') {
		appPath = illustratorPath;
	}

	var cmd = 'open',
		params = ['-a', appPath, __dirname + '/jsx/' + jsxFile + '.jsx'],
		jsxProcess = spawn(cmd, params);

	jsxProcess.stdout.on('data', function (data) {
		console.log('stdout: ' + data);
	});

	jsxProcess.stderr.on('data', function (data) {
		console.log('stderr: ' + data);
	});

	jsxProcess.on('exit', function(code) {
		dialog.showMessageBox({message: 'Press enter when "' + jsxFile + '" has finished running', buttons: ['OK']}, function(ok) {
			if (cb && typeof cb == 'function') {
				cb();
			}
		});
	});
};
