// --- Imports
// Modules
import cors from "cors";
import { config } from "dotenv";
import express, { Request, Response } from "express";
import mongoose, { Mongoose } from "mongoose";
// Files
import { searchCourses } from "./functions";
import Course from "./types";

// --- App
const app = express(); // Create app object
config(); // Read .env file

// Constants
const mongodbURI: string = process.env.MONGODB_URI!;

// --- Database
//const db: Mongoose = await mongoose.connect(mongodbURI); // Connect to MongoDB cluster

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

app.get("/login", (req: Request, res: Response) => {
  res.send("Login page!");
});

app.get("/home", (req: Request, res: Response) => {
  res.send("Home page!");
});

app.get("/settings", (req: Request, res: Response) => {
  res.send("Settings page!");
});

app.post("/api/search", (req: Request, res: Response) => {
  res.send("success");
  //TODO: Find a way to not hard-code search settings
  const queryParams = req.query;

  let code: string = queryParams.code as string;
  let term: string | undefined = (queryParams.term as string) || undefined;
  let year_standing: string | undefined =
    (queryParams.year_standing as string) || undefined;
  let section_type: string | undefined =
    (queryParams.section_type as string) || undefined;

  const criteria = {
    code,
    term,
    year_standing,
    section_type,
  };

  const results = searchCourses(criteria);

  res.send(results);
});

// --- Expose port
app.listen(5000);
