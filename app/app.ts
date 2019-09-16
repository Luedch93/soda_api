import express, {Application} from 'express';
const app: Application = express();

const cors = require('cors');
app.use(cors());

const swagger = require('swagger-node-express').createNew(app);
const definitions = require('./lib/swagger/definitions');
import {ListSodas, PostSoda} from './lib/swagger/handlers';

import {db} from './db';
import sodaRoutes from './soda/routes';


db.connect('mongodb://localhost:27017/sodaDB');
app.use('/api/soda', sodaRoutes)

app.use(express.json());

const static_url = express.static(__dirname + '/swagger-ui')
swagger.configureSwaggerPaths("", "api-docs", "")
app.get(/^\/docs(\/.*)?$/ , (req, res, next) => {
    if(req.url === '/docs') {
        res.writeHead(302, {location: req.url + "/"})
        res.end()
        return
    }
    req.url = req.url.substr('/docs'.length)
    return static_url(req, res, next)
})

swagger.addModels(definitions)
    .addGet(ListSodas)
    .addPost(PostSoda);

swagger.configure("http://localhost:8000", "1.0.0")
app.listen(8000, function() {
    console.log('Server running on http://localhost:8000');
})
