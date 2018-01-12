"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var compression = require("compression");
var cors = require("cors");
var express = require("express");
var helmet = require("helmet");
// import routers
var hello_world_1 = require("./hello-world");
// Server class
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        // config
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
    };
    Server.prototype.routes = function () {
        var router;
        router = express.Router();
        this.app.use('/', router);
        this.app.use('/api/helloworld/v1', hello_world_1.default);
    };
    return Server;
}());
exports.Server = Server;
exports.default = new Server().app;
//# sourceMappingURL=server.js.map