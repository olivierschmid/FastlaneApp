#!/usr/bin/env node

// This hook updates platform configuration files

module.exports = function (ctx) {


//console.log('**************** hook ctx: ' + JSON.stringify(ctx));
if (!ctx) {
console.log('no context');
return;
}
console.log("Start update platform configuration files");


var exec = require('child_process').exec;
var cmd = '/usr/libexec/PlistBuddy -c "Add :ITSAppUsesNonExemptEncryption bool false" FastlaneApp-Info.plist';

exec(cmd, function(error, stdout, stderr) {
  // command output is in stdout
});

  