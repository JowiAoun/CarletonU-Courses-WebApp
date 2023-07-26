import mongoose, { Mongoose } from "mongoose";
import CourseModel from "./models/CourseModel";
import Course from "./types";

export function searchCourses(criteria: {
  code: string | undefined;
  term: string | undefined;
  year_standing: string | undefined;
  section_type: string | undefined;
}) {
  if (criteria.code == "") {
    return [];
  }
  if (criteria.term != ("Fall" || "Winter" || "Summer")) {
    criteria.term = undefined;
  }
  if (criteria.section_type != ("online" || "inperson")) {
    criteria.section_type = undefined;
  }

  const results = CourseModel.find(criteria);

  return results;
}
