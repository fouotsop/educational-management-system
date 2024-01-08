import { RegistrationInterface } from "../model/registration/registration_interface";
import { RegistrationRepository } from "../repository/registration_repository";

export class RegistrationService {


    constructor(private readonly registrationRepository: RegistrationRepository) {
    }

    async addRegistration(student: RegistrationInterface) {
        await this.registrationRepository.addRegistration(student);
    }

    async findAll() {
        return await this.registrationRepository.findAll();
    }

    async findRegistrationById(id: string) {
        return await this.registrationRepository.findRegistrationById(id);
    }


}