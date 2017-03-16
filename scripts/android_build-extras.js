module.exports = function (ctx) {

  if (!ctx || !ctx.opts || !ctx.opts.platforms || !ctx.opts.platforms.includes('android')) {
    console.log('no android build extras');
    return;
  }

  console.log('android_build-extras ...');

  const fs = require('fs-extra');

  var projectRoot = ctx.opts.projectRoot;

  fs.copySync(projectRoot + '/scripts/android/build-extras.gradle', projectRoot + '/platforms/android/build-extras.gradle');

  console.log('... android_build-extras done!');
};
