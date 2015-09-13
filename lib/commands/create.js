require('shelljs/global');
var _ = require('lodash')
var fs = require('fs');
// console.log(__dirname);
// console.log(process.env._);
var shallow = fs.readdirSync(__dirname + '/../assets');
var assetDirectory = __dirname + '/../assets/';

// console.log(shallow)

module.exports = {
    createApp: function(name, url) {
        createShallowApp(name, url);
    }
}

function createShallowApp(name, url) {
    console.log("Beginning Shallow App creation");
    if (!test('-d', name)) {
        mkdir(name);
    }
    cd(name);
    _.forEach(shallow, function(name) {
        if (name === 'mainShallow.js') {
            sed('-i', 'INSERT_URL', url, __dirname + "/../assets/" + name);
        }
        console.log("copying %s to %s", name, name.replace(/Shallow/i, ''));
        cat(assetDirectory + name).to(name.replace(/Shallow/i, ''))
    })
    exec('npm install');
}
