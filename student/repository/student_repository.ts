import mongoose from "mongoose";
import { StudentInterface } from "../model/student/student_interface";
import { Student } from "../model/student/student_model";

export class StudentRepository {

    constructor(private readonly student: mongoose.Model<Student>) {
    }

    async addStudent(student: StudentInterface) {
        await this.student.create(student);
    }

    async findAll() {
        return this.student.find();
    }

    async findStudentById(id: string) {
        return await this.student.findById(id);
    }

}