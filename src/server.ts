import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';

// import routers
import HelloWorld from './hello-world';

// Server class
export class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public config() {
        // config
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
    }

    public routes(): void {
        let router: express.Router;
        router = express.Router();

        this.app.use('/', router);
        this.app.use('/api/helloworld/v1', HelloWorld);
    }
}

export default new Server().app;