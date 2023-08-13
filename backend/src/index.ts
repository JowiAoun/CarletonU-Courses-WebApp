// --- Imports
// Modules
import cors from "cors";
import { config } from "dotenv";
import express, { Request, Response } from "express";
import mongoose, { Mongoose } from "mongoose";
import jwt from "jsonwebtoken";
// Files
import { searchCourses } from "./functions";
import Course from "./types";
import CourseModel from "./models/CourseModel";
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function startServer() {
  // --- App
  const app = express(); // Create app object
  config(); // Read .env file

  // Constants
  const mongodbURI: string = process.env.MONGODB_URI!;

  // --- Database
  const db: Mongoose = await mongoose.connect(mongodbURI); // Connect to MongoDB cluster

  // --- Middleware
  app.use(cors({ origin: "*" })); // Allow cross-origin requests
  app.use(express.json()); // Parse JSON from requests

  // --- Endpoints
  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
  });

  app.get("/signup", (req: Request, res: Response) => {
    res.send("Signup page!");
  });

  app.post("/api/login", async (req: Request, res: Response) => {
    const formData = req.body;
    const userName = formData.userName;
    const password = formData.password;
    const token = jwt.sign({ userName }, "secret-key", { expiresIn: "1h" });
    res.json({ token });
  });

  app.get("/home", (req: Request, res: Response) => {
    res.send("Home page!");
  });

  app.get("/settings", (req: Request, res: Response) => {
    res.send("Settings page!");
  });

  app.post("/api/search", async (req: Request, res: Response) => {
    const formData = req.body;
    const searchOptions = {
      optionSummer: formData.Summer === "Summer",
      optionFall: formData.Fall === "Fall",
      optionWinter: formData.Winter === "Winter",
      optionInPerson: formData.inPerson === "inPerson",
      optionOnline: formData.online === "online",
      optionFirstYear: formData.firstYear === "firstYear",
      optionSecondYear: formData.secondYear === "secondYear",
      optionThirdYear: formData.thirdYear === "thirdYear",
      optionFourthYear: formData.fourthYear === "fourthYear",
    };

    try {
      const filter: any = {};

      // Create an array to store selected terms
      const selectedTerms = [];
      if (searchOptions.optionSummer) {
        selectedTerms.push("Summer");
      }
      if (searchOptions.optionFall) {
        selectedTerms.push("Fall");
      }
      if (searchOptions.optionWinter) {
        selectedTerms.push("Winter");
      }
      // Use $in operator to match documents with any of the selected terms
      if (selectedTerms.length > 0) {
        filter.term = { $in: selectedTerms };
      }

      // Create an array to store selected terms
      const selectedSectionType = [];
      if (searchOptions.optionOnline) {
        selectedSectionType.push("online");
      }
      if (searchOptions.optionInPerson) {
        selectedSectionType.push("inPerson");
      }

      // Use $in operator to match documents with any of the selected terms
      if (selectedSectionType.length > 0) {
        filter.section_type = { $in: selectedSectionType };
      }

      const selectedYears = [];
      if (searchOptions.optionFirstYear) {
        selectedYears.push("firstYear");
      }
      if (searchOptions.optionSecondYear) {
        selectedYears.push("secondYear");
      }
      if (searchOptions.optionThirdYear) {
        selectedYears.push("thirdYear");
      }
      if (searchOptions.optionFourthYear) {
        selectedYears.push("fourthYear");
      }
      if (selectedYears.length > 0) {
        filter.year_standing = { $in: selectedYears };
      }

      const results = await CourseModel.find(filter).exec();
      //console.log(results);

      res.json(results); // Sending the results as JSON to the frontend
    } catch (error) {
      console.error("Error searching courses:", error);
      res
        .status(500)
        .json({ error: "An error occurred while searching courses" });
    }
  });

  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
}

startServer().catch((err) => {
  console.error("Error starting the server:", err);
});
