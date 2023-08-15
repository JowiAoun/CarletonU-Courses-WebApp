// --- Imports
// Modules
import cors from "cors";
import { config } from "dotenv";
import express, { Request, Response } from "express";
import mongoose, { Mongoose } from "mongoose";
import graphqlHTTP from 'express-graphql'
// Files
import { findCoursesByCode } from "./functions";
import { schema, root } from "./graphql";

// --- Config
config(); // Read .env file

// --- Constants
const PORT = 5000; // Port for server
const MONGODB_URI: string = process.env.MONGODB_URI!; // Get URI from .env file

// --- App
const app = express(); // Create app object

// --- Database
mongoose.connect(MONGODB_URI); // Connect to MongoDB cluster

// --- Middleware
app.use(cors({ origin: "*" })); // Allow cross-origin requests
app.use(express.json()); // Parse JSON from requests

// --- GraphQL
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, //TODO: See if this needs to be turned off
}));

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

//app.post("/api/search", (req: Request, res: Response) => {
//  //TODO: Find a way to not hard-code search settings
//  const queryParams = req.query;
//
//  let code: string = queryParams.code as string;
//  let term: string | undefined = (queryParams.term as string) || undefined;
//  let year_standing: string | undefined =
//    (queryParams.year_standing as string) || undefined;
//  let section_type: string | undefined =
//    (queryParams.section_type as string) || undefined;
//
//  const criteria = {
//    code,
//    term,
//    year_standing,
//    section_type,
//  };
//
//  const results = findCoursesByCode(criteria);
//
//  res.send(results);
////});

// --- Expose port
app.listen(PORT); // Listen on port 5000 for requests