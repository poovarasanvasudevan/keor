const express = require('express');
const next = require('next');
const helmet = require('helmet');
const compression = require('compression');
const SSE = require('express-sse');
const passport = require('passport');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

var Parse = require('parse/node');



app.prepare()
    .then(() => {
        const server = express();
        const sse = new SSE(["array", "containing", "initial", "content", "(optional)"]);


        server.use(helmet());


        var sseRouter = express.Router();
        var webRouter = express.Router();
        sseRouter.get("/stream", sse.init);
        server.use("/sse", sseRouter);



        var ParseServer = require('parse-server').ParseServer;
        var api = new ParseServer({
            databaseURI: 'mongodb://localhost:27017/dev', // Connection string for your MongoDB database
            cloud: 'core/code/main.js', // Absolute path to your Cloud Code
            appId: 'myAppId',
            masterKey: 'myMasterKey', // Keep this key secret!
            fileKey: 'optionalFileKey',
            javaScriptKey : 'jsKey',
            serverURL: 'http://localhost:3000/parse' // Don't forget to change to https if needed
        });
        server.use('/parse' ,api);

        var ParseDashboard = require('parse-dashboard');
        var dashboard = new ParseDashboard({
            "apps": [
                {
                    "serverURL": "http://localhost:3000/parse",
                    "appId": "myAppId",
                    "masterKey": "myMasterKey",
                    "appName": "MyApp"
                }
            ]
        });
        server.use('/dashboard' , dashboard);


        Parse.initialize("myAppID", "jsKey", "myMasterKey");
        Parse.serverUrl = "http://localhost:3000/parse";


        server.use("/", webRouter);
        webRouter.use(compression());


        webRouter.get('/a', (req, res) => {
            return app.render(req, res, '/b', req.query)
        });

        webRouter.get('/b', (req, res) => {
            return app.render(req, res, '/a', req.query)
        });

        webRouter.get('/posts/:id', (req, res) => {
            return app.render(req, res, '/posts', {id: req.params.id})
        });

        webRouter.get('*', (req, res) => {
            return handle(req, res)
        });


        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`)
        })
    });


