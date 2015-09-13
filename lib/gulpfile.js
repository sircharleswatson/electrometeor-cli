require('shelljs/global');
var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell');
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
var _ = require('lodash');
var emChild;

var dirname = __dirname
console.log(dirname, process.env.INIT_CWD)

var path = require('path');
var electronPrebuilt = path.join(dirname, '..', 'node_modules', ".bin", "electron")
console.log(electronPrebuilt)

function killElectrometeor () {
  if (_.startsWith(process.platform, 'win')) {
    execSync('taskkill', ['/pid', emChild.pid, '/f', '/t']);
  } else {
    execSync("ps aux | grep -ie electron-prebuilt | awk '{print $2}' | xargs kill -9")
  }
}


gulp.task('start', function() {
    var appType = getAppType();

    if (appType === undefined) return process.exit();

    appType === 'meteor' ? runMeteorApp() : runElectronApp();
});

gulp.task('end', function() {
    if (emChild) {
        killElectrometeor();
    } else {
        console.log('NOT KILLING');
    }
});

// watch files
gulp.task('watch', function() {
    gulp.watch(process.env.INIT_CWD + '/*.js', ['end', 'start']);
});

// Default Task
gulp.task('default', ['end', 'start', 'watch']);

function getAppType() {
  var appPath = process.env.INIT_CWD;

  if(test('-d', appPath + '/.meteor')) {
    console.log('is meteor');
    return 'meteor';
  } else if (test('-d', appPath + '/node_modules')) {
    console.log('is electron');
    return 'electron';
  } else {
    console.log("make sure you're either in a Meteor project or an Electron project when running this command");
    return;
  }
}

function runMeteorApp() {

}

function runElectronApp() {
  emChild = exec(electronPrebuilt + ' ' + process.env.INIT_CWD)
}
