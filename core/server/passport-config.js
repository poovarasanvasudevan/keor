var LocalStrategy = require('passport-local').Strategy;
var Parse = require('./parse-server');

module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user.objectId);
    });


    passport.deserializeUser(async function (id, done) {
        const query = new Parse.Query(Parse.User);
        query.equalTo("objectId", id);
        var user = await query.first({useMasterKey: true});
        if (user != null) {
            done(null, user)
        } else {
            done(new Error("Not Found"), null)
        }
    });


    passport.use(new LocalStrategy(
        async function(username, password, done) {
            const user = await Parse.User.logIn(username, password);
            if(user == null) {
                return done(new Error("Invalid User"));
            } else {
                return done(null, user);
            }
        }
    ));
};