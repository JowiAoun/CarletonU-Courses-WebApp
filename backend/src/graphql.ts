import { buildSchema } from "graphql";
import { findCourses } from "./functions";

export const root = {
  findCourses: async (args: any) => {
    return await findCourses(args);
  },
};

export const schema = buildSchema(`
  type Course {
    code: String
    subject: String
    credits: Float
    ltitle: String
    level: String
    description: String
    precludes: String
    prereqs: String
    schedule_general: String
    also_listed_as: String
    reviews: [Review]
  }

  type CourseActive {
    crn: Int
    code: String
    term_code: String
    section: String
    level: String
    status: String
    description: String
    schedule: String
    section_type: String
    additional_info: String
    also_register_in: String
    title: String
    ltitle: String
    credits: Int
    full_session_info: String
    has_prereqs: Int
    has_restrictions: Int
    instructor: String
    meeting_date: String
    days: [String]
    time_start: String
    time_end: String
    building: String
    room: String
    saved_on: Int
  }

  type Review {
    difficulty: Int
    reviewed_on: Int
    comment: String
    author_id: Int
  }

  type Query {
    findCourses(
      term_code: String,
      code: String,
      subject: String
    ): [Course]
  }

  input findCoursesArgs {
    term_code: String
    code: String
    subject: String
  }
`);
