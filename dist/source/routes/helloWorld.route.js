"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
exports.helloWorld = (0, express_1.default)();
exports.helloWorld.get('/', (req, res) => {
    res.json({
        server: `Hello World!`
    });
});
