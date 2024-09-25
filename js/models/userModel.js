"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    constructor(userName, password, email, birthday, avatarUrl) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.birthday = birthday;
        this.avatarUrl = avatarUrl;
        this.followers = [];
        this.following = [];
        this.isLocalAccount = false;
        this.id = (0, uuid_1.v4)();
    }
}
exports.default = User;
