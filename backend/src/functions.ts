import CourseActiveModel from "./models/CourseActiveModel";
import CourseActive from "./types";

//{ optionSummer: formData.Summer === "Summer" },
//{ optionFall: formData.Fall === "Fall" },
//{ optionWinter: formData.Winter === "Winter" },
//{ optionInPerson: formData.inPerson === "inPerson" },
//{ optionOnline: formData.online === "online" },
//{ optionFirstYear: formData.firstYear === "firstYear" },
//{ optionSecondYear: formData.secondYear === "secondYear" },
//{ optionThirdYear: formData.thirdYear === "thirdYear" },
//{ optionFourthYear: formData.fourthYear === "fourthYear" },

export async function searchCourses(formData: any): Promise<CourseActive[]> {
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

  console.log("Generated MongoDB query:", JSON.stringify(criteria, null, 2)); //!test

  try {
    const result = await CourseActiveModel.find(criteria).lean().exec();
    return result;
  } catch (error) {
    console.error("Error searching courses:", error);
    throw new Error("Error searching courses.");
  }
}

// Find a specific course by title
export async function findCourseByTitle(title: string): Promise<CourseActive | null> {
  try {
    const course = await CourseActiveModel.findOne({ title }).lean().exec();
    return course;
  } catch (error) {
    console.error("Error finding course:", error);
    throw new Error("Error finding course.");
  }
}
