import { Document, Schema, model } from "mongoose";
import Course from "../types";

interface CourseDocument extends Course, Document {}

const CourseSchema = new Schema({
  crn: { type: Number, required: true },
  code: { type: String, required: true },
  subject: { type: String, required: true },
  section: { type: String, required: true },
  title: { type: String, required: true },
  ltitle: { type: String },
  desc: { type: String },
  desc_additional: { type: String },
  schedule_type: { type: String, required: true },
  section_type: { type: String, required: true },
  building: { type: String },
  room: { type: String },
  term: { type: String, required: true},
  also_register_in: [{ type: String }],
  precludes: [{ type: String }],
  prereqs: { type: String },
  credits: { type: Number, required: true },
  instructor: [{ type: String }],
  days: [{ type: String, required: true }],
  time: { type: String, required: true },
  year_standing: { type: Number, required: true },
  restriction_year: [{ type: String }],
  restriction_level: [{ type: String }],
  restriction_degree: [{ type: String }],
  restriction_major: [{ type: String }],
  restriction_program: [{ type: String }],
});

const CourseModel = model<CourseDocument>("carletonu-courses", CourseSchema);

export default CourseModel;
