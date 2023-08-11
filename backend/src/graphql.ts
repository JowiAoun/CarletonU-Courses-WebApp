import { buildSchema } from "graphql";
import { searchCourses, findCourseByTitle } from "./functions";

export const root = {
  courses: async ({ criteria }: { criteria: any }) => {
    return await searchCourses(criteria);
  },
  courseByTitle: async ({ title }: { title: string }) => {
    return await findCourseByTitle(title);
  },
};

export const schema = buildSchema(`
  type Course {
    code: String
    credits: Int
    ltitle: String
    description: String
    includes: String
    precludes: String
    prerequisites: String
    schedule_general: String
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

  type Query {
    courses(criteria: CourseInput): [CourseActive]
    courseByTitle(title: String): CourseActive
  }

  input CourseInput {
    code: String
    term: String
    year_standing: String
    section_type: String
  }

`);
