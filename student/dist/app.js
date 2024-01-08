"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./controller/student_controller");
const db_1 = __importDefault(require("./db"));
const student_model_1 = require("./model/student/student_model");
const student_repository_1 = require("./repository/student_repository");
const student_routes_1 = require("./routes/student_routes");
const student_service_1 = require("./service/student_service");
require('dotenv').config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});
const studentRepository = new student_repository_1.StudentRepository(student_model_1.student);
const studentService = new student_service_1.StudentService(studentRepository);
const studentController = new student_controller_1.StudentController(studentService);
const studentRoutes = new student_routes_1.StudentRoutes(studentController);
app.use('/students', studentRoutes.getRouter());
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    console.log(err);
    res.status(err.status || 500).send('error');
});
(0, db_1.default)();
app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
