import mongoose from "mongoose";
import { RegistrationInterface } from "../model/registration/registration_interface";
import { Registration } from "../model/registration/registration_model";

export class RegistrationRepository {

    constructor(private readonly registration: mongoose.Model<Registration>) {
    }

    async addRegistration(student: RegistrationInterface) {
        await this.registration.create(student);
    }

    async findAll() {
        return this.registration.find();
    }

    async findRegistrationById(id: string) {
        return await this.registration.findById(id);
    }

}