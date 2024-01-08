"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepository = void 0;
class StudentRepository {
    constructor(student) {
        this.student = student;
    }
    addStudent(student) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.student.create(student);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.student.find();
        });
    }
    findStudentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.student.findById(id);
        });
    }
}
exports.StudentRepository = StudentRepository;
