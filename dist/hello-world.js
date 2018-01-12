"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var hello_world_1 = require("@nertz/hello-world");
// tslint:disable object-literal-sort-keys
// tslint:disable object-literal-shorthand
// tslint:disable no-identical-functions
var HelloWorldRouter = /** @class */ (function () {
    function HelloWorldRouter() {
        this.router = express_1.Router();
        this.routes();
        this.helloM = new hello_world_1.HelloMiddleware();
    }
    HelloWorldRouter.prototype.GetRouter = function () {
        return this.router;
    };
    HelloWorldRouter.prototype.GetMessages = function (req, res) {
        var messages = this.helloM.getMessages();
        res.status(200).json(messages);
    };
    HelloWorldRouter.prototype.GetMessage = function (req, res) {
        var messages = this.helloM.getMessages();
        res.status(200).json(messages[req.params.id]);
    };
    HelloWorldRouter.prototype.routes = function () {
        var _this = this;
        this.router.get('/', function (req, res) { return _this.GetMessages(req, res); });
        this.router.get('/:id', function (req, res) { return _this.GetMessage(req, res); });
    };
    return HelloWorldRouter;
}());
exports.HelloWorldRouter = HelloWorldRouter;
// export
var helloWorldHandler = new HelloWorldRouter();
exports.default = helloWorldHandler.GetRouter();
//# sourceMappingURL=hello-world.js.map