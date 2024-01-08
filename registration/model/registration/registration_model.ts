import mongoose from 'mongoose';

import { StudentSchema } from '../student/student_model';
import { RegistrationInterface } from './registration_interface';

const RegistrationSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    student: {
        type: StudentSchema,
        required: true

    }
},
    {
        collection: "registrations"
    });


export type Registration = RegistrationInterface & mongoose.Document;

export const registration = mongoose.model<Registration>("registrations", RegistrationSchema);