import getCourseModel from "./models/CourseModel";
import { Course } from "./types";

//TODO: Work on 'parsing' functions to parse args
//TODO: i.e.: parse_course_code()... etc.

export async function findCourses(args: any): Promise<Course[]> {
  //! IT WORKS BABY!!! NOW DO THE FOLLOWING:
  //TODO:
  //! 1. Get arguments from graphql query instead
  //! 3. Find what other parameters can be passed and made use of
  //! 4. Edit arguments to fit db criteria
  try {
    let { code, ltitle, limit } = args;

    if (limit == null || limit > 20) {
      limit = 20;
    }

    if (code != null) {
      code = code.replace(/\s+/g, "");
    }

    const result = await getCourseModel()
      .find({
        $or: [{ code: code }, { ltitle: { $regex: ltitle, $options: "i" } }],
      })
      .limit(limit)
      .lean()
      .exec();

    return result;

  } catch (error) {
    console.error("Error finding courses:", error);
    throw new Error("Error finding courses.");
    return new Promise<Course[]>(() => {});
  }
}

export async function addReview(args: any): Promise<boolean> {
  try {
    const { code, author_id, difficulty, comment, reviewed_on } = args;

    const result = await getCourseModel()
      .findOneAndUpdate(
        { code: code },
        {
          $push: {
            reviews: {
              difficulty: difficulty,
              reviewed_on: reviewed_on,
              comment: comment,
              author_id: author_id,
            },
          },
        }
      ).lean().exec();

    return result != null;
  } catch (error) {
    console.error("Error adding review:", error);
    throw new Error("Error adding review.");
  }
}

export async function deleteReview(args: any): Promise<boolean> {
  try {
    const { code, _id } = args;

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
      ).lean().exec();

    return result != null;
  } catch (error) {
    console.error("Error deleting review:", error);
    throw new Error("Error deleting review.");
  }
}

export async function editReview(args: any): Promise<boolean> {
  try {
    const { code, _id, difficulty, comment } = args;

    const result = await getCourseModel()
      .findOneAndUpdate(
        { code: code, "reviews._id": _id },
        {
          $set: {
            "reviews.$.difficulty": difficulty,
            "reviews.$.comment": comment,
          },
        }
      ).lean().exec();

    return result != null;
  } catch (error) {
    console.error("Error editing review:", error);
    throw new Error("Error editing review.");
  }
}