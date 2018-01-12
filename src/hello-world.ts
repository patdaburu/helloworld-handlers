import { NextFunction, Request,  Response, Router } from 'express';
import { HelloMiddleware } from '@nertz/hello-world';

// tslint:disable object-literal-sort-keys
// tslint:disable object-literal-shorthand
// tslint:disable no-identical-functions
export class HelloWorldRouter {
    private helloM: HelloMiddleware;
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
        this.helloM = new HelloMiddleware();
    }

    public GetRouter(): Router {
        return this.router;
    }


    public GetMessages(req: Request, res: Response): void {
        const messages = this.helloM.getMessages();
        res.status(200).json(messages);
    }

    public GetMessage(req: Request, res: Response): void {
        const messages = this.helloM.getMessages();
        res.status(200).json(messages[req.params.id]);
    }

    private routes() {
        this.router.get('/', (req, res) => this.GetMessages(req, res));
        this.router.get('/:id', (req, res) => this.GetMessage(req, res));
    }
}

// export
const helloWorldHandler = new HelloWorldRouter();
export default helloWorldHandler.GetRouter();