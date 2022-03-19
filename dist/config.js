"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URI = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
console.log(process.env.MONGODB_URI);
exports.MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/spotifydb";
