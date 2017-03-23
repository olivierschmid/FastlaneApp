#!/usr/bin/env node

// This hook updates ios platform configuration files

module.exports = function (ctx) {

	if (!ctx || !ctx.opts || !ctx.opts.platforms || !ctx.opts.platforms.includes('ios')) {
	console.log('no ios build extras');
	return;
	}

	console.log('ios_build-extras ...');

	var appName = "";
	var projectRoot = ctx.opts.projectRoot;
	var filePath = projectRoot + "/config.xml";


	// Read AppName from config.xml
	var fs = require('fs');
	var xml2js = require('xml2js');
	var json = "";
	try {
	    var fileData = fs.readFileSync(filePath, 'ascii');
	    var parser = new xml2js.Parser();
	    parser.parseString(fileData.substring(0, fileData.length), function (err, result) {
	        json = result;
	    });
	    console.log("File '" + filePath + "' was successfully read.");

		appName = json.widget.name;
		console.log("Application Name:", appName[0]);
	 }
	 catch (e) {
	    console.log(e)
	 }

	// Update Entries in Info.plist with PlistBuddy Tool
	var plistFile = projectRoot + "/platforms/ios/" + appName + "/" + appName + "-Info.plist";
	var exec = require('child_process').exec;
	var cmd = '/usr/libexec/PlistBuddy -c "Add :ITSAppUsesNonExemptEncryption bool false" ' + plistFile;

	console.log("Updating File: " + plistFile);

	try {
		exec(cmd);
		console.log("Plist File successfully updated");
	}
	catch (e) {
		console.log("Plist File could not be updated");
	}
}