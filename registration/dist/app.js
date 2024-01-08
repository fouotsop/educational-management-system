"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registration_controller_1 = require("./controller/registration_controller");
const student_controller_1 = require("./controller/student_controller");
const db_1 = __importDefault(require("./db"));
const registration_model_1 = require("./model/registration/registration_model");
const student_model_1 = require("./model/student/student_model");
const registration_repository_1 = require("./repository/registration_repository");
const student_repository_1 = require("./repository/student_repository");
const registration_routes_1 = require("./routes/registration_routes");
const student_routes_1 = require("./routes/student_routes");
const registration_service_1 = require("./service/registration_service");
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
const registrationRepository = new registration_repository_1.RegistrationRepository(registration_model_1.registration);
const registrationService = new registration_service_1.RegistrationService(registrationRepository);
const registrationController = new registration_controller_1.RegistrationController(registrationService);
const registrationRoutes = new registration_routes_1.RegistrationRoutes(registrationController);
app.use('/registrations', registrationRoutes.getRouter());
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
    console.log(process.env);
});
