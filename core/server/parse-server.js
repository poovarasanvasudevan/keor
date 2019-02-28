var Parse = require('parse/node');
Parse.initialize("myAppId", "jsKey","myMasterKey");
Parse.serverURL = 'http://localhost:1337/parse';

module.exports = Parse;