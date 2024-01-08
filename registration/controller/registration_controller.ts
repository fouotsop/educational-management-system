import { NextFunction, Request, Response } from "express";
import { RegistrationInterface } from "../model/registration/registration_interface";
import { RegistrationService } from "../service/registration_service";


export class RegistrationController {

    constructor(private readonly studentService: RegistrationService) {
    }



    async addRegistration(req: Request<{}, {}, RegistrationInterface>, res: Response, next: NextFunction) {

        const registration: RegistrationInterface = req.body as RegistrationInterface;
        console.log(registration);

        try {

            await this.studentService.addRegistration(registration);
        }
        catch (err) {
            console.log(err);
            res.send('an error occured');
            return;
        }
        res.send("created");


    }

    async findRegistrationById(req: Request, res: Response, next: NextFunction) {
        var id = req.params.id;

        var result = await this.studentService.findRegistrationById(id);

        res.json(result);
    }

    async findAll(req: Request, res: Response, next: NextFunction) {

        var result = await this.studentService.findAll();

        res.json(result);
    }

    async validate(req: Request, res: Response, next: NextFunction) {
        var id = req.params.id;

        next();

    }   
}