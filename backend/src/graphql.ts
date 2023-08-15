import { buildSchema } from "graphql";
import { findCoursesByCode, findCourseByTitle } from "./functions";

export const root = {
  findCoursesByCode: async (code: string) => {
    return await findCoursesByCode(code);
  },
  findCoursesByTitle: async (title: string) => {
    return await findCourseByTitle(title);
  },
};

export const schema = buildSchema(`
  type Course {
    code: String
    credits: Float
    ltitle: String
    description: String
    level: String
    precludes: String
    prereqs: String
    schedule_general: String
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
    findCoursesByCode(code: String): [Course]
    findCoursesByTitle(title: String): [Course]
  }

  input TermInput {
    Summer: Boolean
    Fall: Boolean
    Winter: Boolean
  }
  
  input YearStandingInput {
    firstYear: Boolean
    secondYear: Boolean
    thirdYear: Boolean
    fourthYear: Boolean
  }
  
  input SectionTypeInput {
    in_person: Boolean
    online: Boolean
  }
  
  input CourseInput {
    text: String
    term: TermInput
    year_standing: YearStandingInput
    section_type: SectionTypeInput
  }

`);