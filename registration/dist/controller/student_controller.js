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
exports.StudentController = void 0;
class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    addStudent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var student = req.body;
            try {
                yield this.studentService.addStudent(student);
            }
            catch (err) {
                console.log(err);
                res.send('an error occured');
                return;
            }
            res.send("created");
        });
    }
    findStudentBy(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var id = req.params.id;
            var result = yield this.studentService.findStudentBy(id);
            res.json(result);
        });
    }
    findAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = yield this.studentService.findAll();
            res.json(result);
        });
    }
    validateStudent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var id = req.params.id;
        });
    }
}
exports.StudentController = StudentController;
