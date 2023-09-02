import { Document, Model, Schema, model } from "mongoose";
import { Course } from "../types";

const TERM_CODE = "202410";

interface CourseDocument extends Course, Document {}

const CourseSchema = new Schema({
  code: { type: String, required: true },
  subject: { type: String, required: true },
  credits: { type: Number, required: true },
  ltitle: { type: String, required: true },
  level: { type: String, required: true },
  description: { type: String },
  precludes: { type: String },
  prereqs: { type: String },
  schedule_general: { type: String },
  also_listed_as: { type: String },
  reviews: {
    type: [
      {
        author_id: { type: String, required: true },
        difficulty: { type: Number, required: true },
        comment: { type: String },
        reviewed_on: { type: Number, default: Math.floor(Date.now()) },
      },
    ],
    default: [],
  },
});

const getCourseModel = () => {
  return model<CourseDocument>("courses-" + TERM_CODE, CourseSchema);
};

export default getCourseModel;
