import { Document, Schema, model } from "mongoose";
import { CourseActive } from "../types";

interface CourseActiveDocument extends CourseActive, Document {}

const CourseActiveSchema = new Schema({
  crn: { type: Number, required: true },
  code: { type: String, required: true },
  term_code: { type: String, required: true },
  section: { type: String },
  level: { type: String, required: true },
  status: { type: String, required: true },
  description: { type: String },
  schedule: { type: String },
  section_type: { type: String },
  additional_info: { type: String },
  also_register_in: { type: String },
  title: { type: String, required: true },
  ltitle: { type: String, required: true },
  credits: { type: Number },
  full_session_info: { type: String },
  has_prereqs: { type: Number, required: true },
  has_restrictions: { type: Number, required: true },
  instructor: { type: String },
  meeting_date: { type: String },
  days: { type: [String] },
  time_start: { type: String },
  time_end: { type: String },
  building: { type: String },
  room: { type: String },
  saved_on: { type: Number, required: true },
});

const CourseActiveModel = model<CourseActiveDocument>("CourseActive", CourseActiveSchema);

export default CourseActiveModel;
