import { buildSchema, GraphQLScalarType } from "graphql";
import { resolvers } from "./resolvers";

// TODO: Use interfaces/types to link up with Course model
// TODO: edit 'types'/'graphql' types

export const root = {
  // --- Querries
  findCourse: async (args: any) => {
    return await resolvers.findCourse(args);
  },
  findCourses: async (args: any) => {
    return await resolvers.findCourses(args);
  },

  // --- Mutations
  addReview: async (args: any) => {
    return await resolvers.addReview(args);
  },
  editReview: async (args: any) => {
    return await resolvers.editReview(args);
  },
  deleteReview: async (args: any) => {
    return await resolvers.deleteReview(args);
  },

  // --- Other
  Timestamp: new GraphQLScalarType({
    name: "Timestamp",
    description: "Custom scalar type for timestamps, in milliseconds",
    parseValue: (value) => parseInt(value, 10), // Parse incoming values as integers
    serialize: (value) => value.toString(), // Serialize outgoing values as strings
  }),
};

export const schema = buildSchema(`#graphql
  scalar Timestamp

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
    reviews: [Review]
  }

  type Review {
    _id: String
    difficulty: Int
    reviewed_on: Timestamp
    comment: String
    author_id: Int
  }

  type Query {
    """
      Find a course by code or ltitle, but not both.
    """
    findCourse(
      code: String,
      ltitle: String
    ): Course,

    """
      Find courses by code or ltitle, but not both.
      A limit of results can be set, to a maximum of 20.
    """
    findCourses(
      code: String,
      ltitle: String,
      limit: Int
    ): [Course],
  }

  type Mutation {
    """
    Add a review to a course.
    """
    addReview(
      code: String!,
      author_id: Int!
      difficulty: Int!,
      comment: String
    ): Boolean,

    """
    Edit a review posted on a course.
    """
    editReview(
      code: String!,
      _id: String!,
      difficulty: Int,
      comment: String,
    ): Boolean,

    """
    Delete a review posted on a course.
    """
    deleteReview(
      code: String!,
      _id: String!,
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
