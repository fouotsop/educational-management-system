import { NextFunction, Request, Response } from "express";
import { StudentInterface } from "../model/student/student_interface";
import { StudentService } from "../service/student_service";


export class StudentController {

    constructor(private readonly studentService: StudentService) {
    }



    async addStudent(req: Request<{}, {}, StudentInterface>, res: Response, next: NextFunction) {

        var student: StudentInterface = req.body;

        try {

            await this.studentService.addStudent(student);
        }
        catch (err) {
            console.log(err);

            res.send('an error occured');
            return;
        }
        res.send("created");


    }

    async findStudentBy(req: Request, res: Response, next: NextFunction) {
        var id = req.params.id;

        var result = await this.studentService.findStudentById(id);

        res.json(result);
    }

    async findAll(req: Request, res: Response, next: NextFunction) {

        var result = await this.studentService.findAll();

        res.json(result);
    }

}