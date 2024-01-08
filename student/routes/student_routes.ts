import { NextFunction, Request, Response, Router } from 'express';
import { StudentController } from '../controller/student_controller';

export class StudentRoutes {
    private readonly router: Router
    constructor(private readonly studentController: StudentController,
    ) {
        this.router = Router();
        this.#initializeRoutes();
    }


    #initializeRoutes() {
        this.router.post('/', this.#createStudent.bind(this));
        this.router.get('/:id', this.#findStudentById.bind(this));
        this.router.get('/', this.#findAll.bind(this));
    }

    #createStudent(req: Request, res: Response, next: NextFunction) {
        // Delegate the request handling to the controller
        this.studentController.addStudent(req, res, next);
    }

    #findStudentById(req: Request, res: Response, next: NextFunction) {
        this.studentController.findStudentBy(req, res, next);
    }

    #findAll(req: Request, res: Response, next: NextFunction) {
        this.studentController.findAll(req, res, next);
    }


    public getRouter(): Router {
        return this.router;
    }


}