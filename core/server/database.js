const initOptions = {
    pgFormatting: true,
    pgNative: true,
    capSQL: true,
};
const pgp = require('pg-promise')(initOptions);

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'mydevdb',
    user: 'postgres',
    password: '123Welcome'
};
const db = pgp(connection);

module.exports = {
    pgDB: db
};