import { StudentInterface } from "../model/student/student_interface";
import { StudentRepository } from "../repository/student_repository";


export class StudentService {


    constructor(private readonly studentRepository: StudentRepository) {
    }

    async addStudent(student: StudentInterface) {
        await this.studentRepository.addStudent(student);
    }

    async findAll() {
        return await this.studentRepository.findAll();
    }

    async findStudentById(id: string) {
        return await this.studentRepository.findStudentById(id);
    }


}