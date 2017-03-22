#!/usr/bin/env node

// This hook updates ios platform configuration files

module.exports = function (ctx) {

	if (!ctx || !ctx.opts || !ctx.opts.platforms || !ctx.opts.platforms.includes('ios')) {
	console.log('no ios build extras');
	return;
	}

	console.log('ios_build-extras ...');

	var projectRoot = ctx.opts.projectRoot;
	var applicationName = projectRoot.substring(projectRoot.lastIndexOf("/")+1);
	var plistFile = projectRoot + "/platforms/ios/"+applicationName+"/"+applicationName+"-Info.plist";
	var exec = require('child_process').exec;
	var cmd = '/usr/libexec/PlistBuddy -c "Add :ITSAppUsesNonExemptEncryption bool false" ' + plistFile;

	console.log("Updating File: "+plistFile);

	try {
		exec(cmd);
		console.log("Plist File successfully updated");
	}
	catch (e) {
		console.log("Plist File could not be updated");
	}
}