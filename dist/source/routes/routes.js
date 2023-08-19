"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const helloWorld_route_1 = require("./helloWorld.route");
const forgetPassword_route_1 = require("./forgetPassword.route");
function routes() {
    return [
        helloWorld_route_1.helloWorld,
        forgetPassword_route_1.forgetPassword,
    ];
}
exports.routes = routes;
