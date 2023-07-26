import { Document, Schema, model } from "mongoose";
import Course from "../types";

interface CourseDocument extends Course, Document {}

const CourseSchema = new Schema({
  code: { type: String, required: true },
  section_type: { type: String, required: true },
  term: { type: String, required: true},
  year_standing: { type: String, required: true },
});

const CourseModel = model<CourseDocument>("carletonu-courses", CourseSchema);

export default CourseModel;
