var path = require('path');
var gulpPath = path.join(__dirname, '../..', 'node_modules', ".bin", "gulp")
var gulpFile = path.join(__dirname, '../gulpfile.js');

module.exports = function() {
    console.log('testing run');
    console.log('__dirname: ', __dirname)
    console.log('PWD: ', pwd());
    exec(gulpPath + ' --gulpfile ' + gulpFile)
}
