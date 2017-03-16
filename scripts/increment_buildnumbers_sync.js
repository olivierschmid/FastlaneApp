#!/usr/bin/env node

// Save hook under `project-root/hooks/before_prepare/`
//
// Don't forget to install xml2js using npm
// `$ npm install xml2js`

module.exports = function (ctx) {


  //console.log('**************** hook ctx: ' + JSON.stringify(ctx));
  if (!ctx || !ctx.opts || !ctx.opts.options || !ctx.opts.options['increment-buildnumbers']) {
    console.log('no increment of buildnumbers');
    return;
  }
  console.log('incrementing buildnumbers');

  var fs = require('fs');
  var xml2js = require('xml2js');
  var parseStringSync = require('xml2js-parser').parseStringSync;

// Read config.xml
  var xml = fs.readFileSync('config.xml', 'utf8');

  // Parse XML to JS Obj
  var obj = parseStringSync(xml);


  // ios-CFBundleVersion doen't exist in config.xml
  if (typeof obj['widget']['$']['ios-CFBundleVersion'] === 'undefined') {
    obj['widget']['$']['ios-CFBundleVersion'] = 0;
  }

  // android-versionCode doen't exist in config.xml
  if (typeof obj['widget']['$']['android-versionCode'] === 'undefined') {
    obj['widget']['$']['android-versionCode'] = 0;
  }

  // Increment build numbers (separately for iOS and Android)
  obj['widget']['$']['ios-CFBundleVersion']++;
  obj['widget']['$']['android-versionCode']++;

  // Build XML from JS Obj
  var builder = new xml2js.Builder();
  var xml = builder.buildObject(obj);

  // Write config.xml
  fs.writeFileSync('config.xml', xml);

  console.log('Build number successfully incremented');
};

