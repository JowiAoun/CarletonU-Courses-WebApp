import { Document, Schema, model } from "mongoose";
import { Course } from "../types";

interface CourseDocument extends Course, Document {}

const CourseSchema = new Schema({
  code: { type: String, required: true },
  credits: { type: Number, required: true },
  ltitle: { type: String, required: true },
  description: { type: String },
  includes: { type: String },
  precludes: { type: String },
  prereqs: { type: String },
  schedule_general: { type: String },
});

const CourseModel = model<CourseDocument>("carletonu-courses", CourseSchema);

export default CourseModel;
