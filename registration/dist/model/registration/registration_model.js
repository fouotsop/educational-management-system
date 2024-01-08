"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registration = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const student_model_1 = require("../student/student_model");
const RegistrationSchema = new mongoose_1.default.Schema({
    date: {
        type: String,
        required: true
    },
    student: {
        type: student_model_1.StudentSchema,
        required: true
    }
}, {
    collection: "registrations"
});
exports.registration = mongoose_1.default.model("registrations", RegistrationSchema);
