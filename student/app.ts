import express, { NextFunction, Request, Response } from "express";
import { StudentController } from "./controller/student_controller";
import connection from './db';
import { student } from "./model/student/student_model";
import { StudentRepository } from "./repository/student_repository";
import { StudentRoutes } from "./routes/student_routes";
import { StudentService } from "./service/student_service";





require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});

const studentRepository = new StudentRepository(student);
const studentService = new StudentService(studentRepository);
const studentController = new StudentController(studentService);
const studentRoutes = new StudentRoutes(studentController);

app.use('/students', studentRoutes.getRouter());

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    console.log(err);
    res.status(err.status || 500).send('error');
});
connection();

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});