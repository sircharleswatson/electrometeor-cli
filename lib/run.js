var dirname = __dirname
var path = require('path');

module.exports = function() {
    console.log('running app in dev mode');
    var appDirectory = pwd();
    var electronPrebuilt = path.join(appDirectory, 'node_modules', ".bin", "electron")
    exec(electronPrebuilt + ' .');

}
