import mongoose from "mongoose";
import { config } from "dotenv";
import CourseModel from "./models/CourseModel";
import Course from "./types";

config(); // Read .env file
const MONGODB_URI: string = process.env.MONGODB_URI!;

// Find a specific course by title
async function findCourseByTitle(title: string): Promise<Course | null> {
  try {
    const course = await CourseModel.findOne({ title }).lean().exec();
    return course;
  } catch (error) {
    console.error("Error finding course:", error);
    throw new Error("Error finding course.");
  }
}

async function test() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB.");

    // Test findCourseByTitle function
    const titleToSearch = "Intro to Systems Programming";
    const course = await findCourseByTitle(titleToSearch);
    if (course) {
      console.log("Found course:", course);
    } else {
      console.log("Course not found.");
    }

    // Disconnect from MongoDB after testing
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  } catch (error) {
    console.error("Test error:", error);
  }
}

test();
