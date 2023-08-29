import getCourseModel from "./models/CourseModel";
import { Course } from "./types";

export async function findCourses(args: any): Promise<Course[] | null> {
  //! IT WORKS BABY!!! NOW DO THE FOLLOWING:
  //TODO:
  //! 1. Get arguments from graphql query instead
  //! 3. Find what other parameters can be passed and made use of
  //! 4. Edit arguments to fit db criteria
  try {
    let { term_code, code, subject } = args;

    if (code != null) {
      code = code.replace(/\s+/g, "");
    }

    if (term_code != null) {
      const result = await getCourseModel(term_code)
        .find({ code: code })
        .lean()
        .exec();
        return result;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error finding courses:", error);
    throw new Error("Error finding courses.");
  }
}
