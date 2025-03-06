"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlog = exports.createBlog = exports.userSignin = exports.userSignup = void 0;
const zod_1 = __importDefault(require("zod"));
exports.userSignup = zod_1.default.object({
    username: zod_1.default.string().email(),
    name: zod_1.default.string().optional(),
    password: zod_1.default.string().min(6),
});
exports.userSignin = zod_1.default.object({
    username: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
exports.createBlog = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
exports.updateBlog = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
