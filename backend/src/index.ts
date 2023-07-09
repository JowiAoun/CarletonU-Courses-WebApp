// --- Imports
// Modules
import cors from "cors";
import { config } from "dotenv";
import express, { Request, Response } from "express";
import mongoose, { Mongoose } from "mongoose";
// Files
import { searchCourses } from "./functions";

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
  const queryParams = req.query;

  const search: string = queryParams.search as string || "";
  const term: string = queryParams.term as string || "";
  const year: string = queryParams.year as string || "-1";
  const type: string = queryParams.type as string || "";

  const results = searchCourses(db, search, term, year, type);

  res.send(results);
});

// --- Expose port
app.listen(5000);
