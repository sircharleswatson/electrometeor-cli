var _ = require('lodash');
var nomnom = require('nomnom');
var create = require('./lib/commands/create')
var run = require('./lib/commands/run')

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
    .callback(function(opts) {
        run();
    })

nomnom.parse()





