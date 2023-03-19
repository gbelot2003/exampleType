"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const bp = require("body-parser");
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor(port) {
        this._app = (0, express_1.default)();
        this.middlewares;
        this.routers;
        this._port = port;
    }
    middlewares() {
        // body parse
        this._app.use(bp.urlencoded({ extended: false }));
        this._app.use(bp.json());
        //CORS
        this._app.use((0, cors_1.default)());
    }
    routers() {
        const router = express_1.default.Router();
        router.get("/", (req, res) => {
            res.status(200).json({ message: 'Is Usable' });
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map