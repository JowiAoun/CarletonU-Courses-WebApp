import { Document, Schema, model } from "mongoose";
import { Course } from "../types";

interface CourseDocument extends Course, Document {}

const CourseSchema = new Schema({
  code: { type: String, required: true },
  credits: { type: Number, required: true },
  ltitle: { type: String, required: true },
  description: { type: String },
  level: { type: String, required: true },
  precludes: { type: String },
  prereqs: { type: String },
  schedule_general: { type: String },
  reviews: {
    type: [{
      difficulty: { type: Number, required: true },
      reviewed_on: { type: Date, default: Date.now },
      comment: { type: String },
      author_id: { type: String, required: true },
    }],
    default: [],
  },
});

const CourseModel = model<CourseDocument>("COMP", CourseSchema);

export default CourseModel;