import CourseModel from "./models/CourseModel";
import CourseActiveModel from "./models/CourseActiveModel";
import { Course, CourseActive } from "./types";

export async function findCoursesByCode(code: any): Promise<Course[]> {
  try {
    let text = code["code"];
    const result = await CourseModel.find({ code: text }).lean().exec();
    return result;
  } catch (error) {
    console.error("Error finding courses:", error);
    throw new Error("Error finding courses.");
  }
}

export async function findCourseByTitle(title: any): Promise<Course | null> { 
  //TODO: Make this function similar to findCoursesByCode
  try {
    const course = await CourseModel.findOne({ ltitle: title["ltitle"] })
      .lean()
      .exec();
    return course;
  } catch (error) {
    console.error("Error finding course:", error);
    throw new Error("Error finding course.");
  }
}

export async function DEPRECATEDsearchCourses(
  formData: any
): Promise<Course[]> {
  console.log("formData: ", formData);
  const yearStandingOptions = [
    "firstYear",
    "secondYear",
    "thirdYear",
    "fourthYear",
  ];
  const selectedYearStanding: string[] = [];

  for (const option of yearStandingOptions) {
    if (formData[option] === option) {
      selectedYearStanding.push(option);
    }
  }

  const termOptions = ["Summer", "Fall", "Winter"];
  const selectedTerms: string[] = [];

  for (const termOption of termOptions) {
    if (formData[termOption] === termOption) {
      selectedTerms.push(termOption);
    }
  }

  const modeOptions = ["inPerson", "online"];
  const selectedMode: string[] = [];

  for (const modeOption of modeOptions) {
    if (formData[modeOption] === modeOption) {
      selectedMode.push(modeOption);
    }
  }

  const criteria = {
    $and: [
      { term: { $in: selectedTerms } },
      { year_standing: { $in: selectedYearStanding } },
      { mode: { $in: selectedMode } },
    ],
  };

  try {
    const result = await CourseModel.find(criteria).lean().exec();
    return result;
  } catch (error) {
    console.error("Error searching courses:", error);
    throw new Error("Error searching courses.");
  }
}
