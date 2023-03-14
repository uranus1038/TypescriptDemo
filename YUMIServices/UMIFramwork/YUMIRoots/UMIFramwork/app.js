"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    getPath(path, msg, callback) {
        this.app.get(path, (req, res) => {
            const data = { name: 'John Doe', age: 30, email: 'johndoe@example.com' };
            callback(data);
        });
    }
    listen(port) {
        this.app.listen(port, () => {
            console.log("YUMI::SERVER_START_PORT->" + port);
        });
    }
}
exports.App = App;
