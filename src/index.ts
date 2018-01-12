import { Router } from 'express';
import { HelloWorldHandler } from './hello-world';

export class Routes {
    public static helloWorldRoute: Router = new HelloWorldHandler().GetRouter();
}
