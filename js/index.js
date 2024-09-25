"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = __importDefault(require("./controllers/authController"));
const userController_1 = __importDefault(require("./controllers/userController"));
const postController_1 = __importDefault(require("./controllers/postController"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use('/auth', authController_1.default);
app.use('/user', userController_1.default);
app.use('/post', postController_1.default);
app.listen(process.env.PORT, () => console.log(`see you at http::localhost:${process.env.PORT}`));
