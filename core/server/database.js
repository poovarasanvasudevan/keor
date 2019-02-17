const Config = require('./config');

const initOptions = {
    pgFormatting: true,
 //   pgNative: true,
    capSQL: true,
};
const pgp = require('pg-promise')(initOptions);

const db = pgp(Config.database);

var pg = require('knex')({
    client: 'pg',
    connection: Config.database,
    searchPath: ['streamer', 'public'],
});

module.exports = {
    pgDB: db,
    knex: pg
};