import { buildSchema } from "graphql";
import { findCourses, addReview, deleteReview, editReview } from "./functions";
// TODO: Use interfaces/types to link up with Course model
// TODO: make imports from 'function' smaller

export const root = {
  // --- Querries
  findCourses: async (args: any) => {
    return await findCourses(args);
  },

  // --- Mutations
  addReview: async (args: any) => {
    return await addReview(args);
  },
  deleteReview: async (args: any) => {
    return await deleteReview(args);
  },
  editReview: async (args: any) => {
    return await editReview(args);
  },
};

export const schema = buildSchema(`#graphql
  type Course {
    code: String
    subject: String
    credits: Float
    ltitle: String
    description: String
    precludes: String
    prereqs: String
    schedule_general: String
    also_listed_as: String
    reviews: [Review!]!
  }

  type Review {
    _id: Int
    difficulty: Int
    reviewed_on: Int
    comment: String
    author_id: Int
  }

  type Query {
    findCourses(
      code: String,
      ltitle: String,
      limit: Int
    ): [Course],
  }

  type Mutation {
    addReview(
      code: String!,
      author_id: Int!
      difficulty: Int!,
      comment: String,
      reviewed_on: Int!,
    ): Boolean,

    deleteReview(
      code: String!,
      _id: String!,
    ): Boolean,

    editReview(
      code: String!,
      _id: String!,
      difficulty: Int,
      comment: String,
    ): Boolean,
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
`);
