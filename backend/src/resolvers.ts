import getCourseModel from "./models/CourseModel";
import { Course } from "./types";

export const resolvers = {
  findCourse: async (args: any): Promise<Course> => {
    try {
      let { code, ltitle } = parseArgs(args);
      let query: any;

      if (code && ltitle) {
        throw new Error(
          "Error finding course: Both code and ltitle provided. Please only search by one."
        );
      } else if (code) {
        query = { code: code };
      } else if (ltitle) {
        query = { ltitle: { $regex: ltitle, $options: "i" } };
      } else {
        throw new Error(
          "Error finding course: Neither code nor ltitle provided. Please provide one."
        );
      }

      const result = await getCourseModel().findOne(query).lean().exec();

      return result!;
    } catch (error) {
      console.error("Error finding courses:", error);
      throw new Error("Error finding courses.");
    }
  },

  findCourses: async (args: any): Promise<Course[]> => {
    try {
      let { code, ltitle, limit } = parseArgs(args);
      let query: any;

      if (code && ltitle) {
        throw new Error(
          "Error finding courses: Both code and ltitle provided. Please only search by one."
        );
      } else if (code) {
        query = { code: { $regex: code, $options: "i"} };
      } else if (ltitle) {
        query = { ltitle: { $regex: ltitle, $options: "i" } };
      } else {
        throw new Error(
          "Error finding courses: Neither code nor ltitle provided. Please provide one."
        );
      }

      const result = await getCourseModel()
        .find(query)
        .limit(limit)
        .lean()
        .exec();

      return result;
    } catch (error) {
      console.error("Error finding courses:", error);
      throw new Error("Error finding courses.");
    }
  },

  addReview: async (args: any): Promise<boolean> => {
    try {
      const { code, author_id, difficulty, comment, reviewed_on } =
        parseArgs(args);

      const result = await getCourseModel()
        .findOneAndUpdate(
          { code: code },
          {
            $push: {
              reviews: {
                difficulty: difficulty,
                comment: comment,
                author_id: author_id,
              },
            },
          }
        )
        .lean()
        .exec();

      return result != null;
    } catch (error) {
      console.error("Error adding review:", error);
      throw new Error("Error adding review.");
    }
  },

  editReview: async (args: any): Promise<boolean> => {
    try {
      const { code, _id, difficulty, comment } = parseArgs(args);

      const result = await getCourseModel()
        .findOneAndUpdate(
          { code: code, "reviews._id": _id },
          {
            $set: {
              "reviews.$.difficulty": difficulty,
              "reviews.$.comment": comment,
            },
          }
        )
        .lean()
        .exec();

      return result != null;
    } catch (error) {
      console.error("Error editing review:", error);
      throw new Error("Error editing review.");
    }
  },

  deleteReview: async (args: any): Promise<boolean> => {
    try {
      const { code, _id } = parseArgs(args);

      const result = await getCourseModel()
        .findOneAndUpdate(
          { code: code },
          {
            $pull: {
              reviews: {
                _id: _id,
              },
            },
          }
        )
        .lean()
        .exec();

      return result != null;
    } catch (error) {
      console.error("Error deleting review:", error);
      throw new Error("Error deleting review.");
    }
  },
};

function parseArgs(args: any): any {
  if (args.code != null) {
    args.code = args.code.replace(/\s+/g, "");
  }

  if (args.limit == null || args.limit > 20) {
    args.limit = 20;
  }

  return args;
}
