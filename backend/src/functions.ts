import getCourseModel from "./models/CourseModel";
import { Course } from "./types";

export async function findCourses(args: any): Promise<Course[]> {
  //! IT WORKS BABY!!! NOW DO THE FOLLOWING:
  //TODO:
  //! 1. Get arguments from graphql query instead
  //! 3. Find what other parameters can be passed and made use of
  //! 4. Edit arguments to fit db criteria
  try {
    let { term_code, code, ltitle, limit } = args;

    if (limit == null || limit > 20) {
      limit = 20;
    }

    if (code != null) {
      code = code.replace(/\s+/g, "");
    }

    if (term_code != null) {
      const result = await getCourseModel(term_code)
        .find({
          $or: [{ code: code }, { ltitle: { $regex: ltitle, $options: "i" } }],
        })
        .limit(limit)
        .lean()
        .exec();
      return result;
    } else {
      return new Promise<Course[]>(() => {});
    }
  } catch (error) {
    console.error("Error finding courses:", error);
    throw new Error("Error finding courses.");
  }
}
