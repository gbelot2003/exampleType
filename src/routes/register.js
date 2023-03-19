"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.status(200).json({ message: 'Is Usable' });
});
router.post("/", (req, res, next) => {
    if (!req.body.firstName) {
        res.status(400).json('you need to pass first name');
    }
    res.status(200).json({ message: 'User is Created' });
});
exports.default = router;
//# sourceMappingURL=register.js.map