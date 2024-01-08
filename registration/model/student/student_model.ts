import mongoose from "mongoose";
import { StudentInterface } from "./student_interface";

const schema = mongoose.Schema;

export const StudentSchema = new schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
},
  {
    collection: "students"
  });

export type Student = StudentInterface & mongoose.Document;

export const student = mongoose.model<Student>("students", StudentSchema);
