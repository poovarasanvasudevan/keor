var LocalStrategy = require('passport-local').Strategy;
var Parse = require('./parse-server');

module.exports = function (app, passport) {


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


    passport.use(new LocalStrategy({ // or whatever you want to use
            usernameField: 'username',    // define the parameter in req.body that passport can use as username and password
            passwordField: 'password'
        }, async function (username, password, done) {

                try {
                    const user = await Parse.User.logIn(username, password,{useMasterKey : true});
                    if (user == null) {
                        return done(new Error("Invalid User"));
                    } else {
                        return done(null, user);
                    }
                } catch (e) {
                    return done(new Error(e));
                }

            }
    ));

    app.post("/authenticate", function (req, res) {

        passport.authenticate("local", function (err, user, info) {
            if (err) {
                res.status(404).json(err);
                return;
            }

            if (user) {
                const token = user.sessionToken;
                res.status(200);
                res.json({
                    userInfo: user,
                    userSession: token
                });
            } else {
                res.status(401).json(info);
            }
        })(req, res);
    });

};

