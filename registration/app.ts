import express, { NextFunction, Request, Response } from 'express';
import { RegistrationController } from './controller/registration_controller';
import connection from './db';
import { registration } from './model/registration/registration_model';
import { RegistrationRepository } from './repository/registration_repository';
import { RegistrationRoutes } from './routes/registration_routes';
import { RegistrationService } from './service/registration_service';

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});


const registrationRepository = new RegistrationRepository(registration);
const registrationService = new RegistrationService(registrationRepository);
const registrationController = new RegistrationController(registrationService);
const registrationRoutes = new RegistrationRoutes(registrationController);

app.use('/registrations', registrationRoutes.getRouter());


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
    console.log(process.env);
});

