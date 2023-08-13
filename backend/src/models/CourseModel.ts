import { Document, Schema, model } from "mongoose";
import Course from "../types";

interface CourseDocument extends Course, Document {}

const CourseSchema = new Schema({
  code: { type: String, required: true },
  section_type: { type: String, required: true },
  term: { type: String, required: true},
  year_standing: { type: String, required: true },
});

const CourseModel = model<CourseDocument>("courses-202330", CourseSchema);

export default CourseModel;
/*
const CourseSchema = new Schema({
  code: { type: String, required: true },
  credits: { type: Number, required: true },
  description: { type: String, required: true },
  level: { type: String, required: true },
  precludes: { type: String, required: true },
  prereqs: { type: String, required: true },
  schedule_general: { type: String, required: true },
});
*/