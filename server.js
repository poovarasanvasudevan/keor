const express = require('express');
const next = require('next');
const helmet = require('helmet');
const compression = require('compression');
const SSE = require('express-sse');
const passport = require('passport');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const Parse = require('parse/node');
const Config = require('./core/server/config');
const database = require('./core/server/database');

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

function isLogInHome(req,res,next) {
    if (req.isAuthenticated())
        return res.redirect('/home');

    return next();
}


app.prepare()
    .then(() => {
        const server = express();
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({
            extended: true
        }));
        server.use(bodyParser.text());

        const sse = new SSE(["array", "containing", "initial", "content", "(optional)"]);


        server.use(helmet());
        server.use(cookieParser());
        //
        server.use(session({
            secret: 'ilovescotchscotchyscotchscotch',
            resave: false,
            saveUninitialized: true
        }));
        server.use(passport.initialize());
        server.use(passport.session());

        require('./core/server/passport')(server, passport);

        var sseRouter = express.Router();
        var webRouter = express.Router();
        var authRouter = express.Router();
        sseRouter.get("/stream", sse.init);
        server.use("/sse", sseRouter);


        var ParseDashboard = require('parse-dashboard');
        var dashboard = new ParseDashboard({
            "apps": [
                {
                    "serverURL": "http://localhost:1337/parse",
                    "appId": "myAppId",
                    "masterKey": "myMasterKey",
                    "appName": "MyApp"
                }
            ]
        });

        server.use('/dashboard', dashboard);
        server.use("/", webRouter);
        webRouter.use(compression());


        webRouter.get('/', [isLogInHome],(req, res) => {return app.render(req, res, '/index', req.query)});
        webRouter.get('/home', [isLoggedIn],(req, res) => {return app.render(req, res, '/home', req.query)});
        webRouter.get('/applications',[isLoggedIn],(req, res) => {return app.render(req, res, '/applications', req.query)});
        webRouter.get('/approval', [isLoggedIn],(req, res) => {return app.render(req, res, '/approval', req.query)});
        webRouter.get('/database', [isLoggedIn],(req, res) => {return app.render(req, res, '/database', req.query)});
        webRouter.get('/reports', [isLoggedIn],(req, res) => {return app.render(req, res, '/reports', req.query)});
        webRouter.get('/settings', [isLoggedIn],(req, res) => {return app.render(req, res, '/settings', req.query)});

        webRouter.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`)
            //  server.start();

        })
    });


