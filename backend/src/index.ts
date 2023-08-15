// --- Imports
// Modules
import cors from "cors";
import { config } from "dotenv";
import express, { Request, Response } from "express";
import mongoose, { Mongoose } from "mongoose";
import graphqlHTTP from 'express-graphql'
// Files
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

// --- GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, //TODO: See if this needs to be turned off
}));

// --- Expose port
app.listen(PORT); // Listen on port 5000 for requests