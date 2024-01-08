import { NextFunction, Request, Response, Router } from 'express';
import { RegistrationController } from '../controller/registration_controller';

export class RegistrationRoutes {
    private readonly router: Router
    constructor(private readonly registrationController: RegistrationController,
    ) {
        this.router = Router();
        this.#initializeRoutes();
    }


    #initializeRoutes() {
        this.router.post('/', this.#createRegistration.bind(this));
        this.router.get('/:id', this.#findRegistrationById.bind(this));
        this.router.get('/', this.#findAll.bind(this));
        this.router.post('/:id/validate', this.#validateStudent.bind(this));
    }

    #createRegistration(req: Request, res: Response, next: NextFunction) {
        // Delegate the request handling to the controller
        this.registrationController.addRegistration(req, res, next);
    }

    #findRegistrationById(req: Request, res: Response, next: NextFunction) {
        this.registrationController.findRegistrationById(req, res, next);
    }

    #findAll(req: Request, res: Response, next: NextFunction) {
        this.registrationController.findAll(req, res, next);
    }

    #validateStudent(req: Request, res: Response, next: NextFunction) {
        this.registrationController.validate(req, res, next);
    }

    public getRouter(): Router {
        return this.router;
    }


}