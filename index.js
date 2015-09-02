var _ = require('lodash');
var nomnom = require('nomnom');
var create = require('./lib/create')
var run = require('./lib/run')

var createFlags = ['shallow', 'deep', 'hybrid']
nomnom.command('create-shallow')
    .options({
        name: {
            position: 1,
            required: true
        },
        url: {
            position: 2,
            required: true
        }
    })
    .callback(function(opts) {

        create.createApp(opts.name, opts.url)
    })
    .help("run browser tests");

nomnom.command('run')
    .callback(function() {
        run();
    })

nomnom.parse()





